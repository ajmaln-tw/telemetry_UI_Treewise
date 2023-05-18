import { Grid, Paper, useMediaQuery, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { Form, withFormik } from "formik";
import { FormController } from "../../../../common/components";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getDepartureDropDown, getDestinationDropDown, getEmissionFilter, getShowVariables, getVesselSizeDropDown, getVesselTypeDropDown } from "../../selectors";
import { fetchDeparturePortDropDown, fetchDestinationPortDropDown, searchVesselRouteEmissionData } from "../../actions";
import { actions as sliceActions } from "../../slice";
import EmissionVariables from "./EmissionVariables";


const EmissionCalculatorFilterOverlay = (props) => {
    const theme = useTheme();
    const smSc = useMediaQuery(theme.breakpoints.down("md"));

    const dispatch = useDispatch();
    const { handleSubmit, errors = {}, vesselTypeOptions = [], vesselSizeOptions = [],
        departureOptions = [], destinationOptions = [], searchVesselRoute, showVariables = false } = props;


    const paperStyle = useMemo(() => ({
        sx: {
            overflowX: "scroll",
            maxHeight: "600px",
            pointerEvents: "none",
            zIndex: "100001",
            width: { xs: "130px", sm: "150px", md: "400px" },
            minHeight: "180px",
            opacity: 0.3,
            borderRadius: "10px 10px 0 0",
            padding: 2,
            "&:hover": {
                backgroundColor: "#ffff",
                opacity: 0.9
            },
            transition: "ease-in-out .2s"
        }
    }), []);
    // const searchIconStyle = {
    //     "&:hover": {
    //         backgroundColor: "primary.dark",
    //         opacity: 1
    //     }, backgroundColor: "primary.light", width: "100px", borderRadius: "17px", fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" }
    // };
    const vesselTypeChange = (val) => dispatch(sliceActions.setFiler({ vesselType: val }));
    const departureChange = (val) => dispatch(sliceActions.setFiler({ departure: val }));
    const destinationChange = (val) => {
        dispatch(sliceActions.setFiler({ destination: val }));
        dispatch(searchVesselRoute());
    };
    const vesselSizeChange = (val) => {
        dispatch(sliceActions.setFiler({ vesselSize: val }));
        dispatch(fetchDeparturePortDropDown());
        dispatch(fetchDestinationPortDropDown());
    };

    return <Paper {...paperStyle}>
        <Form onSubmit={handleSubmit} >
            <Grid container spacing={0}
                sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController
                        width={smSc ? "100px" : "150px"}
                        control="select" label={"Vessel Type"}
                        name="vesselType"
                        options={vesselTypeOptions}
                        onChangeFromController={vesselTypeChange}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController width={smSc ? "100px" : "150px"} statusError={true} errorName={errors?.vesselSize} control="select" label={"Vessel Size"} name="vesselSize" options={vesselSizeOptions} onChangeFromController={vesselSizeChange} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController width={smSc ? "100px" : "150px"} statusError={true} errorName={errors?.departure} control="select" label={"Departure Port"} name="departure" options={departureOptions} onChangeFromController={departureChange} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                    <FormController width={smSc ? "100px" : "150px"} statusError={true} errorName={errors?.destination} control="select" label={"Destination Port"} name="destination" options={destinationOptions} onChangeFromController={destinationChange} />
                </Grid>
            </Grid>
            {/* <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", mb: 1 }}>
                <IconButton sx={searchIconStyle} variant="contained" type="submit">
                    <IoIosNavigate />
                </IconButton>
            </Box> */}
        </Form >

        {/* <Grid container spacing={0}
            sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "transparent" }}>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                <FilterSelect
                    placeholder="Vessel Type"
                    name="vesselType"
                    value={vesselType}
                    dataList={vesselTypeOptions}
                    onItemSelect={vesselTypeChange} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                <FilterSelect />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                <FilterSelect />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ display: "flex", justifyContent: "center" }}>
                <FilterSelect />
            </Grid>
        </Grid> */}
        {showVariables && <EmissionVariables />}
    </Paper >;

};

const mapStateToProps = createStructuredSelector({
    emissionFilter: getEmissionFilter,
    showVariables: getShowVariables,
    //dropDown
    vesselTypeOptions: getVesselTypeDropDown,
    vesselSizeOptions: getVesselSizeDropDown,
    departureOptions: getDepartureDropDown,
    destinationOptions: getDestinationDropDown
});

const mapDispatchToProps = (dispatch) => ({
    searchVesselRoute: (data) => dispatch(searchVesselRouteEmissionData(data))
});

const filterEmission = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.emissionFilter;
    },
    displayName: "Emission/FilterOverlay"
})(EmissionCalculatorFilterOverlay);

export default connect(mapStateToProps, mapDispatchToProps)(filterEmission);


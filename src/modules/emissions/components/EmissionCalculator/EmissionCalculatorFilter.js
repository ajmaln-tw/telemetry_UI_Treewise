import { Box, Button, Dialog, DialogActions, DialogContent, Grid, Typography } from "@mui/material";
import React from "react";
import { Form, withFormik } from "formik";
import { FormController } from "../../../../common/components";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getEmissionFilter } from "../../selectors";
import { searchVesselEmissionData } from "../../actions";
import { emissionRouteFilter } from "../../validate";
import { ArrowDropDownCircle } from "@mui/icons-material";
import { TransitionComponent } from "../TransitionComponent";
import CustomHeader from "../../../common/components/CustomHeader";


const drawerIcon = {
    position: "absolute",
    backgroundColor: "secondary.dark",
    borderRadius: "15px",
    minHeight: "30px",
    minWidth: "70px",
    top: 90,
    px: 2,
    left: "50%",
    display: "flex", alignItems: "center",
    "&:hover": {
        backgroundColor: "secondary.700"
    }

};
const EmissionCalculatorFilter = (props) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { handleSubmit, errors = {} } = props;
    return <Box>
        {/* <CustomCard additionStyles={{ m: 2, mt: 0, borderRadius: "0 10px 10px 10px" }}> */}
        <Grid sx={{ mt: 2 }}>
            <Box
                onClick={handleOpen}
                sx={drawerIcon}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography sx={{ color: "#000", display: "flex", pr: 0.5 }}>
                        Open Filter</Typography>
                    <Box sx={{ py: 1 }}><ArrowDropDownCircle /></Box>
                </Box>
            </Box>
            <Dialog
                fullWidth maxWidth="xl"
                TransitionComponent={TransitionComponent}
                open={open}
                onClose={handleClose}>
                <CustomHeader content="Route Emissions Filter" sx={{ mt: 2 }} />
                <DialogContent>
                    <Box sx={{ width: "100%" }}>
                        <Form onSubmit={handleSubmit} >
                            <Grid container spacing={0}
                                alignItems="center"
                                justifyContent="space-evenly" sx={{ mb: 3 }}>
                                <Grid item xs={12} sm={4} md={3} lg={3} xl={2}>
                                    <FormController
                                        statusError={true}
                                        errorName={errors?.vesselType}
                                        control="select" label={"Vessel Type"}
                                        name="vesselType"
                                        // onChangeFromController={ } onInputChange={(e) => handleInputChange(e, "name")} options={[]}
                                        isMandatory={true} />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} lg={3} xl={2} >
                                    <FormController statusError={true} errorName={errors?.capacity} control="select" label={"Vessel Capacity"} name="capacity" isMandatory={true} />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} lg={3} xl={2} >
                                    <FormController statusError={true} errorName={errors?.departure} control="select" label={"Departure Port"} name="departure" />
                                </Grid>
                                <Grid item xs={12} sm={4} md={3} lg={3} xl={2} >
                                    <FormController statusError={true} errorName={errors?.destination} control="select" label={"Destination Port"} name="destination" />
                                </Grid>
                            </Grid>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                <Button sx={{ width: "10%", borderRadius: "17px", fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" } }} variant="contained" type="submit">
                                    {"Search Vessel"}
                                </Button>
                            </Box>
                        </Form >
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
            </Dialog>

        </Grid >
        {/* </CustomCard > */}
    </Box >;
};


const mapStateToProps = createStructuredSelector({
    emissionFilter: getEmissionFilter
});

const mapDispatchToProps = (dispatch) => ({
    searchVessel: (data) => dispatch(searchVesselEmissionData(data))
});

const filterEmission = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.emissionFilter.data;
    },
    validationSchema: emissionRouteFilter,
    handleSubmit: (values, { props }) => {
        props.searchVessel(values);
    },
    displayName: "Emission/Filter"
})(EmissionCalculatorFilter);

export default connect(mapStateToProps, mapDispatchToProps)(filterEmission);


import { Box, CardActions, CardContent, Grid } from "@mui/material";
import React from "react";
import { modalStyle } from "../../../../common/constants";
import { connect, useDispatch } from "react-redux";
import { Form, withFormik } from "formik";
import { FormController } from "../../../../common/components";
import { getVesselData } from "../../selectors";
import { vesselDataSchema } from "../../validate";
import { createStructuredSelector } from "reselect";
import { actions as sliceActions } from "../../slice";
import { saveVesselData } from "../../actions";
import CustomButton from "../../../../common/components/custom/CustomButton";
import { VesselDataModalHeader } from "./Stepper";

const VesselData = (props) => {
    const dispatch = useDispatch();
    const { handleSubmit, errors = {} } = props;
    const handleClose = (e, reason) => {
        if (reason && reason === "backdropClick") {
            return;
        }
        dispatch(sliceActions.closeOpenVesselDataModal(false));
    };
    const styleNextBtn = {
        borderRadius: "5px",
        minWidth: "120px", backgroundColor: "primary.main", color: "white.main", "&:hover": {
            backgroundColor: "primary.dark"
        }
    };
    const styleCancelBtn = {
        color: "primary.main",
        backgroundColor: "white.main",
        "&:hover": {
            backgroundColor: "white.light"
        }
    };

    return (
        <Box sx={modalStyle}>
            <VesselDataModalHeader />
            <Form onSubmit={handleSubmit}>
                <CardContent sx={{ ml: 2, mr: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12} lg={12}>
                            <FormController statusError={true} errorName={errors?.vesselName} control="input2" label={"Vessel Name"} name="vesselName" mandatory={true} />
                        </Grid>
                        <Grid item xs={12} md={12} lg={12}>
                            <FormController statusError={true} errorName={errors?.apiURl} control="input2" label={"Vessel API URL"} name="apiURl" mandatory={true} />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions>
                    <Grid sx={{ mb: 2 }} display={"flex"} container justifyContent="space-around">
                        <CustomButton variant="outlined" onClick={handleClose} sx={{ ...styleNextBtn, ...styleCancelBtn }} > Cancel</CustomButton>
                        <CustomButton type="submit" sx={styleNextBtn}> Save</CustomButton>
                    </Grid>
                </CardActions>
            </Form >
        </Box >
    );
};

const mapStateToProps = createStructuredSelector({
    vesselData: getVesselData

});

const mapDispatchToProps = (dispatch) => ({
    save: (data) => dispatch(saveVesselData(data)),
    next: data => dispatch(sliceActions.setOpenProfileModal(data))
});

const vesselData = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.vesselData.data;
    },
    validationSchema: vesselDataSchema,
    handleSubmit: (values, { props }) => {
        props.save(values);
    },
    displayName: "View/Settings/VesselData"
})(VesselData);

export default connect(mapStateToProps, mapDispatchToProps)(vesselData);

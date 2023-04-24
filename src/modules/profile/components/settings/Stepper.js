import React from "react";
import formModel from "./VesselDataFormModel";
import EditVesselData from "./EditVesselData";
import { vesselDataSchema } from "../../validate";
import { actions as sliceActions } from "../../slice";
import EditVariables from "./EditVariables";
import { connect, useDispatch, useSelector } from "react-redux";
import { Box, CardActions, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { createStructuredSelector } from "reselect";
import { Form, withFormik } from "formik";
import { getVesselData } from "../../selectors";
import CustomButton from "../../../../common/components/custom/CustomButton";
import { updateVesselData } from "../../actions";
import { modalStyle } from "../../../../common/constants";
import { STATE_REDUCER_KEY } from "../../constants";
import _ from "lodash";
import { Close } from "@mui/icons-material";

const { formId } = formModel;
const steps = ["Edit Vessel End Point", "Edit Vessel Variables"];

const styleNextBtn = {
    borderRadius: "5px",
    Width: "30px", maxHeight: "30px", minWidth: "30px", minHeight: "30px",
    fontSize: "13px",
    backgroundColor: "primary.main", color: "white.main", "&:hover": {
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

export const VesselDataModalHeader = () => {
    return (
        <Box sx={{ mb: 2, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography sx={{ color: "primary.main", fontSize: "16px", fontWeight: 700 }}>
                Vessel Data
            </Typography>
            <Typography >
                Your vessel and the corresponding API to your profile
            </Typography>
        </Box>
    );
};

const VesselDataVariableModalHeader = () => {
    return (
        <Box sx={{ mb: 2, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <Typography sx={{ color: "primary.main", fontSize: "16px", fontWeight: 700 }}>
                Vessel Data
            </Typography>
            <Typography >
                Your vessel and the corresponding API to your profile
            </Typography>
        </Box>
    );
};

function _renderStepContent(step, errors = {}) {
    switch (step) {
        case 0:
            return <EditVesselData errors={errors} />;
        case 1:
            return <EditVariables errors={errors} />;
        default:
            return <div>Not Found</div>;
    }
}

const EditModalStepper = (props) => {
    const dispatch = useDispatch();
    const { stepper: { activeStep = 0 } } = useSelector(state => state[STATE_REDUCER_KEY]);
    const isLastStep = activeStep === steps.length - 1;
    const handleClose = (e, reason) => {
        if (reason && reason === "backdropClick") {
            return;
        }
        dispatch(sliceActions.closeOpenEditVesselDataModal(false));
    };
    function _handleBack() {
        dispatch(sliceActions.setActiveStepBack());
    }
    const handleNext = () => {

    };
    const { handleSubmit, errors = {} } = props;
    return (
        <Grid sx={modalStyle}>
            {/* <Stepper activeStep={activeStep} >
                {steps.map(label => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper> */}
            {activeStep === 0 && <VesselDataModalHeader />}
            {activeStep === 1 && <VesselDataVariableModalHeader />}
            <Box>
                {activeStep === steps.length ? (
                    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>   <Typography sx={{ display: "inline", pb: 0.3 }}> Updated Successfully</Typography>
                        <IconButton> <Close onClick={handleClose} /> </IconButton>
                    </Box>
                ) : (
                    <Form onSubmit={handleSubmit} id={formId}>
                        <CardContent sx={{ ml: 2, mr: 2 }}>
                            <Grid container spacing={3}>
                                {_renderStepContent(activeStep, errors)}
                            </Grid>
                        </CardContent>
                        <CardActions>
                            <Grid sx={{ mb: 2 }} display={"flex"} container justifyContent="space-around">
                                <CustomButton variant="outlined" onClick={handleClose} sx={{ ...styleNextBtn, ...styleCancelBtn }} > Cancel</CustomButton>
                                {activeStep !== 0 && (
                                    <CustomButton onClick={_handleBack} sx={styleNextBtn}>
                                        Back
                                    </CustomButton>
                                )}
                                {isLastStep ? <CustomButton type="submit" sx={styleNextBtn} > Save</CustomButton>
                                    :
                                    <CustomButton onClick={handleNext} type="submit" sx={styleNextBtn} > Next</CustomButton>}
                            </Grid>
                        </CardActions>
                    </Form >
                )}
            </Box>
        </Grid>
    );
};
const mapStateToProps = createStructuredSelector({
    vesselData: getVesselData

});

const mapDispatchToProps = (dispatch) => ({
    update: (data) => dispatch(updateVesselData(data)),
    next: () => dispatch(sliceActions.setActiveStep())
});

const stepper = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.vesselData.data;
    },
    validationSchema: vesselDataSchema,
    handleSubmit: (values, { props, errors = {} }) => {
        if (_.isEmpty(errors)) {
            props.next();
            props.update(values);
        }

    },
    displayName: "Profile/Settings/Stepper"
})(EditModalStepper);

export default connect(mapStateToProps, mapDispatchToProps)(stepper);

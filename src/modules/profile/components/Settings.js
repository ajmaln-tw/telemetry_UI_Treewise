import { Grid, CardContent, Divider, InputLabel, Typography, Modal } from "@mui/material";
import React, { useEffect } from "react";
import { Form, withFormik } from "formik";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FormController } from "../../../common/components";
import { changePassword } from "../actions";
import { changePasswordSchema } from "../validate";
import CustomButton from "../../../common/components/custom/CustomButton";

import { STATE_REDUCER_KEY, vesselList } from "../constants";
import VesselData from "./settings/VesselData";
import { actions as sliceActions } from "../slice";
import VesselLists from "./settings/VesselLists";

const Settings = (props) => {
    const { handleSubmit, errors = {} } = props;
    const dispatch = useDispatch();
    const { modal: { openVesselDataModal = false } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const handleOpen = () => dispatch(sliceActions.closeOpenVesselDataModal(true));

    useEffect(() => {

    }, []);


    return (
        <>
            <Grid container columnSpacing={1} sx={{ overflow: "visible" }} >
                <Grid item xs={8} sm={8} md={7} lg={7} sx={{ mt: 2 }}>
                    <Form onSubmit={handleSubmit}>
                        <Typography pl={2} component="h6" variant="h6" sx={{ fontWeight: 700 }}> Settings</Typography>
                        <Typography pl={2} variant="p"> Change your theme and customize other options</Typography>
                        <Divider />
                        <CardContent sx={{ ml: 2, mr: 2 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={8} md={8} lg={8} >
                                    <FormController statusError={true} errorName={errors?.newPassword} control="switch" label={"Push notifications"} name="newPassword" />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Form >
                    <CardContent sx={{ ml: 2, mr: 2 }}>
                        <Grid container spacing={3} sx={{ mb: 3 }} >
                            <Grid item xs={8} sm={8} md={4}>
                                <InputLabel htmlFor={name}>{"API Endpoints"}</InputLabel>
                            </Grid>
                            <Grid item xs={8} sm={8} md={4}>
                                <CustomButton onClick={handleOpen}> Add Vessel</CustomButton>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4} sx={{ display: "flex", p: 1, justifyContent: "center", alignItems: "center" }}>
                    <VesselLists vesselList={vesselList} />
                </Grid>
            </Grid >
            <Modal
                open={openVesselDataModal}
                // onClose={handleClose}
                aria-labelledby="vesselList"
                aria-describedby="vesselList-description"
                disableBackdropClick
            >
                <VesselData newForm={true} />
            </Modal>
        </>
    );
};

const mapStateToProps = createStructuredSelector({
    // profileDetails: getProfileDetails [-] write selectors pending

});

const mapDispatchToProps = (dispatch) => ({
    changePassowrd: (data) => dispatch(changePassword(data))
});

const editUser = withFormik({
    enableReinitialize: true,
    // mapPropsToValues: (props) => {
    //     return props.profileDetails.data;
    // },
    validationSchema: changePasswordSchema,
    handleSubmit: (values, { props }) => {
        props.changePassowrd(values);
    },
    displayName: "View/Settings"
})(Settings);

export default connect(mapStateToProps, mapDispatchToProps)(editUser);

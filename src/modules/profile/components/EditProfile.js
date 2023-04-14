import { Avatar, CardActions, CardContent, Divider, Grid, InputLabel, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { Form, withFormik } from "formik";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FormController, Icons } from "../../../common/components";
import Button from "../../../common/components/custom/Button";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";
import { actions as sliceActions } from "../slice";

const { Person } = Icons;

import { updateProfile, uploadProfileImage } from "../actions";
import ImageUploaderPopUp from "../../common/components/ImageUploaderPopUp";

import { profileInfoSchema } from "../validate";
const EditProfile = (props) => {
    const { id = 0 } = useParams();
    const { handleSubmit, profileDetails = {}, cropData, open, setCropData, setOpenProfileModal, errors = {} } = props;
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
    useEffect(() => {

    }, []);

    return (
        <Grid sx={{ overflow: "visible" }} >
            <LoadingCustomOverlay active={false}>
                <Form onSubmit={handleSubmit}>
                    <Typography pl={2} component="h6" variant="h6" sx={{ fontWeight: 700 }}> Profile Info</Typography>
                    <Typography pl={2} variant="p"> Update your profile info here</Typography>
                    <Divider />
                    <CardContent sx={{ ml: 2, mr: 2 }}>
                        <Grid container spacing={3} sx={{ mb: 3 }} >
                            <Grid item xs={12} md={12} lg={12}>
                                <FormController statusError={true} errorName={errors?.firstName} control="input2" label={"First Name"} name="firstName" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.lastName} control="input2" label={"Last Name"} name="lastName" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.email} control="input2" label={"Email"} name="email" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                {/* Profile Picture Container */}
                                <Grid container pb={1.5}>
                                    <Grid item xs={12} sm={12} md={6}>
                                        <InputLabel sx={{ fontWeight: 700 }} htmlFor={name}>{"Profile Picture"} </InputLabel>
                                    </Grid>
                                    {profileDetails.profilePicture ?
                                        <Grid item xs={12} sm={12} md={2} sx={{ display: smScreen ? "block" : " flex", justifyContent: "center", alignItems: "center" }}>
                                            <Avatar
                                                variant="rounded"
                                                alt={profileDetails?.firstName}
                                                src={`${profileDetails.profilePicture}`}
                                                sx={{
                                                    width: 150, height: 150
                                                }} />
                                        </Grid>
                                        : <Grid item xs={12} sm={12} md={2} sx={{ display: smScreen ? "flex" : " flex", justifyContent: "center", alignItems: "center" }}>
                                            <Person sx={{ fontSize: "4rem", color: "grey.main", opacity: 0.8 }} />
                                        </Grid>}
                                    <Grid item xs={12} sm={12} md={2} sx={{ display: smScreen ? "flex" : "block", justifyContent: "center", alignItems: "center" }}>
                                        <ImageUploaderPopUp
                                            id={profileDetails.userId}
                                            name={profileDetails.firstName}
                                            description="Profile Picture"
                                            action={uploadProfileImage}
                                            popupName={"Click Here to upload Profile Picture"}
                                            open={open}
                                            setOpen={setOpenProfileModal}
                                            cropData={cropData}
                                            setCropData={setCropData}
                                        />
                                    </Grid>
                                </Grid>

                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.designation} control="input2" label={"Designation"} name="designation" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController control="input2" label={"Alternate Email"} name="alternateEmail" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid sx={{ mb: 2 }} container justifyContent="center">
                            <Button type="submit"> {id ? "Update" : "Save"}</Button>
                        </Grid>
                    </CardActions>
                </Form >
            </LoadingCustomOverlay>
        </Grid >
    );
};

const mapStateToProps = createStructuredSelector({
    // profileDetails: getProfileDetails [-] write selectors pending
    // cropData: getCropData,
    // open: getModalOpen,
});

const mapDispatchToProps = (dispatch) => ({
    updateValues: (data) => dispatch(updateProfile(data)),
    setOpenProfileModal: data => dispatch(sliceActions.setOpenProfileModal(data)),
    setCropData: data => dispatch(sliceActions.setCropData(data))
});

const editUser = withFormik({
    enableReinitialize: true,
    // mapPropsToValues: (props) => {
    //     return props.profileDetails.data;
    // },
    validationSchema: profileInfoSchema,
    handleSubmit: (values, { props }) => {
        props.updateValues(values);
    },
    displayName: "View/Profile"
})(EditProfile);

export default connect(mapStateToProps, mapDispatchToProps)(editUser);

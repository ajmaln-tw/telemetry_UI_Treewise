import { useState } from "react";
import { Avatar, Box, CardActions, CardContent, Divider, Grid, InputLabel, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Form, withFormik } from "formik";
import { useParams } from "react-router-dom";

import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FormController, Icons } from "../../../../common/components";
import Button from "../../../../common/components/custom/Button";
import LoadingCustomOverlay from "../../../common/components/LoadingOverlay";
import { actions as sliceActions } from "../../slice";

const { Person } = Icons;

import { profileData, profileImage, updateProfile, uploadProfileImage } from "../../actions";


import { profileInfoSchema, verifyFile } from "../../validate";
import { getCropData, getModalOpen, getProfileDetails } from "../../selectors";
import FileUpload from "./FileUpload";


const EditProfile = (props) => {
    const { id = 0 } = useParams();
    const [fileError, setFileError] = useState("");
    const [isFile, setIsFile] = useState(false);
    const [fileName, setFileName] = useState("");
    const { handleSubmit, profileDetails = {}, errors = {} } = props;
    const { requestInProgress } = profileDetails;

    const dispatch = useDispatch();
    const handleImage = (e) => {
        setFileError("");
        setIsFile(false);
        let files = e.target.files;
        if (files && files.length > 0) {
            const { isVerified, message = "", currFileName = "" } = verifyFile(files);
            if (isVerified) {
                const currentFile = files[0];
                // save to store;
                dispatch(sliceActions.setImage(currentFile));
                setIsFile(true);
                setFileName(currFileName);
            } else {
                setIsFile(false);
                setFileError(message);
            }
        }
    };
    const handleUpload = () => {
        dispatch(uploadProfileImage());
        setIsFile(false);
    };


    useEffect(() => {
        dispatch(profileData());
        dispatch(profileImage());
    }, []);

    return (
        <Grid sx={{ overflow: "visible" }} >
            <LoadingCustomOverlay active={requestInProgress}>
                <Box sx={{ mt: 2 }}>
                    <Form onSubmit={handleSubmit} >
                        <Typography pl={2} component="h6" variant="h6" sx={{ fontWeight: 700 }}> Profile Info</Typography>
                        <Typography pl={2} variant="p"> Update your profile info here</Typography>
                        <Divider mt={2} />
                        <CardContent sx={{ ml: 2, mr: 2 }}>
                            <Grid container spacing={3} sx={{ mb: 3 }} >
                                <Grid item xs={12} md={12} lg={12}>
                                    <FormController statusError={true} errorName={errors?.firstName} control="input2" label={"First Name"} name="firstName" isMandatory={true} />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <FormController statusError={true} errorName={errors?.lastName} control="input2" label={"Last Name"} name="lastName" isMandatory={true} />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <FormController statusError={true} errorName={errors?.email} control="input2" label={"Email"} name="email" disabled />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    {/* Profile Picture Container */}
                                    <Grid container pb={1.5}>
                                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <InputLabel sx={{ fontWeight: 700 }} htmlFor={name}>{"Profile Picture"} </InputLabel>
                                        </Grid>
                                        {profileDetails.profileImage ?
                                            <Grid item xs={12} sm={12} md={2} sx={{ display: "flex", sm: { justifyContent: "center", px: "10px" } }}>
                                                <Box>
                                                    <Avatar
                                                        variant="square"
                                                        alt={profileDetails?.data.firstName}
                                                        src={`${profileDetails.profileImage}`}
                                                        sx={{
                                                            borderRadius: "5px",
                                                            width: 110, height: 110
                                                        }} />
                                                </Box>
                                            </Grid>
                                            : <Grid item xs={12} sm={12} md={2} lg={2} xl={1} sx={{ display: " flex", justifyContent: "center", alignItems: "center" }}>
                                                <Person sx={{ fontSize: "4rem", color: "grey.main", opacity: 0.8 }} />
                                            </Grid>}
                                        <Grid item xs={12} sm={12} md={2} lg={2} xl={1} sx={{ display: "flex", justifyContent: { xm: "flex-start", sm: "flex-start", md: "center" }, alignItems: "center" }}>
                                            {/* <ImageUploaderPopUp
                                                id={profileDetails.userId}
                                                name={profileDetails.firstName}
                                                description="Profile Picture"
                                                action={uploadProfileImage}
                                                title={"Upload Profile Picture"}
                                                popupName={"Click Here to upload Profile Picture"}
                                                open={open}
                                                setOpen={setOpenProfileModal}
                                                cropData={cropData}
                                                setCropData={setCropData}
                                            /> */}
                                            <FileUpload
                                                handleImage={handleImage}
                                                fileError={fileError}
                                                handleUpload={handleUpload}
                                                isFileExists={isFile}
                                                fileName={fileName} />

                                        </Grid>
                                    </Grid>

                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <FormController statusError={true} errorName={errors?.designation} control="input2" label={"Designation"} name="designation" isMandatory={true} />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <FormController control="input2" label={"Alternate Email"} name="alternativeEmail" />
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
                </Box>
            </LoadingCustomOverlay>
        </Grid >
    );
};

const mapStateToProps = createStructuredSelector({
    profileDetails: getProfileDetails,
    cropData: getCropData,
    open: getModalOpen
});

const mapDispatchToProps = (dispatch) => ({
    updateValues: (data) => dispatch(updateProfile(data)),
    setOpenProfileModal: data => dispatch(sliceActions.setOpenProfileModal(data)),
    setCropData: data => dispatch(sliceActions.setCropData(data))
});

const editUser = withFormik({
    enableReinitialize: true,
    mapPropsToValues: (props) => {
        return props.profileDetails.data;
    },
    validationSchema: profileInfoSchema,
    handleSubmit: (values, { props }) => {
        props.updateValues(values);
    },
    displayName: "View/Profile"
})(EditProfile);

export default connect(mapStateToProps, mapDispatchToProps)(editUser);

import { Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";
import { Form, withFormik } from "formik";
import { FormController } from "../../../common/components";
import Button from "../../../common/components/custom/Button";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getProfileDetails } from "../selectors";
import { updateProfile } from "../actions";
const EditProfile = (props) => {
    const { id } = useParams();
    const { handleSubmit } = props;
    console.log("ajmal", props)

    return (
        <Grid sx={{ m: 2, overflow: "visible" }} >
            <LoadingCustomOverlay active={false}>
                <Form onSubmit={handleSubmit}>
                    <CardHeader title={"Profile Info"} component={Typography} />
                    <Divider />
                    <CardContent sx={{ ml: 2, mr: 2 }}>
                        <Grid container spacing={2} sx={{ mb: 3 }} >
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController control="input2" label={"First Name"} name="firstName" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController control="input2" label={"Last Name"} name="LastName" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} >
                                <FormController control="input" label={"Email"} name="email" isMandatory={true} />
                            </Grid>

                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid sx={{ mb: 2 }} container justifyContent="center">
                            <Button type="submit"> {id ? "update" : "save"}</Button>
                        </Grid>
                    </CardActions>
                </Form >
            </LoadingCustomOverlay>
        </Grid >
    );
};

const mapStateToProps = createStructuredSelector({
    // profileDetails: getProfileDetails
});

const mapDispatchToProps = (dispatch) => ({
    updateValues: (data) => dispatch(updateProfile(data))
});

const editUser = withFormik({
    enableReinitialize: true,
    // mapPropsToValues: (props) => {
    //     return props.profileDetails.data;
    // },
    // validationSchema: lookUpCategoryTypeSchema,
    handleSubmit: (values, { props }) => {
        props.submitValues(values);
    },
    displayName: "View/Profile"
})(EditProfile);

export default connect(mapStateToProps, mapDispatchToProps)(editUser);

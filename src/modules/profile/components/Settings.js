import { CardActions, CardContent, Divider, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Form, withFormik } from "formik";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FormController } from "../../../common/components";
import Button from "../../../common/components/custom/Button";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";
import { changePassowrd } from "../actions";

import { changePasswordSchema } from "../validate";

const Settings = (props) => {
    const { handleSubmit, errors = {} } = props;

    useEffect(() => {

    }, []);


    return (
        <Grid sx={{ overflow: "visible" }} >
            <LoadingCustomOverlay active={false}>
                <Form onSubmit={handleSubmit}>
                    <Typography pl={2} component="h6" variant="h6" sx={{ fontWeight: 700 }}> Settings</Typography>
                    <Typography pl={2} variant="p"> Change your theme and customize other options</Typography>
                    <Divider />
                    <CardContent sx={{ ml: 2, mr: 2 }}>
                        <Grid container spacing={3} sx={{ mb: 3 }} >
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.newPassword} control="switch" label={"Push notifications"} name="newPassword" />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.confirmPassword} control="Checkbox" label={"Customizable variables"} name="independentVariables" />
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider />
                    <CardActions>
                        <Grid sx={{ my: 2 }} container justifyContent="center">
                            <Button type="submit"> {"Reset"}</Button>
                        </Grid>
                    </CardActions>
                </Form >
            </LoadingCustomOverlay>
        </Grid >
    );
};

const mapStateToProps = createStructuredSelector({
    // profileDetails: getProfileDetails [-] write selectors pending

});

const mapDispatchToProps = (dispatch) => ({
    changePassowrd: (data) => dispatch(changePassowrd(data))
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

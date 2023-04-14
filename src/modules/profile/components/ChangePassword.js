import { Badge, CardActions, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Form, withFormik } from "formik";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { FormController, Icons } from "../../../common/components";
import Button from "../../../common/components/custom/Button";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";
import { changePassowrd } from "../actions";

import { changePasswordSchema } from "../validate";

const { Cancel } = Icons;
const ChangePassword = (props) => {
    const { handleSubmit, errors = {}, twoFactorAuthentication = false } = props;

    useEffect(() => {

    }, []);


    return (
        <Grid sx={{ overflow: "visible" }} >
            <LoadingCustomOverlay active={false}>
                <Form onSubmit={handleSubmit}>
                    <Typography pl={2} component="h6" variant="h6" sx={{ fontWeight: 700 }}> Change Password</Typography>
                    <Typography pl={2} variant="p"> Change your password and reset two factor authentication</Typography>
                    <Divider />
                    <CardContent sx={{ ml: 2, mr: 2 }}>
                        <Grid container spacing={3} sx={{ mb: 3 }} >
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.password} control="input2" label={"Old Password"} name="password" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.newPassword} control="input2" label={"New Password"} name="newPassword" isMandatory={true} />
                            </Grid>
                            <Grid item xs={12} md={12} lg={12} >
                                <FormController statusError={true} errorName={errors?.confirmPassword} control="input2" label={"Confrim Password"} name="confirmPassword" isMandatory={true} />
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
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", my: 1.5 }} >
                <Grid>
                    {twoFactorAuthentication ? <Grid sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <Typography component="h6" variant="h6" sx={{ display: "flex", fontWeight: 600 }}>  Two Factor AuthenticationStatus </Typography> <Chip sx={{ display: "flex" }} label="Active" />
                    </Grid> : <Grid>
                        <Typography sx={{ color: "red.main", fontSize: "18px", fontWeight: 600 }}> Two step Verification not done yet </Typography> <Badge />
                        <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                            <Cancel sx={{ color: "red.main", fontSize: "100px" }} />
                            <Link sx={{ fontSize: "14px" }} > Click here to Setup Two Step Verification</Link>
                        </Grid>
                    </Grid>
                    }
                </Grid>
            </Grid>

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
    displayName: "View/ChangePassword"
})(ChangePassword);

export default connect(mapStateToProps, mapDispatchToProps)(editUser);

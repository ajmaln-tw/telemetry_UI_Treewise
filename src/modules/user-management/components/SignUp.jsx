// import { CircularProgress } from "@mui/material";
import { withFormik } from "formik";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { Components, FormController } from "../../../common/components";

import { actions as sliceActions } from "../slice";
import { signUpSchema as validator } from "../validate";
import { signUp } from "../actions";
import { USER_TYPE } from "../constants";
import { Box, Paper } from "@mui/material";
import { getSignUp } from "../selectors";
import { createStructuredSelector } from "reselect";

const { Divider, Grid, Typography } = Components;


const { Button } = Components;

function SignUp(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { handleSubmit, setFieldValue } = props;
    // setFieldValue("userType", USER_TYPE.VESSEL);
    // const confirmed = useSelector(state => state[REDUCER_KEY].signUpForm.confirm);

    // if (confirmed) {
    //     confirmDialog({
    //         title: I18n("account_created"), showDenyButton: false
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             navigate("/login");
    //             window.sessionStorage.setItem("stepper", 0);
    //         }
    //     });
    // }

    const infoList = {
        px: 2,
        borderRight: "1px solid #009992",
        fontSize: "11px",
        display: {
            xs: "none",
            md: "block"
        }
    };
    useEffect(() => {
        setFieldValue("userType", USER_TYPE.VESSEL);
        return () => dispatch(sliceActions.clear());
    }, [pathname]);
    return (
        <>
            <Grid container sx={{ display: "flex", justifyContent: "Center" }}>
                <Paper sx={{ marginTop: "100px", width: "60%", height: "100%", backgroundImage: `url(${Image})`, backgroundSize: "cover", display: "flex", justifyContent: "center", alignItems: "center" }} elevation={0}>
                    <Box>
                        <Form>
                            <Typography sx={{ fontSize: { xs: "30px", lg: "36px", xl: "40px" }, fontWeight: 600, fontFamily: "Clash Display" }} >{"logo"}</Typography>
                            <Grid container spacing={2} sx={{ mb: 3 }} >
                                <Grid item xs={12} md={6} lg={6} sx={{ my: 1 }}>
                                    <FormController control="input" label={"Company Name"} isMandatory={true} name="info.company_name" />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} sx={{ my: 1 }}>
                                    <FormController control="input" label={"Vessel Name"} isMandatory={true} name="info.vessel_name" />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} sx={{ my: 1 }}>
                                    <FormController control="input" label={"IMO Number"} name="info.imo_number" />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} sx={{ my: 1 }}>
                                    <FormController control="input" label={"Phone Number"} name="info.mobile" />
                                </Grid>
                                <Grid item xs={12} md={6} lg={12} sx={{ my: 1 }}>
                                    <FormController control="input" label={"Email"} name="email" isMandatory={true} inputProps={{ style: { textTransform: "lowercase" } }} />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} >
                                    <FormController control="input" label={"Password"} isMandatory={true} name="password" type="password" />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} >
                                    <FormController control="input" label={"Confirm Password"} isMandatory={true} name="confirmPassword" type="password" />
                                </Grid>
                                <Grid item xs={12} md={6} lg={6} >
                                    <FormController control="select" label={"Confirm Password"} isMandatory={true} name="confirmPassword" type="password" />
                                </Grid>
                                <Grid item xs={12} md={12} lg={12} >
                                    <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                        <Grid>
                                            <Button sx={{ fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" } }} variant="contained" type="submit" onClick={handleSubmit}> Sign Up</Button>
                                        </Grid>
                                    </Grid>
                                    <Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Form>
                        <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                            <Divider variant="caption" />
                            <Box sx={{ display: "flex", py: { xs: 3, xl: 4.5 }, justifyContent: "center", alignItems: "space-around", boxShadow: 0 }} elevation={0}>
                                <Typography sx={{ fontSize: { lg: "16px", xl: "18px" }, color: "shaded.main" }}>{"Already have an account?"}</Typography>
                                <Typography variant="text" sx={{ fontWeight: 600, fontSize: { lg: "16px", xl: "18px" }, p: 0.5, m: 0, ml: 1, cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }} color="primary"
                                    onClick={() => {
                                        navigate("../login");
                                    }
                                    }>{"Login"}</Typography>
                            </Box>
                            <Grid sx={{ display: "flex" }}>
                                <Typography sx={infoList}>{"terms_of_service"}</Typography>
                                <Typography sx={infoList}>{"privacy_policy"}</Typography>
                                <Typography sx={{ pl: "10px", fontSize: "11px" }}>{"copyright"} </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Paper >
            </Grid >
        </>

    );
}

const mapStateToProps = createStructuredSelector({
    signUp: getSignUp
});

const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(signUp(data))
});

const UserRegistrationForm = withFormik({
    enableReinitialize: false,
    validationSchema: validator,
    mapPropsToValues: (props) => {
        return props.signUp.data;
    },
    handleSubmit: (values, { props: { submit } }) => {
        submit(values);
    },
    displayName: "UserSignUp"
})(SignUp);

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistrationForm);

// import { CircularProgress } from "@mui/material";
import { withFormik } from "formik";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { Components, FormController } from "../../../common/components";

import { actions as sliceActions } from "../slice";
import { signUpSchema as validator } from "../validate";
import { signUp } from "../actions";
import { images, USER_TYPE } from "../constants";
import { Box, Paper, useMediaQuery } from "@mui/material";
import { getSignUp } from "../selectors";
import { createStructuredSelector } from "reselect";
import Carousal from "../../../common/components/carousal/Carousal";
import { useTheme } from "@mui/system";
import logo from "../../../assets/images/logo_tele.png";

const { Divider, Grid, Typography } = Components;


const { Button } = Components;

function SignUp(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

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

    useEffect(() => {
        setFieldValue("userType", USER_TYPE.VESSEL);
        return () => dispatch(sliceActions.clear());
    }, [pathname]);
    return (
        <>
            <Grid height="100vh" container sx={{ width: 1, bgcolor: "white.main", p: { xs: 3, md: 5 } }}>
                <Grid sx={{ display: "flex", justifyContent: { xs: "block", md: "space-around" }, alignItems: "center", flexDirection: { xs: "column", md: "row" }, width: 1, height: "100%" }}>
                    {smScreen && <Carousal items={images} />}
                    <Box sx={{ mt: 5, right: 0, display: "flex", alignItems: "center", mb: { lg: "50px", xl: "90px", justifyContent: "end" }, width: { xs: "100%", md: "auto" } }}>
                        <Paper item xs={12} md={5} sx={{ bgcolor: "white.main", boxShadow: 0, borderRadius: "20px", mr: { xs: "40px", lg: "95px" }, width: { xs: "100%", md: "420px", lg: "480px", xl: "560px" }, ml: 5 }} elevation={0}>
                            <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "center", pt: 1 }}>
                                <Box sx={{ px: { xs: 3, xl: 6 }, py: 4 }}>
                                    <Typography sx={{ fontSize: { xs: "30px", lg: "36px", xl: "40px" }, fontWeight: 600, fontFamily: "Clash Display" }} >  <img src={logo} /></Typography>
                                    <Box sx={{ overflowY: "scroll", height: "60vh" }}>
                                        <Form>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 } }}>
                                                <FormController control="input" label={"Company Name"} isMandatory={true} name="info.company_name" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" label={"Vessel Name"} isMandatory={true} name="info.vessel_name" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" label={"IMO Number"} name="info.imo_number" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" label={"Phone Number"} name="info.mobile" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" label={"Email"} name="email" isMandatory={true} inputProps={{ style: { textTransform: "lowercase" } }} />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" label={"Password"} isMandatory={true} name="password" type="password" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" label={"Confirm Password"} isMandatory={true} name="confirmPassword" type="password" />
                                            </Grid>
                                            <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                                <Button sx={{ fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" } }} variant="contained" type="submit" onClick={handleSubmit}>{"Sign Up"}</Button>
                                                <Typography
                                                    variant="text"
                                                    sx={{ mb: 0, p: 0.5, fontSize: { lg: "16px", xl: "18px" }, color: "primary.main", cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }}
                                                // onClick={() => navigate("../reset-password")}
                                                >
                                                    {"Forgot password"}

                                                </Typography>
                                            </Grid>
                                        </Form>
                                    </Box>
                                </Box>
                                <Divider variant="caption" />
                                <Box sx={{ display: "flex", py: { xs: 3, xl: 4.5 }, justifyContent: "center", alignItems: "space-around", boxShadow: 0 }} elevation={0}>
                                    <Typography display="inline" sx={{ fontSize: { lg: "16px", xl: "18px" }, color: "shaded.main" }}>{"Already have an account?"}</Typography>
                                    <Typography display="inline" variant="text" sx={{ fontWeight: 600, fontSize: { lg: "16px", xl: "18px" }, pb: 0.5, m: 0, ml: 1, cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }} color="primary"
                                        onClick={() => {
                                            navigate("../login");
                                        }
                                        }>{"Login Account"}</Typography>
                                </Box>
                            </Grid>
                        </Paper >
                    </Box>
                    {/* <FAQs style={faqStyle} /> */}
                </Grid >
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

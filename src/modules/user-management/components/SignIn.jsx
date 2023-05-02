import { withFormik } from "formik";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { Components, FormController } from "../../../common/components";

import { actions as sliceActions } from "../slice";
import { signInSchema as validator } from "../validate";
import { signIn } from "../actions";
import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
import { createStructuredSelector } from "reselect";
import { getSignIn } from "../selectors";
import logo from "../../../assets/images/logo_tele.png";
import { images } from "../constants";
import Carousal from "../../../common/components/carousal/Carousal";
import { actions as commonActions } from "../../common/slice";
const { Divider, Grid, Typography } = Components;

const { Button } = Components;

function SignIn(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const { handleSubmit, signIn: { requestInProgress = false } = {} } = props;
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
        dispatch(commonActions.setNavigator(navigate));
        return () => dispatch(sliceActions.clear());
    }, [pathname]);
    // const faqStyle = { position: "absolute", left: "35px", bottom: "-20px", width: { md: "60%", lg: "55%", xl: "45%" }, height: "13vh", alignItems: "center", justifyContent: "end", display: { xs: "none", md: "flex" }, borderRadius: "20px" };

    return (
        <Grid height="100vh" container sx={{ overflowY: "hidden", width: 1, bgcolor: "white.main", p: 0, display: "flex", alignItems: "center" }}>
            <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 1, height: "100%" }}>
                <Box sx={{ mt: 5, right: 0, display: "flex", alignItems: "center", mb: { lg: "130px", xl: "140px", justifyContent: "end" }, width: { xs: "100%", md: "auto" } }}>
                    <Paper item xs={12} md={5} sx={{ bgcolor: "white.main", boxShadow: 0, borderRadius: "20px", mr: { xs: "40px", lg: "95px" }, width: { xs: "100%", md: "420px", lg: "480px", xl: "560px" }, ml: 5 }} elevation={0}>
                        <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                            <Box sx={{ px: { xs: 3, xl: 6 }, py: 4 }}>
                                <Typography sx={{ fontSize: { xs: "20px", lg: "26px", xl: "30px" } }} >  <img src={logo} /> </Typography>
                                <Typography sx={{ fontSize: { xs: "20px", lg: "26px", xl: "30px" }, textAlign: "center", fontWeight: 800, color: "primary.main" }} >   LOGIN </Typography>
                                <Box >
                                    <Form>
                                        <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 } }}>
                                            <FormController control="input" name="email" label={"Email"} placeholder="eg:- user@companydomain.com" />
                                        </Grid>
                                        <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                            <FormController control="input" name="password" label={"Password"} placeholder="*********" type="password" />
                                        </Grid>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", pb: 1 }}>
                                            <Grid sx={{ display: "flex", alignItems: "flex-start" }}>
                                                <FormController control="checkbox" name="savePassword" />
                                                <Typography sx={{ fontSize: "12px", fontWeight: 700, color: "primary.main", cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }}>{"Remember Me"}</Typography>
                                            </Grid>
                                            <Grid sx={{ display: "flex", alignItems: "flex-start" }}>
                                                <Typography
                                                    variant="p"
                                                    sx={{ fontSize: "12px", fontWeight: 700, color: "primary.main", cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }}
                                                // onClick={() => navigate("../reset-password")}
                                                >
                                                    {"Forgot password?"}

                                                </Typography>
                                            </Grid>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                            <Button sx={{ width: "70%", borderRadius: "17px", fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" } }} variant="contained" type="submit" onClick={handleSubmit}>
                                                {"Login"}
                                            </Button>
                                            {requestInProgress && <MoonLoader color="#33aaf8" size={20} speedMultiplier={1.5} />}
                                        </Box>
                                    </Form>
                                </Box>
                            </Box>
                            <Divider variant="caption" />
                            <Box sx={{ display: "flex", py: { xs: 3, xl: 4.5 }, justifyContent: "center", alignItems: "space-around", boxShadow: 0 }} elevation={0}>
                                <Typography display="inline" sx={{ fontSize: "13px", color: "shaded.main" }}>{"Don’t have an account?"}</Typography>
                                <Typography display="inline" variant="text" sx={{ fontWeight: 700, fontSize: "14px", pb: 0.6, m: 0, ml: 1, cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }} color="primary"
                                    onClick={() => {
                                        navigate("../signup");
                                    }
                                    }>{"Sign up"}</Typography>
                            </Box>
                        </Grid>
                    </Paper >
                </Box>

                {/* <FAQs style={faqStyle} /> */}
            </Grid >
            <Grid item xs={12} sm={12} md={7} lg={7} xl={7} p={0} m={0} >
                {smScreen && <Carousal items={images} />}
            </Grid>
        </Grid >
    );
}

const mapStateToProps = createStructuredSelector({
    signIn: getSignIn
});

const mapDispatchToProps = (dispatch) => ({
    submit: data => dispatch(signIn(data))
});

const UserRegistrationForm = withFormik({
    enableReinitialize: false,
    validationSchema: validator,
    mapPropsToValues: (props) => {
        return props.signIn.data;
    },
    handleSubmit: (values, { props: { submit } }) => {
        submit(values);
    },
    displayName: "UserSignIn"
})(SignIn);

export default connect(mapStateToProps, mapDispatchToProps)(UserRegistrationForm);

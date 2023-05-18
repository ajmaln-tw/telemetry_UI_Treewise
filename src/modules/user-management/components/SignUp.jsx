// import { CircularProgress } from "@mui/material";
import { withFormik } from "formik";
import { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Form, useLocation, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";

import { Components, FormController } from "../../../common/components";

import { actions as sliceActions } from "../slice";
import { signUpSchema as validator } from "../validate";
import { signUp } from "../actions";
import { STATE_REDUCER_KEY, images } from "../constants";
import { Box, Paper, useMediaQuery } from "@mui/material";
import { getSignUp } from "../selectors";
import { createStructuredSelector } from "reselect";
import Carousal from "../../../common/components/carousal/Carousal";
import { useTheme } from "@mui/system";
import logo from "../../../assets/images/logo_tele.png";
import { actions as commonActions } from "../../common/slice";
import { confirmDialog } from "../../../utils/notificationUtils";

const { Button, Divider, Grid, Typography } = Components;

function SignUp(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const { handleSubmit, signUp: { requestInProgress = false } = {} } = props;
    const confirmed = useSelector(state => state[STATE_REDUCER_KEY]).signUp.confirm;

    if (confirmed) {
        confirmDialog({
            title: "Sign Up completed", showDenyButton: false
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/login");

            }
        });
    }

    useEffect(() => {
        dispatch(commonActions.setNavigator(navigate));
        return () => dispatch(sliceActions.clearAll());
    }, [pathname]);
    return (
        <>
            <Grid height="100vh" container sx={{ overflowY: "hidden", width: 1, bgcolor: "white.main", p: 0, display: "flex", alignItems: "center" }}>
                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: 1, height: "100%" }}>
                    <Box sx={{ mt: 5, right: 0, display: "flex", alignItems: "center", mb: { lg: "30px", xl: "50px", justifyContent: "end" }, width: { xs: "100%", md: "auto" } }}>
                        <Paper item xs={12} md={5} sx={{ bgcolor: "white.main", boxShadow: 0, borderRadius: "20px", mr: { xs: "40px", lg: "95px" }, width: { xs: "100%", md: "420px", lg: "480px", xl: "560px" }, ml: 5 }} elevation={0}>
                            <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                                <Box sx={{ px: { xs: 3, xl: 6 }, py: 4 }}>
                                    <Typography sx={{ fontSize: { xs: "20px", lg: "26px", xl: "30px" } }} >  <img src={logo} /> </Typography>
                                    <Typography sx={{ fontSize: { xs: "20px", lg: "26px", xl: "30px" }, textAlign: "center", fontWeight: 800, color: "primary.main" }} >   SIGN UP</Typography>
                                    <Box sx={{ overflowY: "scroll", height: "50vh" }}>
                                        <Form>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" placeholder="eg:- user@companydomain.com" label={"Email"} isMandatory={true} name="email" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 } }}>
                                                <FormController control="input" placeholder="eg:- MARIAPPS" label={"Company Name"} isMandatory={true} name="companyName" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" placeholder="*********" label={"Password"} isMandatory={true} name="password" type="password" />
                                            </Grid>
                                            <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                                <FormController control="input" placeholder="*********" label={"Confirm Password"} isMandatory={true} name="confirmPassword" type="password" />
                                            </Grid>
                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                                                <Button sx={{ width: "70%", borderRadius: "17px", fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" } }} variant="contained" type="submit" onClick={handleSubmit}>{"Sign Up"}</Button>
                                                {requestInProgress && <MoonLoader color="#33aaf8" size={20} speedMultiplier={1.5} />}
                                            </Box>
                                        </Form>
                                    </Box>
                                </Box>
                                <Divider variant="caption" />
                                <Box sx={{ display: "flex", py: { xs: 0.5, xl: 1 }, justifyContent: "center", alignItems: "space-around", boxShadow: 0 }} elevation={0}>
                                    <Typography display="inline" sx={{ fontSize: "13px", color: "shaded.main" }}>{"Already have an account?"}</Typography>
                                    <Typography display="inline" variant="text" sx={{ fontWeight: 600, fontSize: "14px", pb: 0.5, m: 0, ml: 1, cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }} color="primary"
                                        onClick={() => {
                                            navigate("../login");
                                        }
                                        }>{"Login"}</Typography>
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

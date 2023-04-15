// import { CircularProgress, Paper } from "@mui/material";
import { withFormik } from "formik";
import { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Form, useLocation, useNavigate } from "react-router-dom";
// import { createStructuredSelector } from "reselect";
// import { confirmDialog, infoNotify }
import { Components, FormController } from "../../../common/components";

import { actions as sliceActions } from "../slice";
import { signInSchema as validator } from "../validate";
// import { getSignIn } from "../selectors";
import { signIn } from "../actions";
import { Box, Paper, useMediaQuery, useTheme } from "@mui/material";
// import FAQs from "../../common/FAQs/FAQs";
import { createStructuredSelector } from "reselect";
import { getSignIn } from "../selectors";
import logo from "../../../assets/images/logo_tele.png";
// import bg from "../../../assets/images/background.jpg"
import { images } from "../constants";
import Carousal from "../../../common/components/carousal/Carousal";


// const { Card, CardActions, CardContent, CardHeader, Divider, Grid, Typography } = Components;
const { Divider, Grid, Typography } = Components;

const { Button } = Components;

function SignIn(props) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("sm"));

    const { handleSubmit } = props;
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
        return () => dispatch(sliceActions.clear());
    }, [pathname]);
    // const faqStyle = { position: "absolute", left: "35px", bottom: "-20px", width: { md: "60%", lg: "55%", xl: "45%" }, height: "13vh", alignItems: "center", justifyContent: "end", display: { xs: "none", md: "flex" }, borderRadius: "20px" };

    return (
        <Grid height="100vh" container sx={{ width: 1, bgcolor: "white.main", p: { xs: 3, md: 5 } }}>
            <Grid sx={{ display: "flex", justifyContent: { xs: "block", md: "space-around" }, alignItems: "center", flexDirection: { xs: "column", md: "row" }, width: 1, height: "100%" }}>
                {smScreen && <Carousal items={images} />}
                <Box sx={{ mt: 5, right: 0, display: "flex", alignItems: "center", mb: { lg: "130px", xl: "140px", justifyContent: "end" }, width: { xs: "100%", md: "auto" } }}>
                    <Paper item xs={12} md={5} sx={{ bgcolor: "white.main", boxShadow: 0, borderRadius: "20px", mr: { xs: "40px", lg: "95px" }, width: { xs: "100%", md: "420px", lg: "480px", xl: "560px" }, ml: 5 }} elevation={0}>
                        <Grid sx={{ display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                            <Box sx={{ px: { xs: 3, xl: 6 }, py: 4 }}>
                                <Typography sx={{ fontSize: { xs: "30px", lg: "36px", xl: "40px" }, fontWeight: 600, fontFamily: "Clash Display" }} >  <img src={logo} /></Typography>
                                <Box >
                                    <Form>
                                        <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 } }}>
                                            <FormController control="input" name="email" placeholder="Email" />
                                        </Grid>
                                        <Grid sx={{ my: 1, py: { md: 1, xl: 1.5 }, pb: { md: 2, xl: 3 } }}>
                                            <FormController control="input" name="password" placeholder="Password" />
                                        </Grid>
                                        <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Button sx={{ fontSize: { xs: "16px", xl: "18px" }, height: { xs: "40px", xl: "50px" } }} variant="contained" type="submit" onClick={handleSubmit}>{"Login"}</Button>
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
                                <Typography display="inline" sx={{ fontSize: { lg: "16px", xl: "18px" }, color: "shaded.main" }}>{"Need an Account?"}</Typography>
                                <Typography display="inline" variant="text" sx={{ fontWeight: 600, fontSize: { lg: "16px", xl: "18px" }, p: 0.5, m: 0, ml: 1, cursor: "pointer", "&:hover": { bgcolor: "rgba(0, 0, 0, 0.04)" } }} color="primary"
                                    onClick={() => {
                                        navigate("../signup");
                                    }
                                    }>{"Create Account"}</Typography>
                            </Box>
                        </Grid>
                    </Paper >
                </Box>
                {/* <FAQs style={faqStyle} /> */}
            </Grid >
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

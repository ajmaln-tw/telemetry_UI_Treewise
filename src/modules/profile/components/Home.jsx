import React, { useEffect } from "react";
import { Tab, Tabs, Box, Grid } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const MyProfile = () => {
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const location = useLocation();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (location.pathname.includes("/info")) {
            setValue(0);
        }
        if (location.pathname.includes("/change-password")) {
            setValue(1);
        }
        if (location.pathname.includes("/settings")) {
            setValue(2);
        }
        if (location.pathname.includes("/subscription")) {
            setValue(3);
        }

    }, []);

    return (
        <Grid sx={{ m: 2, mt: 3, overflow: "visible" }}>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs value={value} onChange={handleChange} sx={{ overflowX: "scroll" }}>
                        <Tab label={"Profile"} onClick={() => navigate("./info")} />
                        <Tab label={"Change Password"} onClick={() => navigate("./change-password")} />
                        <Tab label={"Settings"} onClick={() => navigate("./settings")} />
                        <Tab label={"Subscription"} onClick={() => navigate("./subscription")} />
                    </Tabs>
                </Box>
                <Outlet />
            </Box>

        </Grid >
    );
};

export default MyProfile;

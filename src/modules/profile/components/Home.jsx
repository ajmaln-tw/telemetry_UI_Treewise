import React from "react";
import { Tab, Tabs, Box, Grid } from "@mui/material";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

let active = {
    color: "primary.main",
    "&:hover": {
        color: "primary.dark",
    },
    fontWeight: "700 !important"
};

let inActive = {
    color: "grey.main",
};

const MyProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let infoStyle = { ...inActive };
    let cpStyle = { ...inActive };
    let settingsStyle = { ...inActive };
    let subStyle = { ...inActive };
    if (location.pathname.includes("/info")) {
        infoStyle = { ...active };
    }
    if (location.pathname.includes("/change-password")) {
        cpStyle = { ...active };
    }
    if (location.pathname.includes("/settings")) {
        settingsStyle = { ...active };
    }
    if (location.pathname.includes("/subscription")) {
        subStyle = { ...active };
    }

    return (
        <Grid sx={{ m: 2, mt: 3, overflow: "visible" }}>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <Tabs sx={{ overflowX: "scroll" }}>
                        <Tab label={"Profile"} sx={{ ...infoStyle }} onClick={() => navigate("./info")} />
                        <Tab label={"Change Password"} sx={{ ...cpStyle }} onClick={() => navigate("./change-password")} />
                        <Tab label={"Settings"} sx={{ ...settingsStyle }} onClick={() => navigate("./settings")} />
                        <Tab label={"Subscription"} sx={{ ...subStyle }} onClick={() => navigate("./subscription")} />
                    </Tabs>
                </Box>
                <Outlet />
            </Box>

        </Grid >
    );
};

export default MyProfile;

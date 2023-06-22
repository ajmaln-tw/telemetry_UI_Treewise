import { Typography, Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FREE_TIER, PREMIUM_TIER } from "../constants";
import SubscribeTermButton from "./SubscribeTermButton";
import SubScriptionBanner from "./SubScriptionBanner";

const Subscriptions = () => {
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(true);
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const mdScreen = useMediaQuery(theme.breakpoints.down("md"));

    useEffect(() => {

    }, []);


    const handleButton1 = () => {
        setButton1(prev => !prev);
        setButton2(prev => !prev);
    };

    return (
        <Box sx={{ my: 2, py: 2 }}>
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Grid sx={{ width: "80%", textAlign: "center" }}>
                    <Typography variant="h5" component="h5" sx={{ color: "primary.main", fontWeight: 800 }}> Choose Your Plan </Typography>
                    <Typography variant="p" sx={{
                        color: "primary.main", flexGrow: 1, textAlign: "left"
                    }}>
                        TreeWise offers powerful and convenient Telemetry application, specialized dashboard,
                        customized alert configuration and analysis function for the shipping and marine industry.
                    </Typography>
                </Grid>
            </Grid>
            <Grid sx={{ my: 3 }}>
                <SubscribeTermButton handleButton1={handleButton1} button1={button1} button2={button2} />
            </Grid>
            <Grid sx={{ display: smScreen || mdScreen ? "block" : "flex", justifyContent: "center", alignItems: "center" }}>
                <SubScriptionBanner type="Free" premiumAmount="$0" term="(14 days Trial)" features={FREE_TIER} active={true} />
                <SubScriptionBanner type="Premium" premiumAmount="$4200" term="/yearly" features={PREMIUM_TIER} active={false} />
            </Grid>
        </Box>
    );
};

export default Subscriptions;


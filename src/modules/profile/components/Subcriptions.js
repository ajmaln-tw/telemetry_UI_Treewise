import { Typography, Box, Grid } from "@mui/material";
import React, { useState } from "react";
import SubscribeTermButton from "./SubscribeTermButton";

import SubScriptionBanner from "./SubScriptionBanner";


const Subcriptions = () => {
    const [button1, setButton1] = useState(false);
    const [button2, setButton2] = useState(true);

    const handleButton1 = () => {
        setButton1(prev => !prev)
        setButton2(prev => !prev)
    }

    return (
        <Box sx={{ my: 2, py: 2 }}>
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Grid sx={{ width: "80%", textAlign: "center" }}>
                    <Typography variant="h5" component="h5" sx={{ color: "primary.main", fontWeight: 800 }}> Choose Your Plan </Typography>
                    <Typography variant="p" sx={{ color: "primary.main", textAlign: "left" }}>
                        TreeWise offers powerful and convenient Telemetry application, specialized dashboard,
                        customised alert configuration and analysis function for the shipping and marine industry.
                    </Typography>
                </Grid>
            </Grid>
            <Grid sx={{ my: 3 }}>
                <SubscribeTermButton handleButton1={handleButton1} button1={button1} button2={button2} />
            </Grid>
            <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <SubScriptionBanner />
                <SubScriptionBanner />
            </Grid>
        </Box>
    )
}

export default Subcriptions

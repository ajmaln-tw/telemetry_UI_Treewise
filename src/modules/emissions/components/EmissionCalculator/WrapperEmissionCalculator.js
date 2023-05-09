import { Box, Grid } from "@mui/material";
import React from "react";
import EmissionCalculatorFilter from "./EmissionCalculatorFilter";
import RouteMap from "./RouteMap";

const WrapperEmissionCalculator = () => {
    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", height: "inherit" }}>
        <Grid sx={{ width: "100%" }}>
            <EmissionCalculatorFilter />
            <RouteMap />
        </Grid>

    </Box>;
};

export default WrapperEmissionCalculator;

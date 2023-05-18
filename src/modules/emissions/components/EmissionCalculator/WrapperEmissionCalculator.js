import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import RouteMap from "./RouteMap";
import { useDispatch } from "react-redux";
import { actions as sliceActions } from "../../slice";

const WrapperEmissionCalculator = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        return () => dispatch(sliceActions.clearAll());
    }, []);
    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column", height: "inherit" }}>
        <Grid sx={{ width: "100%" }}>
            <RouteMap />
        </Grid>

    </Box>;
};

export default WrapperEmissionCalculator;

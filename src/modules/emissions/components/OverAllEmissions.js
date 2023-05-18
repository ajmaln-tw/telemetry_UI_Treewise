import { Box, Grid } from "@mui/material";
import React from "react";
import EmissionStatsCard from "./EmissionStatsCard";
import CustomHeader from "../../common/components/CustomHeader";

const OverAllEmissions = (props) => {
    const { overAllEmissions: { co2 = 24, sox = 150, nox = 48 } = {} } = props;
    return <Box sx={{ width: "99%", px: 0.5, backgroundColor: "#F5F5F5", minHeight: "280px", borderRadius: "12px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "space-between" }}>
        <Box sx={{ alignSelf: "end", my: 2, height: "12px" }}>
        </Box>
        <Grid sx={{
            py: 1,
            display: "flex", justifyContent: "space-around", alignItems: "center"
        }}>
            <EmissionStatsCard color={"#249D57"} value={co2} title="CO2" />
            <EmissionStatsCard color={"#3498DB"} value={sox} title="SOx" />
            <EmissionStatsCard color={"#F6C709"} value={nox} title="NOx" />
        </Grid >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CustomHeader sx={{ fontSize: "16px" }} content="Overall Emissions" />
        </Box>
    </Box>;
};

export default OverAllEmissions;

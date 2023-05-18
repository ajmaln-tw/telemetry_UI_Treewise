import { Box, Typography } from "@mui/material";
import React from "react";
import { AiFillWarning } from "react-icons/ai";

export const SummaryCard = (props) => {
    const { routeEmission: { emissionSummary: { arrivalLocation = 0, departureLocation = "10 hr 33 mins" } = {} } = {} } = props;
    return <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-evenly" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "90%" }}>
            <Box>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>  Departure location -</Typography>
                <Typography sx={{ fontSize: "14px", fontWeight: 600 }}>  Arrival location -</Typography>
            </Box>
            <Box>
                <Typography sx={{ color: "green.dark", fontSize: "14px", fontWeight: 600 }}>  {departureLocation} </Typography>
                <Typography sx={{ color: "grey.main", fontSize: "12px" }}>  {arrivalLocation} nm </Typography>
            </Box>
        </Box>
        <Typography sx={{ fontSize: "10px", color: "orange.main", my: 1 }}>
            <AiFillWarning sx={{ fontSize: "11px", color: "orange.main" }} /> These are approximate values only, not the exact values
        </Typography>

    </Box>;
};

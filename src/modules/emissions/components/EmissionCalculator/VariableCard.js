import { Box, Typography } from "@mui/material";
import React, { useMemo } from "react";

const VariableCard = (props) => {
    const { routeEmission: { emissionVariableValues: { co2 = 1000, fuelConsumption = 880, sox = 982, nox = 987 } = {} } = {} } = props;
    const cardStyle = useMemo(() => (
        {
            sx: {
                minWidth: "75px", maxWidth: "200px", maxHeight: "270px", display: "flex",
                flexDirection: "column", alignItems: "Center", py: 1,
                borderRadius: "10px"
            }
        }), []);
    const variablesStyle = useMemo(() => (
        {
            sx: {
                fontSize: "14px", fontWeight: 700, color: "#fff"
            }
        }), []);
    const unitsStyle = useMemo(() => (
        {
            sx: {
                fontSize: "10px", color: "#fff"
            }
        }), []);
    return <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Box sx={{ backgroundColor: "#249D57", ...cardStyle.sx }}>
            <Typography {...variablesStyle}>{co2} </Typography>
            <Typography {...unitsStyle}>mt/kWh </Typography>
            <Typography sx={{ ...variablesStyle.sx, fontSize: "12px" }}>CO<sup>2</sup> </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#E4B10F", ...cardStyle.sx }}>
            <Typography {...variablesStyle}>{fuelConsumption} </Typography>
            <Typography {...unitsStyle}>mt/kWh </Typography>
            <Typography sx={{ ...variablesStyle.sx, fontSize: "12px" }}>Fuel Cons. </Typography>
        </Box>,
        <Box sx={{ backgroundColor: "#3498DB", ...cardStyle.sx }}>
            <Typography {...variablesStyle}>{sox} </Typography>
            <Typography {...unitsStyle}>mt/kWh </Typography>
            <Typography sx={{ ...variablesStyle.sx, fontSize: "12px" }}>SOx </Typography>
        </Box>
        <Box sx={{ backgroundColor: "#D46565", ...cardStyle.sx }}>
            <Typography {...variablesStyle}>{nox} </Typography>
            <Typography {...unitsStyle}>mt/kWh </Typography>
            <Typography sx={{ ...variablesStyle.sx, fontSize: "12px" }}>NOx </Typography>
        </Box>

    </Box >;
};

export default VariableCard;

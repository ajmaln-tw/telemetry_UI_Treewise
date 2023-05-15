import { Box, Typography } from "@mui/material";
import React from "react";
import FactoryIcon from "@mui/icons-material/Factory";

const EmissionStatsCard = (props) => {
    const { color = "#249D57", value = 25, icon = "", title = "" } = props;
    return <Box sx={{
        borderRadius: "12px",
        boxShadow: "0px 0px 15px 3px rgba(0, 0, 0, 0.4)",
        width: { xs: "80px", sm: "120px", md: "130px", lg: "150px", xl: "180px" },
        height: { xs: "140px", sm: "200px", md: "200px" },
        display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", backgroundColor: color
    }}>
        <Box><Typography sx={{ display: "inline-flex", color: "white.main", fontSize: { xs: "10px", sm: "14px", md: "28px" }, fontWeight: 600 }}> {title}</Typography> <Typography sx={{ color: "white.main", display: "inline-flex" }}>(t/kWh)</Typography></Box>
        <Box>  {icon ? icon() : <FactoryIcon sx={{ color: "white.main", transform: "scale(1.8)", my: 2 }} />} </Box>
        <Typography sx={{ color: "white.main", fontSize: { xs: "10px", sm: "14px", md: "28px" }, fontWeight: 800 }}> {value}</Typography>
    </Box >;
};

export default EmissionStatsCard;

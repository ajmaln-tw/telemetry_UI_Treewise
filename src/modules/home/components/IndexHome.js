import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
const IndexHome = () => {
    const location = useLocation();
    const { firstName = "", lastName = "" } = useSelector(state => state.common.user);
    if (location.pathname === "/") {
        return <Box sx={{ display: "flex", justifyContent: "center", my: 3, flexDirection: "column", alignItems: "center" }}>
            <Typography variant="h3"> Hi, {`${firstName} ${lastName}`} </Typography>
            <Typography variant="h4"> Welcome Back! </Typography>
        </Box>;
    }

};

export default IndexHome;

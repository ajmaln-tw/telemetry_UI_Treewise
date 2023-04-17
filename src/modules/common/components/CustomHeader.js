import { Typography } from "@mui/material";
import React from "react";

const CustomHeader = ({ content = "", sx = {} }) => {
    return (
        <Typography sx={{ pl: 2, pb: 0.8, display: "block", fontSize: "14px", fontWeight: 700, ...sx }}>{content}</Typography>
    );
};

export default CustomHeader;

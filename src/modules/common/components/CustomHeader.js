import { Typography } from "@mui/material";
import React from "react";

const CustomHeader = ({ content = "" }) => {
    return (
        <Typography sx={{ display: "inline", fontSize: "14px", fontWeight: 700 }}>{content}</Typography>
    );
};

export default CustomHeader;

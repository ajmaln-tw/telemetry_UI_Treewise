import { Typography } from "@mui/material";
import React from "react";

const CustomHeader = ({ content = "" }) => {
    return (
        <Typography sx={{ pl: 2, display: "block", fontSize: "14px", fontWeight: 700 }}>{content}</Typography>
    );
};

export default CustomHeader;

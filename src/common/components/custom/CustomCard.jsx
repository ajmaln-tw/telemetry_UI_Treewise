import { Box } from "@mui/material";
import React from "react";
import color from "../../themes/palette.json";

const style = {
    borderRadius: "20px",
    p: 1, my: 1, mx: 0.4,
    boxShadow: `${color.palette.grey.light} 1px 2px 3px 1px`

};
const CustomCard = ({ children }) => {

    return (
        <Box sx={style}>{children}</Box>
    );
};

export default CustomCard;

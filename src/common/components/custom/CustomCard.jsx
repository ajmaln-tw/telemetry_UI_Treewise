import { Box } from "@mui/material";
import React from "react";
import color from "../../themes/palette.json";

const style = {
    borderRadius: "20px",
    p: 1, m: 0.2,
    height: 100,
    width: 75,
    boxShadow: `${color.palette.grey.light} 2px 3px 3px`,

};
const CustomCard = ({ children }) => {

    return (
        <Box sx={style}>{children}</Box>
    );
};

export default CustomCard;

import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import paletteColor from "../../../common/themes/palette.json";
import { ScaleLoader } from "react-spinners";

const FetchLoader = ({ bgColor = paletteColor.palette.primary.light }) => {
    return (
        <Box sx={{
            backgroundColor: bgColor,
            display: "flex", justifyContent: "center", alignItems: "center",
            borderRadius: "10px", flexDirection: "column",
            px: 1.3, py: 1
        }}>
            <Typography> Fetching Data...</Typography> <ScaleLoader color="#ffff" speedMultiplier={1.5} />
        </Box>

    );
};

export default FetchLoader;

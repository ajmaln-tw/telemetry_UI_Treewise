import React from "react";
import { Box } from "@mui/system";
import { CircularProgress, Typography } from "@mui/material";
import paletteColor from "../../../common/themes/palette.json";

const FetchLoader = ({ bgColor = paletteColor.palette.primary.light }) => {
    return (
        <Box sx={{
            backgroundColor: bgColor,
            display: "flex", justifyContent: "center",
            borderRadius: "10px", flexDirection: "column",
            px: 1.3, py: 1
        }}>
            <Typography> Fetching Data...</Typography> <CircularProgress color="white" size={13} sx={{ alignSelf: "center" }} />
        </Box>

    );
};

export default FetchLoader;

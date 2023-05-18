import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import paletteColor from "../../../common/themes/palette.json";
import { ScaleLoader } from "react-spinners";

const FetchLoader = ({ bgColor = paletteColor.palette.primary.main }) => {
    return (
        <Box sx={{
            backgroundColor: bgColor,
            display: "flex", justifyContent: "center", alignItems: "center",
            borderRadius: "10px", flexDirection: "column",
            px: 1.3, py: 1
        }}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px" }}> Fetching Data...</Typography>
            <ScaleLoader color="#ffff" speedMultiplier={1.9} />
        </Box>

    );
};

export default FetchLoader;

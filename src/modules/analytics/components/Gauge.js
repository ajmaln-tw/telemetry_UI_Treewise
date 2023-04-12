import React from "react";
import { Box, Typography } from "@mui/material";
import colors from "../../../common/themes/palette.json";
import { Grid } from "@mui/material";

const green = colors.palette.green.light;
const red = colors.palette.red.main;
const grey = colors.palette.grey.light;
const Gauge = ({ title = "", actualVal = 0, high = 0, low = 0, color = green }) => {
    const angle = (actualVal / 100) * 360;
    const circleColor = Number(actualVal) > 10 ? green : red;
    return (
        <Grid sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <Typography
                variant="p"
                fontWeight="bold"
                sx={{ color: color }}
            >
                {actualVal}
            </Typography>
            <Box
                sx={{
                    background: `radial-gradient(${grey} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${color} ${angle}deg 360deg),
                ${circleColor}`,
                    borderRadius: "50%",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}

            >
                <Typography
                    variant="p"
                    fontWeight="bold"
                    sx={{ color: Number(actualVal) > 10 ? green : red }}
                >
                    {title}
                </Typography>
            </Box>
            <Typography
                variant="p"
                fontWeight="bold"
                sx={{ color: Number(actualVal) > 10 ? green : red }}
            >
                {low}
            </Typography>
            <Typography
                variant="p"
                fontWeight="bold"
                sx={{ color: Number(actualVal) > 10 ? green : red }}
            >
                {high}
            </Typography>
        </Grid>
    );
};

export default Gauge;

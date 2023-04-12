import React from "react";
import { Box, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import color from "../../../common/themes/palette.json";
const CustomMeter = ({ totalVessels = "0.70", sailing = 0, onShore = 0 }) => {
    const onShoreAngle = (onShore / totalVessels) * 360;
    const sailingAngle = (sailing / totalVessels) * 360;
    const sailingPer = (sailing / totalVessels) * 100;
    const circleColor = color.palette.red.main;
    const secColor = color.palette.white.main;
    const grey = color.palette.grey.light;
    const progressColor = color.palette.green.main;

    return (
        <Grid sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <Box sx={{
                background: `radial-gradient(${secColor} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${sailingAngle}deg, ${grey} ${sailingAngle}deg 360deg),
                ${progressColor}`,
                borderRadius: "50%",
                width: "100px",
                // height: `${size}px`,
                height: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                p: "20px"
            }}>
                <Box
                    sx={{
                        background: `radial-gradient(${secColor} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${onShoreAngle}deg, ${grey} ${onShoreAngle}deg 360deg),
                ${circleColor}`,
                        borderRadius: "50%",
                        width: "60px",
                        // height: `${size}px`,
                        height: "60px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column"
                    }}

                >
                    <Typography
                        variant="p"
                        fontWeight="bold"
                        sx={{ color: "green.main", fontSize: "10px", display: "inline" }}
                    >
                        {`${sailingPer} %`}
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{ color: "green.main", display: "inline", fontSize: "11px" }}
                    >
                        Sailing
                    </Typography>
                </Box>
            </Box>
        </Grid>
    );
};

export default CustomMeter;

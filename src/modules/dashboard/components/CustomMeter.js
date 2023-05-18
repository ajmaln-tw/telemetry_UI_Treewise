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
                width: { xs: "70px", sm: "90px" },
                // height: `${size}px`,
                height: { xs: "70px", sm: "90px" },
                display: "flex",
                justifyContent: "center",
                alignItems: "center"


            }}>
                <Box
                    sx={{
                        background: `radial-gradient(${secColor} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${onShoreAngle}deg, ${grey} ${onShoreAngle}deg 360deg),
                ${circleColor}`,
                        borderRadius: "50%",
                        width: { xs: "40px", sm: "60px" },
                        // height: `${size}px`,
                        height: { xs: "40px", sm: "60px" },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        m: 1
                    }}

                >
                    <Typography
                        variant="p"
                        fontWeight="bold"
                        sx={{ color: "green.main", fontSize: { sm: "11px", xs: "7px" }, display: "inline" }}
                    >
                        {`${sailingPer} %`}
                    </Typography>
                    <Typography
                        variant="p"
                        sx={{ color: "green.main", display: "inline", fontSize: { sm: "11px", xs: "7px" } }}
                    >
                        Sailing
                    </Typography>
                </Box>
            </Box>
        </Grid >
    );
};

export default CustomMeter;

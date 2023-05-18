import React from "react";
import { Box, Typography } from "@mui/material";
import GaugeChart from "react-gauge-chart";
import colors from "../../../common/themes/palette.json";
import { Grid } from "@mui/material";

const green = colors.palette.green.light;
// const red = colors.palette.red.main;
// const grey = colors.palette.grey.light;
// const white = colors.palette.white.main;
// const yellow = colors.palette.yellow.light;
const style = {
    borderRadius: "10px",
    p: 1, m: 1,
    boxShadow: `${colors.palette.grey.light} 1px 2px 3px 1px`

};
const Gauge = ({ title = "", actualValue = 10, high = 40, low = 0, color = green }) => {
    const percent = actualValue / 100;

    return (
        <Grid sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "150px",
            height: "150px",
            ...style
        }}>
            <Typography sx={{ color: color, fontSize: "10px", fontWeight: 600 }}> {low} </Typography>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "80px",
                height: "80px"
            }}>
                <GaugeChart
                    id={title}
                    hideText={true}
                    nrOfLevels={1}
                    arcPadding={0.0}
                    percent={percent}
                    colors={[color]}
                    needleColor={color}
                    arcsLength={[1]}
                // formatTextValue={(value) => value}

                />
                <Typography sx={{ color: "#000", fontSize: "11px", fontWeight: 700 }}> {actualValue} </Typography>
                <Typography sx={{ color: color, fontSize: "11px", fontWeight: 700 }}> {title} </Typography>
            </Box>
            <Typography sx={{ color: color, fontSize: "10px", fontWeight: 600 }}> {high} </Typography>
        </Grid >
    );
};

export default Gauge;

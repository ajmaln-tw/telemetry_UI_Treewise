import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import CustomCharts from "../../../common/components/custom/CustomCharts";
import VesselsInfo from "./VesselsInfo";
import { vesselsInfo } from "../constants";
import StatsCard from "./StatsCard";


const chartStyle = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: 700, minHeight: 300, minWidth: "300px"
};
const lineChartProps = {
    position: "bottom", axis: "y", filter: true, gradient: true, fillColor: "#57C2E9", legend: false, dataLabels: false
};
const chartStyle2 = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: "auto", minHeight: 500, width: "100%"
};
let data = {
    labels: [
        "SFOC",
        "Power (kW)",
        "RPM",
        "Torque (kNm)",
        "SOG"
    ],
    datasets: [
        {
            data: [
                22,
                5,
                1,
                2,
                35
            ],
            backgroundColor: ["#DC796E", "#E4B10F", "#96AD13", "#256AF5", "#CB3EFC"]
        }
    ]
};

const Dashboard = () => {
    const theme = useTheme();
    const smScreen = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 0.1, sm: 0.3 }}>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={4} sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", py: 1, flexDirection: "column" }}>
                    <StatsCard />
                    <Box>
                        <VesselsInfo data={vesselsInfo} />
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8} sx={{ display: "flex", justifyContent: "flex-start", py: 1, flexDirection: "column" }}>
                    <Box sx={{ width: "99%" }}>
                        <CustomCard additionalStyle={{ width: "100%" }}>
                            <CustomCharts type="Line" sx={chartStyle} {...lineChartProps} title="Fuel Consumption" />
                        </CustomCard>
                    </Box>
                    <Grid container rowSpacing={1} sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid item xm={12} sm={12} md={12} lg={6} xl={6}>

                        </Grid>
                        <Grid item xm={12} sm={12} md={12} lg={6} xl={6} sx={{ display: smScreen ? "display" : "block" }}>
                            <CustomCharts type="Bar" gradient={true} dataList={data} sx={chartStyle2} legend={false} axis="y" title="Alert Frequency" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Dashboard;

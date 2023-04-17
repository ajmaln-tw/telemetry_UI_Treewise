import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import CustomMeter from "./CustomMeter";
import CustomCharts from "../../../common/components/custom/CustomCharts";
import CustomHeader from "../../common/components/CustomHeader";
import VesselsInfo from "./VesselsInfo";
import { vesselsInfo } from "../constants";
import CustomMap from "../../../common/components/map/CustomMap";

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
                    <Box>
                        <CustomHeader content="Live Fleet" />
                        <CustomCard additionalStyle={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                            <Box sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-around", py: 0.5 }}>
                                <CustomMeter totalVessels={20} sailing={9} onShore={11} />
                                <Box mx={0.3} sx={{ color: "grey.main" }}>
                                    <Typography sx={{ display: "block" }}>Total Vessels</Typography>
                                    <Typography sx={{ display: "block", fontSize: "14px", fontWeight: 800 }}>20</Typography>
                                </Box>
                                <Box mx={0.3} sx={{ color: "green.main" }}>
                                    <Typography sx={{ display: "block" }}>Sailing</Typography>
                                    <Typography sx={{ display: "block", fontSize: "14px", fontWeight: 800 }}>12</Typography>
                                </Box>
                                <Box mx={0.3} sx={{ color: "red.main" }}>
                                    <Typography sx={{ display: "block" }}>On Shore</Typography>
                                    <Typography sx={{ display: "block", fontSize: "14px", fontWeight: 800 }}>7</Typography>
                                </Box>
                            </Box>

                        </CustomCard>
                    </Box>
                    <Box>
                        <CustomHeader content="Vessels" />
                        <CustomCard className="mainTreemetry" additionalStyle={{ overflowY: "scroll", maxHeight: "75vh", width: "300px" }}>
                            <VesselsInfo data={vesselsInfo} />
                        </CustomCard>
                    </Box>

                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8} sx={{ display: "flex", justifyContent: "flex-start", py: 1, flexDirection: "column" }}>
                    <Box sx={{ width: "99%" }}>
                        <CustomHeader content="Fuel Consumption" />
                        <CustomCard additionalStyle={{ width: "100%" }}>
                            <CustomCharts type="Line" sx={chartStyle} {...lineChartProps} />
                        </CustomCard>
                    </Box>
                    <Grid container rowSpacing={1} sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid item xm={12} sm={12} md={12} lg={6} xl={6}>
                            {smScreen && <CustomMap title="Last Journey" coordinates={[51.505, -0.09]} />}
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

import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import CustomMeter from "./CustomMeter";
import CustomCharts from "../../../common/components/custom/CustomCharts";
import CustomHeader from "../../common/components/CustomHeader";
import VesselsInfo from "./VesselsInfo";
import { vesselsInfo } from "../constants";
import CustomMap from "../../../common/components/map/CustomMap";

const chartStyle = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: 700, minHeight: 440, minWidth: "300px"
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
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={3} sx={{ display: "flex", justifyContent: "center", minWidth: "350px", py: 1, px: 0.5 }}>
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
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={9} sx={{ minWidth: "350px", display: "flex", justifyContent: "center", py: 1, px: 0.5 }}>
                    <Box sx={{ width: "99%" }}>
                        <CustomHeader content="Fuel Consumption" />
                        <CustomCard additionalStyle={{ width: "100%" }}>
                            <CustomCharts type="Line" sx={chartStyle} {...lineChartProps} />
                        </CustomCard>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={3} sx={{ display: "flex", justifyContent: "center", minWidth: "350px", py: 1, px: 0.5 }}>
                    <Box>
                        <CustomHeader content="Vessels" />
                        <CustomCard additionalStyle={{ overflowY: "scroll", maxHeight: "55vh", width: "300px" }}>
                            <VesselsInfo data={vesselsInfo} />
                        </CustomCard>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={9} sx={{ minWidth: "350px", display: "flex", justifyContent: "center", py: 1, px: 0.5 }}>
                    <Grid container rowSpacing={1}>
                        <Grid item sx={12} sm={12} md={6} lg={6} xl={6}>
                            <CustomCard additionalStyle={{ p: 0, height: "55vh" }}>
                                <CustomMap title="Last Journey" coordinates={[51.505, -0.09]} />
                            </CustomCard>
                        </Grid>
                        <Grid item sx={12} sm={12} md={6} lg={6} xl={6}>
                            <CustomCard additionalStyle={{ height: "55vh" }}>
                                <CustomCharts type="Bar" gradient={true} dataList={data} sx={chartStyle2} legend={false} axis="y" title="Alert Frequency" />
                            </CustomCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Dashboard;

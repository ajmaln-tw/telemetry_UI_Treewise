import { Box, Grid } from "@mui/material";
import React from "react";
import Gauge from "./Gauge";
import { GAUGE_STATUS } from "../constants";
import CustomCard from "../../../common/components/custom/CustomCard";
import CustomCharts from "../../../common/components/custom/CustomCharts";
import CustomHeader from "../../common/components/CustomHeader";
import CustomMap from "../../../common/components/map/CustomMap";


const chartStyle2 = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: "auto", minHeight: 500, width: "100%"
};
const lineChartProps = {
    position: "bottom", axis: "y", filter: true, gradient: true, fillColor: "#57C2E9", legend: false, dataLabels: false
};
const chartStyle = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: 700, minHeight: 440, minWidth: "300px"
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

const dataList = {
    series: [45, 11, 33, 55, 66],
    options: {
        labels: ["A", "B", "C", "D", "E"]
    }
};


const Analytics = () => {


    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8} sx={{ display: "flex", flexDirection: "column" }}>
                    <Grid pt={1}>
                        <CustomHeader content={"Vessel Name"} />
                    </Grid>
                    <Grid className="mainTreemetry" sx={{ overflowX: "scroll", height: "45vh", display: "flex", justifyContent: "center", flexFlow: "column wrap", gap: "2px" }}>
                        {GAUGE_STATUS.map((ele, i) =>
                            <Gauge
                                key={`${ele.title}${i}`}
                                title={ele.title}
                                actualValue={ele.actualValue}
                                low={ele.low}
                                high={ele.high}
                                color={ele.color}
                            />)}
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={4} order={{ xs: 2, sm: 2 }} sx={{ height: "45vh", p: 2, display: "flex", justifyContent: "center" }}>
                    <CustomCard additionalStyle={{ width: "100%" }}>
                        <CustomCharts
                            type="Bar"
                            gradient={true}
                            dataList={data}
                            sx={chartStyle2}
                            legend={false}
                            axis="y"
                            title="Alert Frequency" />
                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8} p={2} order={{ xs: 3, sm: 3 }} sx={{ height: "50vh", display: "flex", justifyContent: "space-between" }}>
                    <Grid container p={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} >
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={8} >
                            <CustomCard additionalStyle={{ p: 1, height: "49vh" }}>
                                <CustomCharts type="Line" sx={chartStyle} {...lineChartProps} />
                            </CustomCard>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={4} >
                            <CustomCard additionalStyle={{ p: 0, height: "49vh", width: "20rem" }}>
                                <CustomMap title="Last Journey" coordinates={[51.505, -0.09]} />
                            </CustomCard>
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={4} p={2} pr={2} order={{ xs: 4, sm: 4 }} sx={{ height: "50vh", py: 1, px: 0.5 }}>
                    <Grid container p={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} pl={1}>
                            <CustomCard additionalStyle={{}}>
                                <CustomCharts
                                    dataList={dataList}
                                    type="Doughnut"
                                    sx={chartStyle}
                                    title="Frequency Ratio" />
                            </CustomCard>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Analytics;

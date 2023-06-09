import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import CustomCharts from "../../../common/components/custom/CustomCharts";
import VesselsInfo from "./VesselsInfo";
import { STATE_REDUCER_KEY, vesselsInfo } from "../constants";
import StatsCard from "./StatsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashBoardData } from "../actions";
import LoadingCustomOverlay from "../../common/components/LoadingOverlay";
import { Emissions } from "./Emissions";
import { DASHBOARD_LINE_GRAPH } from "../constants";


const chartStyle = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: 600, minHeight: 300, minWidth: "300px"
};
const doubleLineChartProps = {
    xAxesLabel: "Time", yAxesLabel: "OverAll Emissions (Avg Value )", fillColor1: "#E16F24", fillColor2: "#0784D6",
    position: "bottom", axis: "y", filter: true, gradient: true, fillColor: "#57C2E9", legend: false, dataLabels: false
};
const chartStyle2 = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: "auto", minHeight: 500, width: "100%"
};
const dataList = {
    dataSetOne: DASHBOARD_LINE_GRAPH.predictedEmissions,
    dataSetTwo: DASHBOARD_LINE_GRAPH.actualEmissions
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
    const dashboardSpinner = useSelector(state => state[STATE_REDUCER_KEY]).dashboard.requestInProgress;
    const dispatch = useDispatch();
    let countdown = 30 * 60 * 1000;
    useEffect(() => {
        dispatch(fetchDashBoardData());
        const intervalCall = setInterval(() => {
            dispatch(fetchDashBoardData());
        }, countdown);
        return () => {
            // clean up
            clearInterval(intervalCall);
        };
    }, []);
    return (
        <LoadingCustomOverlay spinnerProps="fetch" active={dashboardSpinner}>
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
                            <CustomCard additionalStyle={{ width: "100%", mb: 4 }}>
                                <CustomCharts type="DoubleLine" sx={chartStyle} {...doubleLineChartProps} title="Fuel Consumption" dataList={dataList} />
                            </CustomCard>
                        </Box>
                        <Grid container rowSpacing={1} sx={{ display: "flex", justifyContent: "center" }}>
                            <Grid item xm={12} sm={12} md={12} lg={6} xl={6}>
                                <Emissions />
                            </Grid>
                            <Grid item xm={12} sm={12} md={12} lg={6} xl={6} sx={{ pt: 2 }}>
                                <CustomCharts type="Bar" gradient={true} dataList={data} sx={chartStyle2} legend={false} axis="y" title="Alert Frequency" />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >
        </LoadingCustomOverlay>
    );
};

export default Dashboard;

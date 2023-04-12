import { Box, Grid } from "@mui/material";
import React from "react";
import Gauge from "./Gauge";
import { GAUGE_STATUS } from "../constants";
import CustomCard from "../../../common/components/custom/CustomCard";
import CustomCharts from "../../../common/components/custom/CustomCharts";
import CustomHeader from "../../common/components/CustomHeader";

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

const Analytics = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={8} sx={{ height: "45vh", p: 2, display: "flex", justifyContent: "center", flexFlow: "column wrap", gap: "2px" }}>
                    <CustomHeader content={"Vessel Name"} />
                    {GAUGE_STATUS.map(ele =>
                        <Gauge
                            key={ele.title}
                            title={ele.title}
                            actualValue={ele.actualValue}
                            low={ele.low}
                            high={ele.high}
                            color={ele.color}
                        />)}
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
                <Grid item xs={12} sm={12} md={5} lg={4} xl={8} p={2} order={{ xs: 3, sm: 3 }} sx={{ height: "50vh", backgroundColor: "red.light", display: "flex", justifyContent: "space-between" }}>
                    <Grid container p={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }} >
                        <Grid item xs={12} sm={12} md={12} lg={8} xl={8} sx={{ backgroundColor: "grey.main", justifyContent: "center" }}>

                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={4} xl={4} sx={{ backgroundColor: "#76b5c5", justifyContent: "center" }}>

                        </Grid>
                    </Grid>

                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={4} order={{ xs: 4, sm: 4 }} sx={{ height: "50vh", p: 2, backgroundColor: "green.main", display: "flex", justifyContent: "center", py: 1, px: 0.5 }}>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Analytics;

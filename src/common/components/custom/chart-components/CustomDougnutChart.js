import React from "react";
import Chart from "react-apexcharts";
import CustomHeader from "../../../../modules/common/components/CustomHeader";
import { Box, Grid } from "@mui/material";

const DoughnutChart = (props) => {
    const { dataList: { series, options } = {}, chartStyle = {}, title = "" } = props;

    const plotOptions = {
        pie: {
            donut: {
                labels: {
                    show: true,
                    total: {
                        show: true,
                        total: {
                            show: true,
                            fontSize: 11,
                            color: "red.main"
                        }
                    }
                }
            }
        }
    };
    let OPTIONS = {
        ...options,
        legend: {
            show: true,
            position: "bottom",
            fontSize: "12px"
        }
    };
    return (
        <Grid style={chartStyle}>
            <CustomHeader content={title} />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Chart
                    series={series}
                    options={OPTIONS}
                    plotOptions={plotOptions}
                    dataLabels={{
                        enabled: true,
                        style: {
                            fontSize: "11px",
                            fontFamily: "Roboto, Arial, sans-serif",
                            fontWeight: "bold",
                            colors: undefined
                        }
                    }}
                    legend={
                        { position: "bottom" }
                    }
                    tooltip={{
                        style: {
                            fontSize: "10px"
                        }
                    }}
                    type="donut"
                    width="300"
                    height="300" />
            </Box>
        </Grid >
    );
};

export default DoughnutChart;


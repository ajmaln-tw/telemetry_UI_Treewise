import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";
import { Grid } from "@mui/material";
import CustomHeader from "../../../../modules/common/components/CustomHeader";
import MUISelect from "../CustomMUISelect";
import { getGradient } from "./config";
import _ from "lodash";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const CustomDoubleLine = (props) => {
    const { dataList: { dataSetOne, dataSetTwo } = {}, chartStyle = {}, title = "", legend = true, gradient = false, filter = false,
        fillColor1 = "#249D57", fillColor2 = "#B0054C", dataLabels = false, xAxesLabel = "X", yAxesLabel = "Y" } = props;
    const [select, setSelect] = useState("Last Week");
    const [newData, setNewData] = useState([61, 60, 70, 72, 66, 45, 43, 55, 70, 75, 80, 70]);
    const [newData2, setNewData2] = useState([65, 55, 77, 78, 67, 59, 45, 60, 75, 80, 85, 75]);
    let dataSet = [{
        data: dataSetOne || newData,
        fill: gradient ? true : false,
        borderColor: fillColor1,
        tension: 0,
        borderWidth: 1,
        backgroundColor: gradient ? function (context) {
            const chart = context.chart;
            const { ctx } = chart;
            return getGradient(ctx, fillColor1);
        } : fillColor1
    },
    {
        data: dataSetTwo || newData2,
        fill: gradient ? true : false,
        borderColor: fillColor2,
        tension: 0,
        borderWidth: 1,
        backgroundColor: gradient ? function (context) {
            const chart = context.chart;
            const { ctx } = chart;
            return getGradient(ctx, fillColor2);
        } : fillColor2
    }];
    let DATA = { datasets: dataSet, labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] };

    const selectList = ["Today", "Last Week", "Last Month", "Last Year"];

    const selectedItem = (value) => {
        setSelect(value);
        if (value === "Today") {
            setNewData([1, 2, 4, 6, 7, 7, 6, 5, 4, 3, 6, 8]);
            setNewData2([2, 3, 5, 6, 8, 9, 7, 6, 3, 1, 7, 10]);
        } else if (value === "Last Week") {
            setNewData([61, 60, 70, 72, 66, 45, 43, 55, 70, 75, 80, 70]);
            setNewData2([62, 61, 71, 72, 67, 56, 45, 57, 77, 78, 82, 72]);
        } else if (value === "Last Month") {
            setNewData([80, 100, 140, 134, 112, 80, 72, 95, 110, 140, 160, 120]);
            setNewData2([81, 101, 145, 136, 118, 90, 80, 100, 120, 160, 180, 140]);
        } else if (value === "Last Year") {
            setNewData([2404, 2040, 2800, 2808, 2064, 1800, 1702, 2200, 2080, 3000, 3200, 2800]);
            setNewData2([2408, 2048, 2860, 2809, 2070, 1810, 1712, 2210, 2085, 3010, 3210, 2810]);
        }
    };

    const options = {
        plugins: {
            zoom: {
                zoom: {
                    wheel: {
                        enabled: true
                    },
                    pinch: {
                        enabled: true
                    },
                    animation: {
                        duration: 1000,
                        easing: "easeOutCubic"
                    },
                    mode: "xy"
                }
            }
        },
        scales: {
            y: {
                title: {
                    display: true,
                    text: yAxesLabel
                }
            },
            x: {
                title: {
                    display: true,
                    text: xAxesLabel
                }
            }
        }
    };
    let OPTIONS = _.cloneDeep(options);
    _.set(OPTIONS, "plugins.title", title);
    _.set(OPTIONS, "plugins.legend.display", legend);
    _.set(OPTIONS, "plugins.datalabels.display", dataLabels);
    //options.scales[scaleId].title

    return (
        <Grid sx={{ p: 2, pb: 0, m: 1 }}>
            {filter && <Grid sx={{ display: "flex", justifyContent: "space-between" }}>
                <Grid >
                    <CustomHeader content={title} />
                </Grid>
                <Grid >
                    <MUISelect value={select} dataList={selectList} onItemSelect={selectedItem} />
                </Grid>
            </Grid>}
            <div style={chartStyle}>
                <Line options={OPTIONS} data={DATA} />
            </div >
        </Grid>
    );
};

export default CustomDoubleLine;

import React from "react";
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart as ChartJS, BarElement, Title, Tooltip } from "chart.js/auto";
import { barConfig } from "./config";
import _ from "lodash";
import CustomHeader from "../../../../modules/common/components/CustomHeader";


ChartJS.register(
    BarElement,
    ChartDataLabels,
    Title,
    Tooltip
);

const BarChart = (props) => {
    const { dataList = {}, chartStyle = {}, axis, legend, title = "", position } = props;

    const options = {
        ...barConfig,
        indexAxis: axis && axis === "x" ? "y" : "x"
    };

    let OPTIONS = _.cloneDeep(options);
    _.set(OPTIONS, "plugins.legend.display", legend);
    _.set(OPTIONS, "plugins.legend.position", position);
    axis && _.set(OPTIONS, `scales.${axis}.type`, "logarithmic");


    return (
        < >
            <CustomHeader content={title} />
            <div style={chartStyle}>
                <Bar options={OPTIONS} data={dataList} style={{ width: "100%" }} />
            </div >
        </>
    );
};

export default BarChart;


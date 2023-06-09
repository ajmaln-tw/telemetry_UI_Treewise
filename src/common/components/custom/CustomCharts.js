import { PieChart, BarChart, LineChart, DoughnutChart, StackedChart, DoubleLine } from "./chart-components";

const CustomCharts = (props) => {
    const { type, ...rest } = props;

    switch (type) {
        case "Pie":
            return <PieChart {...rest} />;
        case "Line":
            return <LineChart {...rest} />;
        case "Bar":
            return <BarChart {...rest} />;
        case "Doughnut":
            return <DoughnutChart {...rest} />;
        case "Stacked":
            return <StackedChart {...rest} />;
        case "DoubleLine":
            return <DoubleLine {...rest} />;
        default:
            return null;
    }
};

export default CustomCharts;

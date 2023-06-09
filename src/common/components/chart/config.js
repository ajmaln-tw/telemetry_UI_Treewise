
const commonConfig = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "bottom",
            display: true,
            labels: {
                font: {
                    size: 12
                }
            }
        },
        title: {
            display: false
        },
        tooltip: {
            bodyFont: {
                size: 10
            },
            titleFont: {
                size: 18
            }
        },
        datalabels: {
            anchor: "end",
            align: "end",
            font: {
                weight: "bold"
            }
        }
    }
};

export const barConfig = {
    ...commonConfig,
    indexAxis: "x",
    elements: {
        bar: {
            borderWidth: 2
        }
    },
    datasets: {
        bar: {
            maxBarThickness: 50
        }
    }

};

export const lineConfig = {
    ...commonConfig,
    indexAxis: "x",
    elements: {
        bar: {
            borderWidth: 2
        }
    },
    datasets: {
        line: {
            fill: true,
            tension: 0.5
        }
    }
};

export const pieConfig = {
    ...commonConfig
};

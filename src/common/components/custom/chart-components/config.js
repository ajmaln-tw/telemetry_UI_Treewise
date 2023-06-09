const commonConfig = {
    responsive: true,
    maintainAspectRatio: true,
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
            display: true,
            text: ""
        },
        tooltip: {
            bodyFont: {
                size: 11
            },
            titleFont: {
                size: 12
            }
        },
        datalabels: {
            display: true,
            anchor: "end",
            align: "end",
            offset: 1,
            font: {
                weight: "bold"
            }
        }
    }
};

function getRandomColor() {
    let letters = "0123456789ABCDEF".split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function barColors(a) {
    let pool = [];
    for (let i = 0; i < a; i++) {
        pool.push(getRandomColor());
    }
    return pool;
}

export const barConfig = {
    ...commonConfig,
    elements: {
        bar: {
            borderWidth: 2,
            backgroundColor: barColors(6)
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
    bezierCurve: false,
    datasets: {
        line: {
            fill: true,
            borderColor: "#86938E"
        }
    }
};

export const pieConfig = {
    ...commonConfig
};

export const doughnutConfig = {
    ...commonConfig,
    datasets: {
        doughnut: {
            backgroundColor: ["#D5573B", "#F0A202", "#202C59", "#826AED", "#FF6B6C", "#A5D8FF", "#254441", "#B9D8C2"]
        }
    }
};

export function hexToTransparent(hex = "", alpha = 0.2) {
    // Remove the '#' from the beginning of the hex code
    hex = hex.replace("#", "");
    // Convert the hex code to its RGB equivalent
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4) || 0, 16);
    const b = parseInt(hex.substring(4, 6) || 0, 16);
    // Use the rgba() function to set the alpha value to 0
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getGradient(ctx, fillColor, stroke = 300, transparent = false) {
    let gradient = "";
    gradient = ctx.createLinearGradient(0, 0, 0, stroke);
    if (transparent) {
        gradient.addColorStop(0, hexToTransparent(fillColor));
        gradient.addColorStop(1, hexToTransparent("#FFF"));
    }
    gradient.addColorStop(0, fillColor);
    gradient.addColorStop(1, "#FFF");
    return gradient;
}

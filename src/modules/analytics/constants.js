import colors from "../../common/themes/palette.json";
export const STATE_REDUCER_KEY = "analytics";
const red = colors.palette.red[100];

export const GAUGE_STATUS = [
    { title: "Central CSW Intel Temp", actualValue: 10, low: 10, high: 40, color: red },
    { title: "ME Scavenge Air Receiver Temp", actualValue: 11, low: 10, high: 40, color: colors.palette.yellow.light },
    { title: "ME Scavenge Air Receiver Press", actualValue: 12, low: 10, high: 40, color: colors.palette.yellow.dark },
    { title: "ME Fuel Index", actualValue: 14, low: 10, high: 40, color: colors.palette.blue.main },
    { title: "Wind Speed", actualValue: 15, low: 10, high: 40, color: colors.palette.pink.main },

    { title: "SOG", actualValue: 16, low: 10, high: 40, color: red },
    { title: "Calculated ME SFOC", actualValue: 31, low: 10, high: 40, color: colors.palette.yellow.dark },
    { title: "ME Scavenge Air Receiver Press", actualValue: 30, low: 10, high: 40, color: colors.palette.yellow.light },
    { title: "RPM", actualValue: 32, low: 10, high: 40, color: colors.palette.blue.main },
    { title: "Torque (kNm)", actualValue: 25, low: 10, high: 40, color: colors.palette.pink.main }
];

import colors from "../../common/themes/palette.json";
export const STATE_REDUCER_KEY = "analytics";
const red = colors.palette.red[100];

export const GAUGE_STATUS = [
    { title: "Central CSW Intel Temp", actualValue: 30, low: 10, high: 40, color: red },
    { title: "ME Scavenge Air Receiver Temp", actualValue: 30, low: 10, high: 40, color: colors.palette.yellow.main },
    { title: "ME Scavenge Air Receiver Press", actualValue: 30, low: 10, high: 40, color: colors.palette.yellow.main },
    { title: "ME Fuel Index", actualValue: 30, low: 10, high: 40, color: colors.palette.blue.main },
    { title: "Wind Speed", actualValue: 30, low: 10, high: 40, color: colors.palette.pink.main },

    { title: "SOG", actualValue: 30, low: 10, high: 40, color: red },
    { title: "Calculated ME SFOC", actualValue: 30, low: 10, high: 40, color: colors.palette.yellow.main },
    { title: "ME Scavenge Air Receiver Press", actualValue: 30, low: 10, high: 40, color: colors.palette.yellow.main },
    { title: "RPM", actualValue: 30, low: 10, high: 40, color: colors.palette.blue.main },
    { title: "Torque (kNm)", actualValue: 30, low: 10, high: 40, color: colors.palette.pink.main }
];

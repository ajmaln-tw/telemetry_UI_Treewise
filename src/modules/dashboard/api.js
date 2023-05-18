
import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const fetUserById = (data) => {
    return {
        url: API_URL.USER.FETCH_USER_BY_ID,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS, ACTION_TYPES.FETCH_USER_BY_ID_FAILURE],
            data
        }
    };
};

export const fetchStatsVesselAPI = (data) => {
    return {
        url: API_URL.DASHBOARD.FETCH_STATS_VESSEL,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_STATS_VESSEL_REQUEST, ACTION_TYPES.FETCH_STATS_VESSEL_SUCCESS, ACTION_TYPES.FETCH_STATS_VESSEL_FAILURE],
            data
        }
    };
};

export const fetchLineChartDataAPI = (data) => {
    return {
        url: API_URL.DASHBOARD.FETCH_LINE_CHART,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_LINE_CHART_REQUEST, ACTION_TYPES.FETCH_LINE_CHART_SUCCESS, ACTION_TYPES.FETCH_LINE_CHART_FAILURE],
            data
        }
    };
};


import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const overAllEmissionsAPI = (data) => {
    return {
        url: API_URL.EMISSION_DATA.OVER_ALL,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.OVERALL_EMISSIONS_REQUEST, ACTION_TYPES.OVERALL_EMISSIONS_SUCCESS, ACTION_TYPES.OVERALL_EMISSIONS_FAILURE],
            data
        }
    };
};
export const currentVesselEmissionAPI = (data) => {
    return {
        url: API_URL.EMISSION_DATA.BY_ID,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_CURRENT_VESSEL_EMISSIONS_REQUEST, ACTION_TYPES.FETCH_CURRENT_VESSEL_EMISSIONS_SUCCESS, ACTION_TYPES.FETCH_CURRENT_VESSEL_EMISSIONS_FAILURE],
            data
        }
    };
};

export const graphEmissionDataAPI = (data) => {
    return {
        url: API_URL.EMISSION_DATA.LINE_GRAPH,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_REQUEST, ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_SUCCESS, ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_FAILURE],
            data
        }
    };
};

export const listVesselAPI = () => {
    return {
        url: API_URL.EMISSION_DATA.LIST_VESSEL,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.LIST_VESSEL_REQUEST, ACTION_TYPES.LIST_VESSEL_SUCCESS, ACTION_TYPES.LIST_VESSEL_FAILURE]
        }
    };
};

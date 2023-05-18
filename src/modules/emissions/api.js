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

export const fetchRouteEmissionApi = (data) => {
    return {
        url: API_URL.EMISSION_DATA.ROUTE_EMISSION,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION_REQUEST, ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION_SUCCESS, ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION_FAILURE],
            data
        }
    };
};

export const fetchVesselTypeDropDownApi = () => {
    return {
        url: API_URL.EMISSION_DATA.VESSEL_TYPE_DROP_DOWN,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_VESSEL_TYPE_DROP_DOWN_REQUEST, ACTION_TYPES.FETCH_VESSEL_TYPE_DROP_DOWN_SUCCESS, ACTION_TYPES.FETCH_VESSEL_TYPE_DROP_DOWN_FAILURE]
        }
    };
};
export const fetchVesselSizeDropDownApi = () => {
    return {
        url: API_URL.EMISSION_DATA.VESSEL_SIZE_DROP_DOWN,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_VESSEL_SIZE_DROP_DOWN_REQUEST, ACTION_TYPES.FETCH_VESSEL_SIZE_DROP_DOWN_SUCCESS, ACTION_TYPES.FETCH_VESSEL_SIZE_DROP_DOWN_FAILURE]
        }
    };
};

export const fetchDeparturePortDropDownApi = (data) => {
    return {
        url: API_URL.EMISSION_DATA.DEPARTURE_PORT,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_DEPARTURE_DROP_DOWN_REQUEST, ACTION_TYPES.FETCH_DEPARTURE_DROP_DOWN_SUCCESS, ACTION_TYPES.FETCH_DEPARTURE_DROP_DOWN_FAILURE],
            data
        }
    };
};

export const fetchDestinationPortDropDownApi = (data) => {
    return {
        url: API_URL.EMISSION_DATA.DESTINATION_PORT,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_DESTINATION_DROP_DOWN_REQUEST, ACTION_TYPES.FETCH_DESTINATION_DROP_DOWN_SUCCESS, ACTION_TYPES.FETCH_DESTINATION_DROP_DOWN_FAILURE],
            data
        }
    };
};

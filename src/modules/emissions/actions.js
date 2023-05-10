import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {
    TOGGLE_EMISSION: `${STATE_REDUCER_KEY}/TOGGLE_EMISSION`,
    TOGGLE_DATE_RANGE: `${STATE_REDUCER_KEY}/TOGGLE_DATE_RANGE`,
    SET_DAY: `${STATE_REDUCER_KEY}/SET_DAY`,

    LIST_VESSEL: `${STATE_REDUCER_KEY}/LIST_VESSEL`,
    LIST_VESSEL_REQUEST: `${STATE_REDUCER_KEY}/LIST_VESSEL_REQUEST`,
    LIST_VESSEL_SUCCESS: `${STATE_REDUCER_KEY}/LIST_VESSEL_SUCCESS`,
    LIST_VESSEL_FAILURE: `${STATE_REDUCER_KEY}/LIST_VESSEL_FAILURE`,

    OVERALL_EMISSIONS: `${STATE_REDUCER_KEY}/OVERALL_EMISSIONS`,
    OVERALL_EMISSIONS_REQUEST: `${STATE_REDUCER_KEY}/OVERALL_EMISSIONS_REQUEST`,
    OVERALL_EMISSIONS_SUCCESS: `${STATE_REDUCER_KEY}/OVERALL_EMISSIONS_SUCCESS`,
    OVERALL_EMISSIONS_FAILURE: `${STATE_REDUCER_KEY}/OVERALL_EMISSIONS_FAILURE`,

    FETCH_CURRENT_VESSEL_EMISSIONS: `${STATE_REDUCER_KEY}/FETCH_CURRENT_VESSEL_EMISSIONS`,
    FETCH_CURRENT_VESSEL_EMISSIONS_REQUEST: `${STATE_REDUCER_KEY}/FETCH_CURRENT_VESSEL_EMISSIONS_REQUEST`,
    FETCH_CURRENT_VESSEL_EMISSIONS_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_CURRENT_VESSEL_EMISSIONS_SUCCESS`,
    FETCH_CURRENT_VESSEL_EMISSIONS_FAILURE: `${STATE_REDUCER_KEY}/FETCH_CURRENT_VESSEL_EMISSIONS_FAILURE`,

    FETCH_GRAPH_EMISSION_DATA: `${STATE_REDUCER_KEY}/FETCH_GRAPH_EMISSION_DATA`,
    FETCH_GRAPH_EMISSION_DATA_REQUEST: `${STATE_REDUCER_KEY}/FETCH_GRAPH_EMISSION_DATA_REQUEST`,
    FETCH_GRAPH_EMISSION_DATA_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_GRAPH_EMISSION_DATA_SUCCESS`,
    FETCH_GRAPH_EMISSION_DATA_FAILURE: `${STATE_REDUCER_KEY}/FETCH_GRAPH_EMISSION_DATA_FAILURE`,

    FETCH_ROUTE_EMISSION: `${STATE_REDUCER_KEY}/FETCH_ROUTE_EMISSION`,
    FETCH_ROUTE_EMISSION_REQUEST: `${STATE_REDUCER_KEY}/FETCH_ROUTE_EMISSION_REQUEST`,
    FETCH_ROUTE_EMISSION_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_ROUTE_EMISSION_SUCCESS`,
    FETCH_ROUTE_EMISSION_FAILURE: `${STATE_REDUCER_KEY}/FETCH_ROUTE_EMISSION_FAILURE`,

    SEARCH_VESSEL_ROUTE_EMISSION: `${STATE_REDUCER_KEY}/SEARCH_VESSEL_ROUTE_EMISSION`,
    SEARCH_VESSEL_ROUTE_EMISSION_REQUEST: `${STATE_REDUCER_KEY}/SEARCH_VESSEL_ROUTE_EMISSION_REQUEST`,
    SEARCH_VESSEL_ROUTE_EMISSION_SUCCESS: `${STATE_REDUCER_KEY}/SEARCH_VESSEL_ROUTE_EMISSION_SUCCESS`,
    SEARCH_VESSEL_ROUTE_EMISSION_FAILURE: `${STATE_REDUCER_KEY}/SEARCH_VESSEL_ROUTE_EMISSION_FAILURE`


};

export const fetchOverAllEmissions = createAction(ACTION_TYPES.OVERALL_EMISSIONS);
export const fetchCurrentVesselEmission = createAction(ACTION_TYPES.FETCH_CURRENT_VESSEL_EMISSIONS);
export const fetchGraph = createAction(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA);
export const listVessel = createAction(ACTION_TYPES.LIST_VESSEL);
export const toggleEmission = createAction(ACTION_TYPES.TOGGLE_EMISSION);
export const toggleDateRange = createAction(ACTION_TYPES.TOGGLE_DATE_RANGE);
export const setDay = createAction(ACTION_TYPES.SET_DAY);
export const fetchRouteEmission = createAction(ACTION_TYPES.FETCH_ROUTE_EMISSION);
export const searchVesselEmissionData = createAction(ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION);

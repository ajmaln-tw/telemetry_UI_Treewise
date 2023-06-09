import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {


    SEARCH_SUGGESTION: `${STATE_REDUCER_KEY}/SEARCH_SUGGESTION`,
    SEARCH_SUGGESTION_REQUEST: `${STATE_REDUCER_KEY}/SEARCH_SUGGESTION_REQUEST`,
    SEARCH_SUGGESTION_SUCCESS: `${STATE_REDUCER_KEY}/SEARCH_SUGGESTION_SUCCESS`,
    SEARCH_SUGGESTION_FAILURE: `${STATE_REDUCER_KEY}/SEARCH_SUGGESTION_FAILURE`,

    FETCH_USERS_LIST: `${STATE_REDUCER_KEY}/FETCH_USERS_LIST`,
    FETCH_USERS_LIST_REQUEST: `${STATE_REDUCER_KEY}/FETCH_USERS_LIST_REQUEST`,
    FETCH_USERS_LIST_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_USERS_LIST_SUCCESS`,
    FETCH_USERS_LIST_FAILURE: `${STATE_REDUCER_KEY}/FETCH_USERS_LIST_FAILURE`,


    SEARCH_VESSEL: `${STATE_REDUCER_KEY}/SEARCH_VESSEL`,
    SEARCH_VESSEL_REQUEST: `${STATE_REDUCER_KEY}/SEARCH_VESSEL_REQUEST`,
    SEARCH_VESSEL_SUCCESS: `${STATE_REDUCER_KEY}/SEARCH_VESSEL_SUCCESS`,
    SEARCH_VESSEL_FAILURE: `${STATE_REDUCER_KEY}/SEARCH_VESSEL_FAILURE`

};

export const searchSuggestionsAction = createAction(ACTION_TYPES.SEARCH_SUGGESTION);
export const searchVessel = createAction(ACTION_TYPES.SEARCH_VESSEL);

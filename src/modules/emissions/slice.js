import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

const initialState = {
    vesselList: [],
    emissionsOverall: {
        requestInProgress: false,
        data: {}
    },
    emissionsIndividual: {
        requestInProgress: false,
        data: {}
    },
    emissionLineGraph: {
        requestInProgress: false,
        data: {}
    }

};

const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState
    }
});

export const { actions, reducer } = slice;

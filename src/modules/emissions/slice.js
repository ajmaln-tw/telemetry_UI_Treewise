import { createSlice } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
import _ from "lodash";
import { EMISSION_TYPES, DATE_RANGE } from "./constants";
import { toEpoch } from "../../utils/dateUtils";
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
        selectedSwitch: { ...EMISSION_TYPES[0] },
        currentDateRange: { ...DATE_RANGE[0] },
        day: toEpoch(new Date()),
        data: null
    }

};

const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        clearDateRange: (state) => {
            _.set(state, "emissionLineGraph.currentDateRange", {});
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.TOGGLE_EMISSION, (state, { payload }) => {
                _.set(state, "emissionLineGraph.selectedSwitch", payload);
            })
            .addCase(ACTION_TYPES.TOGGLE_DATE_RANGE, (state, { payload }) => {
                _.set(state, "emissionLineGraph.currentDateRange", payload);
            })
            .addCase(ACTION_TYPES.SET_DAY, (state, { payload }) => {
                _.set(state, "emissionLineGraph.day", payload);
            });
    }
});

export const { actions, reducer } = slice;

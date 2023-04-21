import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { ACTION_TYPES } from "./actions";
import { STATE_REDUCER_KEY } from "./constants";
const initialState = {

    userDetails: {
        requestInProgress: false,
        data: {
            name: "",
            description: "",
            eamil: ""

        }
    },
    usersList: {
        requestInProgress: false,
        data: []
    },
    dashboard: {
        requestInProgress: false,
        lineChart: {
            requestInProgress: false
        },
        vesselsStats: {
            requestInProgress: false
        }
    }

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        clear: (state) => {
            state.table = initialState.table;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.FETCH_DASHBOARD_DATA_REQUEST, (state) => {
                _.set(state, "dashboard.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.FETCH_DASHBOARD_DATA, (state) => {
                _.set(state, "dashboard.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.FETCH_DASHBOARD_DATA_FAILURE, (state) => {
                _.set(state, "dashboard.requestInProgress", false);
            });

    }
});

export const { actions, reducer } = slice;

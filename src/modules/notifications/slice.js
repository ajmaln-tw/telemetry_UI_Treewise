import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { COMMOM_TABLE_PAGINATION } from "../../common/constants";

import { ACTION_TYPES } from "./actions";
import { STATE_REDUCER_KEY } from "./constants";
const initialState = {
    tablePagination: {
        ...COMMOM_TABLE_PAGINATION
    },

    table: {
        notifications: {
            requestInProgress: false,
            data: [],
            rowSelection: [],
            rowSelectionState: {}
        }
    }

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        clear: (state) => {
            state.table.notifications = initialState.table.notifications;
        },
        setLoading: (state) => {
            _.set(state, "table.notifications.requestInProgress", true);
        },
        unsetLoading: (state) => {
            _.set(state, "table.notifications.requestInProgress", false);
        },
        setPagination: (state, action) => {
            _.set(state, "tablePagination", action.payload);
        },
        setRowSelection: (state, action) => {
            _.set(state, "table.notifications.rowSelection", action.payload, []);
        },
        setRowSelectionState: (state, action) => {
            _.set(state, "table.notifications.rowSelectionState", action.payload, {});
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, (state) => {
                _.set(state, "table.notifications.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS, (state, { payload = {} }) => {
                _.set(state, "table.notifications.requestInProgress", false);
                _.set(state, "table.notifications.data", payload);
            })
            .addCase(ACTION_TYPES.FETCH_USER_BY_ID_FAILURE, (state) => {
                _.set(state, "table.notifications.requestInProgress", false);
            }).addCase(ACTION_TYPES.FETCH_USER_DETAILS_REQUEST, (state) => {
                _.set(state, "table.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.FETCH_USER_DETAILS_SUCCESS, (state) => {
                _.set(state, "table.requestInProgress", false);
            })
            .addCase(ACTION_TYPES.SET_USERS, (state, action) => {
                _.set(state, "table.notifications.requestInProgress", false);
                _.set(state, "table.notifications.data", action.payload);
                _.set(state, "pageCount", action.payload.length, 0);
            });

    }
});

export const { actions, reducer } = slice;

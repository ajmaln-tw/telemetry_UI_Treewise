import { createSlice } from "@reduxjs/toolkit";
// import { getPayloadContent } from "utils/apiUtils";
import { ACTION_TYPES } from "./actions";
import { STATE_REDUCER_KEY } from "./constants";

const initialState = {
    navigator: {},
    table: {},
    drawerToggle: true
};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setNavigator: (state, action) => {
            state.navigator = action.payload;
        },
        setUnsetDrawer: (state) => {
            state.drawerToggle = !state.drawerToggle;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.FETCH_STATE_DROPDOWN_SUCCESS, (state, action) => {
                state.stateDropdown.requestInProgress = false;
                state.stateDropdown.data = action.payload;
            });

    }
});

export const { actions, reducer } = slice;

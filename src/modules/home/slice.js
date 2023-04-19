import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { STATE_REDUCER_KEY } from "./constants";
const initialState = {

    searchResult: {
        requestInProgress: false,
        data: []
    },
    searchTerm: "",
    open: false

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setSearchTerm: (state, { payload = "" }) => {
            _.set(state, "open", true);
            _.set(state, "searchResult.data", []);
            _.set(state, "searchTerm", payload);
        },
        setAnchorEl: (state, { payload }) => {
            _.set(state, "anchorEle", payload);
        },
        setLoading: (state) => {
            _.set(state, "searchResult.requestInProgress", true);
        },
        setSuggestion: (state, { payload }) => {
            _.set(state, "searchResult.data", payload);
            _.set(state, "searchResult.requestInProgress", false);
        },
        unsetLoading: (state) => {
            _.set(state, "searchResult.requestInProgress", false);
        },
        setOpenClose: (state) => {
            _.set(state, "open", !state.open);
        },
        clearSearchResults: (state) => {
            _.set(state, "searchResult.data", []);
        },
    }

});

export const { actions, reducer } = slice;

import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { ACTION_TYPES } from "./actions";
import { STATE_REDUCER_KEY } from "./constants";
const initialState = {

    profileDetails: {
        requestInProgress: false,
        data: {
            firstName: "",
            lastName: "",
            email: "",
            designation: "",
            alternativeEmail: ""

        },
        cropData: null,
        modal: {
            openProfileModal: false
        }
    }

};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        setOpenProfileModal: (state, action) => {
            state.modal.openProfileModal = action.payload;
        },
        setCropData: (state, action) => {
            state.cropData = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, (state) => {
                _.set(state, "profileDetails.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS, (state, action) => {
                _.set(state, "profileDetails.requestInProgress", false);
                _.set(state, "profileDetails.data", action.payload);
            })
            .addCase(ACTION_TYPES.FETCH_USER_BY_ID_FAILURE, (state) => {
                _.set(state, "profileDetails.requestInProgress", false);
            });

    }
});

export const { actions, reducer } = slice;

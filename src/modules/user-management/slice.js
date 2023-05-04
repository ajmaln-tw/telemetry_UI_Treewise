/* eslint-disable camelcase */
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
const initialState = {
    signIn: {
        requestInProgress: false,
        data: {
            email: "",
            password: ""
        }
    },
    signUp: {
        confirm: false,
        requestInProgress: false,
        data: {
            email: "",
            password: "",
            confirmPassword: "",
            companyName: ""

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
            .addCase(ACTION_TYPES.AUTHENTICATE_USER_REQUEST, (state) => {
                _.set(state, "signIn.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.AUTHENTICATE_USER_SUCCESS, (state) => {
                _.set(state, "signIn.requestInProgress", false);
            })
            .addCase(ACTION_TYPES.AUTHENTICATE_USER_FAILURE, (state) => {
                _.set(state, "signIn.requestInProgress", false);
            }).addCase(ACTION_TYPES.SIGN_UP_REQUEST, (state) => {
                _.set(state, "signUp.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.SIGN_UP_SUCCESS, (state) => {
                _.set(state, "signUp.confirm", true);
                _.set(state, "signUp.requestInProgress", false);
            })
            .addCase(ACTION_TYPES.SIGN_UP_FAILURE, (state) => {
                _.set(state, "signUp.confirm", false);
                _.set(state, "signUp.requestInProgress", false);
            });

    }
});

export const { actions, reducer } = slice;

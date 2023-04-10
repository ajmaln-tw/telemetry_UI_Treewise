import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {
    SIGN_IN: `${STATE_REDUCER_KEY}/SIGN_IN`,
    SIGN_IN_REQUEST: `${STATE_REDUCER_KEY}/SIGN_IN_REQUEST`,
    SIGN_IN_SUCCESS: `${STATE_REDUCER_KEY}/SIGN_IN_SUCCESS`,
    SIGN_IN_FAILURE: `${STATE_REDUCER_KEY}/SIGN_IN_FAILURE`,

    SIGN_UP: `${STATE_REDUCER_KEY}/SIGN_UP`,
    SIGN_UP_REQUEST: `${STATE_REDUCER_KEY}/SIGN_UP_REQUEST`,
    SIGN_UP_SUCCESS: `${STATE_REDUCER_KEY}/SIGN_UP_SUCCESS`,
    SIGN_UP_FAILURE: `${STATE_REDUCER_KEY}/SIGN_UP_FAILURE`

};

export const signUp = createAction(ACTION_TYPES.SIGN_UP);

export const signIn = createAction(ACTION_TYPES.SIGN_IN);

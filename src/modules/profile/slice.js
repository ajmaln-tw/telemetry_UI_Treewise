import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { ACTION_TYPES } from "./actions";
import { STATE_REDUCER_KEY, VESSEL_VARIABLES } from "./constants";
const initialState = {
    profileDetails: {
        requestInProgress: false,
        data: {
            firstName: "",
            lastName: "",
            email: "test@company.com",
            designation: "",
            alternativeEmail: "",
            profileImage: ""

        }

    },
    vesselData: {
        requestInProgress: false,
        data: {
            vesselName: "as",
            apiURL: "assa",
            vesselVariables: VESSEL_VARIABLES
        }
    },
    cropData: null,
    modal: {
        openProfileModal: false,
        openVesselDataModal: false,
        openEditVesselDataModal: false
    },
    stepper: {
        activeStep: 0
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
        },
        closeOpenVesselDataModal: (state, { payload }) => {
            state.modal.openVesselDataModal = payload;
        },
        closeOpenEditVesselDataModal: (state, { payload }) => {
            state.stepper.activeStep = 0;
            state.modal.openEditVesselDataModal = payload;
        },
        setActiveStep: (state) => {
            state.stepper.activeStep = state.stepper.activeStep + 1;
        },
        setActiveStepBack: (state) => {
            state.stepper.activeStep = state.stepper.activeStep - 1;
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

import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

import { ACTION_TYPES } from "./actions";
import { ACTION_TYPES as USER_MANAGEMENT_ACTION } from "../user-management/actions";
import { STATE_REDUCER_KEY, VESSEL_VARIABLES } from "./constants";
const initialState = {
    profileDetails: {
        requestInProgress: false,
        profileImage: "",
        data: {
            firstName: "",
            lastName: "",
            email: "",
            designation: "",
            alternativeEmail: ""

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
    },
    profileImageFile: null
};


const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        clearProfileImageFile: (state) => {
            state.profileImageFile = initialState.profileImageFile;
        },
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
        },
        setImage: (state, { payload }) => {
            state.profileImageFile = payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(USER_MANAGEMENT_ACTION.USER_PROFILE_SUCCESS, (state, { payload = {} }) => {
                _.set(state, "profileDetails.data", payload);
            })
            .addCase(ACTION_TYPES.PROFILE_DATA_REQUEST, (state) => {
                _.set(state, "profileDetails.requestInProgress", true);
            }).addCase(ACTION_TYPES.PROFILE_DATA_SUCCESS, (state, { payload = {} }) => {
                _.set(state, "profileDetails.requestInProgress", false);
                _.set(state, "profileDetails.data", payload);
            }).addCase(ACTION_TYPES.PROFILE_DATA_FAILURE, (state) => {
                _.set(state, "profileDetails.requestInProgress", false);
            })
            .addCase(ACTION_TYPES.PROFILE_UPDATE_REQUEST, (state) => {
                _.set(state, "profileDetails.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.PROFILE_UPDATE_SUCCESS, (state, action) => {
                _.set(state, "profileDetails.requestInProgress", false);
                _.set(state, "profileDetails.data", action.payload);
            })
            .addCase(ACTION_TYPES.PROFILE_UPDATE_FAILURE, (state) => {
                _.set(state, "profileDetails.requestInProgress", false);
            })
            .addCase(ACTION_TYPES.PROFILE_IMAGE_SUCCESS, (state, { payload }) => {
                _.set(state, "profileDetails.profileImage", payload.profileImage || "");
            });

    }
});
//PROFILE_IMAGE_SUCCESS

export const { actions, reducer } = slice;

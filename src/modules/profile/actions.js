import { createAction } from "@reduxjs/toolkit";
import { STATE_REDUCER_KEY } from "./constants";

export const ACTION_TYPES = {


    PROFILE_UPDATE: `${STATE_REDUCER_KEY}/PROFILE_UPDATE`,
    PROFILE_UPDATE_REQUEST: `${STATE_REDUCER_KEY}/PROFILE_UPDATE_REQUEST`,
    PROFILE_UPDATE_SUCCESS: `${STATE_REDUCER_KEY}/PROFILE_UPDATE_SUCCESS`,
    PROFILE_UPDATE_FAILURE: `${STATE_REDUCER_KEY}/PROFILE_UPDATE_FAILURE`,

    UPLOAD_PROFILE_IMAGE: `${STATE_REDUCER_KEY}/UPLOAD_PROFILE_IMAGE`,
    UPLOAD_PROFILE_IMAGE_REQUEST: `${STATE_REDUCER_KEY}/UPLOAD_PROFILE_IMAGE_REQUEST`,
    UPLOAD_PROFILE_IMAGE_SUCCESS: `${STATE_REDUCER_KEY}/UPLOAD_PROFILE_IMAGE_SUCCESS`,
    UPLOAD_PROFILE_IMAGE_FAILURE: `${STATE_REDUCER_KEY}/UPLOAD_PROFILE_IMAGE_FAILURE`,

    CHANGE_PASSWORD: `${STATE_REDUCER_KEY}/CHANGE_PASSWORD`,
    CHANGE_PASSWORD_REQUEST: `${STATE_REDUCER_KEY}/CHANGE_PASSWORD_REQUEST`,
    CHANGE_PASSWORD_SUCCESS: `${STATE_REDUCER_KEY}/CHANGE_PASSWORD_SUCCESS`,
    CHANGE_PASSWORD_FAILURE: `${STATE_REDUCER_KEY}/CHANGE_PASSWORD_FAILURE`,

    SAVE_VESSEL_DATA: `${STATE_REDUCER_KEY}/SAVE_VESSEL_DATA`,
    SAVE_VESSEL_DATA_REQUEST: `${STATE_REDUCER_KEY}/SAVE_VESSEL_DATA_REQUEST`,
    SAVE_VESSEL_DATA_SUCCESS: `${STATE_REDUCER_KEY}/SAVE_VESSEL_DATA_SUCCESS`,
    SAVE_VESSEL_DATA_FAILURE: `${STATE_REDUCER_KEY}/SAVE_VESSEL_DATA_FAILURE`,

    UPDATE_VESSEL_DATA: `${STATE_REDUCER_KEY}/UPDATE_VESSEL_DATA`,
    UPDATE_VESSEL_DATA_REQUEST: `${STATE_REDUCER_KEY}/UPDATE_VESSEL_DATA_REQUEST`,
    UPDATE_VESSEL_DATA_SUCCESS: `${STATE_REDUCER_KEY}/UPDATE_VESSEL_DATA_SUCCESS`,
    UPDATE_VESSEL_DATA_FAILURE: `${STATE_REDUCER_KEY}/UPDATE_VESSEL_DATA_FAILURE`,

    PROFILE_DATA: `${STATE_REDUCER_KEY}/PROFILE_DATA`,
    PROFILE_DATA_REQUEST: `${STATE_REDUCER_KEY}/PROFILE_DATA_REQUEST`,
    PROFILE_DATA_SUCCESS: `${STATE_REDUCER_KEY}/PROFILE_DATA_SUCCESS`,
    PROFILE_DATA_FAILURE: `${STATE_REDUCER_KEY}/PROFILE_DATA_FAILURE`,

    PROFILE_IMAGE: `${STATE_REDUCER_KEY}/PROFILE_IMAGE`,
    PROFILE_IMAGE_REQUEST: `${STATE_REDUCER_KEY}/PROFILE_IMAGE_REQUEST`,
    PROFILE_IMAGE_SUCCESS: `${STATE_REDUCER_KEY}/PROFILE_IMAGE_SUCCESS`,
    PROFILE_IMAGE_FAILURE: `${STATE_REDUCER_KEY}/PROFILE_IMAGE_FAILURE`


};
export const uploadProfileImage = createAction(ACTION_TYPES.UPLOAD_PROFILE_IMAGE);
export const updateProfile = createAction(ACTION_TYPES.PROFILE_UPDATE);
export const changePassword = createAction(ACTION_TYPES.CHANGE_PASSWORD);
export const saveVesselData = createAction(ACTION_TYPES.SAVE_VESSEL_DATA);
export const updateVesselData = createAction(ACTION_TYPES.UPDATE_VESSEL_DATA);
export const profileData = createAction(ACTION_TYPES.PROFILE_DATA);
export const profileImage = createAction(ACTION_TYPES.PROFILE_IMAGE);



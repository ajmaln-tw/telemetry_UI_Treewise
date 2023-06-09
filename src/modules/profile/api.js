
import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const profileDataApi = () => {
    return {
        url: API_URL.USER.PROFILE,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.PROFILE_DATA_REQUEST, ACTION_TYPES.PROFILE_DATA_SUCCESS, ACTION_TYPES.PROFILE_DATA_FAILURE]
        }
    };
};

export const updateProfileApi = (data) => {
    return {
        url: API_URL.USER.UPDATE_PROFILE,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.PROFILE_UPDATE_REQUEST, ACTION_TYPES.PROFILE_UPDATE_SUCCESS, ACTION_TYPES.PROFILE_UPDATE_FAILURE],
            data: { ...data }
        }
    };
};

export const uploadProfileImageApi = (data) => {
    return {
        url: API_URL.USER.UPLOAD_PROFILE_IMAGE,
        method: REQUEST_METHOD.FILE,
        payload: {
            types: [ACTION_TYPES.UPLOAD_PROFILE_IMAGE_REQUEST, ACTION_TYPES.UPLOAD_PROFILE_IMAGE_SUCCESS, ACTION_TYPES.UPLOAD_PROFILE_IMAGE_FAILURE],
            data
        }
    };
};

export const updateImageApi = () => {
    return {
        url: API_URL.USER.PROFILE_IMAGE,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.PROFILE_IMAGE_REQUEST, ACTION_TYPES.PROFILE_IMAGE_SUCCESS, ACTION_TYPES.PROFILE_IMAGE_FAILURE]
        }
    };
};

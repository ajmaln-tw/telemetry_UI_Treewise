
import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const fetUserById = (data) => {
    return {
        url: API_URL.USER.FETCH_USER_BY_ID,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.FETCH_USER_BY_ID_REQUEST, ACTION_TYPES.FETCH_USER_BY_ID_SUCCESS, ACTION_TYPES.FETCH_USER_BY_ID_FAILURE],
            data
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

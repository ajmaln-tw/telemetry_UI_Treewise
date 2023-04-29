import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const authenticateUser = (data) => {
    let payload = { username: data?.email, password: data?.password };
    return {
        url: API_URL.USER_MANAGEMENT.AUTH_TOKEN,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.AUTHENTICATE_USER_REQUEST, ACTION_TYPES.AUTHENTICATE_USER_SUCCESS, ACTION_TYPES.AUTHENTICATE_USER_FAILURE],
            // eslint-disable-next-line camelcase
            data: { ...payload, client_id: "web-app" }
        }
    };
};

export const signUpApi = (data) => {
    return {
        url: API_URL.USER_MANAGEMENT.SIGN_UP,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.SIGN_UP_REQUEST, ACTION_TYPES.SIGN_UP_SUCCESS, ACTION_TYPES.SIGN_UP_FAILURE],
            data
        }

    };
};

export const fetchCurrentUserAPI = () => {
    return {
        url: API_URL.USER_MANAGEMENT.USER_PROFILE,
        method: REQUEST_METHOD.GET,
        payload: {
            types: [ACTION_TYPES.USER_PROFILE_REQUEST, ACTION_TYPES.USER_PROFILE_SUCCESS, ACTION_TYPES.USER_PROFILE_FAILURE]
        }

    };
};

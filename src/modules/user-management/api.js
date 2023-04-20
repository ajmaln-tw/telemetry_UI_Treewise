import { REQUEST_METHOD } from "../../common/constants";
import { ACTION_TYPES } from "./actions";
import { API_URL } from "./urls";

export const authenticateUser = (data) => {
    return {
        url: API_URL.USER_MANAGEMENT.AUTH_TOKEN,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.AUTHENTICATE_USER_REQUEST, ACTION_TYPES.AUTHENTICATE_USER_SUCCESS, ACTION_TYPES.AUTHENTICATE_USER_FAILURE],
            // eslint-disable-next-line camelcase
            data: { ...data, client_id: "web-app" }
        }
    };
};

export const signUpApi = (data) => {
    return {
        url: API_URL.USER_MANAGEMENT.AUTH_TOKEN,
        method: REQUEST_METHOD.POST,
        payload: {
            types: [ACTION_TYPES.SIGN_UP_REQUEST, ACTION_TYPES.SIGN_UP_SUCCESS, ACTION_TYPES.SIGN_UP_FAILURE],
            // eslint-disable-next-line camelcase
            data: { ...data, client_id: "web-app" }
        }

    };
};

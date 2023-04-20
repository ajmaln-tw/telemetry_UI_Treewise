
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

export const testTableAPICall = ({ pageIndex, count, pageSize }) => {
    let start = pageIndex * pageSize;
    // eslint-disable-next-line no-undef
    return new Promise((resolve, reject) => {
        fetch(`https://jsonplaceholder.typicode.com/users?_start=${start}&_limit=${pageSize}&count=${count}&pageIndex=${pageIndex}`)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => reject(err));

    });
};

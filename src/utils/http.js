/* eslint-disable no-undef */
import { createAction } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, patchRequest, postRequest, putRequest } from "../app/axios";
import { API_URL } from "../modules/user-management/urls";
import { call, delay, put } from "redux-saga/effects";
import { errorNotify } from "./notificationUtils";
import { HTTP_CONSTANTS, REQUEST_METHOD, STORAGE_KEYS } from "../common/constants";
import { logout } from "../modules/common/actions";

const HTTP_RESPONSE_STATUS = {
    BAD_REQUEST: 400,
    UN_AUTHORIZED: 401,
    NOT_FOUND: 404,
    INTERNAL_SERVER_ERROR: 500
};

const ERROR_CODES = {
    JWT_TOKEN_EXPIRED: 4401,
    INVALID_TOKEN: 4403
};

const requestWrapper = (body = {}) => ({ data: { ...body } });

const getRequestParams = ({ url, data, method }) => {
    let headers = HTTP_CONSTANTS.HTTP_HEADERS;
    let baseURL = process.env.REACT_APP_API_URL;
    let authHeaders = {};
    let bearerToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
    let extraParams = {};

    let api = (method === REQUEST_METHOD.DELETE) ? deleteRequest : (method === REQUEST_METHOD.PUT) ? putRequest : (method === REQUEST_METHOD.PATCH) ? patchRequest : (method === REQUEST_METHOD.POST || REQUEST_METHOD.FILE) ? postRequest : getRequest;
    if (method === REQUEST_METHOD.GET) {
        api = getRequest;
    }
    baseURL = process.env.REACT_APP_API_URL;
    if (bearerToken) {
        authHeaders = { Authorization: `Bearer ${bearerToken}` };
    }
    // else {
    //     window.location.hash = "/";
    //     return;
    // }

    if ((method === REQUEST_METHOD.PUT || method === REQUEST_METHOD.PATCH || method === REQUEST_METHOD.POST) && url !== API_URL.USER_MANAGEMENT.AUTH_TOKEN) {
        if (url !== API_URL.USER_MANAGEMENT.SIGN_UP) {
            data = requestWrapper(data);
        }
    }

    if (url === API_URL.USER_MANAGEMENT.AUTH_TOKEN) {
        headers["Content-Type"] = "application/x-www-form-urlencoded";
    } else {
        headers["Content-Type"] = "application/json";
    }

    if (method === REQUEST_METHOD.FILE) {
        headers["Content-Type"] = "multipart/form-data";
        const formData = new FormData();
        formData.append("file", data);

        return { config: { headers: { ...headers, ...authHeaders }, ...extraParams }, baseURL, data: formData, api };
    }
    return { config: { headers: { ...headers, ...authHeaders }, ...extraParams }, baseURL, data, api };
};


function* invokeApi(method, url, payload) {
    const { types = ["REQUEST", "SUCCESS", "FAILURE"], data: payloadData } = payload;
    let requestAction = createAction(types[0]), successAction = createAction(types[1]), failureAction = createAction(types[2]);

    yield put(requestAction());
    const { api, config, baseURL, data } = getRequestParams({ url, data: payloadData, method });
    const { data: apiResponse, error } = yield call(api, url, { config, baseURL, data });
    // const dataAPi = yield call(api, url, { config, baseURL, data });
    const { data: response } = apiResponse || {};
    if (error) {
        yield put(failureAction({ error }));
        const { code: id, message, response: { status, statusText, data: { resultString, detail: errors = "", errorCode, error_description: errorDescription, error: dataError } = {} } = {} } = error;
        let errorMessage = {};
        switch (status) {
            case HTTP_RESPONSE_STATUS.BAD_REQUEST:
                errorMessage = { title: `${statusText || resultString || "ERROR"}`, message: errors };
                break;
            case HTTP_RESPONSE_STATUS.UN_AUTHORIZED:
                {
                    if (errorCode === ERROR_CODES.JWT_TOKEN_EXPIRED) {
                        errorMessage = { title: "Token Expired", message: "Please login again." };
                        yield delay(500);
                        yield put(logout());
                    } else if (errorCode === ERROR_CODES.INVALID_TOKEN) {
                        errorMessage = { title: "Invalid Token", message: "Please login again." };
                        yield delay(500);
                        yield put(logout());
                    } else {
                        errorMessage = { title: `${dataError || statusText || "ERROR"}`, message: errors || errorDescription };
                    }
                }
                break;
            case HTTP_RESPONSE_STATUS.NOT_FOUND:
            case HTTP_RESPONSE_STATUS.INTERNAL_SERVER_ERROR:
                errorMessage = { title: "Error", message: resultString };
                break;
            default:
                errorMessage = { title: `${status || ""} ${id || "ERROR"}`, message: resultString || message };
                break;
        }
        yield put(errorNotify({ id, error, ...errorMessage }));
    } else {
        //TODO Handle success / failure operation
        // if (_.get(response, "resultCode", "") === API_RESULT_CODE.FAILURE) {
        //     yield put(warningNotify({ id: "ERROR_PRIMARY", title: "Operation Failure", message: _.get(response, "resultString", "Operation Failure") }));
        // } else if (_.has(response, "error")) {
        //     let customError = response.error || {};
        //     yield put(failureAction({ error: customError }));
        //     const { code, message, response: { status, data: { resultString } = {} } = {} } = customError;
        //     yield put(errorNotify({ id: "ERROR_PRIMARY", title: `${status || ""} ${code || "ERROR"}`, message: resultString || message }));
        // } else {
        //     yield put(successAction(KEY_CLOAK_APIS.includes(url) || method === REQUEST_METHOD.FILE ? response : _.get(response, "payLoad", {})));
        // }
        yield put(successAction(response || {}));
    }

    return { response, error };
}


export function* handleAPIRequest(apiFn, ...rest) {
    let { method, url, payload } = apiFn(...rest);
    return yield call(invokeApi, method, url, payload);
}

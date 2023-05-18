import { all, call, fork, put, take, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { authenticateUser, fetchCurrentUserAPI, signUpApi } from "./api";
import { handleAPIRequest } from "../../utils/http";
import { STORAGE_KEYS } from "../../common/constants";
import { navigateTo } from "../common/actions";

export function* signIn({ payload = {} }) {
    yield fork(handleAPIRequest, authenticateUser, payload);
    const responseAction = yield take([ACTION_TYPES.AUTHENTICATE_USER_SUCCESS, ACTION_TYPES.AUTHENTICATE_USER_FAILURE]);
    if (responseAction.type === ACTION_TYPES.AUTHENTICATE_USER_SUCCESS) {
        // eslint-disable-next-line camelcase
        const { payload: { access_token } = {} } = responseAction;
        localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, access_token);
        yield fork(handleAPIRequest, fetchCurrentUserAPI, {});
        const profileResponseAction = yield take([ACTION_TYPES.USER_PROFILE_SUCCESS, ACTION_TYPES.USER_PROFILE_FAILURE]);
        if (profileResponseAction.type === ACTION_TYPES.USER_PROFILE_SUCCESS) {
            yield put(navigateTo("/dashboard"));
        }
    }
}

export function* signUp({ payload = {} }) {
    yield fork(handleAPIRequest, signUpApi, payload);

}

export function* fetchCurrentUserDetails() {
    yield call(handleAPIRequest, fetchCurrentUserAPI, {});
}


export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.AUTHENTICATE_USER, signIn),
        takeLatest(ACTION_TYPES.SIGN_UP, signUp),
        takeLatest(ACTION_TYPES.USER_PROFILE, fetchCurrentUserDetails)

    ]);
}
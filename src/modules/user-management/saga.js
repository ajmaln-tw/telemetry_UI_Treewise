import { all, fork, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { authenticateUser, signUpApi } from "./api";
import { handleAPIRequest } from "../../utils/http";

export function* signIn({ payload = {} }) {
    yield fork(handleAPIRequest, authenticateUser, payload);
}

export function* signUp({ payload = {} }) {
    yield fork(handleAPIRequest, signUpApi, payload);
}


export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.AUTHENTICATE_USER, signIn),
        takeLatest(ACTION_TYPES.SIGN_UP, signUp)

    ]);
}

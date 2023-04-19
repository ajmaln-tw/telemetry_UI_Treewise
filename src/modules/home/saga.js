import { all, call, put, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { searchSuggestions } from "./api";
// import { handleAPIRequest } from "../../utils/http";
import { errorNotify } from "../../utils/notificationUtils";
import { actions as sliceActions } from "./slice";


export function* search({ payload = "" }) {
    yield put(sliceActions.setLoading());
    yield put(sliceActions.setSearchTerm(payload));
    try {
        if (payload.length > 2) {
            const response = yield call(searchSuggestions, payload);
            yield put(sliceActions.setSuggestion(response));
        }

    } catch (err) {
        yield put(errorNotify({ title: err.name, message: err?.message }));
        yield put(sliceActions.unsetLoading());

    }

}


export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.SEARCH_SUGGESTION, search)

    ]);
}

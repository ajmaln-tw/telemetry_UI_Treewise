import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { searchSuggestions } from "./api";
// import { handleAPIRequest } from "../../utils/http";
import { errorNotify } from "../../utils/notificationUtils";
import { actions as sliceActions } from "./slice";
import { getSearchTerm } from "./selectors";


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

export function* searchVessel() {
    yield put(sliceActions.setLoading());
    let searchTerm = yield select(getSearchTerm);
    try {
        if (searchTerm.length > 2) {
            const response = yield call(searchSuggestions, searchTerm);
            yield put(sliceActions.setSuggestion(response));
        }
    } catch (err) {
        yield put(errorNotify({ title: err.name, message: err?.message }));
        yield put(sliceActions.unsetLoading());

    }
}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.SEARCH_SUGGESTION, search),
        takeLatest(ACTION_TYPES.SEARCH_VESSEL, searchVessel)

    ]);
}

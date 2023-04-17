import { all, call, takeLatest, select, put } from "redux-saga/effects";
import { testTableAPICall } from "./api";
// import { handleAPIRequest } from "../../utils/http";
import { getTableProps } from "./selectors";
import { actions as sliceActions } from "./slice";
import { ACTION_TYPES, setUsers } from "./actions";
import { errorNotify } from "../../utils/notificationUtils";

export function* fetchUsers() {
    yield put(sliceActions.setLoading());
    let tableProps = yield select(getTableProps);
    try {
        const response = yield call(testTableAPICall, tableProps);
        yield put(setUsers(response));
    } catch (err) {
        yield put(errorNotify({ title: err.name, message: err?.message }));

    }

}


export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.FETCH_USER_DETAILS, fetchUsers)

    ]);
}

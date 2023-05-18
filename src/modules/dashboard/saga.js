import { all, call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES, fetchDashBoardDataFailure, fetchDashBoardDataReq } from "./actions";
import { fetUserById, fetchLineChartDataAPI, fetchStatsVesselAPI } from "./api";
import { handleAPIRequest } from "../../utils/http";

export function* fetchUser({ payload: id }) {
    yield call(handleAPIRequest, fetUserById, { id });
}
// function* fetchStatsVessel({ payload: id }) {
//     yield call(handleAPIRequest, fetchStatsVesselAPI, { id });
// }

// function* fetchLineChartData({ payload: id }) {
//     yield call(handleAPIRequest, fetchLineChartDataAPI, { id });

// }


export function* fetchDashBoardDataSaga({ payload: id }) {
    yield put(fetchDashBoardDataReq());
    yield call(handleAPIRequest, fetchLineChartDataAPI, { id });
    yield call(handleAPIRequest, fetchStatsVesselAPI, { id });
    yield delay(3000);
    yield put(fetchDashBoardDataFailure());
}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.FETCH_USER_BY_ID, fetchUser),
        takeEvery(ACTION_TYPES.FETCH_DASHBOARD_DATA, fetchDashBoardDataSaga)
    ]);
}


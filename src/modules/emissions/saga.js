import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES, fetchGraph } from "./actions";
import {
    currentVesselEmissionAPI, graphEmissionDataAPI, listVesselAPI, overAllEmissionsAPI,
    fetchRouteEmissionApi
} from "./api";
import { handleAPIRequest } from "../../utils/http";
import { getEmissionDateRangeGraph, getEmissionTypeGraph } from "./selectors";


export function* overAllEmissions() {
    yield call(handleAPIRequest, overAllEmissionsAPI);
}

export function* listVessel() {
    yield call(handleAPIRequest, listVesselAPI);
}

export function* graphEmissionData({ payload = {} }) {
    yield call(handleAPIRequest, graphEmissionDataAPI, payload);
}

export function* currentVesselEmission({ payload = {} }) {
    yield call(handleAPIRequest, currentVesselEmissionAPI, payload);
}

export function* toggleEmissionGraph() {
    const emissionType = yield select(getEmissionTypeGraph);
    const emissionDateRange = yield select(getEmissionDateRangeGraph);
    yield put(fetchGraph({ emissionDateRange: emissionDateRange.id, emissionType: emissionType.id }));
}

export function* toggleDateRangeGraph() {
    const emissionType = yield select(getEmissionTypeGraph);
    const emissionDateRange = yield select(getEmissionDateRangeGraph);
    yield put(fetchGraph({ emissionDateRange: emissionDateRange.id, emissionType: emissionType.id }));
}

export function* toggleDayGraph({ payload }) {
    const emissionType = yield select(getEmissionTypeGraph);
    yield put(fetchGraph({ day: payload, emissionType: emissionType.id }));
}

export function* fetchRouteEmissionSaga() {
    const vesselType = { id: 1, name: "test" };
    const departurePort = { id: 11, name: "test" };
    const arrivalPort = { id: "test", name: "test" };
    yield call(handleAPIRequest, fetchRouteEmissionApi, { vesselType: vesselType.id, departurePort: departurePort.name, arrivalPort: arrivalPort.name });
}

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.OVERALL_EMISSIONS, overAllEmissions),
        takeLatest(ACTION_TYPES.LIST_VESSEL, listVessel),
        takeLatest(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA, graphEmissionData),
        takeLatest(ACTION_TYPES.FETCH_CURRENT_VESSEL_EMISSIONS, currentVesselEmission),
        takeLatest(ACTION_TYPES.TOGGLE_EMISSION, toggleEmissionGraph),
        takeLatest(ACTION_TYPES.TOGGLE_DATE_RANGE, toggleDateRangeGraph),
        takeLatest(ACTION_TYPES.SET_DAY, toggleDayGraph),
        takeLatest(ACTION_TYPES.FETCH_ROUTE_EMISSION, fetchRouteEmissionSaga)
    ]);
}

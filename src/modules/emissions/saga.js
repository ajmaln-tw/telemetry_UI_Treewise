import { all, call, put, select, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES, fetchGraph } from "./actions";
import {
    currentVesselEmissionAPI, graphEmissionDataAPI, listVesselAPI, overAllEmissionsAPI,
    fetchRouteEmissionApi,
    fetchVesselTypeDropDownApi,
    fetchVesselSizeDropDownApi,
    fetchDeparturePortDropDownApi,
    fetchDestinationPortDropDownApi
} from "./api";
import { handleAPIRequest } from "../../utils/http";
import { getEmissionDateRangeGraph, getEmissionFilter, getEmissionTypeGraph } from "./selectors";
import _ from "lodash";


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

export function* searchRouteEmissionSaga() {
    const vesselType = { id: 1, name: "test" };
    const departurePort = { id: 11, name: "test" };
    const arrivalPort = { id: "test", name: "test" };
    yield call(handleAPIRequest, fetchRouteEmissionApi, { vesselType: vesselType.id, departurePort: departurePort.name, arrivalPort: arrivalPort.name });
}
export function* fetchVesselTypeDropDownSaga() {
    yield call(handleAPIRequest, fetchVesselTypeDropDownApi);
}
export function* fetchVesselSizeDropDownSaga() {
    yield call(handleAPIRequest, fetchVesselSizeDropDownApi);
}
export function* fetchDeparturePortDropDownSaga() {
    let { vesselType, vesselSize } = yield select(getEmissionFilter);
    if (!_.isEmpty(vesselType) || !_.isEmpty(vesselSize)) {
        yield call(handleAPIRequest, fetchDeparturePortDropDownApi, { vesselType: vesselType.id, vesselSize: vesselSize.id });
    }

}

export function* fetchDestinationPortDropDownSaga() {
    let { vesselType, vesselSize } = yield select(getEmissionFilter);
    if (!_.isEmpty(vesselType) || !_.isEmpty(vesselSize)) {
        yield call(handleAPIRequest, fetchDestinationPortDropDownApi, { vesselType: vesselType.id, vesselSize: vesselSize.id });
    }
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
        takeLatest(ACTION_TYPES.SEARCH_VESSEL_ROUTE_EMISSION, searchRouteEmissionSaga),
        takeLatest(ACTION_TYPES.FETCH_VESSEL_TYPE_DROP_DOWN, fetchVesselTypeDropDownSaga),
        takeLatest(ACTION_TYPES.FETCH_VESSEL_SIZE_DROP_DOWN, fetchVesselSizeDropDownSaga),
        takeLatest(ACTION_TYPES.FETCH_DEPARTURE_DROP_DOWN, fetchDeparturePortDropDownSaga),
        takeLatest(ACTION_TYPES.FETCH_DESTINATION_DROP_DOWN, fetchDestinationPortDropDownSaga)

    ]);
}

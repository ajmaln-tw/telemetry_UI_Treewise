import { all, call, takeLatest } from "redux-saga/effects";
import { ACTION_TYPES } from "./actions";
import { currentVesselEmissionAPI, graphEmissionDataAPI, listVesselAPI, overAllEmissionsAPI } from "./api";
import { handleAPIRequest } from "../../utils/http";


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

export default function* moduleSaga() {
    yield all([
        takeLatest(ACTION_TYPES.OVERALL_EMISSIONS, overAllEmissions),
        takeLatest(ACTION_TYPES.LIST_VESSEL, listVessel),
        takeLatest(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA, graphEmissionData),
        takeLatest(ACTION_TYPES.FETCH_CURRENT_VESSEL_EMISSIONS, currentVesselEmission)
    ]);
}


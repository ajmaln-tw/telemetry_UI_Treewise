import { createSlice } from "@reduxjs/toolkit";
import { LINE_GRAPHS_SAMPLE_DATA, STATE_REDUCER_KEY } from "./constants";
import { ACTION_TYPES } from "./actions";
import _ from "lodash";
import { EMISSION_TYPES, DATE_RANGE } from "./constants";
import { toEpoch } from "../../utils/dateUtils";
import routes from "./route.json";
const initialState = {
    vesselList: [],
    emissionsOverall: {
        requestInProgress: false,
        data: {}
    },
    emissionsIndividual: {
        requestInProgress: false,
        data: {}
    },
    emissionLineGraph: {
        requestInProgress: false,
        selectedSwitch: { ...EMISSION_TYPES[0] },
        currentDateRange: { ...DATE_RANGE[0] },
        day: toEpoch(new Date()),
        data: { predictedEmissions: [], actualEmissions: [] }
    },
    routeEmission: {
        requestInProgress: false,
        data: {
            mapPositionCurrent: [17.6959515, 83.2873001],
            mapJourney: routes.coordinates
        }
    }

};

const slice = createSlice({
    initialState,
    name: STATE_REDUCER_KEY,
    reducers: {
        clearAll: () => initialState,
        clearDateRange: (state) => {
            _.set(state, "emissionLineGraph.currentDateRange", {});
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(ACTION_TYPES.TOGGLE_EMISSION, (state, { payload }) => {
                _.set(state, "emissionLineGraph.selectedSwitch", payload);
            })
            .addCase(ACTION_TYPES.TOGGLE_DATE_RANGE, (state, { payload }) => {
                _.set(state, "emissionLineGraph.currentDateRange", payload);
            })
            .addCase(ACTION_TYPES.SET_DAY, (state, { payload }) => {
                _.set(state, "emissionLineGraph.day", payload);
            })
            .addCase(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_REQUEST, (state) => {
                _.set(state, "emissionLineGraph.requestInProgress", true);
            })
            .addCase(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_SUCCESS, (state, { payload }) => {
                _.set(state, "emissionLineGraph.data", payload);
            })
            .addCase(ACTION_TYPES.FETCH_GRAPH_EMISSION_DATA_FAILURE, (state) => {
                _.set(state, "emissionLineGraph.requestInProgress", false);
                _.set(state, "emissionLineGraph.data", LINE_GRAPHS_SAMPLE_DATA);
            })
            //route emission submodule
            .addCase(ACTION_TYPES.FETCH_ROUTE_EMISSION_REQUEST, (state) => {
                _.set(state, "routeEmission.requestInProgress", true);
            }).addCase(ACTION_TYPES.FETCH_ROUTE_EMISSION_SUCCESS, (state, { payload }) => {
                _.set(state, "routeEmission.requestInProgress", false);
                _.set(state, "routeEmission.data", payload);
            }).addCase(ACTION_TYPES.FETCH_ROUTE_EMISSION_FAILURE, (state) => {
                _.set(state, "routeEmission.requestInProgress", false);
                _.set(state, "routeEmission.data.mapJourney", routes.coordinates);
            });
    }
});

export const { actions, reducer } = slice;

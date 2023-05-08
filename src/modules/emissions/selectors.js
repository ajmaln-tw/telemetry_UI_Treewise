import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const emissionsOverall = (state) => state.emissionsOverall;
export const getEmissionsOverall = flow(getState, emissionsOverall);

const currentVesselEmissions = (state) => state.emissionsIndividual;
export const getCurrentVesselEmissions = flow(getState, currentVesselEmissions);

const vesselList = (state) => state.vesselList;
export const getVesselList = flow(getState, vesselList);

const emissionTypeGraph = (state) => state.emissionLineGraph.selectedSwitch;
export const getEmissionTypeGraph = flow(getState, emissionTypeGraph);

const emissionDateRangeGraph = (state) => state.emissionLineGraph.currentDateRange;
export const getEmissionDateRangeGraph = flow(getState, emissionDateRangeGraph);


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

const emissionLineGraph = (state) => state.emissionLineGraph.data;
export const getEmissionData = flow(getState, emissionLineGraph);

const routeEmission = (state) => state.routeEmission.data;
export const getRouteEmission = flow(getState, routeEmission);

const emissionFilter = (state) => state.emissionFilter.data;
export const getEmissionFilter = flow(getState, emissionFilter);

const vesselTypeDropDown = (state) => state.vesselTypeDropDown.data;
export const getVesselTypeDropDown = flow(getState, vesselTypeDropDown);

const vesselSizeDropDown = (state) => state.vesselSizeDropDown.data;
export const getVesselSizeDropDown = flow(getState, vesselSizeDropDown);

const departureDropDown = (state) => state.departureDropDown.data;
export const getDepartureDropDown = flow(getState, departureDropDown);

const destinationDropDown = (state) => state.destinationDropDown.data;
export const getDestinationDropDown = flow(getState, destinationDropDown);

const showVariables = (state) => state.routeEmission.showVariables;
export const getShowVariables = flow(getState, showVariables);


import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const searchTerm = (state) => state.searchTerm;
export const getSearchTerm = flow(getState, searchTerm);

const searchResult = (state) => state.searchResult.data;
export const getResults = flow(getState, searchResult);


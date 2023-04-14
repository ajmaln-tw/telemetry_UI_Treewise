import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const tableProps = (sample) => sample.tablePagination;
export const getTableProps = flow(getState, tableProps);

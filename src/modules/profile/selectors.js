import { flow } from "lodash";
import { STATE_REDUCER_KEY } from "./constants";

const getState = (state) => state[STATE_REDUCER_KEY];

const profileDetails = (state) => state.profileDetails;
export const getProfileDetails = flow(getState, profileDetails);

const cropData = (state) => state.cropData;
export const getCropData = flow(getState, cropData);

const open = (state) => state.modal.openProfileModal;
export const getModalOpen = flow(getState, open);

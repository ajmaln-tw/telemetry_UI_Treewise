import React, { lazy } from "react";
import { PROFILE_PATH } from "../constants";
// import ChangePassword from "./ChangePassword";
// import EditProfile from "./EditProfile";
// import Settings from "./Settings";
// import Subcriptions from "./Subcriptions";

const EditProfile = lazy(() => import("./EditProfile"));
const ChangePassword = lazy(() => import("./ChangePassword"));
const Settings = lazy(() => import("./Settings"));
const Subscription = lazy(() => import("./Subscriptions"));

const MyProfileWrapper = (props) => {
    const { type = "" } = props;
    if (type === PROFILE_PATH.EDIT_PROFILE) {
        return (
            <EditProfile />

        );
    }
    if (type === PROFILE_PATH.CHANGE_PASSWORD) {
        return (
            <ChangePassword />
        );
    }
    if (type === PROFILE_PATH.SETTINGS) {
        return (
            <Settings />
        );
    }
    if (type === PROFILE_PATH.SUBSCRIPTION) {
        return (
            <Subscription />
        );
    }
};

export default MyProfileWrapper;

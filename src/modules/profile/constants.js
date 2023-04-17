export const STATE_REDUCER_KEY = "profile";

export const PROFILE_PATH = {
    EDIT_PROFILE: "EDIT_PROFILE",
    CHANGE_PASSWORD: "CHANGE_PASSWORD",
    SETTINGS: "SETTINGS",
    SUBSCRIPTION: "SUBSCRIPTION"

};

export const FREE_TIER = [
    { name: "Access to dashboard", status: true },
    { name: "Encryption", status: true },
    { name: "Overuse protection", status: true },
    { name: "2 API Endpoints", status: true },
    { name: "Restricted Access", status: true },
    { name: "Feature on demand", status: false },
    { name: "Full Customer Support", status: false }
];
export const PREMIUM_TIER = [
    { name: "Access to dashboard", status: true },
    { name: "Encryption", status: true },
    { name: "Overuse protection", status: true },
    { name: "All API Endpoints", status: true },
    { name: "Full Access", status: true },
    { name: "Feature on demand", status: true },
    { name: "Full Customer Support", status: true }
];



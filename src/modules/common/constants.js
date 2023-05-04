export const STATE_REDUCER_KEY = "common";

export const COMMON_TABLE_PAGINATION = { pageNo: 0, totalRecords: 0, pageSize: 5, totalPages: 1 };

export const COMMON_TABLE_INITIAL_STATE = {
    requestInProgress: false,
    data: [],
    pagination: COMMON_TABLE_PAGINATION,
    filters: {}
};


export const EMAIL = (string) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(string);

export const SMS = (number) => !/\D/.test(number);

export const RESOURCE_PERMISSIONS = {

};

export const USER_TYPES = {
    ADMIN: 9,
    COMPANY: 0
};
export const USER_TYPE_PERMISSIONS = {
    ADMIN: USER_TYPES.ADMIN,
    COMPANY: USER_TYPES.COMPANY
};

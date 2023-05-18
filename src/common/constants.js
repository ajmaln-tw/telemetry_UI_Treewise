export const HTTP_CONSTANTS = {

  HTTP_HEADERS: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Cache-Control": "no-cache"
  }
};


export const REQUEST_METHOD = {
  GET: "GET",
  PUT: "PUT",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
  FILE: "FILE"
};

export const STORAGE_KEYS = {
  ACCESS_TOKEN: "ACCESS_TOKEN",
  REFRESH_TOKEN: "REFRESH_TOKEN"
};

export const PROJECT_PROPS = {
  BRAND: {
    LOGO: "",
    NAME: ""
  }
};

export const EMPTY_SELECT = { id: "", name: "SELECT" };

export const REACT_TABLE_COMMON_OPTIONS = {
  enableRowActions: true,
  enableRowSelection: true,
  getCanMultiSelect: true,
  enableSelectAll: false,
  enablePagination: false,
  enableGlobalFilter: false,
  enableColumnActions: false,
  enableDensityToggle: false,
  enableHiding: false,
  enableColumnFilterModes: false,
  enableStickyHeader: true,
  positionToolbarAlertBanner: "top",
  enableTopToolbar: false

};

export const SHOW_EXAMPLE_MODULE = false;

export const SHOW_IN_PROGRESS_MODULE = true;

export const ROWS_PER_PAGE = [10, 15, 20];

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4
};

export const COMMON_TABLE_PAGINATION = { pageIndex: 0, count: 500, pageSize: 25 };

export const imageURL = `${process.env.REACT_APP_API_URL}`;


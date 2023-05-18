import React, { useEffect, useMemo } from "react";
import CustomReactTable from "../../../common/components/custom/CustomReactTable";
import { NOTIFICATIONS_TABLE_COLUMN, STATE_REDUCER_KEY, notificationsColumnOrder } from "../constants";
import { Icons } from "../../../common/components";
import CustomListMenu from "../../../common/components/custom/CustomListMenu";
import { COMMON_TABLE_PAGINATION, REACT_TABLE_COMMON_OPTIONS } from "../../../common/constants";
import { actions as sliceActions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loadUsers } from "../actions";

const { EditIcon, OpenInNewIcon } = Icons;

const NotificationTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { table: { notifications = {} } = {}, tablePagination: { pageSize, pageIndex, count } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const { data: users = [], requestInProgress: loading = false, rowSelectionState = {} } = notifications;

    const columns = useMemo(
        () => NOTIFICATIONS_TABLE_COLUMN,
        []
    );
    const actions = (row) => {
        let item = [1, 2];
        let customActions = [];
        if (item[0]) {
            customActions.push({ title: "Edit", icon: <EditIcon fontSize="small" />, handleClick: () => navigate(`${row.id}/edit`) });
        }
        if (item[1]) {
            customActions.push({ title: "View", icon: <OpenInNewIcon fontSize="small" />, handleClick: () => navigate(`${row.id}/view`) });
        }
        return customActions;
    };

    const displayColumnDefOptions = {
        "mrt-row-actions": {
            Cell: ({ row }) => <CustomListMenu customActions={actions(row)} />

        }
    };

    const handleChangePage = (e, newPage) => {
        dispatch(sliceActions.setPagination({ count, pageSize, pageIndex: newPage }));
        dispatch(loadUsers());
    };
    const handleRowSelection = (props) => {
        let items = props(rowSelectionState);
        dispatch(sliceActions.setRowSelectionState(items));
        let payload = [];
        Object.keys(items).forEach(o => payload.push(users[o]));
        dispatch(sliceActions.setRowSelection(payload));
    };
    const handleChangeRowsPerPage = (e) => {
        dispatch(sliceActions.setPagination({ ...COMMON_TABLE_PAGINATION, pageSize: e.target.value }));
        dispatch(loadUsers());
    };
    const options = {
        ...REACT_TABLE_COMMON_OPTIONS,
        enableRowSelection: false,
        requestInProgress: loading,
        pageSize: pageSize,
        rowCount: pageSize,
        page: pageIndex,
        enableFilters: true,
        state: {
            pageIndex: pageIndex,
            pageSize: pageSize,
            rowSelection: rowSelectionState
        },
        initialState: {
            columnOrder: notificationsColumnOrder
        },
        customPagination: {
            handleChangePage,
            handleChangeRowsPerPage,
            rowsPerPageOptions: [25, 50, 100, 200]
        },
        displayColumnDefOptions,
        handleRowSelection
    };

    useEffect(() => {
        dispatch(loadUsers());
        return (() => dispatch(sliceActions.clear()));
    }, []);
    return (
        <CustomReactTable
            data={users}
            columns={columns}
            options={options}
            enableRowVirtualization={false}
            enableCustomTableFilter={true}
            title={"Notifications"}
        />
    );
};

export default NotificationTable;

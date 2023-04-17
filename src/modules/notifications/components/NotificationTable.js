import React, { useEffect, useMemo } from "react";
import CustomReactTable from "../../../common/components/custom/CustomReactTable";
import { STATE_REDUCER_KEY } from "../constants";
import { Icons, Components } from "../../../common/components";
import CustomListMenu from "../../../common/components/custom/CustomListMenu";
import { COMMOM_TABLE_PAGINATION, REACT_TABLE_COMMON_OPTIONS } from "../../../common/constants";
import { actions as sliceActions } from "../slice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loadUsers } from "../actions";

const { EditIcon, OpenInNewIcon } = Icons;
const { Grid } = Components;

const NotificationTable = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { table: { notifications = {} } = {}, tablePagination: { pageSize, pageIndex, count } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const { data: users = [], requestInProgress: loading = false, rowSelectionState = {} } = notifications;

    const columns = useMemo(
        () => [
            {
                id: "id",
                header: "Id",
                accessorKey: "id",
                size: 70
            },
            {
                id: "albumId",
                header: "Album ID",
                accessorKey: "albumId",
                size: 150
            },
            {
                id: "thumbnailUrl",
                header: "View",
                size: 150,
                Cell: ({ row }) => (
                    <Grid
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                            backgroundImage: `url(${row.thumbnailUrl || ""})`, backgroundSize: "cover",
                            width: "50px",
                            height: "50px"
                        }}
                    >
                        {row.thumbnailUrl}
                    </Grid>
                )
            },
            {
                id: "title",
                header: "Titke",
                accessorKey: "title",
                size: 250
            },
            {
                id: "url",
                header: "URL",
                accessorKey: "url",
                size: 150,
                Cell: ({ cell }) => (
                    <a href={cell.getValue()} rel="noreferrer" target="_blank" >
                        {cell.getValue()}
                    </a >
                )
            }
        ],
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
        dispatch(sliceActions.setPagination({ ...COMMOM_TABLE_PAGINATION, pageSize: e.target.value }));
        dispatch(loadUsers());
    };
    const options = {
        ...REACT_TABLE_COMMON_OPTIONS,
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

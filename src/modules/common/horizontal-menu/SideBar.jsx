import { Box, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics, TbBuildingFactory2 } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../constants";
import { FiMenu as Menu } from "react-icons/fi";
import { actions as sliceActions } from "../slice";
import { logout as logoutAction } from "../actions";

export let active = {
    display: "flex",
    justifyContent: "space-evenly",
    color: "white.main",
    bgcolor: "primary.main",
    "&:hover": {
        color: "secondary.main",
        bgcolor: "primary.dark"
    },
    fontWeight: "700 !important"
};
export let inActive = {
    display: "flex",
    justifyContent: "space-evenly",
    color: "grey.main",
    bgcolor: "secondary.main",
    "&:hover": {
        color: "secondary.main",
        bgcolor: "primary.dark"
    }
};
const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const drawerToggle = useSelector(state => state[STATE_REDUCER_KEY]).drawerToggle;
    const dispatch = useDispatch();
    const handleDrawer = () => dispatch(sliceActions.setUnsetDrawer());
    const handleLogout = () => {
        dispatch(logoutAction({ isManualLogout: true }));
    };
    let dashStyle = { ...inActive };
    let analyticsStyle = { ...inActive };
    let notificationsStyle = { ...inActive };
    let profileStyle = { ...inActive };
    let emissionsStyle = { ...inActive };
    if (location.pathname === "/dashboard") {
        dashStyle = { ...active };
    }
    if (location.pathname === "/analytics") {
        analyticsStyle = { ...active };
    }
    if (location.pathname === "/notifications") {
        notificationsStyle = { ...active };
    }
    if (location.pathname.includes("/profile")) {
        profileStyle = { ...active };
    }
    if (location.pathname.includes("/emissions")) {
        emissionsStyle = { ...active };
    }

    let logout = {
        color: "white.main",
        height: "47px",
        fontSize: "14px",
        bgcolor: "red.main",
        "&:hover": {
            bgcolor: "red.dark"
        }
    };
    const mainStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        backgroundColor: "secondary.main",
        fontSize: "14px",
        width: drawerToggle ? "270px" : "96px",
        transition: "width ease-in-out 300ms",
        py: 0
    };

    return (

        <List sx={mainStyle}>
            <List sx={{ px: 1.5, height: "calc(100vh - 240px) !important", overflowX: "hidden", overflowY: "auto" }}>
                <List sx={{ px: 0.5, py: 0, mb: 2, display: "flex", justifyContent: drawerToggle ? "flex-start" : "center" }}>
                    <Box >
                        <IconButton type="button" onClick={handleDrawer}>
                            <Menu size="20px" />
                        </IconButton>
                    </Box>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...dashStyle, px: 0.5, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../dashboard")}>
                        <MdOutlineSpaceDashboard size="20px" />
                        {drawerToggle && <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Dashboard"}</ListItemText>}
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...analyticsStyle, px: 0.5, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../analytics")}>
                        <TbBrandGoogleAnalytics size="20px" />
                        {drawerToggle && <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Analytics"}</ListItemText>}
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...emissionsStyle, px: 0.5, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../emissions")}>
                        <TbBuildingFactory2 size="20px" />
                        {drawerToggle && <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Emissions"}</ListItemText>}
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...notificationsStyle, px: 0.5, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../notifications")}>
                        <IoIosNotificationsOutline size="20px" />
                        {drawerToggle && <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Notifications"}</ListItemText>}
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...profileStyle, px: 0.5, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../profile/info")}>
                        <CiUser size="20px" />
                        {drawerToggle && <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Profile"}</ListItemText>}
                    </ListItemButton>
                </List>
            </List>
            <List sx={{ px: 1.5, pt: 6 }}>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...logout, px: 1, py: 0 }} onClick={() => handleLogout()}>
                        {drawerToggle && <ListItemText sx={{ px: 1, fontSize: "14px !!important" }}>{"Logout"}</ListItemText>}
                        <BiLogOutCircle size="20px" />
                    </ListItemButton>
                </List>
            </List>
        </List >

    );
};

export default SideBar;

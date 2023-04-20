import { Box, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import { STATE_REDUCER_KEY } from "../constants";
import { actions as sliceActions } from "../slice";

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
    const dispatch = useDispatch();
    const drawerToggle = useSelector(state => state[STATE_REDUCER_KEY]).drawerToggle;
    const handleDrawer = () => dispatch(sliceActions.setUnsetDrawer());
    let dashStyle = { ...inActive };
    let analyticsStyle = { ...inActive };
    let notificationsStyle = { ...inActive };
    let profileStyle = { ...inActive };
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

    let logout = {
        pl: 1, py: 0,
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
            <Box sx={{ alignSelf: drawerToggle ? "end" : "center" }}>
                <IconButton type="button" onClick={handleDrawer}>
                    <MenuIcon />
                </IconButton>
            </Box>
            <List sx={{ pl: 4, pr: 2, pt: 6, height: "calc(100vh - 240px) !important", overflowX: "hidden", overflowY: "auto" }}>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...dashStyle, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../dashboard")}>
                        <MdOutlineSpaceDashboard size="20px" />
                        {drawerToggle && <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Dashboard"}</ListItemText>}
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...analyticsStyle, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../analytics")}>
                        <TbBrandGoogleAnalytics size="20px" />
                        {drawerToggle && <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Analytics"}</ListItemText>}
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...notificationsStyle, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../notifications")}>
                        <IoIosNotificationsOutline size="20px" />
                        {drawerToggle && <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Notifications"}</ListItemText>}
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...profileStyle, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../profile/info")}>
                        <CiUser size="20px" />
                        {drawerToggle && <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Profile"}</ListItemText>}
                    </ListItemButton>
                </List>
            </List>
            <List sx={{ pl: 4, pr: 2, pt: 6 }}>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={logout} onClick={() => navigate("./logout")}>
                        {drawerToggle && <ListItemText sx={{ fontSize: "14px !!important" }}>{"Logout"}</ListItemText>}
                        <BiLogOutCircle size="20px" />
                    </ListItemButton>
                </List>
            </List>
        </List >

    );
};

export default SideBar;

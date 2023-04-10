import { List, ListItemButton, ListItemText, Typography } from "@mui/material";
import { routes } from "../../routes";


// import { useSelector } from "react-redux";
import DrawerMenu from "./DrawerMenu";
import { FiHome } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";
// import { STATE_REDUCER_KEY } from "../../user/constant";


const SideBar = () => {
    const depthLevel = 0;

    // const menuItems = checkUserTypeMenuPermissions(routes, [userType.id || USER_TYPE_PERMISSIONS.CUSTOMER]);
    const menuItems = routes;
    const navigate = useNavigate();
    const location = useLocation();
    let active = {
        color: "white.main",
        bgcolor: "secondary.main"
    };
    if (location.pathname === "/") {
        active = {
            color: "secondary.main",
            bgcolor: "white.main",
            "&:hover": {
                color: "secondary.main",
                bgcolor: "white.main"
            },
            fontWeight: "700 !important"
        };
    }

    return (

        <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "secondary.main", fontSize: "14px", minWidth: "310px", py: 0 }}>
            <List sx={{ pl: 4, pr: 2, pt: 6, height: "calc(100vh - 240px) !important", overflowX: "hidden", overflowY: "auto" }}>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...active, pl: 1, py: 0, height: "47px", fontSize: "14px" }} onClick={() => navigate("../")}>
                        <FiHome />
                        <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"home"}</ListItemText>
                    </ListItemButton>
                </List>
                {menuItems[0].children.map((item, index) => (
                    item.title ? (
                        <DrawerMenu item={item} key={index} path="" depth={depthLevel} index={index} />
                    ) : (<>
                    </>)
                ))}
            </List>
            <Typography sx={{ color: "white.main", m: 5 }}> {"version"}</Typography>
        </List >

    );
};

export default SideBar;

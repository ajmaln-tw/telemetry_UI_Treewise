import { List, ListItemButton, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BiLogOutCircle } from "react-icons/bi";


const SideBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    let active = {
        color: "white.main",
        bgcolor: "primary.dark"
    };
    if (location.pathname === "/") {
        active = {
            color: "grey.main",
            bgcolor: "secondary.main",
            "&:hover": {
                color: "secondary.main",
                bgcolor: "primary.dark"
            },
            fontWeight: "700 !important"
        };
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

    return (

        <List sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "secondary.main", fontSize: "14px", minWidth: "270px", py: 0 }}>
            <List sx={{ pl: 4, pr: 2, pt: 6, height: "calc(100vh - 240px) !important", overflowX: "hidden", overflowY: "auto" }}>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...active, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../")}>
                        <MdOutlineSpaceDashboard />
                        <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Dashboard"}</ListItemText>
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...active, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../")}>
                        <TbBrandGoogleAnalytics />
                        <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Analytics"}</ListItemText>
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...active, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../")}>
                        <IoIosNotificationsOutline />
                        <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Notifications"}</ListItemText>
                    </ListItemButton>
                </List>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={{ ...active, pl: 1, py: 0, height: "47px", fontSize: "14px", my: 0.4 }} onClick={() => navigate("../")}>
                        <CiUser />
                        <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Profile"}</ListItemText>
                    </ListItemButton>
                </List>
            </List>
            <List sx={{ pl: 4, pr: 2, pt: 6 }}>
                <List sx={{ px: 0.5, py: 0 }}>
                    <ListItemButton sx={logout} onClick={() => navigate("./logout")}>
                        <ListItemText sx={{ pl: 1, fontSize: "14px !!important" }}>{"Logout"}</ListItemText>
                        <BiLogOutCircle />
                    </ListItemButton>
                </List>
            </List>
        </List >

    );
};

export default SideBar;

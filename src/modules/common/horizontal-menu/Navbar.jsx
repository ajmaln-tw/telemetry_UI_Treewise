import { AppBar, Toolbar } from "@mui/material";
import { imageURL } from "common/constants";
import { USER_TYPE_PERMISSIONS } from "modules/resources";
import { STATE_REDUCER_KEY } from "modules/user/constants";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { checkUserTypeMenuPermissions } from "utils/permissionUtils";
import homeActive from "../../../assets/images/home-active.png";
import homeIcon from "../../../assets/images/home-icon.png";
import menuOpen from "../../../assets/images/menu-open.png";
import userIcon from "../../../assets/images/userIcon.png";
import { Components } from "../../../common/components";
import { routes } from "../../routes";
import ProfileMenu from "../header/ProfileMenu";
import Drawers from "./Drawer";
import MenuItems from "./MenuItems";
import "./module.style.css";

const { Box, Typography, IconButton, Grid, Avatar } = Components;
const Navbar = ({ name }) => {
  const { userDetails: { data: { activeProfile: { userType } } = {} } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
  const menuItems = checkUserTypeMenuPermissions(routes, [userType.id || USER_TYPE_PERMISSIONS.CUSTOMER]);
  const location = useLocation();
  const [link, setLink] = useState(location.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { userDetails: { data = {} } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
  const navigate = useNavigate();
  link === location.pathname ? "" : setLink(location.pathname);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //mui menu toggle
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar
      sx={{ position: "sticky", top: 0, width: "100%", boxShadow: "0px 4px 10px 5px #00000014", height: "7vh", display: "flex" }}
      color="background"
      component="nav"
    >
      <Toolbar
        sx={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: { md: "1fr" }, height: "40px", mx: 6, justifyContent: "space-between", padding: { xs: 0, md: "inherit" } }}
        color="secondary">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
          alt="menu"
        >
          <Box component="img"
            alt="menu open"
            src={menuOpen}

          />
        </IconButton>
        <IconButton
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "block" }, borderRadius: 0 }}
          onClick={() => navigate("/Dashboard")}
          className={link === "/" ? "active" : ""}
        >
          <Box component="img"
            alt="home icon"
            src={link === "/" ? homeActive : homeIcon}
          />
        </IconButton>

        {menuItems[0]?.children?.map((menu, index) => {
          const depthLevel = 0;
          return <MenuItems items={menu} key={index} depthLevel={depthLevel} path="" current={link} />;
        })
        }
        <Grid
          sx={{
            justifyContent: "end", py: 0.5, pl: 2, borderRadius: "10px", display: {
              xs: "none", md: "flex", alignSelf: "right", paddingRight: "20px"
            }
          }}
          variant="contained" component="div"
          onClick={handleClick}
        >
          <IconButton sx={{ p: 2, width: "50px" }}>
            {data.activeProfile?.imageId ?
              <Avatar
                sx={{ height: "25px", width: "25px" }}
                src={`${imageURL}${data?.activeProfile?.imageId}`}
                alt=""
              />
              :
              <Box
                sx={{ height: "25px", width: "25px" }}
                component="img"
                alt="user icon"
                src={userIcon}
              />
            }
          </IconButton>
          <Box
            sx={{ display: "flex", flexDirection: "column", ml: 2 }}
          >
            <Typography
              sx={{ fontSize: "12px", mb: 0, textAlign: "left" }} color="secondary"
            >{name}
            </Typography>
          </Box>
        </Grid>
        <IconButton
          color="inherit"
          sx={{ display: { md: "none" }, float: "right" }}
          alt="menu"
          onClick={handleClick}
        >
          <Box component="img"
            alt="menu open"
            src={userIcon}
          />
        </IconButton>
        <ProfileMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
      </Toolbar>
      <Drawers handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} menuItems={menuItems} />

    </AppBar >
  );
};

export default Navbar;

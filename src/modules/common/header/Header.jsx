import { Components } from "../../../common/components";
import companyLogo from "../../../assets/images/logo_tele.png";
import SearchBox from "../../home/components/SearchBox";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { FiMenu as Menu } from "react-icons/fi";
import { actions as sliceActions } from "../slice";

const { Box, Grid } = Components;
const Header = () => {
    //, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
    const dispatch = useDispatch();
    // const drawerToggle = useSelector(state => state[STATE_REDUCER_KEY]).drawerToggle;
    const handleDrawer = () => dispatch(sliceActions.setUnsetDrawer());
    return (
        <Grid
            component="header"
            sx={{ backgroundColor: "secondary.main", pb: 0.4, width: "100%", height: "83px", position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            <Box
                sx={{
                    display: "flex", justifyContent: "end", alignItems: "center", mr: 5, borderRadius: "10px", p: 1, position: "relative"
                }}
                variant="contained" component="div"
            >
                <Box sx={{ minWidth: "268px", pl: 2.6 }}>
                    <Box sx={{ display: "flex", justifyContent: "flex-start", alignItems: "center", mt: 3 }}>
                        <Box sx={{ alignSelf: "center" }}>
                            <IconButton type="button" onClick={handleDrawer}>
                                <Menu size="20px" />
                            </IconButton>
                        </Box>
                        <Box sx={{ m: 1, mr: 1 }}>
                            <img width={70} height={70} src={companyLogo} alt="logo" />
                        </Box>
                    </Box>
                </Box>
                {/* Search */}
                <SearchBox />
            </Box>
        </Grid >
    );
};

export default Header;

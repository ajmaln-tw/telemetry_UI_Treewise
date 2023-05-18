import { Components } from "../../../common/components";
import companyLogo from "../../../assets/images/logo_tele.png";
import SearchBox from "../../home/components/SearchBox";
import { useLocation } from "react-router-dom";

const { Box, Grid } = Components;
const Header = () => {
    //, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
    // const drawerToggle = useSelector(state => state[STATE_REDUCER_KEY]).drawerToggle;
    const { pathname } = useLocation();
    return (
        <Grid
            component="header"
            sx={{ backgroundColor: "secondary.main", pb: 0.4, width: "100%", height: "83px", position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            <Box
                sx={{
                    display: "flex", justifyContent: "space-between", alignItems: "center", mr: 1, borderRadius: "10px", p: 1, position: "relative"
                }}
            >
                <Box sx={{ minWidth: "140px" }}>
                    <Box sx={{ m: 1, mr: 1, p: 2 }}>
                        <img width={58} height={55} src={companyLogo} alt="logo" />
                    </Box>
                </Box>
                {/* Search */}
                {pathname.includes("/analytics") && <SearchBox />}
                {pathname.includes("/dashboard") && <SearchBox />}

            </Box>
        </Grid >
    );
};

export default Header;

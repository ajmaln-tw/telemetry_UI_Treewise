import { Components } from "../../../common/components";
import companyLogo from "../../../assets/images/logo_tele.png";
import SearchBox from "../../home/components/SearchBox";

const { Box, Grid } = Components;
const Header = () => {
    //, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
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
                <Box sx={{ minWidth: "268px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 3 }}>
                        <Box sx={{ m: 1 }}>
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

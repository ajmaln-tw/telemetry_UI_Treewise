import { Components } from "../../../common/components";
import companyLogo from "../../../assets/images/logo_tele.png";
import { IconButton, InputBase } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import { MdClose } from "react-icons/md";

const { Box, Grid } = Components;

const Header = () => {
    //, "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
    return (
        <Grid
            component="header"
            sx={{ backgroundColor: "secondary.main", width: "100%", height: "82px", position: "sticky", top: 0, zIndex: 100, display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            <Box
                sx={{
                    display: "flex", justifyContent: "end", alignItems: "center", mr: 5, borderRadius: "10px", p: 1, position: "relative"
                }}
                variant="contained" component="div"
            >
                <Box sx={{ minWidth: "268px" }}>
                    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", m: 1 }}>
                        <Box sx={{ m: 1 }}>
                            <img width={50} height={50} src={companyLogo} alt="logo" />
                        </Box>
                    </Box>
                </Box>
                {/* Search */}
                <Box
                    display="flex"
                    backgroundColor={"#ffff"}
                    p={0.6}
                    ml={1}
                    borderColor={"red.main"}
                    borderRadius={5}
                >
                    <IconButton type="button">
                        <BiSearch />
                    </IconButton>
                    <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search for Vessels" />
                    <IconButton type="button">
                        <MdClose />
                    </IconButton>
                </Box>
            </Box>
        </Grid >
    );
};

export default Header;

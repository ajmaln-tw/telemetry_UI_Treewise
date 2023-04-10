import { useState } from "react";
import { Components } from "../../../common/components";

import ProfileMenu from "./ProfileMenu";
const { Box, Grid } = Components;

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Grid
            component="header"
            sx={{ width: "100%", height: "82px", position: "sticky", top: 0, zIndex: 100, backgroundColor: "secondary.main", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
            <Box
                sx={{
                    display: "flex", justifyContent: "end", alignItems: "center", mr: 5, borderRadius: "10px", p: 1, position: "relative", "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" }
                }}
                variant="contained" component="div"
            >
                {/* Search */}
            </Box>
            <ProfileMenu open={open} handleClose={handleClose} anchorEl={anchorEl} />
        </Grid >
    );
};

export default Header;

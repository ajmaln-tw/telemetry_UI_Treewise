import { IconButton, Modal, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Icons } from "../../../common/components";
import Main from "./Main";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";


const { SupportAgent, CloseOutlined } = Icons;

const iconStyle = {
    position: "fixed",
    minHeight: "30px",
    minWidth: "30px",
    bottom: 21,
    right: 10,
    backgroundColor: "transparent",
    "&:hover": {
        backgroundColor: "secondary.dark"
    }

};
const modalStyle = {
    position: "fixed",
    bottom: 8,
    right: 9,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly"
};
const iconWrapper = {
    margin: "0.6rem",
    backgroundColor: "secondary.main",
    padding: 1,
    cursor: "pointer",
    borderRadius: "20px",
    borderWidth: "2px",
    borderColor: "grey.main",
    "&:hover": {
        backgroundColor: "secondary.dark"
    }
};
let icons = [
    <IconButton key={1} sx={iconWrapper}>
        <SupportAgent size="small" sx={{ color: "primary.main" }} />
    </IconButton>
];


const Footer = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const theme = useTheme();
    // const smScreen = useMediaQuery(theme.breakpoints.down("md"));

    // if (smScreen) {
    //     icons = [<IconButton key={2} sx={iconWrapper}>
    //         <Map fontSize="small" sx={{ color: "primary.main" }} />
    //     </IconButton>,
    //     <IconButton key={1} sx={iconWrapper}>
    //         <SupportAgent size="small" sx={{ color: "primary.main" }} />
    //     </IconButton>
    //     ];
    // }

    return (
        <>
            <IconButton sx={iconStyle} onClick={() => handleOpen()}>
                <Tooltip title="Help Center" >
                    <HelpOutlineIcon fontSize="medium" sx={{ color: "primary.main" }} />
                </Tooltip>
            </IconButton>

            <Main />
            <Modal
                open={open}
                hideBackdrop={true}
                onClose={handleClose}>
                <Box style={modalStyle}>
                    {icons}
                    <IconButton onClick={() => handleClose()} sx={{ ...iconWrapper, backgroundColor: "secondary.main" }}>
                        <CloseOutlined size="small" sx={{ color: "primary.main" }} />
                    </IconButton>
                </Box>
            </Modal>
        </>
    );
};

export default Footer;

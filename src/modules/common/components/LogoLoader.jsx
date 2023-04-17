import React from "react";
import LogoLoadetGif from "../../../assets/images/loader-type2.gif";
import { Box } from "@mui/system";
const LogoLoader = () => {
    return (
        <Box sx={{
            position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"
        }}>
            <img src={LogoLoadetGif} alt={"Logo Loader"} width={112} height={120} />
        </Box>

    );
};

export default LogoLoader;

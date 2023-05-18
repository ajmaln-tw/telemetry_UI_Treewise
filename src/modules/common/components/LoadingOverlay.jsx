import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import { ScaleLoader, PulseLoader, SyncLoader } from "react-spinners";
import palette from "../../../common/themes/palette.json";
import SearchResultSkeleton from "./Skeleton/SearchResultSkeleton";

const DefaultLoader = ({ speedMultiplier, color }) => {
    return <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <SyncLoader speedMultiplier={speedMultiplier} color={color} />;
        <Typography sx={{ fontWeight: 600, fontSize: "14px" }} color={color}>Loading...</Typography>
    </Box>;
};
const LoadingCustomOverlay = ({ active, children, spinnerProps = "" }) => {
    let loader = <ScaleLoader color={palette.palette.grey.main} />;

    switch (spinnerProps) {
        case "selectTagProp":
            loader = <PulseLoader color={palette.palette.grey.main} />;
            break;
        case "scale":
            loader = <ScaleLoader color={palette.palette.grey.main} />;
            break;
        case "skeleton":
            loader = <SearchResultSkeleton />;
            break;
        default:
            loader = <DefaultLoader speedMultiplier={0.5} color={palette.palette.grey.dark} />;
            break;
    }

    return <LoadingOverlay
        active={active}
        styles={{
            overlay: (base) => ({
                ...base,
                background: "transparent",
                zIndex: 999
            })
        }}

        spinner={loader}
    >
        {children}
    </LoadingOverlay>;

};
export default LoadingCustomOverlay;

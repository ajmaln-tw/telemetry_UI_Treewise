import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LoadingOverlay from "react-loading-overlay-ts";
import {
    ScaleLoader, PulseLoader, GridLoader
} from "react-spinners";
import palette from "../../../common/themes/palette.json";
import SearchResultSkeleton from "./Skeleton/SearchResultSkeleton";
import FetchLoader from "./FetchLoader";
import { fadeLoaderStyle } from "./constants";

const DefaultLoader = () => {
    return <Box sx={{ display: "flex", px: 2, py: 1, justifyContent: "center", flexDirection: "column", borderRadius: "15px", backgroundColor: palette.palette.primary.main }}>
        <Typography sx={{ fontWeight: 600, fontSize: "14px" }} color={"#fff"}>Fetching...</Typography>
        <ScaleLoader color={"#fff"} speedMultiplier={1.9} />
    </Box>;
};

const MapLoader = () => {
    return <Box sx={fadeLoaderStyle}>
        <Box>
            <GridLoader color={palette.palette.primary.main} speedMultiplier={1.9} />
        </Box>
        <Typography sx={{ color: "primary.main", fontWeight: 500 }}>Fetching Map Data</Typography>
    </Box>;
};
const LoadingCustomOverlay = ({ active, children, spinnerProps = "" }) => {
    let loader = <ScaleLoader color={palette.palette.grey.main} />;

    switch (spinnerProps) {
        case "selectTagProp":
            loader = <PulseLoader speedMultiplier={1.5} color={palette.palette.grey.main} />;
            break;
        case "scale":
            loader = <ScaleLoader speedMultiplier={1.5} color={palette.palette.grey.main} />;
            break;
        case "skeleton":
            loader = <SearchResultSkeleton />;
            break;
        case "fetch":
            loader = <FetchLoader />;
            break;
        case "map":
            loader = <MapLoader />;
            break;
        default:
            loader = <DefaultLoader speedMultiplier={1.5} color={palette.palette.grey.dark} />;
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

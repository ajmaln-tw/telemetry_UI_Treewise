import { Box, Grid } from "@mui/material";
import React from "react";
import EmissionStatsCard from "./EmissionStatsCard";
import CustomHeader from "../../common/components/CustomHeader";
import MUISelect from "../../../common/components/custom/CustomMUISelect";
import { useState } from "react";
import { fetchCurrentVesselEmission } from "../actions";
import { useDispatch } from "react-redux";

const ActualEmissions = (props) => {
    const dispatch = useDispatch();
    const [select, setSelect] = useState("Vessel Name");
    const selectList = ["Vessel Name", "AVC", "XYZ"];
    const selectedItem = (value) => {
        setSelect(value);
        dispatch(fetchCurrentVesselEmission({ vesselId: value }));
    };
    const { currentVesselEmissions: { co2 = 24, sox = 150 } = {}, nox = 48 } = props;
    return <Box sx={{ width: "99%", px: 0.5, backgroundColor: "#f3faff", minHeight: "280px", borderRadius: "12px", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "space-between" }}>
        <Box sx={{ alignSelf: "end", my: 2 }}>
            <MUISelect value={select} dataList={selectList} onItemSelect={selectedItem} />
        </Box>
        <Grid sx={{
            py: 1,
            display: "flex", justifyContent: "space-around", alignItems: "center"
        }}>
            <EmissionStatsCard color={"#249D57"} value={co2} title="CO2" />
            <EmissionStatsCard color={"#3498DB"} value={sox} title="SOx" />
            <EmissionStatsCard color={"#F6C709"} value={nox} title="Nox" />
        </Grid >
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CustomHeader sx={{ fontSize: "16px" }} content="Vessel Name Emissions" />
        </Box>
    </Box >;
};

export default ActualEmissions;

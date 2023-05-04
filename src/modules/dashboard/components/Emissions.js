import { Box, Typography } from "@mui/material";
import React from "react";
import CustomHeader from "../../common/components/CustomHeader";
import MUISelect from "../../../common/components/custom/CustomMUISelect";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEmissionData } from "../actions";

const boxStyle = {
    display: "flex",
    rowGap: "0.7rem",
    py: 1, px: 0.5, width: "324px",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap"
};

export const Emissions = () => {
    const [select, setSelect] = useState("AXC Vessel");
    const selectList = ["AXC Vessel", "ABB Vessel", "XA Vessel", "XYZ Vessel"];
    const dispatch = useDispatch();
    const selectedItem = (value) => {
        setSelect(value);
        dispatch(fetchEmissionData(value));
    };
    return <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "80%" }}>
            <CustomHeader content="Emission Data" />
            <MUISelect value={select} dataList={selectList} onItemSelect={selectedItem} />
        </Box>
        <Box sx={boxStyle}>
            <Box sx={{ alignItems: "center", backgroundColor: "#D46565", borderRadius: "5px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", height: "150px", width: "150px" }}>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: 800, color: "white.main" }}> 565</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "white.main" }}> Fuel Consumption</Typography>
                </Box>
            </Box>
            <Box sx={{ alignItems: "center", backgroundColor: "#3498DB", borderRadius: "5px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", height: "150px", width: "150px" }}>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: 800, color: "white.main" }}> 78</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "white.main" }}> SO<sub>x</sub></Typography>
                </Box>
            </Box>
            <Box sx={{ alignItems: "center", backgroundColor: "#249D57", borderRadius: "5px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", height: "150px", width: "150px" }}>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: 800, color: "white.main" }}> 323</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "white.main" }}> CO<sup>2</sup> </Typography>
                </Box>
            </Box>
            <Box sx={{ alignItems: "center", backgroundColor: "#F6C709", borderRadius: "5px", textAlign: "center", display: "flex", justifyContent: "center", flexDirection: "column", height: "150px", width: "150px" }}>
                <Box>
                    <Typography sx={{ fontSize: "30px", fontWeight: 800, color: "white.main" }}> 65</Typography>
                    <Typography sx={{ fontSize: "14px", fontWeight: 500, color: "white.main" }}> NO<sub>x</sub> </Typography>
                </Box>
            </Box>
        </Box >
    </Box>;
};

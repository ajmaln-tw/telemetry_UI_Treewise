import { Box, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import MUISelect from "../../../common/components/custom/CustomMUISelect";
import CustomHeader from "../../common/components/CustomHeader";

const VesselsInfo = ({ data = [] }) => {
    const [select, setSelect] = useState("All Vessels");
    // eslint-disable-next-line no-unused-vars
    const [newData, setNewData] = useState([61, 60, 70, 72, 66, 45, 43, 55, 70, 75, 80, 70]);
    const selectedItem = (value) => {
        setSelect(value);
        if (value === "ABC") {
            setNewData([1, 2, 4, 6, 7, 7, 6, 5, 4, 3, 6, 8]);
        } else if (value === "XYZ") {
            setNewData([61, 60, 70, 72, 66, 45, 43, 55, 70, 75, 80, 70]);
        } else if (value === "AXYZ") {
            setNewData([80, 100, 140, 134, 112, 80, 72, 95, 110, 140, 160, 120]);
        } else if (value === "QZA") {
            setNewData([2404, 2040, 2800, 2808, 2064, 1800, 1702, 2200, 2080, 3000, 3200, 2800]);
        }
    };
    const selectList = ["All Vessels", "ABC", "XYZ", "AXYZ", "QZA"];
    return (
        <CustomCard>
            <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <CustomHeader content="Vessels" />
                <MUISelect value={select} dataList={selectList} onItemSelect={selectedItem} />
            </Grid>

            <Grid className="mainTreemetry" sx={{ overflowY: "scroll", maxHeight: "75vh", width: "300px" }}>
                <Grid sx={{ display: "flex", flexDirection: "column" }}>

                    {data.map((ele, i) =>
                        <Box key={`${i}${ele.title}.${ele.dateModified}`}>
                            <Grid sx={{ display: "flex", justifyContent: "space-between", px: 0.8, py: 0.5 }}>
                                <Box item xs={6} sx={{ mx: 0.5, my: 1.2 }}>
                                    <Typography sx={{ fontSize: "12px", fontWeight: 700 }}>{ele.title} </Typography>
                                    <Typography
                                        sx={{
                                            display: "flex",
                                            fontSize: "12px",
                                            fontWeight: 700,
                                            color: ele.status === "Sailing" ? "green.main" : "red.main"
                                        }}> {ele.status}</Typography>
                                </Box>
                                <Box item xs={6} sx={{ mx: 0.5, my: 1.2 }}>
                                    <Typography sx={{ fontSize: "10px", fontWeight: 600 }}> Last updated </Typography>
                                    <Typography sx={{ display: "flex", fontSize: "12px", fontWeight: 600 }}> {ele.dateModified}</Typography>
                                </Box>
                            </Grid>

                        </Box>)}
                </Grid>
            </Grid>
        </CustomCard>
    );
};


export default VesselsInfo;

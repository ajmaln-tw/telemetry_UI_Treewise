import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import CustomMeter from "./CustomMeter";
import CustomCharts from "../../../common/components/custom/CustomCharts";

const chartStyle = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: 700, minHeight: 440, width: "300px%"
};
const Dashboard = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={3} sx={{ display: "flex", justifyContent: "center", minHeight: "100px", minWidth: "350px", py: 1, px: 0.5 }}>
                    <CustomCard >
                        <Box sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-around", py: 0.5 }}>
                            <CustomMeter totalVessels={20} sailing={9} onShore={11} />
                            <Box mx={0.3} sx={{ color: "grey.main" }}>
                                <Typography sx={{ display: "block" }}>Total Vessels</Typography>
                                <Typography sx={{ display: "block" }}>20</Typography>
                            </Box>
                            <Box mx={0.3} sx={{ color: "green.main" }}>
                                <Typography sx={{ display: "block" }}>Sailing</Typography>
                                <Typography sx={{ display: "block" }}>12</Typography>
                            </Box>
                            <Box mx={0.3} sx={{ color: "red.main" }}>
                                <Typography sx={{ display: "block" }}>On Shore</Typography>
                                <Typography sx={{ display: "block" }}>7</Typography>
                            </Box>
                        </Box>

                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={9} sx={{ display: "flex", justifyContent: "center", minHeight: "100px", width: "760px", py: 1, px: 0.5 }}>
                    <CustomCard >
                        <CustomCharts type="Line" sx={chartStyle} />

                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={2} sx={{ display: "flex", justifyContent: "center", height: "700px", py: 1, px: 0.5 }}>
                    <CustomCard >
                        sdfsdf

                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={10} sx={{ display: "flex", justifyContent: "center", height: "100px", py: 1, px: 0.5 }}>
                    <CustomCard >
                        sdfsdf

                    </CustomCard>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Dashboard;

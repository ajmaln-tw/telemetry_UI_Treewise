
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";
import { Components } from "../../../common/components";
import CustomMeter from "./CustomMeter";
import CustomHeader from "../../common/components/CustomHeader";

const { Box, Typography, Grid } = Components;
const StatsCard = () => {
    return (
        <Box sx={{ width: { xs: "250px", sm: "324px" } }}>
            <CustomCard additionalStyle={{}} >
                <CustomHeader content="Live Fleet" />
                <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Box sx={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "space-around", py: 0.5 }}>
                        <CustomMeter totalVessels={20} sailing={12} onShore={7} />
                        <Box mx={0.3} sx={{ color: "grey.main" }}>
                            <Typography sx={{ display: "block", fontSize: { xs: "10px", sm: "14px" } }}>Total Vessels</Typography>
                            <Typography sx={{ display: "block", fontSize: { xs: "10px", sm: "14px" }, fontWeight: 800 }}>20</Typography>
                        </Box>
                        <Box mx={0.3} sx={{ color: "green.main" }}>
                            <Typography sx={{ display: "block", fontSize: { xs: "10px", sm: "14px" } }}>Sailing</Typography>
                            <Typography sx={{ display: "block", fontSize: { xs: "10px", sm: "14px" }, fontWeight: 800 }}>12</Typography>
                        </Box>
                        <Box mx={0.3} sx={{ color: "red.main" }}>
                            <Typography sx={{ display: "block", fontSize: { xs: "10px", sm: "14px" } }}>On Shore</Typography>
                            <Typography sx={{ display: "block", fontSize: { xs: "10px", sm: "14px" }, fontWeight: 800 }}>7</Typography>
                        </Box>
                    </Box>
                </Grid>
            </CustomCard>
        </Box>
    );
};

export default StatsCard;

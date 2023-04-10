import { Box, Grid } from "@mui/material";
import React from "react";
import CustomCard from "../../../common/components/custom/CustomCard";


const Dashboard = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                <Grid item xs={12} sm={12} md={5} lg={4} xl={2} sx={{ display: "flex", justifyContent: "center", height: "300px", py: 1, px: 0.5 }}>
                    <CustomCard >
                        sdfsdf

                    </CustomCard>
                </Grid>
                <Grid item xs={12} sm={12} md={7} lg={8} xl={10} sx={{ display: "flex", justifyContent: "center", height: "100px", py: 1, px: 0.5 }}>
                    <CustomCard >
                        sdfsdf

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

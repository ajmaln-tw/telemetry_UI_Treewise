import { Box, Grid, Typography } from "@mui/material";
import React from "react";

const VesselsInfo = ({ data = [] }) => {
    return (
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
            {data.map((ele) =>
                <Box key={`${ele.title}.${ele.dateModified}`}>
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
    );
};


export default VesselsInfo;

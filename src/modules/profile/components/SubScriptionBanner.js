import React from "react";
import { Paper, Typography, Divider, Grid, Chip } from "@mui/material";

import tile from "../../../assets/images/Tile.png";
import { Icons } from "../../../common/components";
const SubScriptionBanner = ({ type = "", premiumAmount, term = "", features = [], active = false }) => {


    const { Stars } = Icons;
    return (
        < Paper sx={{ m: 2, overflow: "visible", minWidth: "310px", p: 1 }}>
            {active ? <Chip sx={{ position: "relative", top: "-20px", left: "115px", fontSize: "14px", fontWeight: 500 }} label="Active" color="primary" />
                : <Grid sx={{ height: "20px" }}> </Grid>}
            <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                    <img src={tile} alt="tile" width={30} height={23} />
                </Grid>
                <Typography sx={{ textAlign: "left", color: "grey.main", fontSize: "30px", fontWeight: 600 }}>{type} </Typography>
                <Grid sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
                    <Typography variant="h5" component="h5" sx={{ color: "primary.main", fontSize: "30px", fontWeight: 700 }}>{premiumAmount} </Typography>
                    <Typography variant="p" sx={{ color: "grey.light" }}>{term}</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ color: "primary.light" }} />
            <Grid sx={{ p: 2 }}>
                <Grid sx={{ display: "flex", width: "100%", flexDirection: "column" }}>
                    {features.map((item, i) => <Grid key={i} sx={{ display: "flex", width: "100%", justifyContent: "space-evenly", my: 0.5 }}>
                        <Grid sx={{ width: "10%", opacity: item.status ? "" : "0.5" }}> <Stars sx={{ color: "primary.main", fontSize: "16px" }} /> </Grid>
                        <Grid sx={{ width: "90%", opacity: item.status ? "" : "0.5" }}> <Typography> {item?.name}</Typography> </Grid>
                    </Grid>
                    )}


                </Grid>
            </Grid >
        </Paper >
    );
};

export default SubScriptionBanner;

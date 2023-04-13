import React from "react";
import { Paper, Typography, Divider, Grid } from "@mui/material";

import tile from "../../../assets/images/Tile.png";
import { Icons } from "../../../common/components";
const SubScriptionBanner = () => {


    const { Stars } = Icons;
    return (
        < Paper sx={{ m: 2, overflow: "visible", minWidth: "260px", p: 1 }
        } >
            <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                <Grid sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
                    <img src={tile} alt="tile" width={30} height={23} />
                </Grid>
                <Typography sx={{ textAlign: "left", color: "grey.main", fontSize: "30px", fontWeight: 600 }}>Free </Typography>
                <Grid sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
                    <Typography variant="h5" sx={{ color: "primary.main", fontSize: "30px", fontWeight: 700 }}>$0</Typography>
                    <Typography variant="p" sx={{ color: "grey.light" }}>(14 days Trial)</Typography>
                </Grid>
            </Grid>
            <Divider sx={{ color: "primary.light" }} />
            <Grid sx={{ p: 2 }}>
                <Grid sx={{ display: "flex", width: "100%", flexDirection: "column", }}>
                    <Grid sx={{ display: "flex", width: "100%", justifyContent: "space-evenly" }}>
                        <Grid sx={{ width: "10%" }}> <Stars sx={{ color: "primary.main", fontSize: "16px" }} /> </Grid>
                        <Grid sx={{ width: "90%" }}> <Typography>  Access to dashboard</Typography> </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default SubScriptionBanner
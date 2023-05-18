import React from "react";
import { Components } from "../../../common/components";
const { Grid, Typography } = Components;
const listStyle = {
    px: 2,
    borderRight: "1px solid #888888",
    fontSize: "12px",
    display: {
        xs: "none",
        md: "block"
    }
};
const Main = () => {
    return (
        <Grid sx={{ display: "flex", justifyContent: "end", width: "100%", pr: { md: "80px", sm: "40px", xs: "20px" }, color: "grey.main", py: 2 }}>
            <Typography sx={listStyle}>{"Terms of service"}</Typography>
            <Typography sx={listStyle}>{"Privacy Policy"}</Typography>
            <Typography sx={{ pl: 2, fontSize: "12px" }}>&#169; 2023</Typography>
        </Grid >
    );
};

export default Main;

import { Button, Grid } from "@mui/material";
import React from "react";

const SubscribeTermButton = ({ handleButton1, button1, button2 }) => {
    return (

        <Grid sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { xs: "column", sm: "row" } }} >
            <Button
                sx={{
                    fontSize: { xs: "15px", sm: "20px" },
                    borderRadius: "10 0 0 10",
                    m: "0px",
                    backgroundColor: button1 ? "primary.main" : "primary.100",
                    color: button1 ? "white.main" : "primary.main",
                    "&:hover": {
                        backgroundColor: button1 ? "primary.dark" : ""
                    }
                }}
                onClick={handleButton1}
            > Monthly</Button>
            <Button
                sx={{
                    fontSize: { xs: "15px", sm: "20px" },
                    borderRadius: "0 10 10 0",
                    P: "0px",
                    m: "0px",
                    backgroundColor: button2 ? "primary.main" : "primary.100",
                    color: button2 ? "white.main" : "primary.main",
                    "&:hover": {
                        backgroundColor: button2 ? "primary.dark" : ""
                    }
                }}
                onClick={handleButton1}
            > Annually</Button>
        </Grid>

    );
};

export default SubscribeTermButton;

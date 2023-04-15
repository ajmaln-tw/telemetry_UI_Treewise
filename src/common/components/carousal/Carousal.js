import { Grid, Box, CardContent } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CustomHeader from "../../../modules/common/components/CustomHeader";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";


import { CgLoadbar } from "react-icons/cg";

function Item({ name = "", description = "", image = {} }) {

    return (
        <Grid sx={{ minHeight: "400px", minWidth: "400px", display: "flex", justifyContent: "center" }}>
            {name && <CustomHeader content={name} />}
            <Box
                sx={{
                    borderRadius: "10px",
                    width: { xs: "400px", md: "700px", lg: "1020px", xl: "1730px" }
                }} component="img" src={image}>
            </Box>
            {description && <CardContent>{description} </CardContent>}
        </Grid>
    );
}
const Carousal = ({ items = [] }) => {
    return (
        <Carousel
            sx={{ width: "32.5rem", py: 1 }}
            fullHeightHover={true}
            swipe={false}
            animation="slide"
            cycleNavigation={true}
            NextIcon={<NavigateNext color={"grey.main"} />}
            PrevIcon={<NavigateBefore color={"grey.main"} />}
            IndicatorIcon={< CgLoadbar color={"grey.main"} />}
            indicatorIconButtonProps={{
                style: {
                    padding: "5px",
                    color: "grey.light"
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: "primary.main"
                }
            }}
        >
            {
                items.map((item, i) => <Item key={i} {...item} />)
            }
        </Carousel >
    );
};

export default Carousal;

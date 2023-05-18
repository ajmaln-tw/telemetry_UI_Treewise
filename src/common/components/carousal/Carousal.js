import { Grid, Box, CardContent } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CustomHeader from "../../../modules/common/components/CustomHeader";
// import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { CgLoadbar } from "react-icons/cg";

function Item({ name = "", description = "", image = {} }) {

    return (
        <Grid sx={{ height: "100vh" }}>
            {name && <CustomHeader content={name} />}
            <Box
                sx={{
                    width: "100vw",
                    height: "100vh",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover", position: "relative"
                }}
            >
            </Box>
            {description && <CardContent>{description} </CardContent>}
        </Grid>
    );
}
const Carousal = ({ items = [] }) => {
    return (
        <Carousel
            swipe={false}
            animation="slide"
            // NextIcon={<NavigateNext color={"grey.main"} />}
            // PrevIcon={<NavigateBefore color={"grey.main"} />}
            IndicatorIcon={< CgLoadbar color={"grey.main"} />}
            // indicatorIconButtonProps={{
            //     style: {
            //         padding: "5px",
            //         color: "grey.light"
            //     }
            // }}
            // activeIndicatorIconButtonProps={{
            //     style: {
            //         color: "primary.main"
            //     }
            // }}
            indicatorContainerProps={{
                style: {
                    zIndex: 1,
                    marginTop: "-23px",
                    position: "relative"
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

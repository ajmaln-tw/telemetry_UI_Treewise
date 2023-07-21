import { Grid, Box, CardContent, Typography } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";
import CustomHeader from "../../../modules/common/components/CustomHeader";
// import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import { CgLoadbar } from "react-icons/cg";
import log from "../../../assets/images/slider/log.png";

function Item({ name = "", title = "", description = "", image = {} }) {

    return (
        <Grid sx={{ height: "100vh" }}>
            {name && <CustomHeader content={name} />}

            <Box
                sx={{
                    width: "59vw",
                    height: "100vh",
                    backgroundImage: `url(${image})`,
                    backgroundSize: "cover", position: "relative"
                }}
            >
            </Box>
            <img
                src={log}
                alt="Log"
                style={{
                    position: "absolute",
                    left: "24px",
                    bottom: "4px"
                }}
            />
            {description && <CardContent
                sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 34,
                    padding: "16px",
                    width: "99%",
                    // backgroundColor: "rgba(0, 0, 0, 0.3)"
                }}
            >

                <Typography sx={{ color: "secondary.main", fontWeight: 700 }} variant="h5" component="div" gutterBottom>
                    {title}
                </Typography>
                <Typography sx={{ color: "secondary.main" }} variant="body2" gutterBottom>
                    {description}
                </Typography>
            </CardContent>}
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

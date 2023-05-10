import React from "react";
import Slide from "@mui/material/Slide";

export const TransitionComponent = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
});

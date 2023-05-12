import { Box, Divider, IconButton } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";
import { BsChevronBarDown, BsChevronBarUp } from "react-icons/bs";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { actions as sliceActions } from "../../slice";
import { useMemo } from "react";
import VariableCard from "./VariableCard";
import { SummaryCard } from "./SummaryCard";

const EmissionVariables = () => {
    const dispatch = useDispatch();
    const isDrawerOpen = useSelector(state => state[STATE_REDUCER_KEY].emissionFilter.isDrawerOpen);
    const isBottomDrawer = useSelector(state => state[STATE_REDUCER_KEY].emissionFilter.isBottomDrawer);

    const toggleDrawer = () => {
        dispatch(sliceActions.setIsDrawerOpen());
        if (isBottomDrawer) {
            dispatch(sliceActions.setIsBottomDrawer());
        }
    };
    const handleBottomDrawer = () => {
        dispatch(sliceActions.setIsBottomDrawer());
    };

    const variableCard = useMemo(() => ({
        sx: {
            display: isDrawerOpen ? "block" : "none",
            borderRadius: "10px",
            py: 1, my: 2,
            "&:hover": {
                backgroundColor: "secondary.dark"
            },
            transition: "ease-in-out .3s"
        }
    }), [isDrawerOpen]);
    const summaryCard = useMemo(() => ({
        sx: {
            display: isBottomDrawer ? "block" : "none",
            borderRadius: "10px",
            py: 1, my: 2,
            "&:hover": {
                backgroundColor: "secondary.dark"
            },
            transition: "ease-in-out .3s"
        }
    }), [isBottomDrawer]);
    const summaryCardDrawer = useMemo(() => ({
        sx: {
            display: "flex", alignItems: "flex-end",
            borderRadius: "5px", p: 1, fontSize: "small",
            backgroundColor: "white.main", position: "relative",
            bottom: "-25px", left: "45%",
            "&:hover": {
                backgroundColor: "secondary.dark"
            }
        }
    }), []);

    return <>
        <Divider sx={{ width: "100%" }} />
        <Box {...variableCard} >
            <VariableCard />
        </Box>
        <Divider sx={{ width: "100%" }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <IconButton onClick={toggleDrawer}>
                {isDrawerOpen ? <BsChevronBarUp /> : <BsChevronBarDown />}
            </IconButton>
        </Box>
        <Box {...summaryCard} >
            <SummaryCard />
        </Box>
        <Box>
            {isDrawerOpen && <IconButton {...summaryCardDrawer} onClick={handleBottomDrawer}>
                {isBottomDrawer ? <AiOutlineCaretUp sx={{ color: "grey.light", fontSize: "10px" }} />
                    : <AiOutlineCaretDown sx={{ color: "grey.main", fontSize: "10px" }} />}
            </IconButton>}
        </Box >
    </>
        ;
};

export default EmissionVariables;

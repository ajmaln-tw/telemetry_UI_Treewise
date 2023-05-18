import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useDispatch, useSelector } from "react-redux";

import { STATE_REDUCER_KEY } from "../../constants";
import { actions as sliceActions } from "../../slice";
import Stepper from "./Stepper";

const VesselLists = ({ vesselList = [] }) => {
    const dispatch = useDispatch();
    const mainCard = {
        p: 1, pr: 0, boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)", display: "flex", flexDirection: "column", minWidth: "250px", maxWidth: "300px"
    };
    const itemStyle = {
        display: "flex", borderRadius: "5px", justifyContent: "space-between", mt: 1,
        "&:hover": { bgcolor: "grey.300" }
    };
    const { modal: { openEditVesselDataModal = false } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const handleOpen = () => dispatch(sliceActions.closeOpenEditVesselDataModal(true));
    return (
        <>         <Box sx={mainCard}>
            <Typography sx={{ color: "primary.main", fontWeight: 800, fontSize: "14px" }}>Edit existing vessels </Typography>
            <Box p={0.5} mt={1} display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{ backgroundColor: "grey.400", overflowY: "scroll", minHeight: "200px", maxHeight: "500px", borderRadius: "5px" }}>
                <Box sx={{ display: "flex", justifyContent: "start" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "13px", pl: 2, pr: 0.5 }} >Vessel Name</Typography>
                    {/* <Typography sx={{ fontWeight: 700, fontSize: "13px" }} >Endpoints</Typography> */}
                </Box>
                {vesselList.map((ele, i) => <Box key={i} sx={itemStyle} onClick={handleOpen}>
                    <Typography sx={{ fontWeight: 500, pt: 0.5, fontSize: "13px", pl: 2, pr: 0.5 }}> {ele?.name}</Typography>
                    <Box > <ChevronRightIcon /> </Box>
                </Box>
                )}
            </Box>
        </Box>
            <Modal
                open={openEditVesselDataModal}
                // onClose={handleClose}
                aria-labelledby="vesselList"
                aria-describedby="vesselList-description"
                disableBackdropClick
            >
                <Stepper />
            </Modal>
        </>


    );
};

export default VesselLists;

import React from "react";
import { Box, Modal, Typography } from "@mui/material";
import CustomButton from "../../../../common/components/custom/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";
import { actions as sliceActions } from "../../slice";
import Stepper from "./Stepper";

const VesselLists = ({ vesselList = [] }) => {
    const dispatch = useDispatch();
    const { modal: { openEditVesselDataModal = false } = {} } = useSelector(state => state[STATE_REDUCER_KEY]);
    const handleOpen = () => dispatch(sliceActions.closeOpenEditVesselDataModal(true));
    return (
        <>         <Box sx={{ p: 1, backgroundColor: "#D9D9D9", display: "flex", flexDirection: "column", minWidth: "250px", maxWidth: "300px" }}>
            <Typography sx={{ color: "primary.main", fontWeight: 800, fontSize: "14px" }}>Edit existing vessels </Typography>
            <Box p={0.5} mt={1} display={"flex"} flexDirection={"column"} justifyContent={"center"} sx={{ overflowY: "scroll", minHeight: "200px", maxHeight: "500px" }}>
                <Box sx={{ display: "flex", justifyContent: "start" }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "13px", pl: 2, pr: 0.5 }} >Vessel Name</Typography>
                    {/* <Typography sx={{ fontWeight: 700, fontSize: "13px" }} >Endpoints</Typography> */}
                </Box>
                {vesselList.map((ele, i) => <Box key={i} sx={{ display: "flex", justifyContent: "space-evenly", mt: 1 }}>
                    <Typography sx={{ fontWeight: 700, pt: 0.5, fontSize: "13px", pl: 2, pr: 0.5 }}> {ele?.name}</Typography>
                    <CustomButton sx={{ height: "20px", minWidth: "50px", fontSize: "10px" }} onClick={handleOpen}>Edit</CustomButton>
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

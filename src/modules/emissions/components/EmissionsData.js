import { Box, Grid } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { fetchCurrentVesselEmission, fetchGraph, fetchOverAllEmissions, listVessel } from "../actions";
import { createStructuredSelector } from "reselect";
import { connect, useDispatch } from "react-redux";
import OverAllEmissions from "./OverAllEmissions";
import ActualEmissions from "./ActualEmissions";
import { getCurrentVesselEmissions, getEmissionsOverall } from "../selectors";
import { actions as sliceActions } from "../slice";
import EmissionLineCard from "./EmissionLineCard";
import CustomCard from "../../../common/components/custom/CustomCard";


const EmissionsData = (props) => {
    const dispatch = useDispatch();
    const { fetchVessels, fetchOverAllEmissionData, fetchIndividualEmissionData, overallEmissions = {}, fetchEmissionGraph, currentVesselEmissions = {} } = props;

    useEffect(() => {
        fetchOverAllEmissionData();
        fetchIndividualEmissionData();
        fetchEmissionGraph();
        fetchVessels();
        return (() => dispatch(sliceActions.clearAll()));
    }, []);
    return <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={1} sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid item xs={12} sm={12} md={6} sx={{ minHeight: 300, px: 1, py: 2.5, my: 1, display: "flex", justifyContent: "center" }} >
                <OverAllEmissions overallEmissions={overallEmissions.data} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} sx={{ minHeight: 300, px: 1, py: 2.5, my: 1, display: "flex", justifyContent: "center" }}>
                <ActualEmissions currentVesselEmissions={currentVesselEmissions.data} />
            </Grid>
            <Grid sx={{ minHeight: 450, width: "100%", px: 1, py: 1.5, my: 1, display: "flex", justifyContent: "center" }}>
                <CustomCard additionalStyle={{ p: 2, height: 400, width: "99%" }}>
                    <EmissionLineCard />
                </CustomCard>
            </Grid>
        </Grid>
    </Box>;
};
const mapStateToProps = createStructuredSelector({
    overallEmissions: getEmissionsOverall,
    currentVesselEmissions: getCurrentVesselEmissions
});

const mapDispatchToProps = (dispatch) => ({
    fetchOverAllEmissionData: () => dispatch(fetchOverAllEmissions()),
    fetchIndividualEmissionData: (data) => dispatch(fetchCurrentVesselEmission(data)),
    fetchEmissionGraph: (data) => dispatch(fetchGraph(data)),
    fetchVessels: () => dispatch(listVessel())
});

export default connect(mapStateToProps, mapDispatchToProps)(EmissionsData);


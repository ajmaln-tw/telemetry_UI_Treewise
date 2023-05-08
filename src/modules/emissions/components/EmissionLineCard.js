import { Box, Typography } from "@mui/material";
import React from "react";
import CustomCharts from "../../../common/components/custom/CustomCharts";
import StatusIndicator from "../../../common/components/custom/StatusIndicator";
import CustomMultiSwitch from "../../../common/components/multi-switch";
import { useDispatch, useSelector } from "react-redux";
import { setDay, toggleDateRange, toggleEmission } from "../actions";
import { DATE_RANGE, EMISSION_TYPES, STATE_REDUCER_KEY } from "../constants";
import { actions as sliceActions } from "../slice";
const lineChartProps = {
    position: "bottom", axis: "y", filter: false, gradient: true, fillColor: "#57C2E9", legend: false, dataLabels: false
};
const chartStyle = {
    padding: "10px", margin: 3, overflow: "hidden", maxHeight: 700, minHeight: 300, minWidth: "300px"
};
const EmissionLineCard = () => {
    const dispatch = useDispatch();
    const currentEmissionLineGraph = useSelector(state => state[STATE_REDUCER_KEY].emissionLineGraph.selectedSwitch);
    const currentDateRange = useSelector(state => state[STATE_REDUCER_KEY].emissionLineGraph.currentDateRange);
    const dayValue = useSelector(state => state[STATE_REDUCER_KEY].emissionLineGraph.day);
    const handleToggle = (e) => {
        dispatch(toggleEmission(e));
    };
    const handleToggleDate = (e) => {
        dispatch(toggleDateRange(e));
    };
    const handleDateChange = (val) => {
        dispatch(setDay(val));
    };
    const handleClear = () => dispatch(sliceActions.clearDateRange());
    const switchItems = EMISSION_TYPES;
    return <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center", p: 1, flexDirection: { sm: "column", xs: "column", md: "row" } }}>
            <Box>
                <CustomMultiSwitch handleToggle={handleToggle} items={switchItems} selectedSwitch={currentEmissionLineGraph || switchItems[0]} />
            </Box>
            <Box sx={{ minWidth: "150px", display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <StatusIndicator sx={{
                        marginTop: "10px",
                        background: "radial-gradient(62.5% 62.5% at 30% 30%, rgba(210, 0, 0, 0.2) 0%, rgba(210, 0, 0, 0.4) 17.19%, rgba(210, 0, 0, 0.5) 35.42%, rgba(210, 0, 0, 0.9) 60.94%, #D20000 96.88%)"
                    }}
                    />
                    <Typography sx={{ display: "inline-block", fontSize: "16px", fontWeight: 700 }}>  Predicted  </Typography>
                </Box>
                <Box>
                    <StatusIndicator sx={{
                        marginTop: "10px",
                        background: "radial-gradient(62.5% 62.5% at 30% 30%, rgba(36, 157, 87, 0.2) 0%, rgba(36, 157, 87, 0.4) 17.19%, rgba(36, 157, 87, 0.5) 35.42%, rgba(36, 157, 87, 0.9) 60.94%, #249D57 96.88%)"
                    }}
                    />
                    <Typography sx={{ display: "inline-block", fontSize: "16px", fontWeight: 700 }}> Actual  </Typography>
                </Box>
            </Box>
            <Box>
                <CustomMultiSwitch
                    handleToggle={handleToggleDate}
                    items={DATE_RANGE}
                    selectedSwitch={currentDateRange || DATE_RANGE[0]}
                    selectedBtnColor={"#0784D6"}
                    hoverBtnColor={"#0890e9"}
                    type="Date"
                    clearPreviousSelection={handleClear}
                    handleDateChange={handleDateChange}
                    dayValue={dayValue}
                />
            </Box>
        </Box>
        <Box sx={{ minHeight: 300, display: "flex", width: "95%", justifyContent: "center", borderRight: "0.5px solid #000", borderBottom: "0.5px solid #000", borderLeft: "0.5px solid #000" }}>
            <CustomCharts type="Line" sx={chartStyle} {...lineChartProps} />
        </Box>
    </Box >;
};

export default EmissionLineCard;

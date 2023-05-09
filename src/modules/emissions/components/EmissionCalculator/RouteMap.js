import { Box } from "@mui/material";
import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { STATE_REDUCER_KEY } from "../../constants";

import { createStructuredSelector } from "reselect";
import { getRouteEmission } from "../../selectors";
import "leaflet/dist/leaflet.css";
import CustomMap from "../../../../common/components/map/CustomMap";
import { useEffect } from "react";
import { fetchRouteEmission } from "../../actions";

const RouteMap = (props) => {
    const requestInProgress = useSelector(state => state[STATE_REDUCER_KEY].routeEmission.requestInProgress);
    const { routeEmission: { mapPositionCurrent = [], mapJourney = [] } = {} } = props;
    const dispatch = useDispatch();
    //todo
    //1 Icon
    useEffect(() => {
        dispatch(fetchRouteEmission());
    }, []);
    return <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CustomMap
            title="Route Emissions"
            icon=""
            height="65vh"
            width="80vw"
            center={mapPositionCurrent || []}
            mapJourney={mapJourney}
            requestInProgress={requestInProgress}
        />
    </Box>;
};
const mapStateToProps = createStructuredSelector({
    routeEmission: getRouteEmission
});
export default connect(mapStateToProps)(RouteMap);

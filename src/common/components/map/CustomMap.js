
import { useMemo, useEffect, useRef } from "react";
import { Grid, Typography } from "@mui/material";
import { Circle, FeatureGroup, MapContainer, Marker, Polyline, Popup, TileLayer, Tooltip } from "react-leaflet";
import Leaf from "leaflet";
import "leaflet/dist/leaflet.css";

import CustomHeader from "../../../modules/common/components/CustomHeader";
import LoadingCustomOverlay from "../../../modules/common/components/LoadingOverlay";
import color from "../../themes/palette.json";
import locationPng from "../../../assets/images/location.png";
import markerPng from "../../../assets/images/blackMarkerDot.png";

const CustomMap = (props) => {
    const mapRef = useRef(null);
    const { mapJourney = [], title = "", height = "50vh", width = "100%", destination = "", startingPoint = "",
        requestInProgress = false, icon, zoom = 5, borderRadius = "15px", markersList = [] } = props;
    const N = mapJourney.length - 1;
    const pointOne = destination || `${mapJourney[0][0]} , ${mapJourney[0][1]}`;
    const pointTwo = startingPoint || `${mapJourney[N][0]} , ${mapJourney[N][1]}`;

    const center = mapJourney[Math.floor(N / 2)];
    useEffect(() => {

    }, []);

    let myIcon = Leaf.icon({
        iconSize: [20, 33],
        iconAnchor: [10, 33],
        popupAnchor: [2, -40],
        iconUrl: locationPng

    });
    const markerIcon = Leaf.icon({
        iconSize: [13, 13],
        iconAnchor: [10, 10],
        popupAnchor: [2, -40],
        iconUrl: markerPng

    });
    function EmissionMarkers({ locations }) {
        const markers = useMemo(() => {
            return markersList.map(({ cosx, nox, lat, lng }, idx) => (
                <Marker position={[lat, lng]} key={`${idx}${cosx}${nox}`} icon={markerIcon}>
                    <Tooltip placement="top">{`COx: ${cosx}, NOx: ${nox}`}</Tooltip>
                </Marker>
            ));
        }, [locations]);
        return <>{markers}</>;
    }

    return (
        <Grid>
            <LoadingCustomOverlay active={requestInProgress} spinnerProps="map">
                <CustomHeader content={title} />
                <div style={{ height, width, display: "flex", justifyContent: "center" }}>

                    <MapContainer
                        ref={mapRef}
                        center={center}
                        zoom={zoom}
                        zoomControl={true}
                        style={{ height: "inherit", width: "inherit", borderRadius: borderRadius }}
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            className={props.className}
                        />
                        <Marker position={mapJourney[0]} icon={icon || myIcon}>
                            <Popup>
                                {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                                <Typography sx={{ fontSize: "14px", color: "grey.main" }}>{pointOne}</Typography>
                            </Popup>
                        </Marker>
                        <Marker position={mapJourney[N]} icon={icon || myIcon}>
                            <Popup>
                                {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                                <Typography sx={{ fontSize: "14px", color: "grey.main" }}>{pointTwo}</Typography>
                            </Popup>
                        </Marker>
                        <FeatureGroup pathOptions={{ color: "royalblue" }}>
                            <Popup>
                                <Typography sx={{ fontSize: "14px", color: "grey.main" }}>{" TEst"}</Typography>
                            </Popup>
                            <Circle center={mapJourney[0] || [51.51, -0.1]} />
                        </FeatureGroup>
                        <Polyline
                            pathOptions={{ color: color.palette.green.dark }}
                            positions={mapJourney}
                            weight={2}
                        >
                        </Polyline>
                        {markersList.length > 0 && <EmissionMarkers locations={markersList} />}
                    </MapContainer>
                </div>
            </LoadingCustomOverlay>
        </Grid >
    );
};

export default CustomMap;

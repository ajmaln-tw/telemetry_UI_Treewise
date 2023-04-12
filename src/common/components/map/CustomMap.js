import { Grid } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
// import LeafLet from "leaflet";
import { useState } from "react";
import CustomHeader from "../../../modules/common/components/CustomHeader";
const CustomMap = ({ coordinates = [], title = "" }) => {

    const [animationPath, setAnimationPath] = useState(1);
    function animationCircle() {
        if (animationPath > 10000) {
            setAnimationPath(1);
        } else {
            setAnimationPath(prev => prev + 100);
        }
    }
    window.requestAnimationFrame(animationCircle);

    return (
        <Grid width={100} height={50} pt={2}>
            <CustomHeader content={title} />
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={coordinates}>
                    <Popup>
                        Treewise <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Grid>
    );
};

export default CustomMap;

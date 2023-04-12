import { Grid } from "@mui/material";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import icon from "../../../assets/images/logo_tele.png";
import "leaflet/dist/leaflet.css";
import LeafLet from "leaflet";
import { useState } from "react";
const CustomMap = ({ coordinates = [] }) => {
    // const position = [51.505, -0.09];

    // const circleColor = { color: "royalblue" };
    // let limeOptions = {
    //     color: "red"
    // };
    // let iconInstances = LeafLet.icon({
    //     iconSize: [25, 41],
    //     iconAnchor: [10, 41],
    //     popupAnchor: [2, -40],
    //     iconUrl: icon

    // })
    // const polyline = [
    //     [51.505, -0.09],
    //     [51.51, -0.1],
    //     [51.51, -0.12]
    // ];
    // const center = [51.505, -0.09];
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
        <Grid width={100} height={50}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </Grid>
    );
};

export default CustomMap;

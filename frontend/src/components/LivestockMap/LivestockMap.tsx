import { FunctionComponent, useCallback, useState, useEffect } from "react";
import { Button } from "@mui/material";
import styles from "./LivestockMap.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
const busIcon1 = require("./icons8-place-marker-100.png");
const busIcon2 = require("./icons8-place-marker-200.png");
const busIcon3 = require("./icons8-place-marker-300.png");
const busIcon4 = require("./icons8-place-marker-400.png");


// Define the type for location objects
interface Location {
    id: number;
    lat: number;
    lng: number;
}

const LivestockMap: FunctionComponent = () => {
    const onIconClick = useCallback(() => {
        // Please sync "Report Tab" to the project
    }, []);

    const onIconContainerClick = useCallback(() => {
        // Please sync "Report Tab" to the project
    }, []);

    const [locations, setLocations] = useState<Location[]>([]); // Specify Location[] type

    useEffect(() => {
        const interval = setInterval(() => {
            fetch("http://127.0.0.1:8000/livestock/location_dummy")
                .then((response) => response.json())
                .then((data) => setLocations(data));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const center = {
        lat: locations[0]?.lat || 0,
        lng: locations[0]?.lng || 0,
    };

    // Define the custom icons
    const customIcon1 = new L.Icon({
        iconUrl: busIcon1,
        iconSize: [30, 30],
        iconAnchor: [20, 20],
    });

    const customIcon2 = new L.Icon({
        iconUrl: busIcon2,
        iconSize: [30, 30],
        iconAnchor: [20, 20],
    });

    const customIcon3 = new L.Icon({
        iconUrl: busIcon3,
        iconSize: [30, 30],
        iconAnchor: [20, 20],
    });

    const customIcon4 = new L.Icon({
        iconUrl: busIcon4,
        iconSize: [30, 30],
        iconAnchor: [20, 20],
    });

    return (
        <div className={styles.background3}>
            <div className={styles.container}>
                {locations.length > 0 && (
                    <MapContainer center={center} zoom={15} className={styles.map_container}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
                        />
                        {locations.map((location) => (
                            <Marker
                                key={location.id}
                                position={[location.lat, location.lng]}
                                icon={
                                    location.id === 1
                                        ? customIcon1
                                        : location.id === 2
                                            ? customIcon2
                                            : location.id === 3
                                                ? customIcon3
                                                : customIcon4
                                }
                            >
                                <Popup>
                                    Vehicle Location: <br /> Lat: {location.lat}, Lng:{" "}
                                    {location.lng}
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                )}
            </div>
        </div>
    );
};

export default LivestockMap;

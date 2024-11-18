import { fetchLatestWaypointFromVehicle } from "../api/VehicleApi";
import dayjs from "dayjs";
import utc from 'dayjs-plugin-utc';
import Mapa from "./Mapa";
import React, { useEffect, useState } from "react";
import '../App.css'
dayjs.extend(utc);

export default function Vehicle() {
    const [vehicles, setVehicles] = useState([]);
    const [filteredVehicle, setFilteredVehicle] = useState(null);
    const [positions, setPositions] = useState([]);
    const [filtered, setFiltered] = useState(false);

    useEffect(() => {
        const getVehicles = async () => {
            try {
                const response = await fetchLatestWaypointFromVehicle();

                setVehicles(response.data);
                setPositions(response.data.map(vehicle => ({
                    lat: vehicle.latitude,
                    lng: vehicle.longitude,
                    identifier: vehicle.vehicle_identifier
                })));
            } catch (error) {
                console.error('Error getting latest waypoint', error)
            }
        }





        getVehicles();
    }, []);

    const getPosition = () => {
        if (filtered && filterVehicle) {
            return [{ lat: filteredVehicle.latitude, lng: filteredVehicle.longitude, identifier: filteredVehicle.vehicle_identifier }]
        }
        return vehicles.map((v) => ({ lat: v.latitude, lng: v.longitude, identifier: v.vehicle_identifier }));
    };
    const filterVehicle = (identifier) => {
        const vehicle = vehicles.find((v) => v.vehicle_identifier === identifier);

        setFilteredVehicle(vehicle);

        setFiltered(true);
    }
    const resetFilter = () => {
        setFilteredVehicle(null);
        setFiltered(false);
    }

    if (!vehicles) return null;
    return (
        <div className="vehicle-container">
            <div className="vehicle-content">
                {filtered && (
                    <button onClick={resetFilter}>Show all</button>
                )}
                {
                    vehicles.map((vehicle) => (

                        <div key={vehicle.identifier}>
                            <h4 onClick={() => filterVehicle(vehicle.vehicle_identifier)}>{vehicle.vehicle_identifier}</h4>
                            {/* Manual timezone fix, couldn't find a better way to respect the time provided by the api */}
                            <p>Last updated at: {dayjs(vehicle.sent_at).add(60, 'minute').format('YYYY-MM-DD HH:mm:ss')}</p>
                            <br />
                        </div>

                    ))}
            </div>
            <div className="map-container">
                <Mapa positions={getPosition()} />

            </div>
        </div>
    );
}
import React from "react";
import axios from "axios";

const WaypointFiller = () => {
  const handleStartSchedule = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/elBoton");
      console.log(response.data); // Muestra la respuesta en la consola
      alert("Please refresh this page after 15 seconds.");
    } catch (error) {
      console.error("Error al iniciar la tarea programada:", error);
      alert("Error al iniciar la tarea programada.");
    }
  };

  return (
    <button onClick={handleStartSchedule}>
      Update Waypoints
    </button>
  );
};

export default WaypointFiller;

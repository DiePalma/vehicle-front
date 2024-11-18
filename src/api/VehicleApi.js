import axios from "axios";

const vehicleApi = axios.create({
  baseURL: 'http://127.0.0.1:3000/api/v1',  // Asegúrate de que esta URL esté correcta
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
});
export const fetchLatestWaypointFromVehicle  = async () => {
    try{
        const response = await vehicleApi.get("/show");
        
        return response;

    }catch(error){
        console.error('Error getting latest waypoint', error);
        throw error;
       
    }
}
export default vehicleApi;
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import 'leaflet/dist/leaflet.css'


const Mapa = ({ positions }) => {
    
  
    
    return (
      <MapContainer center={[0, 0]} zoom={2}>
        
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {positions.map((position)=>(
            <Marker key= {position.identifier}position={position}>
          <Popup>
            {position.identifier}
          </Popup>
        </Marker>
        ))}
        
      </MapContainer>
    );
  };
export default Mapa;
import Location from "./location";
import './locations.css'
import { LocationContext } from '../../contexts/LocationContext';
import { useContext } from "react";


const Locations = ({ }) => {
  const locations = useContext (LocationContext);
  console.log("dashboiard Vale" + JSON.stringify(locations));
  console.log("dashboiard le Vale: " + locations.tarjeta.length);
  
  return (
    <div className='grid'>
       {locations.tarjeta.length > 0 ? (  
          locations.tarjeta.map((location) => (
            <Location 
              key={location.id}
              name = {location.name}
              latitude = {location.latitude}
              longitude = {location.longitude}
              temperature = {location.temperature}
              windspeed = {location.windspeed}
              image = {location.image}
              location={location}/>
          ))
        ):(
          <div>
            <h1 className="mensaje-agregar-tarjeta">agregar tarjeta de ubicación...</h1>
          </div>
        )}
    </div>
  );
}

export default Locations;
import { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LocationContext } from '../../contexts/LocationContext';
import './CardDisplay.css';

const CardDisplay = () => {
  const { id } = useParams();
  const { tarjeta } = useContext(LocationContext);
  console.log(tarjeta);
  const [location] = tarjeta.filter((location) => location.id === Number(id));
  console.log(location);
  return (
    <div className='location-display-container'>
      <div className='location-display-card'>
        <h1 className='location-display-id'>{location.id}</h1>
        <h1 className='location-display-name'>{location.name}</h1>
        <h1 className='location-display-latitude'>{location.latitude}</h1>
        <h1 className='location-display-longitude'>{location.longitude}</h1>
        <h1 className='location-display-temperature'>{location.current_weather.temperature}</h1>
        <h1 className='location-display-windspeed'>{location.current_weather.windspeed}</h1>
      </div>
      <Link className='btn-back' to='/'>
        Volver al Inicio
      </Link>
    </div>
  ) 
}
export default CardDisplay; 
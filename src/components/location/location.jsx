import { GoTrashcan } from "react-icons/go";
import { useEffect, useContext, useState } from 'react';
import { LocationContext } from '../../contexts/LocationContext';
import { Link } from 'react-router-dom';
import './location.css';

const Location = ({ location }) => {  
  const {id, name, latitude, longitude, temperature, windspeed, image} = location
  const {tarjeta, setTarjeta} = useContext (LocationContext);

  /* Eliminar tarjeta */
  const handleLocation = () => {
    //Quitar tarjeta
    setTarjeta(tarjeta.filter((loc) => loc.id !== id )//!==
    )   
  }
  
  return (
    <div className='location-container'>
      <div className='location-tarjeta'>Tarjeta: {id}</div>
      <div className='location'>
        <h3><span>Lugar: {name}</span></h3>
        <h3><span>Latitud: {latitude}</span></h3>
        <h3><span>Longitud: {longitude}</span></h3>
        <h3><span>Temperatura: {temperature}</span></h3>
        <h3><span>Velocidad del Viento: {windspeed}</span></h3>
        <div>
          <img className="url-image" src={image} alt=""/>
        </div>
      </div>
      <div className='location-actions'>
        <Link className='btn-see-more' to={`/location/${id}`}>
          Ver más
        </Link>
        <div className='del' onClick={handleLocation}>
          {/* podrimos mostrar un mensaje */}
          <GoTrashcan/>
        </div>
      </div>
    </div>
  )
}
  
export default Location;
import { GoTrashcan } from "react-icons/go";
import { useEffect, useContext, useState } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { Link } from "react-router-dom";
import "./location.css";
import Swal from "sweetalert2";

import WeatherIcon from "./WeatherIcon";

const Location = ({ location }) => {
  const { id, name, latitude, longitude, current_weather, imagen } = location;
  const { locations, setTarjeta } = useContext(LocationContext);

  /* Eliminar tarjeta */
  const handleLocation = () => {
    //Quitar tarjeta
    /*   //!==
     */
    Swal.fire({
      title: "¿Desea borrar el registro?",
      text: "",
      icon: "error",
      showDenyButton: true,
      denyButtonText: "NO",
      confirmButtonText: "SI",
      confirmButtonColor: "#1CC805",
    }).then((response) => {
      if (response.isConfirmed) {
        setTarjeta(locations.filter((loc) => loc.id !== id));
        Swal.fire("Registro borrado", "Exito", "success");
      } else {
        Swal.fire("Operacion Cancelada","", "info");
      }
    });
  };

  return (
    <div className="location-container">
      {/* <div className="location-tarjeta">Tarjeta: {id}</div> */}
      <div className="location">
        <div className="name">
          <span>{name}</span>  
        </div>
        <div className="icon__display">
          <WeatherIcon iconCode={current_weather.weathercode} />   
        </div>
        <div className="temperatura">
          <span>{current_weather.temperature}°</span>    
        </div>
        <h3>
          <span>Latitud: {latitude}</span>
        </h3>
        <h3>
          <span>Longitud: {longitude}</span>
        </h3>
        <h3>
          <span>Velocidad del Viento: {current_weather.windspeed}</span>
        </h3>
        <div className="img__container">
          <img className="weather__img" src={imagen} alt="img" />
        </div>
      </div>
      <div className="location-actions">
        <Link className="btn-see-more" to={`/location/${id}`}>
          Ver más
        </Link>
        <div className="delete" onClick={handleLocation}>
          {/* podrimos mostrar un mensaje */}
          <GoTrashcan />
        </div>        
      </div>
    </div>
  );
};

export default Location;

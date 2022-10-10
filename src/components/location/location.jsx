import { GoTrashcan } from "react-icons/go";
import { useEffect, useContext, useState } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { Link } from "react-router-dom";
import "./location.css";

import WeatherIcon from "./WeatherIcon";

const Location = ({ location }) => {
  const { id, name, latitude, longitude, current_weather, imagen } =
    location;
  const { tarjeta, setTarjeta } = useContext(LocationContext);

  /* Eliminar tarjeta */
  const handleLocation = () => {
    //Quitar tarjeta
    setTarjeta(
      tarjeta.filter((loc) => loc.id !== id) //!==
    );
  };

  return (
    <div className="location-container">
      <div className="location-tarjeta">Tarjeta: {id}</div>
      <div className="location">
        <h3>
          <span>Lugar: {name}</span>
        </h3>
        <WeatherIcon iconCode={current_weather.weathercode} />
        <h3>
          <span>Latitud: {latitude}</span>
        </h3>
        <h3>
          <span>Longitud: {longitude}</span>
        </h3>
        <h3>
          <span>Temperatura: {current_weather.temperature}</span>
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
        <div className="del" onClick={handleLocation}>
          {/* podrimos mostrar un mensaje */}
          <GoTrashcan />
        </div>
      </div>
    </div>
  );
};

export default Location;

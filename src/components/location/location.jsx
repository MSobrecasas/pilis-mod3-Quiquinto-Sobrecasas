import { GoTrashcan } from "react-icons/go";
import { useContext } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { Link } from "react-router-dom";
import "./location.css";
import Swal from "sweetalert2";
import WeatherIcon from "./WeatherIcon";

import { motion } from "framer-motion";

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
        Swal.fire("Operacion Cancelada", "", "info");
      }
    });
  };

  return (
    <motion.div
      className="location-container"
      animate={{ x: [0, 200, 0], opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      whileHover={{ scale: 1.2 }}
    >
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
      <div className="img__container__location">
        <img className="weather__img__location " src={imagen} alt="img" />
      </div>
      <div
        className="location-actions"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link className="btn-see-more" to={`/location/${id}`}>
          VER MAS
        </Link>
        <div className="delete" onClick={handleLocation}>
          {/* podrimos mostrar un mensaje */}
          <GoTrashcan />
        </div>
      </div>
    </motion.div>
  );
};

export default Location;

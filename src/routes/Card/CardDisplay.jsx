import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { LocationContext } from "../../contexts/LocationContext";
import "./CardDisplay.css";
import WeatherForecast from "../../components/location/WeatherForecast";
import WeatherIcon from "../../components/location/WeatherIcon";
import { FaWind } from "react-icons/fa";

const CardDisplay = () => {
  const { id } = useParams();
  const { locations } = useContext(LocationContext);
  const [weather] = locations.filter((weather) => weather.id === Number(id));


  const [forecasts, setForecasts] = useState([]);

  const setForecast = (forecastData) => {
    for (let i = 0; i < 7; i++) {
      const forecastNew = {
        id: i,
        temp_max: forecastData.temperature_2m_max[i],
        temp_min: forecastData.temperature_2m_min[i],
        time: forecastData.time[i],
        weathercode: forecastData.weathercode[i],
      };
      forecasts[i] = forecastNew;
    }
  };

  return (
    <section className="weather__details__container ">
      <div className="current__weather">
        <div className="titles__container">
          <h1 className="title ">{weather.name}</h1>
          <div className="subtitle">
            <small>Latitud: {weather.latitude}</small>
            <small>Longitud {weather.longitude}</small>
          </div>
        </div>

        <div className="data">
          <div className="temp__icon">
            <h2 className="temp ">{weather.current_weather.temperature}°</h2>
            <h2>
              <WeatherIcon iconCode={weather.current_weather.weathercode} />
            </h2>
            <h2 className="windspeed">
              <FaWind />
              {weather.current_weather.windspeed} km/h
            </h2>
          </div>
            <div className="img__container">
              <img className="image " src={weather.imagen} alt="" />
            </div>
        </div>
      </div>
      {setForecast(weather.daily)}
      <div className="forecast__container">
        {forecasts.map((forecast) => (
          <WeatherForecast key={forecast.id} forecast={forecast} />
        ))}
      </div>
      <Link className="btn-back" to="/">
        Volver al Inicio
      </Link>
    </section>
  );
};
export default CardDisplay;

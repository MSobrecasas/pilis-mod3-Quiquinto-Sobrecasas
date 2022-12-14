import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";

const WeatherForecast = ({ forecast }) => {
  const { temp_min, temp_max, time, weathercode } = forecast;

  return (
    <article className="forecast__card">
      <div className="icon">
        <WeatherIcon iconCode={weathercode} />
      </div>
      <h2>Max {temp_max}°</h2>
      <h2>Min {temp_min}°</h2>
      <div className="dia">
        <h2>Dia {time}</h2>
      </div>
    </article>
  );
};

export default WeatherForecast;

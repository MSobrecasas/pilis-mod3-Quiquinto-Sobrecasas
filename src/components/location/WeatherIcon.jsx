import React from "react";
import {
  TiWeatherCloudy,
  TiWeatherDownpour,
  TiWeatherPartlySunny,
  TiWeatherShower,
  TiWeatherSnow,
  TiWeatherStormy,
  TiWeatherSunny,
} from "react-icons/ti";
import "./WeatherIcon.css";

const WeatherIcon = ({ iconCode }) => {
  console.log(iconCode);
  return setIcono(iconCode);
};

export default WeatherIcon;

let setIcono = (iconImg) => {
  switch (iconImg) {
    case (95, 96, 99):
      return (
        <div className="weather__icon">
          <TiWeatherStormy className="weather__icon__icon" />
          <small>Tormenta</small>
        </div>
      );
    case (51, 53, 55, 56, 57):
      return (
        <div className="weather__icon">
          <TiWeatherShower className="weather__icon__icon" />
          <small>Llovizna</small>
        </div>
      );
    case (61, 63, 65):
      return (
        <div className="weather__icon">
          <TiWeatherDownpour className="weather__icon__icon" />
          <small>Lluvia</small>
        </div>
      );
    case (71, 73, 75, 77):
      return (
        <div className="weather__icon">
          <TiWeatherSnow className="weather__icon__icon" />
          <small>Nieve</small>
        </div>
      );
    case (0, 1):
      return (
        <div className="weather__icon">
          <TiWeatherSunny className="weather__icon__icon" />
          <small>Soleado</small>
        </div>
      );
    case (45, 48):
      return (
        <div className="weather__icon">
          <TiWeatherCloudy className="weather__icon__icon" />
          <small>Atmosfera</small>
        </div>
      );
    case (2, 3):
      return (
        <div className="weather__icon">
          <TiWeatherCloudy className="weather__icon__icon" />
          <small>Nublado</small>
        </div>
      );
    default:
      return (
        <div className="weather__icon">
          <TiWeatherPartlySunny className="weather__icon__icon" />
          <small>Variable</small>
        </div>
      );
  }
};

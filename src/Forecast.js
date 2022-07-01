import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Search.css";

export default function Forecast(props) {
  function formatDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);

    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);

    return `${temperature}°`;
  }
  return (
    <div className="WeatherForecastPreview">
      <div className="forecast-time">{formatDay()}</div>
      <WeatherIcon
        className="ForecastIcon"
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].description}
        width={45}
      />
      <div className="forecast-temperature">
        <span className="forecast-temperature-max">{maxTemperature()}</span>
        <span className="forecast-temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}

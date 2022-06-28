import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Search.css";
export default function Overview(props) {
  return (
    <div className="Overview">
      <h1 className="mt-3">{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="WeatherForecast">
        <div className="row">
          <div className="col-6">
            <div className="weather-temperature">
              <WeatherIcon code={props.data.icon} width={45} />

              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>

          <div class=" HumWin col-6">
            <ul>
              <li>Humidity: {props.data.humidity} %</li>
              <li>Wind: {Math.round(props.data.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

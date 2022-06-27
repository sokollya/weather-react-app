import React from "react";
import FormattedDate from "./FormattedDate";
export default function Overview(props) {
  return (
    <div className="Overview">
      <h1>{props.data.city}</h1>
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
              <img src={props.data.icon} alt={props.description} />

              <strong>{Math.round(props.data.temperature)}</strong>

              <span class="units">
                <a href="#" id="celsius">
                  °C
                </a>
                |
                <a href="#" id="fahrenheit">
                  °F
                </a>
              </span>
            </div>
          </div>

          <div class="col-6">
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

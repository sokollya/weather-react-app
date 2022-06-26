import React, { useState } from "react";
import axios from "axios";
import FormatDate from "./Format";

import "./Search.css";
export default function Search() {
  let [city, setCity] = useState("Kharkiv");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function submitSearch(event) {
    event.preventDefault();

    let apiKey = "41a495466476bec4ff42a9430e4f37e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateQuery(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={submitSearch}>
      <input type="search" placeholder="Type a query" onChange={updateQuery} />
      <input type="submit" value="Search" />
    </form>
  );

  if (loaded) {
    return (
      <div className="Overview">
        <ul>
          <li>{weather.city}</li>
          <li>{weather.date}</li>
        </ul>

        <div className="WeatherForecast">
          <div className="row">
            <div className="col-6">
              <div className="weather-temperature">
                <img src={weather.icon} alt={weather.description} />

                <strong>{Math.round(weather.temperature)}</strong>

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
                <li>Humidity: {weather.humidity} %</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

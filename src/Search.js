import React, { useState } from "react";

import WeatherForecast from "./WeatheForecast";

import Overview from "./Overview";
import axios from "axios";
import "./Search.css";
export default function Search(props) {
  let [city, setCity] = useState(props.defaultCity);

  let [weather, setWeather] = useState({ ready: false });

  function showTemperature(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function search() {
    let apiKey = "41a495466476bec4ff42a9430e4f37e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
  function updateQuery(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city..."
                onChange={updateQuery}
              />
            </div>
            <div className="col-6">
              <input
                type="submit"
                className="btn btn-primary shadow-sm"
                value="Search"
              />

              <button type="button" className="btn btn-secondary">
                Current
              </button>
            </div>
          </div>
        </form>
        <Overview data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}

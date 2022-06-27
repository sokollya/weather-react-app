import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatheForecast";
import "./Search.css";
import Overview from "./Overview";
export default function Search() {
  let [city, setCity] = useState("Kharkiv");

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

  if (weather.ready) {
    return (
      <div>
        <form onSubmit={submitSearch}>
          <input
            type="search"
            placeholder="Type a query"
            onChange={updateQuery}
          />
          <input
            type="submit"
            className="btn btn-primary shadow-sm"
            value="Search"
          />

          <button type="button" className="btn btn-secondary">
            Current
          </button>
        </form>
        <Overview data={weather} />
        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    submitSearch();
    return "Loading...";
  }
}

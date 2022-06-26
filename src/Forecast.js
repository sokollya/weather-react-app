import React, { useState } from "react";
import axios from "axios";

export default function Forecast() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});

  function showTemperature(response) {
    setLoaded(true);
    setWeather({
      mintemperature: response.data.main.temp.min,
      maxtemperature: response.data.main.temp.max,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function submitSearch(event) {
    event.preventDefault();

    let apiKey = "41a495466476bec4ff42a9430e4f37e4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
}

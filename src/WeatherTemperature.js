import React, { useState } from "react";
import "./Search.css";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");

  function convertFTemp(event) {
    event.preventDefault();
    setUnit("fTemp");
  }
  function convertCTemp(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemp">
        <span className="temp">
          <strong>{Math.round(props.celsius)}</strong>{" "}
        </span>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertFTemp}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemp">
        <span className="temp">
          <strong>{Math.round(fahrenheit)}</strong>{" "}
        </span>
        <span className="unit">
          <a href="/" onClick={convertCTemp}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}

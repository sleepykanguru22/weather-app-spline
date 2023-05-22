import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import TemperatureConverter from "./TemperatureConverter";

export default function WeatherForecast({ coordinates }) {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (coordinates) {
      const apiKey = "2f78caf735126025fc091f38c586a31f";
      const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

      axios
        .get(apiUrl)
        .then(handleForecastResponse)
        .catch((error) => {
          console.log("Error fetching forecast data:", error);
        });
    }
  }, [coordinates]);

  function handleForecastResponse(response) {
    setForecastData(response.data.daily);
  }

  function renderForecastDay(dayData) {
    const date = new Date(dayData.dt * 1000);
    const iconCode = dayData.weather[0].icon;

    return (
      <div key={dayData.dt} className="col">
        <div className="forecast-day">{getFormattedDay(date)}</div>
        <WeatherIcon code={iconCode} size={36} />
        <div className="forecast-temperature">
          <TemperatureConverter celsius={dayData.temp.day} />
        </div>
      </div>
    );
  }

  function getFormattedDay(date) {
    const options = { weekday: "short" };
    return date.toLocaleDateString(undefined, options);
  }

  return (
    <div className="WeatherForecast">
      {forecastData && (
        <div className="row">
          {forecastData.slice(1, 7).map((dayData) => renderForecastDay(dayData))}
        </div>
      )}
    </div>
  );
}

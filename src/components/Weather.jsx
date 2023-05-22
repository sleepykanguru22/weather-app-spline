import React, { useState } from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import TemperatureConverter from "./TemperatureConverter";
import WeatherForecast from "./WeatherForecast";
export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2f78caf735126025fc091f38c586a31f";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse).catch(error => {
      const errorMessage = document.createElement('p');
      errorMessage.textContent = 'We could not locate your city. Please try again.';
      const errDiv = document.getElementById('err');
      errDiv.appendChild(errorMessage);
      console.log(errorMessage);
    });
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon:response.data.weather[0].icon,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      coordinates: response.data.coord,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div id="err"></div>
        <form onSubmit={handleSubmit}>
          <input
          className="rounded mx-2"
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button className="btn btn-outline-info rounded-pill" type="submit">Search</button>
        </form>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3">
            <div className="">
                <WeatherIcon code={weatherData.icon} size={100} />
              <div className="">
                <strong>{weatherData.city}</strong>
                <br />
                <span className="text-capitalize">
                  {weatherData.description}
                </span>
              </div>
            </div>
          </div>
          <div className="col-7">
            <ul className="details pt-5 text-start">
              <li>Temperature: <TemperatureConverter celsius={weatherData.temperature} /></li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {Math.round(weatherData.wind)} km/h</li>
            </ul>
          </div>
        </div>
          <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    return (
      <div className="weather">
        <p id="err">Search a city...</p>
        <form onSubmit={handleSubmit}>
          <input
            className="rounded mx-2"
            type="search"
            placeholder="Enter a city"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <button className="btn btn-outline-info rounded-pill" type="submit">Search</button>
        </form>
        
      </div>
    );
  }
}
import React, { useState } from 'react';

export default function TemperatureConverter({ celsius }) {
  const [isCelsius, setIsCelsius] = useState(true);

  function toggleTemperature() {
    setIsCelsius(!isCelsius);
  }

  function getConvertedTemperature() {
    if (isCelsius) {
      return celsius;
    } else {
      return (celsius * 9) / 5 + 32;
    }
  }

  return (
    <div className="TemperatureConverter">
      <span>{Math.round(getConvertedTemperature())}</span>
      <span className="unit">{isCelsius ? '°C' : '°F'}</span>
      <label className="switch">
        <input type="checkbox" checked={isCelsius} onChange={toggleTemperature} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

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
    <div className="TemperatureConverter d-flex align-items-center justify-content-end">
      <span className="temperature">{Math.round(getConvertedTemperature())}</span>
      <span className="unit mx-1">{isCelsius ? '°C' : '°F'}</span>
      <label className="toggle-switch form-check form-switch">
        <input type="checkbox" className="toggle-checkbox form-check-input" role="switch" id="flexSwitchCheckDefault" checked={isCelsius} onChange={toggleTemperature} />
        <span className="toggle-switch-handle"></span>
      </label>
    </div>
  );
}

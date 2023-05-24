import React, { useState, useEffect } from 'react';

export default function Clock() {
  const [time, setTime] = useState(getFormattedTime());
  const [date, setDate] = useState(getFormattedDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getFormattedTime());
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log('test')
    };
  }, []);

  function getFormattedTime() {
    const date = new Date();
    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';
    const timezone = date.toLocaleString('en-US', { timeZoneName: 'short' }).split(' ')[2];
    return `${hours}:${minutes} ${ampm} ${timezone}`;
  }

  function getFormattedDate() {
    const date = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <div className="clock text-sm-start px-5 pt-2">
      <p>{time}</p>
      <p>{date}</p>
    </div>
  );
}





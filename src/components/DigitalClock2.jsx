import React, { useState, useEffect } from "react";
export default function DigitalClock2() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const padZero = (number) => {
    return (number < 10 ? "0" : "") + number;
  };

  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(
      seconds
    )} ${meridiem}`;
  };

  return (
    <div className="component">
      <div className="container">{formatTime()}</div>
      <p className="container1">Second Code</p>
    </div>
  );
}

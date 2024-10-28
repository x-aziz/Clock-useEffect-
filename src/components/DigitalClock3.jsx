import React, { useState, useEffect } from "react";

export default function DigitalClock3() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [meridiem, setMeridiem] = useState(hours > 12 ? "PM" : "AM");
  useEffect(() => {
    const interval = setInterval(() => {
      setHours(new Date().getHours());
      setMinutes(new Date().getMinutes());
      setSeconds(new Date().getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const formattedHour = hours % 12 || 12;
  return (
    <div className="component">
      <div className="container">
        {formattedHour.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")} {meridiem}
      </div>
      <p className="container1">Third Code</p>

    </div>
  );
}

import React, { useState, useEffect } from "react";

export default function DigitalClock() {
  const [hours, setHours] = useState(new Date().getHours());
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [seconds, setSeconds] = useState(new Date().getSeconds());
  const [meridiem, setMeridiem] = useState(hours >= 12 ? "PM" : "AM");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      let currentHours = date.getHours();
      setHours(currentHours);
      setMinutes(date.getMinutes());
      setSeconds(date.getSeconds());
      setMeridiem(currentHours >= 12 ? "PM" : "AM");
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  const formattedHours = hours % 12 || 12;

  return (
    <div className="component">
      <div className="container" id="clock">
        {formattedHours.toString().padStart(2, "0")}:
        {minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")} {meridiem}
      </div>
      <p className="container1">First Code</p>
    </div>
  );
}

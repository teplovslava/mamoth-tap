import React, { useEffect, useState } from "react";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;

export default function Timer({ time }) {
  const [timer, setTimer] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const calculateRestTime = () => {
    const diff = time - Date.now();

    const hours = Math.floor(diff / HOUR);
    const minutes = Math.floor((diff - HOUR * hours) / MINUTE);
    const seconds = Math.floor(
      (diff - hours * HOUR - minutes * MINUTE) / SECOND
    );

    setTimer({
      hours,
      minutes,
      seconds,
    });
  };

  useEffect(() => {
    const interval = setInterval(calculateRestTime, 1000);

    if (timer.hours < 0 && timer.minutes < 0 && timer.seconds < 0) {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <span className="flex flex-row items-center">
      <span>{timer.hours}ч</span>
      <span>:</span>
      <span>{timer.minutes}м</span>
      <span>:</span>
      <span>{timer.seconds}с</span>
    </span>
  );
}

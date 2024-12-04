import { useState, useEffect, useMemo } from "react";
import { HOVER_EFFECTS } from "../lib/constants";
import { cn } from "../lib/utils";

export const OneDayTime = () => {
  const targetDate = useMemo(() => {
    const now = new Date();
    return new Date(now.getTime() + 24 * 60 * 60 * 1000);
  }, []);

  const [timeLeft, setTimeLeft] = useState(
    targetDate.getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (time: number) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    return { days, hours, minutes, seconds };
  };

  const { hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <button
      className={cn(
        "text-white font-bold text-[2rem] flex-1 border-05 border-[#FFFFFFB2] gradient12 space-x-3",
        HOVER_EFFECTS
      )}
    >
      <span className="">{hours.toString().padStart(2, "0")}h</span>
      <span className="">{minutes.toString().padStart(2, "0")}m</span>
      <span className="">{seconds.toString().padStart(2, "0")}s</span>
    </button>
  );
};

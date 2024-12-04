import { useState, useEffect, useMemo } from "react";
import { ending } from "../lib/jotai";
import { useAtom } from "jotai";

export const Hours = () => {
  const [getEnding] = useAtom(ending);
  const targetDate = useMemo(() => new Date(getEnding), []);
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

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <>
      <div className="h-[6.125rem] border-05 border-[#00CCB84D] bg-[#1C1C1C80] flex items-center justify-center digital text-white text-[2rem] font-bold gap-3">
        {days.toString().padStart(2, "0")}{" "}
        <span className="text-color1">:</span>
        {hours.toString().padStart(2, "0")}{" "}
        <span className="text-color1">:</span>
        {minutes.toString().padStart(2, "0")}{" "}
        <span className="text-color1">:</span>
        {seconds.toString().padStart(2, "0")}
      </div>
      <div className="h-7 border-05 border-[#00CCB84D] bg-[#1C1C1C80] flex items-center justify-between">
        {["days", "hours", "minutes", "seconds"].map((item, index) => (
          <p
            className="text-color1 text-[0.625rem] uppercase text-center w-full"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
    </>
  );
};

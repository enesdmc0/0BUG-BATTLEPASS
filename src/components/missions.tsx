import { cn } from "../lib/utils";
import { MissionCard } from "./index";
import { HOVER_EFFECTS } from "../lib/constants.ts";
import { dailyMissions, dailyOrWeeklyMissionsAtom, weeklyMissions } from "../lib/jotai.ts";
import { useAtom } from "jotai";

export const Missions = () => {
  const [dailyOrWeeklyMissions, setDailyOrWeeklyMissions] = useAtom(
    dailyOrWeeklyMissionsAtom
  );
  const [getDailyMissions] = useAtom(dailyMissions);
  const [getWeeklyMissions] = useAtom(weeklyMissions);
  const activeMissions =
    dailyOrWeeklyMissions === "daily" ? getDailyMissions : getWeeklyMissions;
  return (
    <div className="flex-1 space-y-2 flex flex-col">
      <div className="border-05 border-[#FFFFFF1A]  w-[30.813rem] flex ml-auto">
        {["daily", "weekly"].map((x, i) => (
          <button
            key={i}
            onClick={() => setDailyOrWeeklyMissions(x as "daily" | "weekly")}
            className={cn(
              "text-white  font-medium text-sm capitalize flex-1 h-10 border-b",
              dailyOrWeeklyMissions === x
                ? "text-white font-medium bg-[#FFFFFF1A] border-color1"
                : "text-[#FFFFFF80] border-transparent",
              HOVER_EFFECTS
            )}
          >
            {x} Missions
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {activeMissions.map((x, i) => (
          <MissionCard key={i} item={x} />
        ))}
      </div>
    </div>
  );
};

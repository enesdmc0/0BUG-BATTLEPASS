import { useAtomValue } from "jotai";
import { missionPassedAtom, useLang } from "../lib/jotai";
import { cn } from "../lib/utils";

export const MissionPassed = () => {
  const open = useAtomValue(missionPassedAtom);
  const lang = useLang();
  return (
    <div
      className={cn(
        "h-screen w-screen bg-[#000000B2] backdrop-blur-sm fixed top-0 left-0 flex items-center justify-center z-50",
        open ? "" : "hidden"
      )}
    >
      <div className="w-[70.625rem] h-[24.125rem] flex flex-col items-center justify-center">
        <p className="text-[10rem] leading-[12.063rem] text-color1 pricedown wasted-border ">
          {lang.modal_quiz.mission_passed.title_1}
        </p>
        <p className="text-[10rem] leading-[12.063rem] text-white pricedown wasted-border ">
          {lang.modal_quiz.mission_passed.title_2}
        </p>
      </div>
      <img
        src="/assets/svg/mission.svg"
        className="absolute -top-40 left-0 mission "
        alt=""
      />
    </div>
  );
};

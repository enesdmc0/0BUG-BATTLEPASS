import { HOVER_EFFECTS } from "../lib/constants.ts";
import { useSetAtom } from "jotai/index";
import { modalQuizAtom, modalSpinAtom, useLang } from "../lib/jotai.ts";
import { cn } from "../lib/utils.ts";

export const DailyButtons = () => {
  const setModalQuiz = useSetAtom(modalQuizAtom);
  const setModalSpin = useSetAtom(modalSpinAtom);
  const lang = useLang();
  return (
    <div className="w-full space-x-2 flex h-10">
      <button
        onClick={() => setModalSpin((prev) => !prev)}
        className={cn(
          "border-05 border-[#FFFFFF1A] text-white text-sm flex-1",
          HOVER_EFFECTS
        )}
      >
        {lang.daily_spin}
      </button>
      <button
        onClick={() => setModalQuiz((prev) => !prev)}
        className={cn(
          "border-05 border-[#FFFFFF1A] text-white text-sm flex-1",
          HOVER_EFFECTS
        )}
      >
        {lang.daily_quiz}
      </button>
    </div>
  );
};

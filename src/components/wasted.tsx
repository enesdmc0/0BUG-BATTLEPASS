import { useAtomValue } from "jotai";
import { useLang, wastedAtom } from "../lib/jotai";
import { cn } from "../lib/utils";

export const Wasted = () => {
  const open = useAtomValue(wastedAtom);
  const lang = useLang();
  return (
    <div
      className={cn(
        "h-screen w-screen bg-[#000000B2] fixed top-0 left-0 flex items-center justify-center z-50",
        open ? "" : "hidden"
      )}
    >
      <div className="w-full h-[13.438rem] bg-[#FFFFFF1A] flex items-center justify-center">
        <p className="text-[11.875rem] leading-[12.063rem] text-color6 pricedown wasted-border mt-5">
          {lang.modal_quiz.wasted}
        </p>
      </div>
    </div>
  );
};

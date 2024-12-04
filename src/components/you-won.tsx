import { cn } from "../lib/utils";
import {
  activeWheelProductIDAtom,
  isDailySpinAtom,
  spinProducts,
  useLang,
  wheelRotationAtom,
  youWinAtom,
} from "../lib/jotai";
import { useAtom, useSetAtom } from "jotai";
import { HOVER_EFFECTS } from "../lib/constants.ts";

export const YouWon = () => {
  const setWheelRotation = useSetAtom(wheelRotationAtom);
  const [activeWheelProductID, setActiveWheelProductID] = useAtom(
    activeWheelProductIDAtom
  );
  const [open, setOpen] = useAtom(youWinAtom);
  const setIsDailySpin = useSetAtom(isDailySpinAtom);

  const lang = useLang();

  const handleClaim = () => {
    setOpen(false);
    setIsDailySpin(true);
    setWheelRotation(0);
    setActiveWheelProductID(null);
  };
  const [getSpinProducts] = useAtom(spinProducts);

  if (!activeWheelProductID) return null;

  const { name } = getSpinProducts[activeWheelProductID - 1];
  return (
    <div
      className={cn(
        "h-screen w-screen bg-[#000000B2] backdrop-blur-sm  fixed top-0 left-0 flex items-center justify-center z-50",
        open ? "" : "hidden"
      )}
    >
      <div className="w-[40.625rem] h-[49.125rem] p-9 bg-[#FFFFFF0F] flex flex-col items-center justify-between border-05 border-[#FFFFFF99] relative z-50">
        <p className="text-color1 artheim text-5xl">
          {lang.modal_spin.you_won.title_1}
        </p>
        <p className="text-5xl font-extrabold leading-[3.625rem] text-white">
          {lang.modal_spin.you_won.title_2}{" "}
          <span className="text-color1">{lang.modal_spin.you_won.title_3}</span>
        </p>
        <img
          src="/assets/svg/youwin.svg"
          className="w-[25rem] h-[25rem]"
          alt=""
        />
        <p className="text-5xl font-extrabold leading-[3.625rem] text-white">
          {name} <span className="text-color1">{name}</span>
        </p>
        <button
          onClick={handleClaim}
          className={cn(
            "text-white text-[2rem] font-bold border-05 border-[#FFFFFFB2] gradient10 w-full py-6 leading-[2.375rem]",
            HOVER_EFFECTS
          )}
        >
          {lang.modal_spin.you_won.button_text}
        </button>
      </div>
    </div>
  );
};

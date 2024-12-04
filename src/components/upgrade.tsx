import { HOVER_EFFECTS } from "../lib/constants";
import { useSetAtom, useAtom } from "jotai";
import { modalClaimAtom, useLang } from "../lib/jotai";
import { cn } from "../lib/utils.ts";
import { premium } from "../lib/jotai.ts";

export const Upgrade = () => {
  const setModalClaim = useSetAtom(modalClaimAtom);
  const lang = useLang();

  const [getPremium] = useAtom(premium);
  return (
    <>
      {getPremium ? (
        <button
          className={cn(
            "flex items-center w-full shadow4 bg-[#FFFFFF1A]",
            HOVER_EFFECTS
          )}
        >
          <img
            src="/assets/svg/bottle1.svg"
            className="w-[4.313rem] h-[4.625rem]"
            alt=""
          />
          <p className="shadow1 text-[1.375rem] font-bold text-white">
            {lang.upgrade_button.upgraded}
          </p>
        </button>
      ) : (
        <button
          onClick={() => setModalClaim((prev) => !prev)}
          className={cn(
            "flex items-center w-full shadow2 bg-color1",
            HOVER_EFFECTS
          )}
        >
          <img
            className="w-[4.313rem] h-[4.625rem]"
            src="/assets/svg/bottle.svg"
            alt=""
          />
          <p className="shadow1 text-[1.375rem] font-bold text-white">
            {lang.upgrade_button.no_upgraded}
          </p>
        </button>
      )}
    </>
  );
};

import { useState } from "react";
import { HOVER_EFFECTS } from "../lib/constants";
import { cn } from "../lib/utils";
import { credit, profil, redeemCodeListAtom, useLang } from "../lib/jotai.ts";
import { useAtom, useAtomValue } from "jotai";

const UserCredit = () => {
  const [getCredit] = useAtom(credit);
  const [getProfil] = useAtom(profil);
  const redemCodeList = useAtomValue(redeemCodeListAtom);
  const lang = useLang();

  const [error, setError] = useState(false);
  const [code, setCode] = useState("");

  const hanleReedem = () => {
    if (redemCodeList.includes(code)) {
      setError(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  return (
    <div className="w-[25.5rem] h-fit bg-[#FFFFFF1A] p-6 space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <img
            className="w-[2.25rem] h-[2.25rem]"
            src="/assets/svg/avatar.svg"
            alt=""
          />
          <p className="text-white font-semibold text-xl">{getProfil.name}</p>
        </div>
        <div className="flex items-center space-x-1">
          <img
            className="w-[1.5rem] h-[1.5rem]"
            src="/assets/svg/dollar.svg"
            alt=""
          />
          <p className="text-white text-sm">{getCredit} Credits</p>
        </div>
      </div>
      <div className="h-px w-full bg-color1" />
      <p className="text-white text-sm text-center">
        {lang.modal_spin.description3}
      </p>
      <div
        className={cn(
          "flex items-center justify-center space-x-1 border  h-10",
          error ? "border-color6" : "border-[#FFFFFF33]"
        )}
      >
        <img
          className="w-[1.5rem] h-[1.5rem]"
          src="/assets/svg/key.svg"
          alt=""
        />
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          type="text"
          className="outline-none bg-transparent text-[#FFFFFF80] text-sm w-[5.625rem]"
          placeholder="Enter Code"
        />
      </div>
      <button
        onClick={hanleReedem}
        className={cn(
          "text-white font-extrabold text-sm w-full py-2.5 bg-color1",
          HOVER_EFFECTS
        )}
      >
        Redeem Code
      </button>
      <button
        className={cn(
          "text-white font-extrabold border-05 border-[#FFFFFF66] text-sm w-full py-[0.563rem] bg-[#FFFFFF1A]",
          HOVER_EFFECTS
        )}
      >
        Buy More Credit
      </button>
    </div>
  );
};

export default UserCredit;

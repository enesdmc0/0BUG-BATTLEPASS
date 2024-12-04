import { Modal } from "./modal";
import {
  modalClaimAtom,
  modalThanksAtom,
  premiumAtom,
  redeemCodeListAtom,
  useLang,
} from "../../lib/jotai";
import { useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { HOVER_EFFECTS } from "../../lib/constants";
import { cn } from "../../lib/utils";

export const ModalClaim = () => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const setPremium = useSetAtom(premiumAtom);
  const setModalThanks = useSetAtom(modalThanksAtom);
  const setModalClaim = useSetAtom(modalClaimAtom);
  const redemCodeList = useAtomValue(redeemCodeListAtom);
  const lang = useLang();
  const handleButton = () => {
    if (redemCodeList.includes(input)) {
      setPremium(true);
      setModalClaim(false);
      setModalThanks(true);
    }
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 3000);
  };

  return (
    <Modal
      atom={modalClaimAtom}
      className="w-[48.625rem] h-[29.875rem] border-color1 flex flex-col items-center space-y-4 "
    >
      <img
        src="/assets/svg/logo.svg"
        className="w-[17rem] h-[6.25rem]"
        alt=""
      />
      <div className="bg-color1 h-px w-full" />
      <div>
        <p className="text-8xl text-white font-black  italic leading-[7.25rem] text-center">
          {lang.modal_claim.title_1}
          <span className="text-color1">{lang.modal_claim.title_2}</span>
        </p>
        <p className="text-white text-sm text-center leading-[1.063rem] px-12">
          {lang.modal_claim.description}
        </p>
      </div>
      <div
        className={cn(
          "border  flex items-center justify-center shadow3 h-10 space-x-2 w-full",
          error ? "border-red-500" : "border-[#FFFFFF33]"
        )}
      >
        <img
          className="w-[1.5rem] h-[1.5rem]"
          src="/assets/svg/key.svg"
          alt=""
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Tebex Purchase ID here..."
          className="bg-transparent w-[11.563rem] outline-none text-[#FFFFFF80] text-sm"
        />
      </div>
      <button
        onClick={handleButton}
        className={cn(
          "text-white font-extrabold text-sm bg-color1 w-full py-3.5",
          HOVER_EFFECTS
        )}
      >
        {lang.modal_claim.button_text}
      </button>
    </Modal>
  );
};

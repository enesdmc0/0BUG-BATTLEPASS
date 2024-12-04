import { Modal } from "./modal";
import { modalThanksAtom, useLang } from "../../lib/jotai";
import { useSetAtom } from "jotai";
import { HOVER_EFFECTS } from "../../lib/constants.ts";
import { cn } from "../../lib/utils.ts";

export const ModalThanks = () => {
  const setModalThanks = useSetAtom(modalThanksAtom);
  const lang = useLang();
  return (
    <>
      <Modal
        isThanks={true}
        atom={modalThanksAtom}
        className="w-[78.438rem] h-[31.625rem] border-[#FFFFFF99] flex flex-col items-center space-y-4 "
      >
        <p className="text-[7rem] text-white font-black  italic leading-[8.438rem] text-center">
          {lang.modal_thanks.title_1}
          <span className="text-color1"> {lang.modal_thanks.title_2}</span>
        </p>
        <div className="bg-color1 h-px w-full" />

        <p className="text-white text-[1.375rem] leading-[1.688rem] text-center px-12">
          {lang.modal_thanks.description}
        </p>

        <button
          onClick={() => setModalThanks((prev) => !prev)}
          className={cn(
            "text-white text-xl bg-[#FFFFFF1A] border-05 border-color1 flex items-center leading-[1.5rem] w-[16.25rem] h-[3.75rem] justify-center",
            HOVER_EFFECTS
          )}
        >
          {lang.modal_thanks.button_text}
          <img
            src="/assets/svg/right1.svg"
            alt=""
            className="ml-2.5 w-[2.25rem] h-[2.25rem]"
          />
        </button>
      </Modal>
    </>
  );
};

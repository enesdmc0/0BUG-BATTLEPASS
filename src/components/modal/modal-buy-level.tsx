import React, { useEffect, useState } from "react";
import { Modal } from "./modal";
import { buyLevelPrice, modalBuyLevelAtom, useLang } from "../../lib/jotai";
import { HOVER_EFFECTS } from "../../lib/constants";
import { useSetAtom, useAtom } from "jotai";
import { cn } from "../../lib/utils.ts";

export const ModalBuyLevel = () => {
  const [sliderValue, setSliderValue] = useState(0);
  const [fontSize, setFontSize] = useState(16); // Default font size
  const setModalBuyLevel = useSetAtom(modalBuyLevelAtom);
  const [getBuyLevelPrice] = useAtom(buyLevelPrice);
  const lang = useLang();

  useEffect(() => {
    // Get the computed font size of the HTML element
    const htmlFontSize = parseFloat(
      getComputedStyle(document.documentElement).fontSize
    );
    setFontSize(htmlFontSize);
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue(parseInt(e.target.value, 10));
  };

  return (
    <Modal
      atom={modalBuyLevelAtom}
      className="w-[72.688rem] h-[26.625rem] border-[#FFFFFF99] flex flex-col items-center justify-between space-y-4 "
    >
      <div>
        <p className="text-[8.125rem] text-white font-black italic leading-[9.813rem] text-center">
          {lang.modal_buy_level.title_1}
          <span className="text-color1"> {lang.modal_buy_level.title_2}</span>
        </p>
        <div className="bg-color1 h-px w-full" />
        <p className="text-white text-[1.375rem] text-center leading-[1.625rem] mt-1">
          {lang.modal_buy_level.description}
        </p>
      </div>

      <div className="relative w-[62.5rem] top-3">
        <input
          type="range"
          className="w-full h-4 bg-[#FFFFFF1A] rounded-md"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
        />

        <div
          className="absolute top-[-3.125rem] left-[50%] transform -translate-x-[10%] flex items-center justify-center"
          style={{
            left: `calc(${(sliderValue / 105) * 1000}px * ${fontSize / 16})`,
          }}
        >
          <img
            className="w-[3.125rem] h-[2.438rem]"
            src="/assets/svg/comment.svg"
            alt=""
          />
          <span className="text-white  font-bold  text-[1.438rem] absolute top-[50%] left-[50%] transform -translate-x-[50%] h-full w-full flex items-center justify-center pb-1 -translate-y-[50%]">
            {sliderValue}
          </span>
        </div>
      </div>
      <button
        onClick={() => setModalBuyLevel((prev) => !prev)}
        className={cn(
          "border-05 border-[#FFFFFF80] bg-[#FFFFFF1A] h-14 w-full flex items-center justify-between overflow-hidden",
          HOVER_EFFECTS
        )}
      >
        <img className="w-[4rem] h-[3.5]" src="/assets/svg/coin.svg" alt="" />
        <p className="text-white text-xl ">
          {lang.modal_buy_level.button_text} {sliderValue * getBuyLevelPrice}
        </p>
        <p />
      </button>
    </Modal>
  );
};

import { useAtom, useSetAtom } from "jotai";
import { useState } from "react";
import { HOVER_EFFECTS, PRODUCT_DEG } from "../../lib/constants";
import { GoBack, YouWon } from "../index";
import {
  activeWheelProductIDAtom,
  isDailySpinAtom,
  modalSpinAtom,
  spinProducts,
  useLang,
  wheelRotationAtom,
  youWinAtom,
} from "../../lib/jotai";
import { OneDayTime } from "../one-day.-time";
import { cn } from "../../lib/utils.ts";
import UserCredit from "../user-credit.tsx";

interface ProductType {
  image: string;
  name: string;
  probability: number;
}

const weightedRandom = (products: ProductType[]) => {
  const totalWeight = products.reduce(
    (acc, product) => acc + product.probability,
    0
  );
  let random = Math.random() * totalWeight;
  for (const product of products) {
    if (random < product.probability) {
      return product;
    }
    random -= product.probability;
  }
  return products[Math.floor(Math.random() * products.length) + 1];
};

export const ModalSpin = () => {
  const lang = useLang();
  const [open, setOpen] = useAtom(modalSpinAtom);
  const [getSpinProducts] = useAtom(spinProducts);
  const setYouWinModal = useSetAtom(youWinAtom);
  const [isDailySpin, setIsDailySpin] = useAtom(isDailySpinAtom);
  const setActiveWheelProductID = useSetAtom(activeWheelProductIDAtom);
  const [wheelRotation, setWheelRotation] = useAtom(wheelRotationAtom);

  const [isSpinning, setIsSpinning] = useState(false);

  const handleSpin = () => {
    const selectedProduct = weightedRandom(getSpinProducts);
    const id = getSpinProducts.indexOf(selectedProduct) + 1;
    const totalRotation = 360 * 5 + PRODUCT_DEG[id];
    setIsSpinning(true);
    setWheelRotation(totalRotation);
    setActiveWheelProductID(id);
    setTimeout(() => {
      setIsSpinning(false);
      setYouWinModal(true);
    }, 5000);
  };

  return (
    <>
      <div
        className={cn(
          "h-screen w-screen fixed top-0 left-0 z-50 flex items-center justify-center backdrop-blur bg-bg1 bg-cover bg-center bg-[#000]/70",
          open ? "" : "hidden"
        )}
      >
        <div className="h-full w-full bg-bg2 bg-cover bg-center relative">
          <div className="absolute -top-96 left-0 w-full h-full z-0">
            <iframe
              src="/test.html"
              style={{ width: "100%", height: "100%", border: "none" }}
              title="Shader Embed"
            />
          </div>
          <div className="h-full w-full px-12 pt-12 relative">
            <div className="flex justify-between items-start">
              <GoBack onClick={() => setOpen((prev) => !prev)} />
              <div className="flex space-x-[10.375rem]">
                <div className="w-[42.188rem] flex flex-col items-center space-y-6 relative z-40">
                  <p className="text-[7.25rem] font-black text-color1 leading-[8.75rem]">
                    {lang.modal_spin.title_1}
                  </p>
                  <p className="artheim text-[4rem] text-white absolute top-8">
                    Lucky Spin
                  </p>
                  <p className="text-[#FFFFFFB2] font-medium text-2xl text-center">
                    {lang.modal_spin.description1} <br />
                    {lang.modal_spin.description2}
                  </p>
                  {isDailySpin ? (
                    <div className="flex space-x-2 w-full h-[5.5rem]">
                      <OneDayTime />
                      <button
                        onClick={() => setIsDailySpin((prev) => !prev)}
                        className={cn(
                          "text-white font-bold text-[2rem] flex-1 border-05 border-[#FFFFFFB2] gradient10 flex flex-col items-center justify-center leading-[2.5rem]",
                          HOVER_EFFECTS
                        )}
                      >
                        {lang.modal_spin.button_text_3}{" "}
                        <span className="text-sm">
                          {lang.modal_spin.button_text_3_subtitle}
                        </span>
                      </button>
                    </div>
                  ) : (
                    <button
                      className={cn(
                        "border-05 border-[#FFFFFFB2] gradient10 w-full text-color5 font-bold text-[2rem] py-6 leading-[2.375rem] relative z-50",
                        HOVER_EFFECTS
                      )}
                      onClick={handleSpin}
                    >
                      {lang.modal_spin.button_text_1}
                    </button>
                  )}
                </div>
                <UserCredit />
              </div>
            </div>
            <div className="w-fit mx-auto relative mt-10">
              <div className="flex items-center justify-center relative z-20 -left-2.5">
                <img
                  className=" w-[6.563rem] h-[10.063rem]"
                  src="/assets/svg/spin-direction.svg"
                  alt=""
                />
              </div>
              <div
                className={cn(
                  "flex items-center justify-center relative -top-20 rounded-full",
                  isSpinning ? "start" : "stop"
                )}
                style={{
                  transform: `rotate(${-wheelRotation}deg)`,
                  transition:
                    wheelRotation !== 0 ? `transform 5s ease-out` : "",
                }}
              >
                <div
                  className={`w-[67.5rem] h-[67.5rem] relative z-10 rounded-full overflow-hidden`}
                >
                  {getSpinProducts.map((x, i) => (
                    <div key={i} className={cn(" spin_product", `p${i + 1}`)}>
                      <div className="text ">
                        <img
                          src="/assets/svg/lock.svg"
                          className="mx-auto"
                          alt="enes"
                        />
                        <p className="mt-28 text-[2.25rem] text-white artheim">
                          {x.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <img
                  src="/assets/spin.png"
                  className="w-[67.5rem] h-[67.5rem] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[23deg]"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <YouWon />
    </>
  );
};

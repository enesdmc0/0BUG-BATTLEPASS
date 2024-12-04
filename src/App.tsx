import {
  Background,
  DailyButtons,
  FreeProduct,
  Header,
  Hours,
  Missions,
  PremiumProduct,
  Upgrade,
} from "./components";
import { useSetAtom, useAtom } from "jotai";
import { modalBuyLevelAtom, freeProduct, premiumProduct, level, xp } from "./lib/jotai";
import { HOVER_EFFECTS } from "./lib/constants";
import { cn } from "./lib/utils.ts";
import { useState } from "react";
import { ProductWon } from "./components/product-won.tsx";

const App = () => {

  const [getFreeProducts] = useAtom(freeProduct);
  const [getPremiumProducts] = useAtom(premiumProduct);



  const setModalBuyLevel = useSetAtom(modalBuyLevelAtom);
  const [getLevel] = useAtom(level);
  const [getXP] = useAtom(xp);

  const [productCount, setProductCount] = useState(0);

  const handleLeft = () => {
    if (productCount === 0) return;
    setProductCount((prev) => prev - 10);
  };

  const handleRight = () => {
    if (productCount === 90) return;
    setProductCount((prev) => prev + 10);
  };

  return (
    <Background>
      <div className="h-full space-y-6 flex flex-col">
        <Header />
        <div className="h-fit">
          <div className="space-x-2 flex ">
            <div className="w-[20rem] space-y-2">
              <DailyButtons />
              <Hours />
              <Upgrade />
            </div>
            <Missions />
          </div>
        </div>
        <div className=" flex-1 space-y-4">
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <p className="text-[1.313rem] text-white ">
                {getLevel} LVL ({getXP}/300 XP)
              </p>
              {getLevel !== 100 && (
                <>
                  <button
                    onClick={handleLeft}
                    className={cn(
                      "flex items-center justify-center size-8 rounded-full bg-[#FFFFFF1A]",
                      HOVER_EFFECTS
                    )}
                  >
                    <img
                      className="w-[1.5rem] h-[1.5rem]"
                      src="/assets/svg/left.svg"
                      alt=""
                    />
                  </button>
                  <p className="text-[1.313rem] text-white">
                    {productCount + 1}-{productCount + 10} LVL
                  </p>
                  <button
                    onClick={handleRight}
                    className={cn(
                      "flex items-center justify-center size-8 rounded-full bg-[#FFFFFF1A]",
                      HOVER_EFFECTS
                    )}
                  >
                    <img
                      className="w-[1.5rem] h-[1.5rem]"
                      src="/assets/svg/right.svg"
                      alt=""
                    />
                  </button>
                </>
              )}
            </div>
            <div className="h-px flex-1 bg-color1" />
            {getLevel === 100 ? (
              <div className="flex items-center space-x-4">
                <button
                  className={cn(
                    "flex items-center justify-center size-8 rounded-full bg-[#FFFFFF1A]",
                    HOVER_EFFECTS
                  )}
                >
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src="/assets/svg/left.svg"
                    alt=""
                  />
                </button>
                <p className="text-[1.313rem] text-white">1-10 LVL</p>
                <button
                  className={cn(
                    "flex items-center justify-center size-8 rounded-full bg-[#FFFFFF1A]",
                    HOVER_EFFECTS
                  )}
                >
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src="/assets/svg/right.svg"
                    alt=""
                  />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setModalBuyLevel((prev) => !prev)}
                className={cn(
                  "text-white font-bold bg-[#FFFFFF12] border-05 border-[#FFFFFF33] py-2 px-12",
                  HOVER_EFFECTS
                )}
              >
                Buy Levels
              </button>
            )}
          </div>
          <div className="h-[12.063rem] flex space-x-4 ">
            <div className="w-[2.125rem] h-[12.063rem] flex items-center justify-center bg-[#FFFFFF1A]">
              <p className="text-color1 font-bold text-sm -rotate-90">FREE</p>
            </div>
            <div className="grid grid-cols-10 flex-1 gap-x-4">
              {getFreeProducts
                .slice(productCount, productCount + 10)
                .map((x, i) => (
                  <FreeProduct item={x} key={i} />
                ))}
            </div>
          </div>
          <div className="space-x-4  flex">
            <div className="w-[2.125rem]" />
            <div className=" flex items-center justify-between w-full px-[4.375rem] ">
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="flex items-center ">
                    <div
                      className={cn(
                        "w-[11.347rem]  h-px absolute ",
                        (productCount + i + 1) % 10 === 0 ? "bg-transparent" :
                        (productCount + i + 1) < getLevel
                          ? "bg-color1"
                          : "bg-[#4F4F4F]"
                      )} 
                    />
                    <div className="size-5  relative z-20 rounded-full flex items-center justify-center text-white bg-color1 text-[0.625rem] font-bold">
                      {productCount + i + 1}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="h-[12.063rem] flex space-x-4">
            <div className="w-[2.125rem] h-[12.063rem] flex items-center justify-center bg-[#FFFFFF1A]">
              <p className="text-color2 font-bold text-sm -rotate-90">
                PREMIUM
              </p>
            </div>
            <div className="grid grid-cols-10 flex-1 gap-x-4">
              {getPremiumProducts
                .slice(productCount, productCount + 10)
                .map((x, i) => (
                  <PremiumProduct item={x} key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
      <ProductWon />
    </Background>
  );
};

export default App;

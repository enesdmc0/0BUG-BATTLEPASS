import { cn } from "../lib/utils";
import {
  productWonAtom,
  productWonDetailAtom,
  freeProduct,
  premiumProduct,
  useLang,
} from "../lib/jotai";
import { useAtom } from "jotai";
import { HOVER_EFFECTS } from "../lib/constants.ts";
import React from "react";

export const ProductWon = () => {
  const lang = useLang();
  const [open, setOpen] = useAtom(productWonAtom);
  const [productDetail] = useAtom(productWonDetailAtom);
  const [getFreeProducts, setFreeProducts] = useAtom(freeProduct);
  const [getPremiumProducts, setPremiumProducts] = useAtom(premiumProduct);

  const handleClaim = () => {
    setOpen((prev) => !prev);

    if (productDetail.type === "free") {
      const updatedFreeProducts = getFreeProducts.map((product) => {
        if (product.id === productDetail.id) {
          return { ...product, isClaimed: true };
        }
        return product;
      });

      setFreeProducts(updatedFreeProducts);
    } else {
      const updatedPremiumProducts = getPremiumProducts.map((product) => {
        if (product.id === productDetail.id) {
          return { ...product, isClaimed: true };
        }
        return product;
      });

      setPremiumProducts(updatedPremiumProducts);
    }
  };

  return (
    <div
      className={cn(
        "h-screen w-screen bg-[#000000B2] backdrop-blur-sm  fixed top-0 left-0 flex items-center justify-center z-50",
        open ? "" : "hidden"
      )}
    >
      <div className="w-[40.625rem] h-[49.125rem] p-9 bg-[#FFFFFF0F] flex flex-col items-center justify-between border-05 border-[#FFFFFF99] relative z-50">
        <img
          src={`/assets/itemsImage/${productDetail.image}`}
          className="w-[25rem] h-[25rem]"
          alt=""
        />
        <p className="text-5xl font-extrabold leading-[3.625rem] text-white">
          <span>{productDetail.amount}x&nbsp;</span>
          {productDetail.title.split(" ").map((word, index) => (
            <React.Fragment key={index}>
              <span className={index === 0 ? "" : "text-color1"}>{word}</span>{" "}
            </React.Fragment>
          ))}
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
      <img
        src="/assets/svg/mission.svg"
        className="absolute top-0 left-0 "
        alt=""
      />
    </div>
  );
};

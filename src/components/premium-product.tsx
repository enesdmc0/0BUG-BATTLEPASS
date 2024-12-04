import { FC } from "react";
import { cn } from "../lib/utils.ts";
import { HOVER_EFFECTS } from "../lib/constants.ts";
import { productWonAtom, productWonDetailAtom, level, premium  } from "../lib/jotai.ts";
import { useAtom, useSetAtom } from "jotai";

interface Props {
  item: {
    id: number;
    title: string;
    image: string;
    isClaimed: boolean;
    amount: number
  };
}

export const PremiumProduct: FC<Props> = ({ item }) => {
  const setOpen = useSetAtom(productWonAtom);
  const setProductDetail = useSetAtom(productWonDetailAtom);

  const [getLevel] = useAtom(level);
  const [getPremium] = useAtom(premium);


  const { title, id, isClaimed, image, amount } = item;

  const handleClick = () => {
    if (!isClaimed && id <= getLevel) {
      const newDetails = {
        id: id,              
        title: title, 
        image: image,  
        isClaimed: isClaimed,
        amount: amount,
        type: "premium"
      }
      setProductDetail(newDetails);
      setOpen((prev) => !prev);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "w-full h-full relative bg-[#FFFFFF1A] px-2 pt-2 flex flex-col justify-between",
        !isClaimed ? (id <= getLevel ? `cursor-pointer ${HOVER_EFFECTS}` : "") : ""
      )}
    >
      <div
        className={cn(
          " h-[5.75rem] w-full absolute opacity-70 top-0 left-0  gradient7"
        )}
      />

      {getPremium ? (
        <>
          
          <div className="flex items-center justify-between">
            <p className="text-white text-xs">{amount}</p>
            <img
              className="w-[1rem] h-[1rem]"
              src={`/assets/svg/check${!isClaimed ? "" : "1"}.svg`}
              alt=""
            />
          </div>
          <div className="relative mx-auto">
            <img
              className={cn("w-[7.5rem] h-[7.5rem]", id > getLevel ? "blur" : "")}
              alt=""
              src={`/assets/itemsImage/${image}`}
            />
            <img
              alt=""
              src="/assets/svg/lock.svg"
              className={cn(
                "absolute w-[6rem] h-[6rem] left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]",
                id > getLevel ? "" : "hidden"
              )}
            />
          </div>
          <p className="text-white text-center ">{title}</p>
          
        </>
      ) : (
        <Premium />
      )}

      <div className={cn(" w-[6.75rem] rounded-t  h-1 mx-auto gradient8")} />
    </div>
  );
};

const Premium = () => {
  return (
    <>
      <div className="relative mx-auto">
        <img
          className="w-[8.188rem] h-[8.188rem]"
          alt=""
          src={"/assets/svg/lock1.svg"}
        />
      </div>

      <p className="text-[#FFFFFF4D] text-[0.938rem] text-center ">
        Upgrade to unlock
      </p>
    </>
  );
};

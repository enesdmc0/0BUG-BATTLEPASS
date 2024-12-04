import { FC } from "react";
import { cn } from "../lib/utils.ts";

interface Props {
  item: {
    title: string;
    description: string;
    value: number;
    totalValue: number;
  };
}

export const MissionCard: FC<Props> = ({ item }) => {
  const { title, description, value, totalValue } = item;
  return (
    <div className="bg-[#FFFFFF1A] border-05 border-[#FFFFFF33] px-6 pt-6 pb-[0.875rem] flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <p className="text-color1 font-bold text-sm">{title}</p>
        <img className="w-[1rem] h-[1rem]"
          src={`/assets/svg/check${value === totalValue ? "1" : ""}.svg`}
          alt=""
        />
      </div>
      <p className="text-[0.625rem] font-bold text-white">{description}</p>
      <div className="space-y-px">
        <p className="text-[0.625rem] font-bold text-white">
          {value}/{totalValue}
        </p>
        <div className="bg-[#FFFFFF1A] h-1 relative">
          <div
            className={cn("absolute left-0 top-0 bg-color1  h-1")}
            style={{ width: `${value * 20}%` }}
          />
        </div>
      </div>
    </div>
  );
};

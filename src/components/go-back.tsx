import { FC } from "react";
import { HOVER_EFFECTS } from "../lib/constants.ts";
import { cn } from "../lib/utils.ts";
import { useLang } from "../lib/jotai.ts";

interface Props {
  onClick?: () => void;
}

export const GoBack: FC<Props> = ({ onClick }) => {
  const lang = useLang();
  return (
    <button
      onClick={onClick}
      className={cn("flex items-center", HOVER_EFFECTS)}
    >
      <span className="flex items-center justify-center space-x-px size-9 rounded-md bg-black relative z-10">
        <img
          className="w-[0.563rem] h-[0.875rem]"
          src="/assets/svg/e.svg"
          alt=""
        />
        <img
          className="w-[0.563rem] h-[0.875rem]"
          src="/assets/svg/s.svg"
          alt=""
        />
        <img
          className="w-[0.563rem] h-[0.875rem]"
          src="/assets/svg/c.svg"
          alt=""
        />
      </span>
      <span className="w-[7.875rem] h-9 flex items-center justify-center relative -left-[0.563rem] gradient2 text-white font-medium">
        {lang.go_back} <span className="w-5"></span>
      </span>
    </button>
  );
};

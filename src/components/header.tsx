import { useLang } from "../lib/jotai";
import { GoBack } from "./index";
export const Header = () => {
  const lang = useLang();
  
  return (
    <div className="flex justify-between items-start">
      <GoBack />
      <div className="w-[33.438rem] space-y-1">
        <p className="text-[5.063rem] text-white pb-1 font-black  italic leading-[6.125rem] text-center">
          {lang.header.title_1}
          <span className="text-color1">{lang.header.title_2}</span>
        </p>
        <div className="border-b border-color1 h-px w-full" />
        <p className="text-white text-sm text-center leading-[1.063rem]">
          {lang.header.description}
        </p>
      </div>
      <img
        className="w-[12.25rem] h-[4.5rem]"
        src="/assets/svg/logo.svg"
        alt=""
      />
    </div>
  );
};

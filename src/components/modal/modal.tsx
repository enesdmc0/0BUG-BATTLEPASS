import React, { FC } from "react";
import { useAtom } from "jotai";
import { PrimitiveAtom } from "jotai";
import { cn } from "../../lib/utils";
import {GoBack} from "../index";


interface Props {
  children: React.ReactNode;
  className?: string;
  atom: PrimitiveAtom<boolean>;
  isThanks?: boolean;
}

export const Modal: FC<Props> = ({ children, atom, className, isThanks = false }) => {
  const [open, setOpen] = useAtom(atom);
  return (
    <div
      className={cn(
        "h-screen w-screen fixed top-0 left-0 z-50 flex items-center justify-center backdrop-blur bg-[#000]/70",
        open ? "" : "hidden"
      )}
    >
     {isThanks && <img src="/assets/svg/mission.svg" className="absolute top-0 left-0 " alt="" />}

      <div className="absolute -top-80 left-0 w-full h-full">
        <iframe
          src="/test.html"
          style={{ width: "100%", height: "100%", border: "none" }}
          title="Shader Embed"
        />
      </div>
      <div
        className={cn(
          "bg-[#FFFFFF12] relative border-05 backdrop-blur-2xl px-[4.5rem] py-9",
          className
        )}
      >
        {children}
      </div>
      { !isThanks && <div className="absolute top-12 left-12">
        <GoBack onClick={() => setOpen((prev) => !prev)} />
      </div>}
    </div>
  );
};

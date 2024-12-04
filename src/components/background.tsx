import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

export const Background: FC<Props> = ({ children }) => {
  return (
    <div className=" h-screen w-scree bg-bg1 bg-cover bg-center ">
      <div className=" h-full w-full bg-bg2 bg-cover  bg-center ">
        <div className="bg-[#000]/80  h-full w-full backdrop-blur-sm">
          <div className="gradient1 h-full w-full  " />
          <div className="absolute top-0 left-0 h-full w-full py-[4.375rem] px-12 ">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

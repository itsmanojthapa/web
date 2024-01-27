import Image from "next/image";
import React from "react";
import { TbBrandVscode } from "react-icons/tb";

const Nav = () => {
  return (
    <div className="flex flex-row justify-center  border-b border-slate-700 bg-[#1a1d20] text-sm">
      <div className=" flex h-8 w-full flex-row items-center space-x-3">
        <TbBrandVscode className="ml-3 size-5 text-blue-600" />
        <div>File</div>
        <div>Edit</div>
        <div>View</div>
        <div>Go</div>
        <div>Run</div>
        <div>Terminal</div>
        <div>Help</div>
      </div>
      <p className="flex w-full items-center justify-center max-[950px]:hidden">
        Manoj Thapa - Visual Studio Code
      </p>
      <div className="!mr-3 flex w-full flex-row items-center justify-end space-x-1">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>
    </div>
  );
};

export default Nav;

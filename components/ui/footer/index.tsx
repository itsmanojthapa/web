import React from "react";
import { MdSettingsEthernet } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";
import { IoIosNotifications } from "react-icons/io";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

function Footer() {
  return (
    <div className="flex flex-row justify-between border-t border-slate-700 bg-[#1a1d20] p-1 text-sm">
      <div className="ml-3 flex flex-row items-center space-x-3">
        <div>🔥 Dev.</div>
        <RiErrorWarningLine className="size-4" />
      </div>
      <div className="mr-1 flex flex-row items-center space-x-3">
        <div>Layout: U.S.</div>
        <div className="flex flex-row items-center">
          <IoCheckmarkDoneOutline className=" mr-1 size-5" /> <p>Prettier</p>
        </div>
        <IoIosNotifications className="size-5" />
      </div>
    </div>
  );
}

export default Footer;

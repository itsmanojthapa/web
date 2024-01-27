"use client";
import React from "react";
import { CiFileOn } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";
import { CiSettings } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";
import pageState from "@/components/state/pageState";
import { useRecoilState } from "recoil";

const ASide = () => {
  const [pageValue, setPageState] = useRecoilState(pageState);
  return (
    <div className="flex w-[60px] flex-col justify-between  bg-[#252A2E] ">
      <div className="m-0  mt-2 flex flex-col  items-center justify-center space-y-6">
        <Link
          href="/"
          className={`${pageValue === 1 && "border-l-2 text-blue-500"} flex w-full flex-1  justify-center`}
          onClick={() => setPageState(1)}
        >
          <CiFileOn className="size-7" />
        </Link>
        <Link
          href="/article"
          className={`${pageValue === 2 && "border-l-2 text-blue-500"} flex w-full flex-1  justify-center`}
          onClick={() => setPageState(2)}
        >
          <FaFileCode className="size-7" />
        </Link>
        <Link
          href="/projects"
          className={`${pageValue === 3 && "border-l-2 text-blue-500"} flex w-full flex-1  justify-center`}
          onClick={() => setPageState(3)}
        >
          <FaPen className=" size-5" />
        </Link>
        <Link
          href="/contact"
          className={`${pageValue === 4 && "border-l-2 text-blue-500"} flex w-full flex-1  justify-center`}
          onClick={() => setPageState(4)}
        >
          <IoShareSocialOutline className="size-7" />
        </Link>
        <Link
          href="/about"
          className={`${pageValue === 5 && "border-l-2 text-blue-500"} flex w-full flex-1  justify-center`}
          onClick={() => setPageState(5)}
        >
          <RiAccountCircleLine className="size-8" />
        </Link>
      </div>
      <div className="ml-1.5 space-y-8">
        <CiSettings className="size-8" />
      </div>
    </div>
  );
};

export default ASide;

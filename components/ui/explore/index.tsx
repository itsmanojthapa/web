"use client";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa6";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";
import pageState from "@/components/state/pageState";
import { useRecoilState } from "recoil";

const Explore = () => {
  const [pageValue, setPageState] = useRecoilState(pageState);
  return (
    <div className="flex w-40  resize-x flex-col overflow-hidden border-r border-slate-700 bg-[#1a1d20]">
      <div className="m-2">
        <div className="flex flex-row justify-between">
          <div className="mr-5 text-sm font-medium">EXPLORER</div>
          <BsThreeDots />
        </div>
        <div className="mt-8 flex flex-row text-xs">
          <FaAngleDown />
          <div className="bold ml-1.5 font-bold">PORTFOLIO</div>
        </div>
        <div className="mt-2 flex flex-col space-y-1">
          <Link
            href="/"
            className={`bg flex flex-row items-center text-sm `}
            onClick={() => setPageState(1)}
          >
            <SiTypescript className="mr-1 text-blue-500" />
            <p className={`${pageValue === 1 && "text-blue-500"}`}>home.tsx</p>
          </Link>
          <Link
            href="/article"
            className="flex flex-row items-center text-sm"
            onClick={() => setPageState(2)}
          >
            <FaCode className="mr-1 text-yellow-500" />
            <p className={`${pageValue === 2 && "text-blue-500"}`}>
              article.tsx
            </p>
          </Link>
          <Link
            href="/projects"
            className="flex flex-row items-center text-sm"
            onClick={() => setPageState(3)}
          >
            <FaReact className="mr-1 text-teal-500 " />
            <p className={`${pageValue === 3 && "text-blue-500"}`}>
              projects.tsx
            </p>
          </Link>

          <Link
            href="/contact"
            className="flex flex-row items-center text-sm"
            onClick={() => setPageState(4)}
          >
            <FaCss3 className="mr-1 text-blue-500" />
            <p className={`${pageValue === 4 && "text-blue-500"}`}>
              contact.tsx
            </p>
          </Link>
          <Link
            href="/about"
            className="flex flex-row items-center text-sm"
            onClick={() => setPageState(5)}
          >
            <FaHtml5 className="mr-1 text-red-500" />
            <p className={`${pageValue === 5 && "text-blue-500"}`}>
              about.html
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Explore;

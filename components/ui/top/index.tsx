"use client";
import React from "react";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";
import pageState from "@/components/state/pageState";
import { useRecoilState } from "recoil";

const Top = () => {
  const [pageValue, setPageState] = useRecoilState(pageState);

  return (
    <div>
      <div className="flex h-8 flex-row  bg-[#1a1d20]">
        <Link
          href="/"
          className={`flex w-fit flex-row items-center ${pageValue === 1 && "bg-[#252A2E]"}   p-3 text-sm`}
          onClick={() => setPageState(1)}
        >
          <SiTypescript className="mr-1  text-blue-500" />
          home.tsx
        </Link>
        <Link
          href="/article"
          className={`flex flex-row items-center  p-3 text-sm ${pageValue === 2 && "bg-[#252A2E]"}`}
          onClick={() => setPageState(2)}
        >
          <FaCode className="mr-1 text-yellow-500" />
          article.tsx
        </Link>
        <Link
          href="/projects"
          className={`flex flex-row items-center p-3 text-sm ${pageValue === 3 && "bg-[#252A2E]"}`}
          onClick={() => setPageState(3)}
        >
          <FaReact className="mr-1 text-teal-500 " />
          projects.tsx
        </Link>
        <Link
          href="/contact"
          className={`flex flex-row items-center p-3 text-sm ${pageValue === 4 && "bg-[#252A2E]"}`}
          onClick={() => setPageState(4)}
        >
          <FaCss3 className="mr-1 text-blue-500" />
          contact.tsx
        </Link>
        <Link
          href="/about"
          className={`flex flex-row items-center p-3 text-sm ${pageValue === 5 && "bg-[#252A2E]"}`}
          onClick={() => setPageState(5)}
        >
          <FaHtml5 className="mr-1 text-red-500" />
          about.html
        </Link>
      </div>
    </div>
  );
};

export default Top;

"use client";
import React from "react";
import { SiTypescript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaCode } from "react-icons/fa6";
import Link from "next/link";
import pageState from "@/components/state/pageState";
import { useRecoilState } from "recoil";
import { FaFolderTree } from "react-icons/fa6";
import { motion } from "framer-motion";
import { DiVim } from "react-icons/di";

const Top = () => {
  const [pageValue, setPageState] = useRecoilState(pageState);

  const data = [
    {
      id: 1,
      name: "home.tsx",
      icon: <SiTypescript className="mr-1  text-blue-500" />,
      ref: "/",
    },
    {
      id: 2,
      name: "article.md",
      icon: <FaCode className="mr-1 text-yellow-500" />,
      ref: "/article",
    },
    {
      id: 3,
      name: "projects.list",
      icon: <FaFolderTree className="mr-1 text-green-500 " />,
      ref: "/projects",
    },
    {
      id: 4,
      name: "contact.css",
      icon: <FaCss3 className="mr-1 text-blue-500" />,
      ref: "/contact",
    },
    {
      id: 5,
      name: "about.json",
      icon: <FaHtml5 className="mr-1 text-red-500" />,
      ref: "/about",
    },
  ];

  return (
    <div className="flex h-8 flex-row  bg-[#1a1d20] max-[599px]:hidden">
      {data.map((data, index) => {
        return (
          <Link
            key={index}
            href={data.ref}
            className={`flex flex-col text-sm ${pageValue === data.id && "bg-[#252A2E]"} `}
            onClick={() => setPageState(data.id)}
          >
            {pageValue === data.id ? (
              <motion.div
                className={`h-0.5 w-full bg-white/80`}
                layoutId="underline"
              />
            ) : (
              <div className={`h-0.5 w-[50px]`} />
            )}
            <div
              className={`flex w-fit flex-row items-center px-3 py-1 text-sm `}
            >
              {data.icon}
              {data.name}
            </div>
          </Link>
        );
      })}

      {/* <div className="flex h-8 flex-row  bg-[#1a1d20] max-[599px]:hidden">
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
          <FaFolderTree className="mr-1 text-green-500 " />
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
      </div> */}
    </div>
  );
};

export default Top;

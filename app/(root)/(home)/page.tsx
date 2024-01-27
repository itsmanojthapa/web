"use client";
import pageState from "@/components/state/pageState";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useRecoilState } from "recoil";

const Home = () => {
  const [pageValue, setPageState] = useRecoilState(pageState);
  function handleClick() {
    setPageState(pageValue + 1);
    console.log(pageValue);
  }
  return (
    <div className="w-full overflow-auto bg-[#252A2E] text-slate-300">
      <div className="m-3">
        <div className="flex flex-col items-center justify-center">
          <div className=" border-t-emerald-500">
            <div className="box border-4 border-blue-500"></div>
          </div>
          <p className="text-4xl font-bold">Manoj Thapa</p>
          <p className="typewriter w-fit text-xl font-bold md:text-2xl ">
            - Web Developer
          </p>
        </div>
        <Image src={"/code.gif"} alt="code" width={360} height={360} />
      </div>
    </div>
  );
};

export default Home;

"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import RecentProjectbtn from "@/components/routingbutton/RoutingBtnComp";
import Marquee from "react-fast-marquee";

function HeroCTR() {
    const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="relative mt-[123px] rounded-3xl ">
      <div
        style={{
          backgroundImage: `url(/images/hero/bg.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          boxShadow: '#00000036 0px 0px 0px 100vmax',
          clipPath: 'inset(0 -100vmax)',
        }}
        className="absolute left-1/2 -translate-x-1/2 w-[calc(100vw-40px)] lg:w-[calc(100vw-100px)] h-full rounded-3xl"
      >
      </div>
      <div className="relative z-10 py-20  md:px-0 flex flex-col items-center gap-4">
        <Image
          src={"/images/hero/heroimg.png"}
          alt={"Adil"}
          width={192}
          height={192}
          className="object-contain border-4 border-white/10 rounded-full mb-2"
        />
        <div>
          <div className="flex justify-center items-center gap-2">
            <div className="relative w-3 h-3">
              <div className="absolute inset-0 rounded-full bg-[#3CC800] animate-ping opacity-75"></div>
              <div className="relative w-3 h-3 bg-[#3CC800] rounded-full shadow-[0_0_8px_2px_#22c55e]"></div>
            </div>

            <h2 className="text-transparent bg-gradient-to-r from-[#A8A8A8] via-[#FFFFFF] to-[#A8A8A8] bg-clip-text text-[24px] md:text-[36px] font-semibold unbounded-font animate-gradient">
              Muhammad <span className="font-normal">Adil</span>
            </h2>
          </div>
          {!isLoaded ? (
            <div className="h-5 max-w-[219px] md:max-w-[419px] mx-auto bg-white/10 rounded animate-pulse"></div>
          ) : (
            <Marquee
              gradient={false}
              speed={20}
              className="max-w-[219px] md:max-w-[419px] mx-auto overflow-hidden vcr-font"
            >
              <div className="flex items-center gap-6 whitespace-nowrap">
                <p>GRAPHIC ARTIST</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>UI/UX</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>MOTION SPECIALIST</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>GRAPHIC ARTIST</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>UI/UX</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>MOTION SPECIALIST</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>GRAPHIC ARTIST</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>UI/UX</p>
                <div className="h-[11px] w-[2px] bg-white"></div>
                <p>MOTION SPECIALIST</p>
              </div>
            </Marquee>
          )}

        </div>
        <p className="text-[#ffff] text-[12px] max-w-[300px] font-medium text-center mb-4">
          Crafting intuitive experiences, bold visuals, and
          motion that moves. Let’s build your next big idea.
        </p>
        <RecentProjectbtn href="#projects" label="Recent Projects" />
      </div>
    </div>
  );
}

export default HeroCTR;

"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import OptimizedTicketSection from "./components/ticket";
import Ticket from "./components/ticket";

export default function Home() {
  const [screenSize, setScreenSize] = useState("full");
  const offset1 = (screenSize == "mobile") ? 155 : 214;

  return (
    <div className="relative flex flex-col min-h-screen max-h-screen overflow-hidden">
      <Image
        src="/images/left-spotlight.svg"
        width={1836.93}
        height={1843.43}
        alt="Left Spotlight"
        className="fixed left-[50px] mix-blend-soft-light top-0 z-[30] w-screen h-screen pointer-events-none"
      />

      <Image
        src="/images/right-spotlight.svg"
        width={1132.53}
        height={1724.1}
        alt="Right Spotlight"
        className="fixed right-[-450px] mix-blend-soft-light top-0 z-[30] w-screen h-screen pointer-events-none"
      />

      <div className="absolute top-10 left-10 w-1/2 h-full z-40">
        <p className="text-2xl font-fiveBySeven">
          TO:
          <span className="ml-6 font-conte text-2xl opacity-50">
            demoer name
          </span>
        </p>
        <p className="text-2xl font-fiveBySeven">
          FROM:
          <span className="ml-6 font-conte text-2xl opacity-50">Socratica</span>
        </p>

        <button
          onClick={() => {
            console.log("clicked");
          }}
          className="z-50 mt-8 flex flex-row items-center gap-2 bg-[#212121] text-white px-6 py-3 border-2 border-white/30 shadow-letter hover:bg-[#333333] hover:shadow-none"
        >
          <Image
            src="/images/asterism.svg"
            alt="Asterism"
            width={16}
            height={16}
          />
          <p className="uppercase text-base font-fiveBySevenBold">
            Open Your Letter
          </p>
        </button>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-full">
        <Image
          src="/images/right-side.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div
        className="absolute top-0 right-0 w-[40%] h-auto z-10"
        style={{ transform: "rotate(40deg) translate(-275px, 150px)" }}
      >
        {/* <Image 
          src="/images/final-ticket.png"
          width={1089}
          height={389}
          alt="ticket"
          className="shadow-2xl z-50 w-full"
          priority
        /> */}

        <Ticket />
        
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-grow" />
        <Image
          src="/images/socratica.svg"
          alt="Socratica"
          layout="responsive"
          width={2284}
          height={462}
        />
      </div>
    </div>
  );
}

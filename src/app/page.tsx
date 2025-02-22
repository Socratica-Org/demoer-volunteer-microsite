"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen max-h-screen overflow-hidden">

      <div className="absolute top-0 left-[12%] w-full h-full z-30">
        <Image 
          src="/images/left-spotlight.svg" 
          alt="Left Spotlight" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      <div className="absolute top-0 -right-1/3 w-full h-full z-30">
        <Image 
          src="/images/right-spotlight.svg" 
          alt="Right Spotlight" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>

      <div className="absolute top-10 left-10 w-1/2 h-full z-40">
        <p className="text-2xl font-fiveBySeven">
          TO:
          <span className="ml-6 font-conte text-2xl opacity-50">demoer name</span>
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
          <Image src="/images/asterism.svg" alt="Asterism" width={16} height={16} />
          <p className="uppercase text-base font-fiveBySevenBold">Open Your Letter</p>
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

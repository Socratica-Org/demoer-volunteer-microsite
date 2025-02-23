"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Ticket from "./components/ticket";

function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Home() {
  const { demoer } = useParams();
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setOpacity(0.6);
    }, 500);

    const timer2 = setTimeout(() => {
      setOpacity(1);
    }, 800);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsFinal(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  useEffect(() => {
    if (isFinal) {
      const timer = setTimeout(() => {
        setShowLetter(true);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isFinal]);

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
      {!isAnimating && (
        <div className="absolute top-10 left-4 md:left-10 w-1/2 h-full z-40">
          <p className="text-2xl font-fiveBySevenBold opacity-50">
            TO:
            <span className="ml-[2.9rem] md:ml-[3.4rem] font-conte text-2xl">
              {capitalizeFirstLetter((demoer as string) || "Demoer")}
            </span>
          </p>
          <p className="text-2xl font-fiveBySevenBold opacity-50">
            FROM:
            <span className="ml-4 md:ml-6 font-conte text-2xl">Socratica</span>
          </p>

          <div 
            onClick={() => {
              setIsAnimating(true);
            }}
            className="mt-12 glassmorphic-button border-[1px] border-white/30 shadow-letter hover:bg-[#333333] hover:shadow-none bg-[#212121] gap-[8px] justify-center inline-flex"
          >
            <Image
              src="/images/asterism.svg"
              alt="Asterism"
              width={16}
              height={16}
            />
            <div className="text-[#F5F1E2] tracking-widest font-fiveBySevenBold uppercase text-[9px] md:text-[11px]">
              Open Your Letter
            </div>
          </div>
        </div>
      )}

      {!isAnimating && (
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src="/backgrounds/right-side.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}

      <div
        className={`absolute top-0 right-0 w-full h-full transition-transform duration-500 ${
          isAnimating ? "transform translate-x-0" : "transform translate-x-1/2"
        }`}
      >
        {isAnimating && (
          <Image
            src="/backgrounds/background-final.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className={`transition-opacity duration-1000 ${
              isFinal ? "opacity-0" : "opacity-100"
            }`}
          />
        )}

        {isFinal && (
          <Image
            src="/backgrounds/background-final.svg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000 opacity-100"
          />
        )}

        {showLetter && (
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="relative animate-pop">
              <Image
                src="/images/paper.svg"
                alt="Paper"
                width={550}
                height={550}
                className="transition-opacity duration-1000"
              />
              <div className="absolute inset-0 top-[3rem] md:top-[5.5rem] left-[4rem] md:left-[5.75rem]">
                <p className="text-3xl font-conte text-black opacity-50">
                  Dear {capitalizeFirstLetter((demoer as string) || "Demoer")},
                </p>

                <div className="mt-4 flex flex-col gap-3 md:gap-6 max-w-[85%] md:max-w-[70%]">
                  <p className="text-sm md:text-base font-suisse text-soft-grey tracking-[-0.2px]">
                    between us? we couldn't be more excited to have you demo at the symposium!
                  </p>
                  <p className="text-sm md:text-base font-suisse text-soft-grey tracking-[-0.2px]">
                    we chose you because we think that your story and work is awesome—and we want you to be able to share it with the rest of the world.
                  </p>
                  <p className="text-sm md:text-base font-suisse text-soft-grey tracking-[-0.2px]">
                    what you've made deserves to be shared, and we want to give you the chance to tell your story to the world.
                  </p>
                  <p className="text-sm md:text-base font-suisse text-soft-grey tracking-[-0.2px]">
                    so we're super excited to see you share your awesome projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div
        className={`absolute top-0 right-0 w-1/2 h-auto z-10 transition-transform duration-1000 ${
          isAnimating ? "transform translate-y-1/2" : "transform translate-y-0"
        }`}
        style={{
          transform: isFinal
            ? "translate(-130%, 90%) rotate(15deg)"
            : isAnimating
              ? "translate(-50%, 50%) rotate(15deg)"
              : "rotate(40deg) translate(-375px, 150px)",
        }}
      >
        <Ticket />
      </div>

      {isAnimating && !showLetter && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 1000, opacity }}
        >
          <Image
            src="/images/closed-letter.svg"
            alt="Closed Letter"
            width={160}
            height={160}
            className="transition-opacity duration-1000"
          />
        </div>
      )}


      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-grow" />
        <Image
          src={
            isAnimating
              ? "/images/socratica-transparent.svg"
              : "/images/socratica.svg"
          }
          alt="Socratica"
          layout="responsive"
          width={2284}
          height={462}
        />
      </div>
    </div>
  );
}

"use client";
import backgroundFinal from "@/assets/backgrounds/background-final.png";
import rightSide from "@/assets/backgrounds/right-side.png";
import bigYellowBlob from "@/assets/images/big-yellow-blob.png";
import littleGreyDude from "@/assets/images/little-grey-dude.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import Ticket from "./ticket";

interface LetterPageProps {
  /** The demoer's name (from URL param or undefined for homepage) */
  demoerName?: string;
  /** Function to format the demoer name for display */
  formatName?: (name: string) => string;
  /** The greeting shown in the letter (e.g., "Dear Demoer,") */
  letterGreeting?: string;
  /** Custom letter paragraphs (optional - uses default if not provided) */
  letterParagraphs?: string[];
}

function defaultCapitalize(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeWithDashes(str: string): string {
  if (!str) return str;
  const words = str.split("-");
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(", ");
}

export default function LetterPage({
  demoerName,
  formatName,
  letterParagraphs,
}: LetterPageProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Use provided formatter or default based on whether name has dashes
  const formatDisplayName = (name: string) => {
    if (formatName) return formatName(name);
    return name.includes("-")
      ? capitalizeWithDashes(name)
      : defaultCapitalize(name);
  };

  // Display name for the "TO:" field
  const toDisplayName = demoerName ? (
    formatDisplayName(demoerName)
  ) : (
    <>
      <span className="md:hidden">Demoer</span>
      <span className="hidden md:inline">Our Valued Demoer</span>
    </>
  );

  // Display name for the letter greeting
  const greetingName = demoerName ? formatDisplayName(demoerName) : "Demoer";

  // Default letter paragraphs
  const defaultParagraphs = [
    "between us? we couldn't be more excited to have you demo at the Symposium!",
    "we chose you because we think that your story and work is awesome—and we want you to be able to share it with the rest of the world.",
    "what you've made deserves to be shared, and we want to give you the chance to tell your story to the world.",
    "we can't wait to have you demo at the Symposium!",
  ];

  const paragraphs = letterParagraphs || defaultParagraphs;

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
      {/* Spotlights */}
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

      {/* Header with TO/FROM and Button */}
      {!isAnimating && (
        <div className="absolute top-10 left-4 md:left-10 w-1/2 h-full z-40">
          <p className="text-2xl font-fiveBySevenBold opacity-50">
            TO:
            <span className="ml-[2.9rem] md:ml-[3.4rem] font-conte text-2xl">
              {toDisplayName}
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

      {/* Right side background (before animation) */}
      {!isAnimating && (
        <div className="absolute top-0 right-0 w-1/2 h-full">
          <Image
            src={rightSide}
            alt="Background"
            layout="fill"
            objectFit="cover"
            priority={true}
          />
        </div>
      )}

      {/* Big Yellow Blob - Star Mascot in top right corner */}
      <div
        className={`absolute z-20 pointer-events-none transition-all duration-1000 ease-out ${
          showLetter
            ? "top-[2%] right-[5%] md:top-[0%] md:right-[10%]"
            : "top-[-2%] right-[-5%] md:top-[-5%] md:right-[-3%]"
        } ${
          isAnimating && !showLetter
            ? "opacity-0 scale-90"
            : "opacity-100 scale-100"
        }`}
      >
        <Image
          src={bigYellowBlob}
          alt="Yellow Blob Mascot"
          loading="eager"
          className={`h-auto transition-all duration-1000 ${
            showLetter
              ? "w-[140px] md:w-[220px] lg:w-[320px] rotate-[15deg]"
              : "w-[180px] md:w-[280px] lg:w-[400px] rotate-[10deg]"
          }`}
        />
      </div>

      {/* Little Grey Dude - positioned on the left side */}
      <div
        className={`absolute z-[60] pointer-events-none transition-all duration-1000 ease-out ${
          showLetter
            ? "bottom-[10%] left-[18%] md:bottom-[5%] md:left-[25%]"
            : "bottom-[15%] left-[5%] md:bottom-[27%] md:left-[10%]"
        } ${
          isAnimating && !showLetter
            ? "opacity-0 scale-90"
            : "opacity-100 scale-100"
        }`}
      >
        <Image
          src={littleGreyDude}
          alt="Little Grey Character"
          loading="eager"
          className={`h-auto transition-all duration-1000 ${
            showLetter
              ? "w-[80px] md:w-[120px] lg:w-[160px] rotate-[-10deg]"
              : "w-[100px] md:w-[150px] lg:w-[200px] rotate-[-5deg]"
          }`}
        />
      </div>

      {/* Animated background container */}
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
            priority={true}
          />
        )}

        {isFinal && (
          <Image
            src={backgroundFinal}
            alt="Background"
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-1000 opacity-100"
            priority={true}
          />
        )}
      </div>

      {/* Letter content - outside animated container for proper z-index */}
      {showLetter && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
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
                Dear {greetingName},
              </p>

              <div className="mt-4 flex flex-col gap-3 md:gap-6 max-w-[85%] md:max-w-[70%]">
                {paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-sm md:text-base font-suisse text-soft-grey tracking-[-0.2px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ticket */}
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

      {/* Closed letter animation */}
      {isAnimating && !showLetter && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 1000, opacity }}
        >
          <Image
            src="/images/closed-letter.png"
            alt="Closed Letter"
            loading="eager"
            className="transition-opacity duration-1000"
          />
        </div>
      )}

      {/* Socratica logo at bottom */}
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

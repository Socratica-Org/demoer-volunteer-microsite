import { useEffect, useState, type ReactNode } from "react";
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
  bigYellowBlob?: ReactNode;
  littleGreyDude?: ReactNode;
  heart?: ReactNode;
  closedLetter?: ReactNode;
  rightSide?: ReactNode;
  backgroundFinal?: ReactNode;
  ticket?: ReactNode;
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
  bigYellowBlob,
  littleGreyDude,
  heart,
  closedLetter,
  rightSide,
  backgroundFinal,
  ticket,
}: LetterPageProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinal, setIsFinal] = useState(false);
  const [showLetter, setShowLetter] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [clientName, setClientName] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (demoerName) return;
    const segment = window.location.pathname.split("/").filter(Boolean)[0];
    if (segment) setClientName(decodeURIComponent(segment));
  }, [demoerName]);

  const effectiveName = demoerName ?? clientName;

  const formatDisplayName = (name: string) => {
    if (formatName) return formatName(name);
    return name.includes("-")
      ? capitalizeWithDashes(name)
      : defaultCapitalize(name);
  };

  const toDisplayName = effectiveName ? (
    formatDisplayName(effectiveName)
  ) : (
    <>
      <span className="md:hidden">Demoer</span>
      <span className="hidden md:inline">Our Valued Demoer</span>
    </>
  );

  const greetingName = effectiveName
    ? formatDisplayName(effectiveName)
    : "Demoer";

  const defaultParagraphs = [
    "between us? we couldn't be more excited to have you demo at the Symposium!",
    "we chose you because we think that your story and work is awesome—and we want you to be able to share it with the rest of the world.",
    "what you've made deserves to be shared, and we want to give you the stage to tell your story to the world, in your own words.",
    "we can't wait to start working with you and help bring your story to life!",
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
            <img
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
        <div className="absolute top-0 right-0 w-1/2 h-full">{rightSide}</div>
      )}

      <div
        className={`absolute z-20 pointer-events-none transition-all duration-1000 ease-out ${
          showLetter
            ? "top-[2%] right-[5%] md:top-[0%] md:right-[10%] w-[140px] md:w-[220px] lg:w-[320px] rotate-[15deg]"
            : "top-[-2%] right-[-5%] md:top-[-5%] md:right-[-3%] w-[180px] md:w-[280px] lg:w-[400px] rotate-[10deg]"
        } ${
          isAnimating && !showLetter
            ? "opacity-0 scale-90"
            : "opacity-100 scale-100"
        }`}
      >
        {bigYellowBlob}
      </div>

      <div
        className={`absolute z-[60] pointer-events-none transition-all duration-1000 ease-out ${
          showLetter
            ? "bottom-[14%] left-[18%] md:bottom-[5%] md:left-[25%] w-[80px] md:w-[120px] lg:w-[160px] rotate-[-10deg]"
            : "bottom-[15%] left-[5%] md:bottom-[27%] md:left-[10%] w-[100px] md:w-[150px] lg:w-[200px] rotate-[-5deg]"
        } ${
          isAnimating && !showLetter
            ? "opacity-0 scale-90"
            : "opacity-100 scale-100"
        }`}
      >
        {littleGreyDude}
      </div>

      <div
        className={`absolute top-0 right-0 w-full h-full transition-transform duration-500 ${
          isAnimating ? "transform translate-x-0" : "transform translate-x-1/2"
        }`}
      >
        {isAnimating && backgroundFinal}
      </div>

      {showLetter && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className="relative animate-pop">
            <img
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
                    className="text-sm md:text-base font-forma text-soft-grey tracking-[-0.2px]"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="mt-4 flex flex-col items-center max-w-[85%] md:max-w-[70%]">
                  <p className="text-sm md:text-base font-forma text-soft-grey tracking-[-0.2px]">
                    rooting for you,
                  </p>
                  <p
                    className="text-2xl font-conte mt-[-0.25rem] text-black flex items-end gap-1"
                    style={{ transform: "rotate(-8deg)", marginLeft: "7rem" }}
                  >
                    <span className="opacity-50">Socratica</span>
                    {heart}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className={`absolute top-10 md:top-20 right-0 w-1/2 h-auto z-[10000] transition-transform duration-1000 ${
          isAnimating ? "transform translate-y-1/2" : "transform translate-y-0"
        }`}
        style={{
          transform: isFinal
            ? "translate(30%, 100%) rotate(-15deg)"
            : isAnimating
              ? "translate(-50%, 50%) rotate(15deg)"
              : "rotate(40deg) translate(-375px, 150px)",
        }}
      >
        <Ticket ticket={ticket} />
      </div>

      {isAnimating && !showLetter && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 1000, opacity }}
        >
          {closedLetter}
        </div>
      )}

      <div className="absolute inset-0 z-10 flex flex-col">
        <div className="flex-grow" />
        <img
          src={
            isAnimating
              ? "/images/socratica-transparent.svg"
              : "/images/socratica.svg"
          }
          alt="Socratica"
          width={2284}
          height={462}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

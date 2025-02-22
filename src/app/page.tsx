import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen max-h-screen overflow-hidden">

      <div className="absolute top-10 left-10 w-1/2 h-full">
        <p className="text-2xl font-fiveBySeven">
          TO:
          <span className="ml-6 font-conte text-md opacity-50">demoer name</span>
        </p>
        <p className="text-2xl font-fiveBySeven">
          FROM:
          <span className="ml-6 font-conte text-md opacity-50">Socratica</span>
        </p>
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

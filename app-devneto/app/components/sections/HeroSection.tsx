'use client'

import { Icon } from "@iconify/react";

export default function HeroSection() {
    
  const repeatedText = Array(20).fill(null).map((_, index) => (
        <div key={index} className="inline-block text-[12vw] font-bold tracking-wider">
            CLOVES NETO &nbsp;
        </div>
    ));
  
    return (

    <section className="HeroSection relative w-full h-[100dvh] bg-[#1a1625] flex flex-col items-center justify-center gap-12 overflow-hidden">

         {/* Scrolling background text */}
        <div className="absolute text-white/10 z-0 w-full whitespace-nowrap animate-scroll">
            {repeatedText}
        </div>

        <div className="text-section flex flex-col gap-8 justify-center items-center z-10">
            
            <h1 className="font-bold uppercase text-6xl text-white text-center">
                Full stack web developer
                <br/>& Ui/Ux designer
            </h1>

            <p className="font-light text-2xl text-white/60 ">
                Design and code aligned to create solutions that delight
            </p>
        </div>
        
        <div className="flex flex-row justify-center items-center gap-4 mt-4 z-10">
            <a className="min-w-44 flex items-center justify-center flex-row gap-2 px-6 py-2 bg-white text-violet-950 rounded-md transition-colors hover:bg-blue-700 hover:text-white" href="http://linkedin.com/in/cloves-neto/" target="_blank" rel="noopener noreferrer">
                <Icon className="text-2xl" icon="mdi:linkedin" />
                <span className="text-xl font-medium">Linkedin</span>    
            </a>
            <a className="min-w-44 flex items-center justify-center flex-row gap-2 px-4 py-2 bg-white text-violet-950 rounded-md transition-colors hover:bg-purple-700 hover:text-white" href="http://github.com/cloves-neto" target="_blank" rel="noopener noreferrer">
                <Icon className="text-2xl" icon="mdi:github" />
                <span className="text-xl font-medium">Github</span>    
            </a>
        </div>

        <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>

  );
}

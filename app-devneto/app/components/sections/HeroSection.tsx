'use client'

import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);
  
  // Reduced number of repeats for better performance
  const repeatedText = Array(10).fill(null).map((_, index) => (
    <div key={index} className="inline-block text-[8vw] md:text-[6vw] font-bold tracking-wider opacity-10">
      CLOVES NETO &nbsp;
    </div>
  ));
  
  return (
    <section className="relative w-full min-h-[100dvh] bg-[#0a051a] flex flex-col items-center justify-center overflow-hidden py-12">
      {/* Background gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent z-0"></div>
      
      {/* Scrolling background text - animates only after component mounts */}
      <div className={`absolute top-0 bottom-0 text-white w-full whitespace-nowrap transition-opacity duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="animate-marquee">
          {repeatedText}
        </div>
        <div className="absolute top-0 animate-marquee2">
          {repeatedText}
        </div>
      </div>

      <div className="container mx-auto px-4 flex flex-col items-center z-10">
        {/* Main content with smooth fade in */}
        <div className={`text-section flex flex-col gap-6 md:gap-8 justify-center items-center max-w-3xl transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase text-white text-center tracking-tight leading-tight">
            Full Stack Web Developer
            <span className="block mt-2">&amp; Creative Designer</span>
          </h1>

          <p className="font-light text-base md:text-xl text-white/70 text-center max-w-xl mx-auto">
            Design and code aligned to create solutions that delight
          </p>
        </div>
        
        {/* Social links with staggered animation */}
        <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 mt-10 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            className="w-full sm:w-auto min-w-44 flex items-center justify-center gap-3 px-8 py-3 bg-white/90 text-[#0a051a] rounded-lg transition-all hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20 focus:outline-none focus:ring-2 focus:ring-blue-500" 
            href="http://linkedin.com/in/cloves-neto/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon className="text-xl" icon="mdi:linkedin" />
            <span className="text-lg font-medium">LinkedIn</span>    
          </a>
          <a 
            className="w-full sm:w-auto min-w-44 flex items-center justify-center gap-3 px-8 py-3 bg-white/90 text-[#0a051a] rounded-lg transition-all hover:bg-purple-600 hover:text-white hover:shadow-lg hover:shadow-purple-600/20 focus:outline-none focus:ring-2 focus:ring-purple-500" 
            href="http://github.com/cloves-neto" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Icon className="text-xl" icon="mdi:github" />
            <span className="text-lg font-medium">GitHub</span>    
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center transition-all duration-1000 delay-700 ${loaded ? 'opacity-60 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <span className="text-white/60 text-sm mb-2">Scroll down</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes marquee2 {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Icon } from "@iconify/react";
import Link from 'next/link';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const currentDate = new Date().getFullYear();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <footer className="relative bg-[#0a051a] w-full pt-12 pb-8 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-1/3 h-32 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-1/4 w-1/4 h-24 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6">
        <div 
          className="w-full flex flex-col items-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease'
          }}
        >
          {/* Logo and navigation */}
          <div className="flex flex-col sm:flex-row justify-between w-full border-b border-white/10 pb-8 mb-8">
            <div className="mb-6 sm:mb-0">
              <Link href="/" className="text-white font-bold text-xl flex items-center">
                <span className="text-purple-500">&lt;</span>
                <span>dev</span>
                <span className="text-purple-500">neto</span>
                <span className="text-purple-500">/&gt;</span>
              </Link>
              <p className="text-white/60 text-sm mt-2 max-w-xs">
                Turning ideas into elegant digital experiences through code and design.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <h3 className="text-white text-sm font-medium mb-3">Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-white/60 hover:text-purple-400 text-sm transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-white/60 hover:text-purple-400 text-sm transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-white/60 hover:text-purple-400 text-sm transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white text-sm font-medium mb-3">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="https://github.com/cloves-neto" 
                      target="_blank"
                      className="text-white/60 hover:text-purple-400 text-sm transition-colors flex items-center"
                    >
                      <Icon icon="mdi:github" className="mr-2" />
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://linkedin.com/in/cloves-neto" 
                      target="_blank"
                      className="text-white/60 hover:text-purple-400 text-sm transition-colors flex items-center"
                    >
                      <Icon icon="mdi:linkedin" className="mr-2" />
                      LinkedIn
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="https://instagram.com/_devneto" 
                      target="_blank"
                      className="text-white/60 hover:text-purple-400 text-sm transition-colors flex items-center"
                    >
                      <Icon icon="mdi:instagram" className="mr-2" />
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Copyright and credits */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/60 text-sm mb-2 sm:mb-0">
              © {currentDate} <span className="text-white">devneto</span>. All rights reserved.
            </p>
            
            <div className="flex items-center">
              <div className="flex items-center mr-4">
                <a 
                  href="mailto:contato.devneto@gmail.com"
                  className="text-white/60 hover:text-purple-400 text-sm transition-colors"
                >
                  contato.devneto@gmail.com
                </a>
              </div>
              
              <p className="text-white/60 text-sm">
                Designed & developed by <span className="text-purple-400">Cloves Neto</span>
              </p>
            </div>
          </div>
          
          {/* Back to top button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-10 h-10 bg-white/5 hover:bg-purple-500/20 rounded-full flex items-center justify-center border border-white/10 hover:border-purple-500/30 transition-all duration-300 mt-8"
            aria-label="Back to top"
          >
            <Icon icon="mdi:chevron-up" className="text-xl text-white/80" />
          </button>
        </div>
      </div>
    </footer>
  );
}
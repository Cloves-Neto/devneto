'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { Icon } from "@iconify/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  });
  
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  }

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#0a051a] text-white py-20 px-6 sm:px-8 md:px-12 overflow-hidden"
    >
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>
      
      <div 
        className="max-w-6xl mx-auto"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.7s ease'
        }}
      >
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div className="space-y-10">
            <div 
              className="space-y-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s ease 100ms'
              }}
            >
              <span className="inline-block px-4 py-1.5 bg-white/5 text-purple-400 font-medium rounded-full text-sm">
                Let's Connect
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Got a project in mind?
                <span className="block mt-2 text-white/80">Let's create something amazing</span>
              </h2>
              
              <p className="text-white/60 max-w-md">
                I'm currently available for freelance work. If you have a project that needs some creative direction, I'd love to hear about it.
              </p>
            </div>

            <div 
              className="space-y-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s ease 200ms'
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Icon icon="mdi:email-outline" className="text-xl text-purple-400" />
                </div>
                <a 
                  href="mailto:contato.devneto@gmail.com" 
                  className="text-white hover:text-purple-400 transition-colors"
                >
                  contato.devneto@gmail.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Icon icon="mdi:map-marker-outline" className="text-xl text-purple-400" />
                </div>
                <span className="text-white/70">
                  São Paulo, Brazil
                </span>
              </div>
            </div>

            <div 
              className="pt-6 border-t border-white/10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.7s ease 300ms'
              }}
            >
              <p className="text-sm text-white/60 mb-4">Find me on</p>
              <div className="flex gap-3">
                <Link 
                  href="https://github.com/cloves-neto" 
                  target="_blank"
                  className="w-10 h-10 bg-white/5 hover:bg-purple-500/20 rounded-full flex items-center justify-center transition-all duration-300 border border-transparent hover:border-purple-500/30"
                >
                  <Icon icon="mdi:github" className="text-lg" />
                </Link>

                <Link 
                  href="https://linkedin.com/in/cloves-neto" 
                  target="_blank"
                  className="w-10 h-10 bg-white/5 hover:bg-purple-500/20 rounded-full flex items-center justify-center transition-all duration-300 border border-transparent hover:border-purple-500/30"
                >
                  <Icon icon="mdi:linkedin" className="text-lg" />
                </Link> 

                <Link 
                  href="https://instagram.com/_devneto" 
                  target="_blank"
                  className="w-10 h-10 bg-white/5 hover:bg-purple-500/20 rounded-full flex items-center justify-center transition-all duration-300 border border-transparent hover:border-purple-500/30"
                >
                  <Icon icon="mdi:instagram" className="text-lg" />
                </Link>  
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div 
            className="space-y-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.7s ease 400ms'
            }}
          >
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-medium">
                Send me a message
              </h3>
              <p className="text-white/60">
                I'll get back to you as soon as possible
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label 
                  htmlFor="name" 
                  className={`absolute left-0 transition-all duration-300 ${
                    focusedField === 'name' || formData.name 
                      ? '-top-6 text-sm text-purple-400' 
                      : 'top-0 text-white/60'
                  }`}
                >
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-purple-500 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label 
                  htmlFor="email" 
                  className={`absolute left-0 transition-all duration-300 ${
                    focusedField === 'email' || formData.email 
                      ? '-top-6 text-sm text-purple-400' 
                      : 'top-0 text-white/60'
                  }`}
                >
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-purple-500 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label 
                  htmlFor="phone" 
                  className={`absolute left-0 transition-all duration-300 ${
                    focusedField === 'phone' || formData.phone 
                      ? '-top-6 text-sm text-purple-400' 
                      : 'top-0 text-white/60'
                  }`}
                >
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-purple-500 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="relative">
                <label 
                  htmlFor="project" 
                  className={`absolute left-0 transition-all duration-300 ${
                    focusedField === 'project' || formData.project 
                      ? '-top-6 text-sm text-purple-400' 
                      : 'top-0 text-white/60'
                  }`}
                >
                  Tell me about your project
                </label>
                <input
                  id="project"
                  type="text"
                  className="w-full bg-transparent border-b border-white/20 py-2 pr-10 focus:outline-none focus:border-purple-500 transition-all"
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  onFocus={() => setFocusedField('project')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>
              
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-white/5 hover:bg-purple-500/20 border border-transparent hover:border-purple-500/30 rounded-full flex items-center text-sm font-medium transition-all duration-300 group"
                >
                  Send Message
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    <Icon icon="mdi:arrow-right" className="text-lg" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
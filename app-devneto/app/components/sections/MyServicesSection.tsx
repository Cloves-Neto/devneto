'use client'

import React, { useState, useEffect, useRef } from 'react';

interface Service {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
}

const ServicesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const services: Service[] = [
    {
      title: "DEVELOPMENT",
      subtitle: "& SEO STRATEGY",
      description: "Custom websites optimized for search engines. Boost visibility, drive qualified traffic, and improve conversion rates with strategic SEO implementation.",
      icon: "mdi:code-tags",
      color: "#8B5CF6" // Purple
    },
    {
      title: "CREATIVE DESIGN",
      subtitle: "& RESPONSIVE WEBSITES",
      description: "Compelling visuals that capture your brand essence. Responsive designs that provide seamless experiences across all devices.",
      icon: "mdi:palette-outline",
      color: "#EC4899" // Pink
    },
    {
      title: "DIGITAL DESIGN",
      subtitle: "& CREATIVE CONTENT",
      description: "Strategic digital assets that strengthen your brand online. From prototypes to social media designs that engage your audience effectively.",
      icon: "mdi:pencil-ruler",
      color: "#3B82F6" // Blue
    },
    {
      title: "TECHNICAL SUPPORT",
      subtitle: "& MAINTENANCE",
      description: "Ongoing technical support ensuring your website runs smoothly. Regular updates, troubleshooting, and security implementations.",
      icon: "mdi:tools",
      color: "#10B981" // Green
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#0a051a] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-purple-600/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-purple-400 font-medium rounded-full text-sm mb-4">
            My Services
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            What can I do for you
          </h2>
          
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
            Transform your ideas into powerful digital experiences. Let's work together to elevate your brand and bring your vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                transition: `all 0.5s ease ${100 + index * 100}ms`
              }}
            >
              <div 
                className={`
                  h-full p-6 md:p-8 rounded-2xl backdrop-blur-sm transition-all duration-300
                  border border-white/10 bg-white/5 hover:bg-white/10
                  ${activeCard === index ? 'shadow-lg' : ''}
                `}
                style={{
                  boxShadow: activeCard === index ? `0 8px 32px -8px ${service.color}40` : ''
                }}
              >
                {/* Header with icon */}
                <div className="flex items-start mb-6">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center mr-4"
                    style={{ 
                      background: `linear-gradient(135deg, ${service.color}30, ${service.color}10)`,
                      border: `1px solid ${service.color}30`
                    }}
                  >
                    <span className="text-2xl" style={{ color: service.color }}>
                      <i className={service.icon}></i>
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {service.title}
                    </h3>
                    <p className="text-white/60 text-sm font-medium">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white/80 text-base mb-6">
                  {service.description}
                </p>
                
                {/* Features list */}
                <ul className="space-y-2 mb-6">
                  {[1, 2, 3].map((_, i) => (
                    <li 
                      key={i} 
                      className={`flex items-center text-sm transition-opacity duration-300 ${
                        activeCard === index ? 'opacity-100' : 'opacity-70'
                      }`}
                    >
                      <svg 
                        className="w-4 h-4 mr-2 flex-shrink-0" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        style={{ color: service.color }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">
                        {i === 0 ? 'Strategic approach' : i === 1 ? 'Custom solutions' : 'Modern techniques'}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Action button */}
                <div className="mt-auto">
                  <button 
                    className={`
                      group flex items-center text-sm font-medium transition-all duration-300
                      ${activeCard === index ? `text-${service.color.slice(1)}` : 'text-white/60 hover:text-white/90'}
                    `}
                    style={{ color: activeCard === index ? service.color : '' }}
                  >
                    Explore service
                    <svg 
                      className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile scroll indicator */}
        <div className="mt-6 text-center md:hidden">
          <p className="text-white/50 text-sm flex items-center justify-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Swipe to explore all services
          </p>
        </div>

        {/* Call to action */}
        <div 
          className="mt-16 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 500ms'
          }}
        >
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-full transition-all duration-300 shadow-lg hover:shadow-xl shadow-purple-600/20 font-medium"
          >
            Start a Project
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS for mobile scrolling */}
      <style jsx>{`
        @media (max-width: 768px) {
          .grid {
            scroll-snap-type: x mandatory;
            grid-auto-flow: column;
            grid-auto-columns: 85%;
            overflow-x: auto;
            scroll-padding: 1rem;
            padding: 1rem;
            margin-left: -1rem;
            margin-right: -1rem;
            -webkit-overflow-scrolling: touch;
          }
          
          .grid::-webkit-scrollbar {
            display: none;
          }
          
          .grid > div {
            scroll-snap-align: start;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;
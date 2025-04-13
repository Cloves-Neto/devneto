'use client'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Service {
  title: React.ReactNode;
  description: string;
  image: string;
}

const ServicesSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Simple intersection observer to trigger animations when scrolled into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });
    
    const section = document.querySelector('.services-section');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);
  
  const services: Service[] = [
    {
      title: (
        <>
          DEVELOPMENT 
          <br />
          & SEO STRATEGY
        </>
      ),
      description:
        "My services include development of custom websites that not only meet the specific needs of your business, but are also optimized for search engine performance with effective SEO strategies to increase your brand visibility, drive qualified traffic, and improve conversion rates.",
      image: '/images/card-1.svg',
    },
    {
      title: (
        <>
          CREATIVE DESIGN 
          <br />
          & RESPONSIVE WEBSITE
        </>
      ),
      description:
        "I offer creative design and responsive website development services, focusing on creating compelling and functional visuals that capture the essence of your brand. My goal is to transform your ideas into impactful designs that not only grab attention but also provide a seamless user experience across all devices.",
      image: '/images/card-2.svg',
    },
    {
      title: (
        <>
          DIGITAL DESIGN
          <br />
          & CREATIVE CONTENT
        </>
      ),
      description:
        "I create digital designs and creative content to strengthen your brand and online presence. I offer website prototypes, social media post designs, in-bio links, banners, and other website and social media edits. Each project is designed to convey your message clearly and impactfully, generating engagement and reinforcing your brand's visual identity.",
      image: '/images/card-4.svg',
    },
    {
      title: (
        <>
          TECHNICAL SUPPORT
          <br />
          & MAINTENANCE
        </>
      ),
      description:
        "Experienced in delivering ongoing technical support and maintenance to ensure seamless website functionality. Proficient in performing regular updates, troubleshooting, performance monitoring, and implementing security patches. Adept at optimizing website performance and ensuring up-to-date, secure, and uninterrupted operations, enabling businesses to focus on growth and success.",
      image: '/images/card-3.svg',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="services-section bg-[#0a051a] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex flex-col items-center">
            <span className="text-purple-500 text-sm font-medium tracking-wider uppercase mb-3">
              my services
            </span>
            <div className="w-12 h-1 bg-purple-500 mb-8 rounded-full"></div>
          </div>

          <div className="space-y-6 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              What can I do for you
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed">
              Whether you need a sleek website, a full-stack solution, or a
              captivating user interface, I'm here to transform your ideas into
              powerful digital experiences. Let's work together to elevate your
              brand and turn your vision into reality!
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div 
                className={`
                  h-auto min-h-80 md:h-96 rounded-xl overflow-hidden relative
                  border border-purple-900/30 transition-all duration-300
                  ${activeCard === index ? 'border-white shadow-lg shadow-purple-900/20' : 'hover:border-purple-500'}
                `}
              >
                {/* Background Image with Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className={`
                  absolute inset-0 transition-all duration-500
                  ${activeCard === index ? 'bg-slate-950/90' : 'bg-purple-900/80 hover:bg-slate-950/85'}
                `}/>
                
                {/* Decorative Elements */}
                <div className={`
                  absolute top-4 right-4 flex items-center space-x-2 transition-opacity duration-300
                  ${activeCard === index ? 'opacity-100' : 'opacity-0'}
                `}>
                  <span className="w-3 h-3 bg-red-500 rounded-full" />
                  <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <span className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
                
                {/* Content */}
                <div className="relative z-10 p-6 md:p-8 h-full flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                    {service.title}
                  </h3>
                  
                  <p className={`
                    text-gray-200/90 text-sm md:text-base font-normal transition-all duration-500
                    ${activeCard === index ? 'opacity-100' : 'group-hover:opacity-100 opacity-80'}
                  `}>
                    {service.description}
                  </p>
                  
                  {/* Call to action - appears on hover */}
                  <div className={`
                    mt-auto pt-4 opacity-0 transform translate-y-4 transition-all duration-300
                    ${activeCard === index ? 'opacity-100 translate-y-0' : 'group-hover:opacity-100 group-hover:translate-y-0'}
                  `}>
                    <button className="text-purple-400 hover:text-white text-sm font-medium flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
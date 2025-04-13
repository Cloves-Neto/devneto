'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: Skill[];
  accentColor: string;
}

const AboutSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('development');
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Skill categories with their details
  const skillCategories: SkillCategory[] = [
    {
      id: 'development',
      title: 'Development',
      description: 'Technologies and frameworks I use to build powerful web applications.',
      accentColor: '#8B5CF6', // Purple
      skills: [
        { name: 'React', icon: 'skill-icons:react-dark' },
        { name: 'Tailwind', icon: 'skill-icons:tailwindcss-dark' },
        { name: 'Typescript', icon: 'devicon:typescript' },
        { name: 'Astro', icon: 'skill-icons:astro' },
        { name: 'Next.js', icon: 'skill-icons:nextjs-light' },        
        { name: 'Sass', icon: 'skill-icons:sass' },
        { name: 'Node.js', icon: 'skill-icons:nodejs-dark' },
        { name: 'Express', icon: 'skill-icons:expressjs-light' },
        { name: 'Fast Api', icon: 'skill-icons:fastapi' },
        { name: 'MySQL', icon: 'skill-icons:mysql-light' },
        { name: 'MongoDB', icon: 'skill-icons:mongodb' },
        { name: 'PHP', icon: 'skill-icons:php-light' },
      ],
    },
    {
      id: 'design',
      title: 'Design',
      description: 'Tools and platforms for designing attractive and user-friendly interfaces.',
      accentColor: '#F43F5E', // Pink/Rose
      skills: [
        { name: 'Figma', icon: 'skill-icons:figma-dark' },
        { name: 'Photoshop', icon: 'skill-icons:photoshop' },
        { name: 'Illustrator', icon: 'skill-icons:illustrator' },
        { name: 'Canva', icon: 'devicon:canva' },
        { name: 'Miro', icon: 'logos:miro-icon' },
      ],
    },
    {
      id: 'devops',
      title: 'DevOps',
      description: 'Technologies and tools I use to ensure smooth development workflows and deployments.',
      accentColor: '#3B82F6', // Blue
      skills: [
        { name: 'Scrum', icon: 'skill-icons:devto-dark' },
        { name: 'Jira', icon: 'devicon:jira' },
        { name: 'Git', icon: 'skill-icons:git' },
        { name: 'Docker', icon: 'skill-icons:docker' },
        { name: 'pnpm', icon: 'skill-icons:pnpm-light' },
        { name: 'npm', icon: 'skill-icons:npm-light' },
      ],
    },
  ];

  // Intersection Observer effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
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

  // Get current category data
  const currentCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0];
  
  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#0a051a] text-white py-16 md:py-24 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background decoration elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-purple-600/10 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section header with staggered animation */}
        <div 
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center justify-center mb-4">
            <span 
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80"
              style={{ 
                boxShadow: `0 0 20px ${currentCategory.accentColor}40`,
                transition: 'box-shadow 0.5s ease-in-out'
              }}
            >
              Skills & Technologies
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">My Expertise</h2>
          
          <div className="max-w-2xl mx-auto">
            <p className="text-white/70 text-base sm:text-lg">
              Hi, I'm Cloves Neto! Freelancer, Web Designer and Full Stack Web Developer.
              Here are the tools and technologies I use to bring your ideas to life.
            </p>
          </div>
        </div>

        {/* Category navigation */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-200 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="relative flex justify-center mb-8 overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex space-x-2 sm:space-x-4 px-2">
              {skillCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setActiveIndex(index);
                  }}
                  className={`
                    relative px-5 py-2.5 rounded-full whitespace-nowrap
                    text-sm sm:text-base font-medium transition-all duration-300
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#0a051a] 
                    ${activeCategory === category.id 
                      ? 'text-white shadow-lg' 
                      : 'text-white/60 hover:text-white/90 bg-white/5 hover:bg-white/10'}
                  `}
                  style={{
                    background: activeCategory === category.id 
                      ? `linear-gradient(135deg, ${category.accentColor}90, ${category.accentColor}60)` 
                      : '',
                    boxShadow: activeCategory === category.id 
                      ? `0 8px 16px -4px ${category.accentColor}40` 
                      : ''
                  }}
                >
                  {category.title}
                  
                  {/* Active indicator dot */}
                  {activeCategory === category.id && (
                    <span 
                      className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-white"
                      style={{ 
                        boxShadow: `0 0 8px 2px ${category.accentColor}`,
                      }}
                    ></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Description area */}
          <div 
            className="text-center mx-auto max-w-2xl px-4 transition-opacity duration-300"
            style={{ 
              opacity: 1,
            }}
          >
            <p className="text-white/70 text-sm sm:text-base italic">
              {currentCategory.description}
            </p>
          </div>
        </div>

        {/* Skills display */}
        <div 
          className={`transition-all duration-1000 delay-400 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div 
            className="relative rounded-2xl overflow-hidden border border-white/10"
            style={{ 
              background: 'linear-gradient(to bottom right, rgba(255,255,255,0.05), transparent)',
              backdropFilter: 'blur(12px)',
            }}
          >
            {/* Background glow effect */}
            <div 
              className="absolute inset-0 opacity-20 transition-opacity duration-500"
              style={{ 
                background: `radial-gradient(circle at 50% 50%, ${currentCategory.accentColor}40 0%, transparent 70%)`,
              }}
            ></div>

            {/* Skills grid */}
            <div className="relative py-8 px-4 md:p-10">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
                {currentCategory.skills.map((skill, idx) => (
                  <div
                    key={`${currentCategory.id}-${skill.name}`}
                    className={`skill-item transform transition-all duration-500 delay-${Math.min(idx * 100, 500)}
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  >
                    <div className="flex flex-col items-center group">
                      <div 
                        className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl mb-3
                          bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md
                          transition-all duration-300 group-hover:scale-110
                          group-hover:shadow-lg border border-white/10 overflow-hidden"
                        style={{ 
                          boxShadow: `0 4px 20px -5px ${currentCategory.accentColor}30`,
                        }}
                      >
                        {/* Icon */}
                        {skill.icon && (
                          <Icon 
                            icon={skill.icon} 
                            className="text-3xl sm:text-4xl transition-all duration-300 group-hover:scale-110 z-10" 
                          />
                        )}
                        
                        {/* Hover effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div 
                            className="absolute inset-0 bg-gradient-to-br" 
                            style={{
                              background: `radial-gradient(circle at center, ${currentCategory.accentColor}30, transparent 70%)`
                            }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Skill name */}
                      <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 text-center">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile swipe indicator at the bottom */}
            <div className="md:hidden flex justify-center pb-4 text-white/40 text-xs">
              <span className="flex items-center space-x-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <span>Swipe to see more</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Additional experience section */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 delay-600 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="inline-flex items-center mb-2">
            <div className="h-px w-6 bg-white/20 mr-3"></div>
            <span className="text-white/60 text-sm font-medium">Let's work together</span>
            <div className="h-px w-6 bg-white/20 ml-3"></div>
          </div>
          
          <h3 className="text-xl sm:text-2xl font-bold mb-4">
            Want to see these skills in action?
          </h3>
          
          <div className="flex justify-center">
            <a 
              href="#contact" 
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                bg-white/10 hover:bg-white/15 text-white
                focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations and responsive fixes */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Staggered animation delays by skillset index */
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
    </section>
  );
};

export default AboutSection;
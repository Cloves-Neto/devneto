'use client';

import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
  color: string;
  gradientFrom: string;
  gradientTo: string;
}

const AboutSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Development');
  const [isInView, setIsInView] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );
    
    const section = document.querySelector('.skills-section');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      title: 'Development',
      description: 'Technologies and frameworks I use to build powerful web applications.',
      color: '#8B5CF6',
      gradientFrom: '#7C3AED',
      gradientTo: '#6D28D9',
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
      title: 'Design',
      description: 'Tools and platforms for designing attractive and user-friendly interfaces.',
      color: '#EC4899',
      gradientFrom: '#EC4899',
      gradientTo: '#DB2777',
      skills: [
        { name: 'Figma', icon: 'skill-icons:figma-dark' },
        { name: 'Photoshop', icon: 'skill-icons:photoshop' },
        { name: 'Illustrator', icon: 'skill-icons:illustrator' },
        { name: 'Canva', icon: 'devicon:canva' },
        { name: 'Miro', icon: 'logos:miro-icon' },
      ],
    },
    {
      title: 'DevOps',
      description: 'Technologies and tools I use to ensure smooth development workflows and deployments.',
      color: '#3B82F6',
      gradientFrom: '#3B82F6',
      gradientTo: '#2563EB',
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

  return (
    <section className="skills-section w-full h-auto py-16 md:py-24 bg-[#0a051a] text-white px-4 overflow-hidden">
      <div 
        className={`max-w-6xl mx-auto transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-purple-400 text-sm font-medium mb-4">
              My Toolbox
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h2>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-xl text-purple-400 mb-3">Hi, I'm Cloves Neto!</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              Freelancer, Web Designer and Full Stack Web Developer.
              Come and see the solutions I develop and follow my work.
              Do you want to carry out a project? Contact me to ask any questions you may have.
            </p>
          </div>
        </div>

        {/* Category Selector */}
        <div className="relative mb-12">
          <div className="flex items-center justify-center flex-wrap gap-4 mb-8">
            {skillCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.title)}
                className={`
                  relative px-6 py-3 rounded-full text-lg font-medium transition-all duration-300
                  ${activeCategory === category.title 
                    ? 'text-white' 
                    : 'text-white/60 hover:text-white/90'}
                `}
                style={{
                  background: activeCategory === category.title 
                    ? `linear-gradient(135deg, ${category.gradientFrom}, ${category.gradientTo})` 
                    : 'transparent',
                  boxShadow: activeCategory === category.title 
                    ? `0 10px 20px -10px ${category.color}` 
                    : 'none'
                }}
              >
                {activeCategory === category.title && (
                  <span className="absolute inset-0 rounded-full bg-white/20 animate-pulse-subtle"></span>
                )}
                <span className="relative">{category.title}</span>
              </button>
            ))}
          </div>

          {/* Dynamic description based on active category */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-white/70">
              {skillCategories.find(cat => cat.title === activeCategory)?.description}
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="skills-showcase relative p-6 md:p-10 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10">
          {/* Background effect elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-3xl -z-10">
            {skillCategories.map((category, i) => (
              activeCategory === category.title && (
                <div 
                  key={i}
                  className="absolute inset-0 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${category.color}30 0%, transparent 40%)`
                  }}
                />
              )
            ))}
          </div>
          
          {/* Active skills grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {skillCategories
              .find(cat => cat.title === activeCategory)
              ?.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-3 transition-all duration-300"
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div 
                    className={`
                      relative w-16 h-16 md:w-20 md:h-20 rounded-xl md:rounded-2xl flex items-center justify-center
                      transition-all duration-300 group overflow-hidden
                      ${hoveredSkill === skill.name 
                        ? 'transform scale-110 shadow-lg' 
                        : 'bg-white/10 hover:bg-white/15'}
                    `}
                    style={{
                      background: hoveredSkill === skill.name 
                        ? `linear-gradient(135deg, ${
                            skillCategories.find(cat => cat.title === activeCategory)?.gradientFrom
                          }50, ${
                            skillCategories.find(cat => cat.title === activeCategory)?.gradientTo
                          }50)` 
                        : '',
                      boxShadow: hoveredSkill === skill.name 
                        ? `0 10px 25px -5px ${
                            skillCategories.find(cat => cat.title === activeCategory)?.color
                          }40` 
                        : ''
                    }}
                  >
                    {skill.icon && (
                      <Icon 
                        icon={skill.icon} 
                        className={`
                          transition-all duration-300
                          ${hoveredSkill === skill.name 
                            ? 'text-4xl md:text-5xl' 
                            : 'text-3xl md:text-4xl opacity-80'}
                        `} 
                      />
                    )}
                    
                    {/* Animated background */}
                    {hoveredSkill === skill.name && (
                      <div className="absolute inset-0 -z-10">
                        <div className="absolute top-0 left-0 w-full h-full animate-move-subtle opacity-30"></div>
                        <div 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full blur-2xl"
                          style={{
                            background: skillCategories.find(cat => cat.title === activeCategory)?.color,
                            animation: 'pulse-glow 2s infinite'
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                  
                  <span 
                    className={`
                      text-sm font-medium text-center transition-all duration-300
                      ${hoveredSkill === skill.name ? 'text-white' : 'text-white/70'}
                    `}
                  >
                    {skill.name}
                  </span>
                </div>
              ))
            }
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes pulse-subtle {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { transform: scale(0.8); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 0.6; }
        }
        
        @keyframes move-subtle {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-5px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(5px) translateX(5px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
        
        .animate-move-subtle {
          animation: move-subtle 10s infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
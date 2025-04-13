'use client';

import { useState, useEffect, useRef } from 'react';
import { Icon } from "@iconify/react";
import Link from "next/link";

interface Project {
    id: number;
    src: string;
    github: string;
    title: string;
    description: string;
    technologies: {
      name: string;
      color: string;
      icon?: string;
    }[];
    featured?: boolean;
}

export default function PortfolioSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Intersection Observer to trigger animations when scrolled into view
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

  const projects: Project[] = [
    {
      id: 1,
      src: "/images/projects/arquitetura.png",
      github: "https://github.com/Cloves-Neto/landingpage-arquitetura",
      title: "Landing Page Arquitetura",
      description: "An academic project developed during DNC School. Applied styling principles with Sheet Monkey integration for form data collection.",
      featured: true,
      technologies: [
        { name: "JavaScript", color: "bg-yellow-500", icon: "logos:javascript" },
        { name: "Sheet Monkey", color: "bg-red-500", icon: "mdi:google-spreadsheet" },
        { name: "CSS", color: "bg-blue-500", icon: "logos:css-3" },
      ]
    },
    {
      id: 2,
      src: "/images/projects/manutencao.png",
      github: "https://github.com/cloves-neto",
      title: "Coming Soon",
      description: "Project under development. Stay tuned for an exciting reveal of this new concept.",
      technologies: [
        { name: "In Progress", color: "bg-purple-500", icon: "mdi:progress-clock" },
      ]
    },
    {
      id: 3,
      src: "/images/projects/loading.png",
      github: "https://github.com/cloves-neto",
      title: "New Project",
      description: "Project under development. Innovation in the works - details coming soon.",
      technologies: [
        { name: "In Development", color: "bg-indigo-500", icon: "mdi:code-braces" },
      ]
    },
  ];

  return (
    <section ref={sectionRef} className="bg-[#0a051a] py-20 px-4 sm:px-6 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-b from-purple-600/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 bg-gradient-to-t from-blue-600/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease'
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-white/10 text-purple-400 font-medium rounded-full text-sm mb-4">
            Projects That Inspire Results
          </span>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Portfolio
          </h2>
          
          <p className="text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work and creative projects. Each represents my commitment to quality and innovation.
          </p>
        </div>

        {/* Projects layout */}
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card" 
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                transition: `all 0.8s ease ${100 + index * 200}ms`
              }}
            >
              <div className={`
                relative overflow-hidden rounded-2xl border border-white/10
                ${activeProject === project.id ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : 'hover:border-white/30'}
              `}>
                {/* Project content */}
                <div className="flex flex-col lg:flex-row">
                  {/* Image section */}
                  <div className="relative w-full lg:w-1/2 overflow-hidden">
                    <div className="relative h-64 md:h-80 lg:h-full">
                      <div 
                        className="absolute inset-0 transition-transform duration-700 ease-in-out bg-center bg-cover"
                        style={{ 
                          backgroundImage: `url(${project.src})`,
                          transform: activeProject === project.id ? 'scale(1.05)' : 'scale(1)'
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0a051a]/0 to-[#0a051a]/0 lg:from-[#0a051a]/0 lg:to-[#0a051a]"></div>
                      
                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white text-xs font-medium rounded-full z-10">
                          Featured Project
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content section */}
                  <div className="relative w-full lg:w-1/2 p-6 md:p-8 lg:p-10 bg-black/20 backdrop-blur-sm">
                    <div className="h-full flex flex-col">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 relative">
                        {project.title}
                        <span 
                          className="absolute -bottom-2 left-0 w-12 h-1 bg-purple-500 rounded-full"
                          style={{
                            width: activeProject === project.id ? '32px' : '16px',
                            transition: 'width 0.3s ease'
                          }}
                        ></span>
                      </h3>
                      
                      <p className="text-white/80 mb-6 lg:mb-auto">{project.description}</p>
                      
                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className={`${tech.color} px-3 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1`}
                          >
                            {tech.icon && <Icon icon={tech.icon} className="text-base" />}
                            {tech.name}
                          </span>
                        ))}
                      </div>
                      
                      {/* Action buttons */}
                      <div className="flex items-center gap-4">
                        <Link 
                          href={project.github} 
                          target="_blank"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300"
                        >
                          <Icon icon="mdi:github" className="text-xl" />
                          <span>View Code</span>
                        </Link>
                        
                        <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white rounded-lg transition-all duration-300 shadow-sm shadow-purple-500/30">
                          <Icon icon="mdi:eye-outline" className="text-xl" />
                          <span>Preview</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div 
          className="mt-20 text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 800ms'
          }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-10 bg-white/20"></div>
            <span className="text-white/60">Want to see more?</span>
            <div className="h-px w-10 bg-white/20"></div>
          </div>
          
          <Link 
            href="https://github.com/cloves-neto" 
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/15 text-white rounded-full transition-all duration-300 shadow-sm"
          >
            <Icon icon="mdi:github" className="text-xl mr-2" />
            Visit My GitHub
            <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
      
      {/* Mobile scroll hint */}
      <div className="mt-8 text-center md:hidden opacity-50">
        <div className="animate-bounce inline-block">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
        <p className="text-sm text-white/60">Scroll for more projects</p>
      </div>
    </section>
  );
}
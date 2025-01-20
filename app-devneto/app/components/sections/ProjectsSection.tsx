'use client';

import { Icon } from "@iconify/react";
import Link from "next/link";

interface Project {
    id: number;
    src: string,
    github: string;
    title: string;
    description: string;
    technologies: {
      name: string;
      color: string;
    }[];
}

const projects: Project[] = [
  {
    id: 1,
    src: "/images/projects/arquitetura.png",
    github: "https://github.com/Cloves-Neto/landingpage-arquitetura",
    title: "Landing Page Arquitetura",
    description: "Check out an academic project developed during the course at DNC Scholl. This project applied basic styling principles and integration with an external service for form data collection using Sheet Monkey.",
    technologies: [
      { name: "javascript", color: "bg-yellow-600" },
      { name: "sheet monkey", color: "bg-red-600" },
      { name: "css", color: "bg-blue-600" },
    ]
  },
  {
    id: 2,
    src: "/images/projects/manutencao.png",
    github: "https://github.com/cloves-neto",
    title: "Oops!",
    description: "Project under development, stay tuned for more information.",
    technologies: [
      { name: "loading . . .", color: "bg-slate-600" },
    ]
  },
  {
    id: 3,
    src: "/images/projects/loading.png",
    github: "https://github.com/cloves-neto",
    title: "Oops!",
    description: "Project under development, stay tuned for more information.",
    technologies: [
      { name: "loading . . .", color: "bg-slate-600" },
    ]
  },

 
]

export default function PortfolioSection() {
  return (
    <section className="min-h-screen bg-[#0a051a] p-8">

         <div className="lg:top-8 bg-[#0a051a] pt-4 z-10 w-[50%] text-center mx-auto">
            <p className="text-purple-500 text-sm">projects that inspire results</p>
            <h2 className="text-4xl font-bold text-white mb-8">Portfolio</h2>
        </div>

        <div className="w-full max-w-4xl h-auto p-2 mx-auto">
          {/* Projects list with scroll */}
          <div className="w-full flex flex-col gap-12">
            {projects.map((project) => (
              <div key={project.id} className="w-full h-auto group transition-all bg-black/10 border border-purple-600/30 flex flex-col gap-2 rounded-lg hover:border hover:border-purple-600 md:flex-row md:h-80">
                <div className="w-full h-60 rounded-sm bg-gray-950 items-center justify-center text-white flex relative md:w-[50%] md:h-full">
                    <img src={project.src} alt="imagem cover" className="opacity-90 transition-all group-hover:opacity-100 absolute top-0 left-0 object-cover w-full h-full" />
                </div>

                <div className="relative w-full h-80 gap-4 flex flex-col justify-center items-start md:w-[50%]">
                  
                  <header className="px-6 flex flex-col gap-2 w-full">
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                    <div className="md:absolute md:bottom-0 md:right-0 md:p-6 md:justify-end md:items-end">
                      <Link href={project.github} className="w-36 h-8 bg-slate-700 p-2 text-sm flex items-center justify-around rounded-full text-white md:w-auto md:h-auto"> 
                        <Icon className="text-2xl" icon="mdi:github" />
                        <span className="inline-block md:hidden">Veja o projeto</span>
                      </Link>
                    </div>
                  </header>
                  

                  <main className="w-full px-6">
                    <p className="text-gray-300">
                      {project.description}
                    </p>
                  </main>

                  <footer className="flex flex-wrap gap-2 px-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`${tech.color} px-3 py-1 rounded-full text-sm text-white scale-90`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </footer>

                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  )
}


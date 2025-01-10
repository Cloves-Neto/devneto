interface Project {
    id: number;
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
    title: "Projeto 1",
    description: "Venha explorar meu portifólio, conhecer as soluções que desenvolvo e acompanhar meu portfolio ....",
    technologies: [
      { name: "next js", color: "bg-gray-800" },
      { name: "typescript", color: "bg-blue-500" },
      { name: "graph ql", color: "bg-pink-500" },
      { name: "node js", color: "bg-green-600" },
    ]
  },
  {
    id: 2,
    title: "Projeto 2",
    description: "Venha explorar meu portifólio, conhecer as soluções que desenvolvo e acompanhar meu portfolio",
    technologies: [
      { name: "javascript", color: "bg-orange-500" },
      { name: "typescript", color: "bg-blue-500" },
      { name: "graph ql", color: "bg-pink-500" },
      { name: "node js", color: "bg-green-600" },
    ]
  },
  {
    id: 3,
    title: "Projeto 3",
    description: "Uma aplicação web moderna com foco em performance e experiência do usuário",
    technologies: [
      { name: "react", color: "bg-blue-400" },
      { name: "tailwind", color: "bg-cyan-500" },
      { name: "firebase", color: "bg-orange-500" },
      { name: "typescript", color: "bg-blue-500" },
    ]
  },
  {
    id: 4,
    title: "Projeto 4",
    description: "Sistema completo de e-commerce com integração de pagamentos e gestão de produtos",
    technologies: [
      { name: "vue js", color: "bg-green-500" },
      { name: "node js", color: "bg-green-600" },
      { name: "mongodb", color: "bg-green-700" },
      { name: "stripe", color: "bg-purple-500" },
    ]
  },
  {
    id: 5,
    title: "Projeto 5",
    description: "Aplicação mobile multiplataforma com sincronização em tempo real",
    technologies: [
      { name: "react native", color: "bg-blue-500" },
      { name: "redux", color: "bg-purple-600" },
      { name: "socket.io", color: "bg-gray-600" },
      { name: "aws", color: "bg-orange-600" },
    ]
  },
 
]

export default function PortfolioSection() {
  return (
    <section className="min-h-screen bg-[#0a051a] p-8">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left side - Image placeholder */}
        <div className="aspect-square bg-gray-500 lg:top-8"></div>

        {/* Right side - Content */}
        <div className="space-y-8">
          <div className="lg:top-8 bg-[#0a051a] pt-4 z-10">
            <p className="text-purple-500">projects that inspire results</p>
            <h2 className="text-4xl font-bold text-white mb-8">Portfolio</h2>
          </div>

          {/* Projects list with scroll */}
          <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 ">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative rounded-lg p-6 bg-[#150b2e] transition-all duration-300
                  before:absolute before:inset-0 before:rounded-lg before:border-2 
                  before:border-transparent before:transition-all
                  hover:before:border-purple-500 hover:before:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`${tech.color} px-3 py-1 rounded-full text-sm text-white`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


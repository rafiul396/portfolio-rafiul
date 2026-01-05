import React, { useState } from 'react'

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Full Stack', 'E-commerce', 'Open Source']
  
  const projects = [
    {
      id: 1,
      title: "Nexus Dashboard",
      description: "A comprehensive e-commerce analytics platform providing real-time sales data and inventory management.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjHhTC953cetse8PIJHRZwnyi-cnADkjItgEfq79UKMCYbMqqC2yPN5yCCFjKzwMZHy3ulwXJ5t6Et0aNWoAz1f2S5aPCR_W9actSJ7lpfkAXL4WpOxPbYCmg55jhhBwm7sfyQvU0PP7IwHOt5qfWS_ulCgNBSFdEOE3i3E3Cg1ti3Qav6Q_wFPcNNCXL0GULroc-Vt7X-0H0QSv9tQaYY6aSixGP4FqXdX1DwZ1nkZppLcanFxHvalktqpIr1doF_Nqs4nIarCrpl",
      technologies: ["React", "Node.js", "MongoDB"],
      category: "Full Stack",
      featured: true
    },
    {
      id: 2,
      title: "Connect App",
      description: "Real-time social networking application featuring instant messaging, story sharing, and live feeds.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7kN9HWKU-1GepQOHSw_5bZcA42Mct77ZT43vcf7h8AwfDLDR8iObRpyWgxzYJymKruXTg1jQjNdnbB4QNjhXzJVhMlTRMCwsyztLHImdgEhIV8PtGCtoq4M1kmysz_1OYNAFSHZyCEcBPioDj3fBRdmXIim_2sMVBlhjNdqrxXqwSGlBAeithFw1EBtvse8zHnWguXBedKwFI1-soeeJC4RSXGRRUma6tuqDtquAwWHz4W_4aO94vu8wgIwo9EemLYjeoRreoHC1a",
      technologies: ["Next.js", "Socket.io", "Tailwind"],
      category: "Full Stack",
      featured: false
    },
    {
      id: 3,
      title: "TaskFlow SaaS",
      description: "Collaborative project management tool for remote teams with automated workflows and integrations.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8P4t_LNOiGYmdwxCNfpj482v_zvzUm9ii2abht-RKCx6V4UYLDJQa6L7ftjz7eyfudsilTrhPHg46mp7th_1uthe2vru3dFnJDq9LJ_qiiGzm1wwbuHcFDjqcPhCANUNOvzLJ_M-3KfPhvOi5KI7dGK115jagJBQj51qZDqbGvCdCfwb11xOSJhllGlYrp7n3UnTvrid6ex7pBnCNKQeOstbOyiiDRYruTPCvGtE6xmOITXTjIk4vBuC77Xcv73f1nCteVaXYpmFN",
      technologies: ["Vue 3", "Firebase", "Stripe"],
      category: "Full Stack",
      featured: false
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <main id="projects" className="layout-container flex h-full grow flex-col">
      <div className="flex flex-1 justify-center py-10 px-4 sm:px-6">
        <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 gap-8">
          {/* Section Header */}
          <div className="flex flex-col gap-2 px-2">
            <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-[-0.015em]">
              Selected Work
            </h1>
            <p className="text-gray-400 text-base max-w-2xl">
              A collection of my best projects showcasing my expertise in the MERN stack, cloud architecture,
              and modern UI design.
            </p>
          </div>
          
          {/* Filter Chips */}
          <div className="flex gap-3 px-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`flex h-9 shrink-0 items-center justify-center gap-x-2 rounded-full pl-5 pr-5 transition-all ${
                  activeFilter === filter
                    ? 'bg-primary shadow-lg shadow-primary/25 text-white'
                    : 'bg-card-dark border border-border-dark hover:border-gray-600 text-gray-300'
                }`}
              >
                <p className="text-sm font-medium">{filter}</p>
              </button>
            ))}
          </div>
          
          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group flex flex-col rounded-xl bg-card-dark border border-border-dark overflow-hidden hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="relative aspect-video w-full overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 100%), url("${project.image}")`
                    }}
                  ></div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                      Featured
                    </div>
                  )}
                </div>
                <div className="flex flex-col p-5 gap-4 flex-1">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-white text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 rounded bg-[#232f48] text-primary text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 mt-2 border-t border-border-dark flex items-center justify-between">
                    <button className="flex items-center gap-1 text-sm font-semibold text-white hover:text-primary transition-colors">
                      View Details
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </button>
                    <div className="flex gap-3">
                      <a 
                        className="text-gray-500 hover:text-white transition-colors" 
                        href="#"
                        title="View Code"
                      >
                        <span className="material-symbols-outlined text-[20px]">code</span>
                      </a>
                      <a 
                        className="text-gray-500 hover:text-white transition-colors" 
                        href="#"
                        title="Live Demo"
                      >
                        <span className="material-symbols-outlined text-[20px]">open_in_new</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Bottom Action */}
          <div className="flex px-4 py-8 justify-center">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-transparent border border-border-dark hover:bg-border-dark text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors gap-2">
              <span>View All Projects</span>
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects
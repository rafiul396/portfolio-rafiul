import React from 'react'

const Skills = () => {
  const frontendSkills = [
    { name: "React.js / Next.js", level: 95 },
    { name: "TypeScript", level: 88 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Redux Toolkit", level: 85 },
    { name: "Framer Motion", level: 75 }
  ]

  const backendSkills = [
    { name: "Node.js", level: 90 },
    { name: "Express.js", level: 90 },
    { name: "MongoDB / Mongoose", level: 85 },
    { name: "REST API Design", level: 95 },
    { name: "GraphQL / Apollo", level: 70 }
  ]

  const tools = [
    "Git / GitHub", "Docker", "AWS S3", "Vercel", "Postman", 
    "Jest", "Figma", "VS Code", "Firebase", "Jira / Agile"
  ]

  const focusAreas = [
    { name: "Performance Optimization", icon: "speed" },
    { name: "Web Security", icon: "security" },
    { name: "Responsive Design", icon: "devices" },
    { name: "API Integration", icon: "api" }
  ]

  const SkillBar = ({ skill }) => (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-white text-sm font-medium">{skill.name}</span>
        <span className="text-primary text-sm font-bold">{skill.level}%</span>
      </div>
      <div className="h-2 w-full bg-[#232f48] rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  )

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div id="skills" className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        {/* Main Content Area */}
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-0">
            {/* Hero Section */}
            <div className="@container mb-8">
              <div className="flex flex-col lg:flex-row gap-6 py-10 @[480px]:gap-8 @[864px]:flex-row items-center">
                <div className="w-full h-64 @[864px]:h-80 bg-center bg-no-repeat bg-cover rounded-xl shadow-2xl relative overflow-hidden group"
                     style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAwjLILQUqOZxf593V1RTOtJiToVKcOLNbstCyKrGuNuRl40hk03fG5J6TKbT1GVqu9W2c3MCBgJIa2qpem9-6f_tqsLEHhkCeua7LAOKC-lK1JdrwuVkhbmBAFsHlEYOxRer2CCaEWMpmIMgoHfPOdPgDQDxrxLypMVJKHWnMAaVUUGS3VRK5SWkuLE7wXkCBXlVumngGOdKZKZC_Vl_i2BOaES5E3WUWyp1au4JRQV5Tym_ejkifPiqlWToQw071g86H2nq5muB-V")'}}>
                  <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/5 transition-colors duration-500"></div>
                </div>
                <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-6 @[864px]:justify-center">
                  <div className="flex flex-col gap-3 text-left px-4 md:px-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                      <span className="material-symbols-outlined text-primary text-[16px]">verified</span>
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">MERN Stack Expert</span>
                    </div>
                    <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                      Technical Proficiency
                    </h1>
                    <h2 className="text-[#92a4c9] text-base font-normal leading-relaxed">
                      Specializing in building scalable, high-performance web applications. My
                      expertise spans the entire development lifecycle, from database architecture
                      to responsive frontend interfaces.
                    </h2>
                  </div>
                  <div className="flex gap-4 px-4 md:px-0">
                    <button className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(19,91,236,0.3)]">
                      Download Resume
                    </button>
                    <button onClick={scrollToProjects} className="flex items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-[#232f48] text-white text-base font-medium leading-normal hover:bg-[#2c3b5a] transition-colors border border-gray-700" href='#project'>
                      View Projects
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-4 md:px-0">
              {/* Frontend Card */}
              <div className="bg-card-dark rounded-xl p-6 border border-[#232f48] hover:border-primary/30 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">html</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">Frontend Engineering</h3>
                    <p className="text-[#92a4c9] text-sm">Interactive & Responsive</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {frontendSkills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
              
              {/* Backend Card */}
              <div className="bg-card-dark rounded-xl p-6 border border-[#232f48] hover:border-primary/30 transition-colors shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">dns</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">Backend Architecture</h3>
                    <p className="text-[#92a4c9] text-sm">Scalable & Secure</p>
                  </div>
                </div>
                <div className="space-y-5">
                  {backendSkills.map((skill, index) => (
                    <SkillBar key={index} skill={skill} />
                  ))}
                </div>
              </div>
              
              {/* Tools & DevOps Card */}
              <div className="bg-card-dark rounded-xl p-6 border border-[#232f48] hover:border-primary/30 transition-colors shadow-lg flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <span className="material-symbols-outlined">build</span>
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold">Tools & DevOps</h3>
                    <p className="text-[#92a4c9] text-sm">Workflow & Deployment</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 content-start">
                  {tools.map((tool, index) => (
                    <span key={index} className="px-3 py-1.5 bg-[#232f48] text-white text-sm font-medium rounded-lg border border-transparent hover:border-primary/50 cursor-default transition-colors">
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-[#232f48]">
                  <h4 className="text-white text-sm font-bold mb-4">Focus Areas</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {focusAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-[20px]">{area.icon}</span>
                        <span className="text-[#92a4c9] text-xs">{area.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Additional "Soft Skills" / Approach Section */}
            <div className="rounded-xl bg-gradient-to-r from-card-dark to-[#1a2332] border border-[#232f48] p-8 mb-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex-1">
                  <h3 className="text-white text-2xl font-bold mb-2">Not Just Code</h3>
                  <p className="text-[#92a4c9] text-base leading-relaxed">
                    Beyond technical syntax, I bring a problem-solving mindset and effective
                    communication to every project.
                    I believe in clean architecture, maintainable codebases, and collaborative
                    development.
                  </p>
                </div>
                <div className="flex gap-4">
                  <div className="text-center px-4 py-3 bg-[#232f48] rounded-lg min-w-[100px]">
                    <span className="material-symbols-outlined text-primary text-3xl mb-1">group</span>
                    <p className="text-white text-xs font-bold">Team Player</p>
                  </div>
                  <div className="text-center px-4 py-3 bg-[#232f48] rounded-lg min-w-[100px]">
                    <span className="material-symbols-outlined text-primary text-3xl mb-1">lightbulb</span>
                    <p className="text-white text-xs font-bold">Problem Solver</p>
                  </div>
                  <div className="text-center px-4 py-3 bg-[#232f48] rounded-lg min-w-[100px]">
                    <span className="material-symbols-outlined text-primary text-3xl mb-1">schedule</span>
                    <p className="text-white text-xs font-bold">Reliable</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom CTA */}
            <div className="flex justify-center py-10 border-t border-[#232f48]">
              <button className="flex items-center gap-2 bg-transparent text-[#92a4c9] hover:text-white transition-colors">
                <span className="text-sm font-medium">See detailed project case studies</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
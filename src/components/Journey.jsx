import React from 'react'
import toast from 'react-hot-toast'

const Journey = () => {
  const experiences = [
    {
      title: "Frontend Web Developer",
      company: "Pencilwood",
      period: "2024 - Present",
      description: "Leading the frontend architecture migration from legacy code to Next.js.",
      icon: "rocket_launch",
      isActive: true
    }
  ]

  const education = [
    {
      degree: "BBA in Finance and Banking",
      institution: "Govt. Debendra College",
      period: "2022 - Present"
    }
  ]

  const hobbies = [
    { name: "Hiking", icon: "landscape" },
    { name: "Photography", icon: "photo_camera" },
    { name: "Gaming", icon: "sports_esports" },
    { name: "Coffee", icon: "coffee" }
  ]

  const specialties = [
    {
      title: "SaaS Development",
      description: "Architecting multi-tenant applications with secure authentication, subscription management, and scalable databases.",
      icon: "cloud_sync",
      color: "blue"
    },
    {
      title: "Complex API Logic",
      description: "Designing RESTful and GraphQL APIs that handle heavy data loads, real-time updates, and third-party integrations smoothly.",
      icon: "api",
      color: "purple"
    },
    {
      title: "UI/UX Implementation",
      description: "Translating Figma designs into responsive, interactive, and accessible frontend code using React and Tailwind CSS.",
      icon: "dashboard",
      color: "orange"
    }
  ]

  return (
    <main className="flex-grow max-w-[1280px] mx-auto px-3 sm:px-6 lg:px-8 py-10 space-y-16">
      <div className="w-full h-px bg-slate-200 dark:bg-[#232f48]"></div>

      {/* Two Column Layout: Journey vs Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Column: Experience */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">work_history</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">My Journey</h2>
          </div>

          {/* Timeline Component */}
          <div className="relative pl-2">
            {/* Vertical Line */}
            <div className="absolute left-[19px] top-2 bottom-0 w-[2px] bg-slate-200 dark:bg-[#324467]"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative grid grid-cols-[40px_1fr] gap-x-4 mb-8">
                <div className="flex flex-col items-center z-10">
                  <div className={`size-10 rounded-full ${exp.isActive ? 'bg-primary' : 'bg-slate-200 dark:bg-[#232f48]'} flex items-center justify-center ${exp.isActive ? 'shadow-lg shadow-primary/30' : 'border-2 border-white dark:border-[#101622]'}`}>
                    <span className={`material-symbols-outlined ${exp.isActive ? 'text-white' : 'text-slate-600 dark:text-slate-400'} text-sm`}>
                      {exp.icon}
                    </span>
                  </div>
                </div>
                <div className={`bg-white dark:bg-[#1e293b] p-5 rounded-xl border border-slate-100 dark:border-[#334155] shadow-sm hover:border-primary/50 transition-colors ${exp.isActive ? 'group' : ''}`}>
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className={`text-lg font-bold text-slate-900 dark:text-white ${exp.isActive ? 'group-hover:text-primary' : ''} transition-colors`}>
                      {exp.title}
                    </h3>
                    <span className="text-xs font-semibold px-2 py-1 rounded bg-slate-100 dark:bg-[#232f48] text-slate-600 dark:text-slate-300">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-primary text-sm font-medium mb-3">{exp.company}</p>
                  <p className="text-slate-600 dark:text-[#92a4c9] text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Column: Education & Hobbies */}
        <div className="flex flex-col gap-8">
          {/* Education Card */}
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-100 dark:border-[#334155] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">school</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-slate-200 dark:border-[#334155]">
                  <h4 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <p className="text-sm text-primary mb-1">{edu.institution}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hobbies Section */}
          <div className="bg-white dark:bg-[#1e293b] rounded-2xl p-6 border border-slate-100 dark:border-[#334155] shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">stadia_controller</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Offline Mode</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex flex-col items-center justify-center p-3 bg-slate-50 dark:bg-[#232f48] rounded-xl text-center hover:bg-slate-100 dark:hover:bg-[#2d3b55] transition-colors">
                  <span className="material-symbols-outlined text-slate-500 dark:text-slate-300 mb-2">
                    {hobby.icon}
                  </span>
                  <span className="text-xs font-medium dark:text-slate-200">{hobby.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Preferred Work Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-end gap-4 border-b border-slate-200 dark:border-[#232f48] pb-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-3xl">hub</span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What I Do Best</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm max-w-md text-right">
            My sweet spot involves projects that require high performance and thoughtful user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <div key={index} className="group p-6 rounded-2xl bg-white dark:bg-[#1e293b] border border-slate-100 dark:border-[#334155] hover:border-primary/50 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className={`size-12 rounded-lg bg-${specialty.color}-100 dark:bg-${specialty.color}-900/30 text-${specialty.color}-600 dark:text-${specialty.color}-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined">{specialty.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{specialty.title}</h3>
              <p className="text-sm text-slate-600 dark:text-[#92a4c9] leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="mt-10 mb-10">
        <div className="relative overflow-hidden rounded-2xl bg-[#135bec] px-8 py-12 md:px-16 md:py-16 text-center">
          {/* Abstract Background Pattern */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}>
          </div>
          <h2 className="relative text-2xl md:text-3xl font-bold text-white mb-4">Have an idea in mind?</h2>
          <p className="relative text-blue-100 mb-8 max-w-xl mx-auto text-base md:text-lg">
            I'm currently available for freelance projects and open to full-time opportunities. Let's build
            something amazing together.
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-lg">
              Start a Project
            </button>
            <button
              onClick={() => {
                navigator.clipboard.writeText('rafiul24.bd@gmail.com');
                toast.success('Email copied!');
              }}
              className="px-8 py-3 bg-blue-700/50 border border-blue-400/30 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Copy Email
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Journey
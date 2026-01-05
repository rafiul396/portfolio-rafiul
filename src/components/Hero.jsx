import React from 'react'
import photo from '../assets/rafiul.png'
import { FaExternalLinkSquareAlt, FaFacebook, FaGithub, FaGithubSquare, FaTwitch, FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative flex h-auto min-h-screen w-full flex-col">
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[1280px] flex-1 px-4 md:px-10">
            {/* Hero Section */}
            <div className="@container">
              <div className="flex flex-col-reverse gap-8 py-10 lg:flex-row lg:items-center lg:gap-16 lg:py-20">
                {/* Text Content */}
                <div className="flex flex-col gap-6 flex-1 lg:max-w-[600px]">
                  <div className="flex flex-col gap-4 text-left">
                    <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 w-fit border border-primary/20">
                      <span className="material-symbols-outlined text-primary text-sm">code</span>
                      <span className="text-primary text-xs font-bold uppercase tracking-wide">Full Stack Developer</span>
                    </div>
                    <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-[1.1] tracking-[-0.033em] md:text-5xl lg:text-6xl">
                      Hi, I'm Rafiul. <br />
                      I build <span className="text-primary">scalable</span> solutions.
                    </h1>
                    <h2 className="text-[#637588] dark:text-[#93adc8] text-base font-normal leading-relaxed md:text-lg">
                      Specialized in the MERN Stack (MongoDB, Express, React, Node). I help businesses
                      transform complex ideas into high-performance, user-centric web applications.
                    </h2>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary hover:bg-blue-600 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25">
                      <span className="material-symbols-outlined text-[20px]">download</span>
                      <span className="truncate">Download Resume</span>
                    </button>
                    <button 
                      onClick={scrollToProjects}
                      className="flex min-w-[140px] cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-white dark:bg-[#232f48] border border-[#e5e7eb] dark:border-transparent hover:bg-gray-50 dark:hover:bg-[#2d3b55] transition-colors text-[#111418] dark:text-white text-base font-bold leading-normal tracking-[0.015em]"
                    >
                      <span className="material-symbols-outlined text-[20px]">visibility</span>
                      <span className="truncate">View Projects</span>
                    </button>
                  </div>
                  {/* Social Links */}
                  <div className="flex flex-col gap-3 pt-6">
                    <p className="text-sm font-medium text-[#637588] dark:text-[#93adc8]">Connect with me:</p>
                    <div className="flex gap-4">

                      <a className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#f0f2f4] dark:bg-[#1e293b] text-[#111418] dark:text-white hover:bg-[#e0e2e4] dark:hover:bg-[#2d3b55] hover:text-primary dark:hover:text-primary transition-all"
                         href="https://github.com/rafiul396" title="Github" target='_blank'>
                        <span className="material-symbols-outlined text-[35px]"><FaGithub /></span>
                      </a>

                      <a className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#f0f2f4] dark:bg-[#1e293b] text-[#111418] dark:text-white hover:bg-[#e0e2e4] dark:hover:bg-[#2d3b55] hover:text-primary dark:hover:text-primary transition-all"
                         href="https://www.linkedin.com/in/rafiul396/" title="LinkedIn" target='_blank'>
                        <span className="material-symbols-outlined text-[35px]"><FaLinkedinIn /></span>
                      </a>

                      {/* <a className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#f0f2f4] dark:bg-[#1e293b] text-[#111418] dark:text-white hover:bg-[#e0e2e4] dark:hover:bg-[#2d3b55] hover:text-primary dark:hover:text-primary transition-all"
                         href="#" title="Twitter">
                        <span className="material-symbols-outlined text-[35px]"><FaTwitter /></span>
                      </a> */}

                      <a className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-[#f0f2f4] dark:bg-[#1e293b] text-[#111418] dark:text-white hover:bg-[#e0e2e4] dark:hover:bg-[#2d3b55] hover:text-primary dark:hover:text-primary transition-all"
                         href="https://www.facebook.com/rafiul396/" title="Facebook" target='_blank'>
                        <span className="material-symbols-outlined text-[35px]"><FaFacebook /></span>
                      </a>

                    </div>
                  </div>
                </div>
                {/* Image/Graphic Content */}
                <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end relative">
                  {/* Abstract decorative background blob */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/20 blur-[80px] rounded-full pointer-events-none -z-10"></div>
                  <div className="relative w-full max-w-[500px] aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-[#232f48]/50 bg-[#1e293b]">
                    <div className="w-full h-full bg-center bg-cover bg-no-repeat"
                         style={{backgroundImage: `url(${photo})`}}>
                    </div>
                    {/* Floating Tech Badge */}
                    <div className="absolute bottom-6 left-6 right-6 backdrop-blur-xl bg-[#111722]/80 border border-[#232f48] p-4 rounded-xl flex items-center gap-4 shadow-lg">
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-[#232f48] flex items-center justify-center border border-[#111722] text-xs text-white" title="MongoDB">M</div>
                        <div className="w-8 h-8 rounded-full bg-[#232f48] flex items-center justify-center border border-[#111722] text-xs text-white" title="Express">E</div>
                        <div className="w-8 h-8 rounded-full bg-[#232f48] flex items-center justify-center border border-[#111722] text-xs text-white" title="React">R</div>
                        <div className="w-8 h-8 rounded-full bg-[#232f48] flex items-center justify-center border border-[#111722] text-xs text-white" title="Node">N</div>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-white text-xs font-bold">MERN Stack Expert</span>
                        <span className="text-[#93adc8] text-[10px]">1+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tech Stack Marquee */}
            <div className="mt-8 border-t border-[#e5e7eb] dark:border-[#232f48] pt-8 opacity-70">
              <p className="text-center text-sm font-medium text-[#637588] dark:text-[#93adc8] mb-6">TRUSTED TECHNOLOGIES</p>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-[#232f48] border border-transparent dark:border-[#334155]">
                  <span className="material-symbols-outlined text-[18px] text-[#61DAFB]">code</span>
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-[#232f48] border border-transparent dark:border-[#334155]">
                  <span className="material-symbols-outlined text-[18px] text-[#68A063]">dns</span>
                  <span className="text-sm font-medium">Node.js</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-[#232f48] border border-transparent dark:border-[#334155]">
                  <span className="material-symbols-outlined text-[18px] text-[#4DB33D]">database</span>
                  <span className="text-sm font-medium">MongoDB</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-[#232f48] border border-transparent dark:border-[#334155]">
                  <span className="material-symbols-outlined text-[18px] text-[#000000] dark:text-white">send</span>
                  <span className="text-sm font-medium">Express</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-200 dark:bg-[#232f48] border border-transparent dark:border-[#334155]">
                  <span className="material-symbols-outlined text-[18px] text-[#38B2AC]">brush</span>
                  <span className="text-sm font-medium">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
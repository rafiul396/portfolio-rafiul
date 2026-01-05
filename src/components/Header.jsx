import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-solid border-[#e5e7eb] dark:border-[#232f48] bg-white/90 dark:bg-[#111722]/90 backdrop-blur-md">
      <div className="px-4 md:px-10 py-3 flex items-center justify-between mx-auto max-w-[1280px]">
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[28px]">terminal</span>
          </div>
          <h2 className="text-[#111418] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">
            rip.dev
          </h2>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-[#111418] dark:text-white text-sm font-medium leading-normal hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden text-[#111418] dark:text-white">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="material-symbols-outlined cursor-pointer">menu</span>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#111722] border-t border-[#e5e7eb] dark:border-[#232f48]">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left py-2 text-[#111418] dark:text-white hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="block w-full text-left py-2 text-[#111418] dark:text-white hover:text-primary transition-colors"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left py-2 text-[#111418] dark:text-white hover:text-primary transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left py-2 text-[#111418] dark:text-white hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
import React from 'react'

const Footer = () => {
  const socialLinks = [
    { icon: "code", href: "#", title: "GitHub" },
    { icon: "mail", href: "#", title: "Email" },
    { icon: "public", href: "#", title: "Website" }
  ]

  return (
    <footer className="border-t border-slate-200 dark:border-[#232f48] py-8 bg-background-light dark:bg-[#111722]">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4 text-slate-500 dark:text-slate-400">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              className="hover:text-primary transition-colors"
              href={social.href}
              title={social.title}
            >
              <span className="material-symbols-outlined">{social.icon}</span>
            </a>
          ))}
        </div>
        <p className="text-sm text-slate-500 dark:text-[#92a4c9]">
          © 2026 Rafiul. Built with React js.
        </p>
      </div>
    </footer>
  )
}

export default Footer
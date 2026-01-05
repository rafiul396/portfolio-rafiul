import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Stack Web App (MERN)',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await axios.post('/api/contact', formData)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        projectType: 'Full Stack Web App (MERN)',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      title: "Email Me",
      value: "rafiul24.bd@gmail.com",
      href: "mailto:rafiul24.bd@gmail.com",
      icon: "mail"
    },
    {
      title: "Call Me",
      value: "+880 1788-668802",
      href: "tel:+8801788668802",
      icon: "call"
    },
    {
      title: "Chat Directly",
      value: "Start a WhatsApp Chat",
      href: "#",
      icon: "chat"
    }
  ]

  const socialLinks = [
    { icon: "code", href: "https://github.com/rafiul396", title: "GitHub" },
    { icon: "work", href: "https://www.linkedin.com/in/rafiul396/", title: "LinkedIn" },
    { icon: "alternate_email", href: "#", title: "Twitter" }
  ]

  return (
    <main id="contact" className="flex-1">
      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Info & Context */}
          <div className="flex flex-col gap-8">
            {/* Heading Section */}
            <div className="flex flex-col gap-4">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to Work
              </div>
              <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                Let's Build Something <span className="text-primary">Together</span>
              </h1>
              <p className="max-w-xl text-lg text-slate-600 dark:text-[#92a4c9]">
                Reach out for collaborations, freelance projects, or just a friendly hello. I'm currently
                available for new MERN stack opportunities.
              </p>
            </div>
            
            {/* Contact Cards Grid */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col gap-1 rounded-xl border border-slate-200 bg-white p-5 transition-all hover:border-primary/50 hover:shadow-lg dark:border-[#324467] dark:bg-[#192233] dark:hover:border-primary/50"
                >
                  <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <span className="material-symbols-outlined">{method.icon}</span>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    {method.title}
                  </p>
                  <a 
                    className="text-base font-bold text-slate-900 hover:text-primary dark:text-white dark:hover:text-primary transition-colors"
                    href={method.href}
                  >
                    {method.value}
                  </a>
                </div>
              ))}
            </div>
            
            {/* Social Proof / Links */}
            <div className="mt-4">
              <p className="mb-4 text-sm font-medium text-slate-500 dark:text-slate-400">
                Connect with me on social
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    className="flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-1 hover:border-primary hover:text-primary hover:shadow-md dark:border-[#324467] dark:bg-[#192233] dark:text-slate-400 dark:hover:border-primary dark:hover:text-primary"
                    href={social.href}
                    title={social.title}
                    target='_blank'
                  >
                    <span className="material-symbols-outlined">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column: Contact Form */}
          <div className="relative">
            {/* Decorative background glow */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-blue-600 opacity-20 blur-xl dark:opacity-30"></div>
            <div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl dark:border-[#324467] dark:bg-[#192233] sm:p-8">
              <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">Send a Message</h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-800 dark:text-green-200 text-sm">
                    Message sent successfully! I'll get back to you within 24 hours.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-lg">
                  <p className="text-red-800 dark:text-red-200 text-sm">
                    Something went wrong. Please try again or contact me directly.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      className="w-full rounded-lg border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-[#324467] dark:bg-[#111722] dark:text-white dark:placeholder:text-slate-500"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      className="w-full rounded-lg border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-[#324467] dark:bg-[#111722] dark:text-white dark:placeholder:text-slate-500"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="projectType">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      className="w-full appearance-none rounded-lg border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:ring-primary dark:border-[#324467] dark:bg-[#111722] dark:text-white"
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                    >
                      <option>Full Stack Web App (MERN)</option>
                      <option>Frontend Development</option>
                      <option>Backend Development</option>
                      <option>Consultation</option>
                      <option>Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <span className="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="message">
                    Tell me about your project
                  </label>
                  <textarea
                    className="w-full rounded-lg border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-[#324467] dark:bg-[#111722] dark:text-white dark:placeholder:text-slate-500"
                    id="message"
                    name="message"
                    placeholder="I have an idea for..."
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-white shadow-lg transition-all hover:bg-blue-600 hover:shadow-primary/25 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={isSubmitting}
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">
                    send
                  </span>
                </button>
                <p className="text-center text-xs text-slate-500 dark:text-slate-400">
                  I usually respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact
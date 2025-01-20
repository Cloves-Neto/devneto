'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Icon } from "@iconify/react";


export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section className="h-auto flex flex-col w-full justify-center items-center bg-[#0a051a] text-white p-12 md:px-12 md:h-[70dvh]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-purple-500">hire me</p>
            <h2 className="text-4xl font-bold">
              Got a project?
              <br />
              Lets talk
            </h2>
          </div>
          
          <a 
            href="mailto:contato.devneto@gmail.com" 
            className="text-purple-500 underline inline-block"
          >
            contato.devneto@gmail.com
          </a>

          <div className="flex gap-4">
            {/* Social Media Placeholders */}
            <Link href={"https://github.com/cloves-neto"}  className="w-10 h-10 transition-all bg-purple-500 hover:bg-purple-900 rounded-full flex items-center justify-center">
                <Icon className="text-2xl" icon={"jam:github"} />
            </Link>

            <Link href={"https://linkedin.com/in/cloves-neto"}  className="w-10 h-10 transition-all bg-purple-500 hover:bg-purple-900 rounded-full flex items-center justify-center">
                <Icon className="text-2xl" icon={"mage:linkedin"} />
            </Link> 

            <Link href={"https://instagram.com/_devneto"}  className="w-10 h-10 transition-all bg-purple-500 hover:bg-purple-900 rounded-full flex items-center justify-center">
                <Icon className="text-2xl" icon={"ri:instagram-fill"} />
            </Link>  
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold mb-2">
              Want to estimate your project?
            </h2>
            <p className="text-2xl text-purple-500 font-light">Let me know here</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="what´s your name?"
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-purple-500 transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="your fancy email"
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-purple-500 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <input
                type="tel"
                placeholder="your phone number"
                className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-purple-500 transition-colors"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="tell me about your project"
                className="w-full bg-transparent border-b border-white/20 py-2 pr-10 focus:outline-none focus:border-purple-00 transition-colors"
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              />
              <button type="submit" className="absolute right-0 bottom-2 w-6 h-6 text-purple-700 hover:text-purple-500">
                  <Icon icon={"ph:arrow-right"} className="text-2xl" />
                  <span className="hidden">Enviar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}


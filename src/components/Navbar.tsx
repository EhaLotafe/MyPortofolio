// src/components/Navbar.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'projects', 'contact']
      let current = 'home'

      for (const id of sections) {
        const section = document.getElementById(id)
        if (section) {
          const rect = section.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id
            break
          }
        }
      }

      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClasses = (id: string) =>
    `hover:text-blue-600 transition-colors ${activeSection === id ? 'text-blue-600 font-semibold' : ''}`

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
      <div className="container-max flex items-center justify-between py-4">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Overcome logo" width={42} height={42} />
          <span className="font-title text-lg">Overcome Solution</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="#home" className={linkClasses('home')}>Accueil</Link>
          <Link href="#about" className={linkClasses('about')}>À propos</Link>
          <Link href="#projects" className={linkClasses('projects')}>Projets</Link>
          <Link href="#services" className={linkClasses('services')}>Services</Link>
          <Link href="#contact" className={`px-3 py-2 rounded-md bg-navy text-white ${activeSection === 'contact' ? 'opacity-90' : ''}`}>
            Contact
          </Link>
        </nav>

        {/* Mobile */}
        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md"
        >
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="container-max flex flex-col py-4 gap-2">
            <Link href="#home" onClick={()=>setOpen(false)} className={linkClasses('home')}>Accueil</Link>
            <Link href="#about" onClick={()=>setOpen(false)} className={linkClasses('about')}>À propos</Link>
            <Link href="#projects" onClick={()=>setOpen(false)} className={linkClasses('projects')}>Projets</Link>
            <Link href="#services" onClick={()=>setOpen(false)} className={linkClasses('services')}>Services</Link>
            <Link href="#contact" onClick={()=>setOpen(false)} className={`px-3 py-2 rounded-md bg-navy text-white ${activeSection === 'contact' ? 'opacity-90' : ''}`}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

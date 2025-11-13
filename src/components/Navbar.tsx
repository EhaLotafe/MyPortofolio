'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-white/90 backdrop-blur sticky top-0 z-50 border-b">
      <div className="container-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.jpg" alt="Overcome logo" width={42} height={42} />
          <span className="font-title text-lg">Overcome Solution</span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link href="#about">À propos</Link>
          <Link href="#projects">Projets</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact" className="px-3 py-2 rounded-md bg-navy text-white">
            Contact
          </Link>
        </nav>

        {/* Menu mobile */}
        <button
          aria-label="menu"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md"
        >
          <svg width="28" height="28" viewBox="0 0 24 24">
            <path
              d="M3 6h18M3 12h18M3 18h18"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Menu mobile déroulant */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="container-max flex flex-col py-4 gap-2">
            <Link href="#about" onClick={() => setOpen(false)}>À propos</Link>
            <Link href="#projects" onClick={() => setOpen(false)}>Projets</Link>
            <Link href="#services" onClick={() => setOpen(false)}>Services</Link>
            <Link href="#contact" onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-navy text-white inline-block">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

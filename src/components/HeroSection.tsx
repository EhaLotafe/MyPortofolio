'use client'
import Image from 'next/image'
import { Player } from 'lottie-react'
import MotionWrapper from './MotionWrapper'

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image src="/hero-bg.jpg" alt="hero" fill style={{ objectFit: 'cover' }} priority />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
      </div>

      <div className="container-max relative z-10 py-28 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1">
          <MotionWrapper>
            <h1 className="text-4xl md:text-5xl font-title mb-4">Du Code. Du Sens. Du Progrès.</h1>
            <p className="text-lg mb-6 max-w-xl">
              Je conçois et déploie des solutions numériques pragmatiques qui favorisent la transformation économique locale en RDC et en Afrique centrale.
            </p>
            <div className="flex gap-4">
              <a href="/projects" className="px-5 py-3 rounded-md bg-navy text-white font-semibold">Découvrir mes projets</a>
              <a href="/contact" className="px-5 py-3 rounded-md border-2 border-navy text-navy font-semibold">Travailler ensemble</a>
            </div>
          </MotionWrapper>
        </div>

        <div className="w-full max-w-lg">
          <MotionWrapper>
            <div className="bg-white/90 rounded-2xl p-6 shadow-2xl">
              <Player
                autoplay
                loop
                src="/lottie/hero.json"
                style={{ height: 360, width: '100%' }}
              />
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}

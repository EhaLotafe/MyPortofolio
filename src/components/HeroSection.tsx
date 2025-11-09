// src/components/HeroSection.tsx (FINAL)
'use client'

import Image from 'next/image'
import MotionWrapper from './MotionWrapper'
import dynamic from 'next/dynamic'

const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false } // ne pas rendre côté serveur
)

export default function HeroSection() {
  return (
    <section className="relative">
      {/* Background image avec overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="hero"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80" />
      </div>

      {/* Contenu principal */}
      <div className="container-max relative z-10 py-28 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Texte à gauche */}
        <div className="flex-1">
          <MotionWrapper>
            <h1 className="text-4xl md:text-5xl font-title mb-4">
              Du Code. Du Sens. Du Progrès.
            </h1>
            <p className="text-lg mb-6 max-w-xl">
              Je conçois et déploie des solutions numériques pragmatiques qui favorisent la transformation économique locale en RDC et en Afrique centrale.
            </p>
            <div className="flex gap-4">
              <a
                href="/projects"
                className="px-5 py-3 rounded-md bg-navy text-white font-semibold"
              >
                Découvrir mes projets
              </a>
              <a
                href="/contact"
                className="px-5 py-3 rounded-md border-2 border-navy text-navy font-semibold"
              >
                Travailler ensemble
              </a>
            </div>
          </MotionWrapper>
        </div>

        {/* Animation Lottie à droite */}
        <div className="w-full max-w-lg relative">
          <MotionWrapper>
            <div className="absolute right-10 bg-white/30 backdrop-blur-md rounded-2xl w-[400px] h-[300px] shadow-md"></div>
            <Player
              autoplay
              loop
              src="/lottie/hero.json"
              style={{ height: 360, width: '100%' }}
            />
          </MotionWrapper>
        </div>

      </div>
    </section>
  )
}

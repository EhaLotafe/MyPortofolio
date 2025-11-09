// src/components/ServicesSection.tsx
'use client'

import MotionWrapper from './MotionWrapper'
import { services } from '../lib/servicesData'
import dynamic from 'next/dynamic'

type Props = { detailed?: boolean }

// Import dynamique du Player pour désactiver le SSR
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then(mod => mod.Player),
  { ssr: false }
)

export default function ServicesSection({ detailed = false }: Props) {
  return (
    <MotionWrapper>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* CONTENU */}
        <div>
          <h2 className="text-3xl font-title mb-4"></h2>
          <p className="mb-6">
            Développement sur mesure, automatisation & IA, systèmes de gestion, accompagnement digital pour PME et entrepreneurs.
          </p>

          <ul className="space-y-4">
            {services.map(service => (
              <li
                key={service.id}
                className="bg-white rounded-xl p-4 shadow hover:-translate-y-1 transition-transform duration-300"
              >
                <h4 className="font-semibold">{service.title}</h4>
                <p className="text-sm">{service.description}</p>
                {service.stack && service.stack.length > 0 && (
                  <div className="text-xs text-gray-500 mt-1">
                    Tech / Focus : {service.stack.join(', ')}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* LOTTIE / VISUEL */}
        <div>
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <Player
              src="/lottie/services.json"
              autoplay
              loop
              style={{ height: 360, width: '100%' }}
            />
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}

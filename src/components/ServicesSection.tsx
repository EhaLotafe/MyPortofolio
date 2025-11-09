'use client'
import { Player } from 'lottie-react'
import MotionWrapper from './MotionWrapper'

type Props = { detailed?: boolean }

export default function ServicesSection({ detailed = false }: Props) {
  return (
    <MotionWrapper>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-title mb-4">Services</h2>
          <p className="mb-6">Développement sur mesure, automatisation & IA, systèmes de gestion, accompagnement digital pour PME.</p>

          <ul className="space-y-4">
            <li className="bg-white rounded-xl p-4 shadow">
              <h4 className="font-semibold">Développement d'applications web</h4>
              <p className="text-sm">SaaS, marketplaces, dashboards, API scalables.</p>
            </li>
            <li className="bg-white rounded-xl p-4 shadow">
              <h4 className="font-semibold">Automatisation & IA</h4>
              <p className="text-sm">Chatbots, prédiction, automatisation de flux.</p>
            </li>
            <li className="bg-white rounded-xl p-4 shadow">
              <h4 className="font-semibold">Accompagnement PME</h4>
              <p className="text-sm">Audit, formation, stratégie de déploiement.</p>
            </li>
          </ul>
        </div>

        <div>
          <div className="bg-white rounded-2xl p-6 shadow-2xl">
            <Player src="/lottie/services.json" autoplay loop style={{ height: 360, width: '100%' }} />
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}

// src/components/ProjectsGrid.tsx
'use client'

import MotionWrapper from './MotionWrapper'
import Image from 'next/image'
import { projects } from '../lib/projectsData'

export default function ProjectsGrid() {
  return (
    <MotionWrapper>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <article
            key={p.id}
            className="bg-white rounded-xl overflow-hidden shadow hover:-translate-y-2 transition-transform duration-300"
          >
            {/* Image */}
            <div className="relative h-44 w-full">
              <Image
                src={p.image}
                alt={p.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Contenu */}
            <div className="p-4 flex flex-col gap-2">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-gray-700">{p.description}</p>

              {/* Tech stack */}
              <div className="text-xs text-gray-500">
                Tech: {p.stack.join(', ')}
              </div>

              {/* KPIs */}
              {p.kpis && p.kpis.length > 0 && (
                <ul className="text-xs text-gray-500 list-disc ml-4 mt-1">
                  {p.kpis.map((kpi, idx) => (
                    <li key={idx}>{kpi}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </MotionWrapper>
  )
}

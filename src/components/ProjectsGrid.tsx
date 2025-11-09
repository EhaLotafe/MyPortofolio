import MotionWrapper from './MotionWrapper'
import Image from 'next/image'
import { projects } from '../lib/projectsData'

export default function ProjectsGrid() {
  return (
    <MotionWrapper>
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map(p => (
          <article key={p.id} className="bg-white rounded-xl overflow-hidden shadow hover:translate-y-[-6px] transition-transform">
            <div className="relative h-44 w-full">
              <Image src={p.image} alt={p.title} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm my-2">{p.description}</p>
              <div className="text-xs text-gray-500">Tech: {p.stack.join(', ')}</div>
            </div>
          </article>
        ))}
      </div>
    </MotionWrapper>
  )
}

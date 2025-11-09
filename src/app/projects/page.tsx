import ProjectsGrid from '../../components/ProjectsGrid'

export default function ProjectsPage() {
  return (
    <section className="bg-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-title mb-8">Projets</h1>
        <ProjectsGrid />
      </div>
    </section>
  )
}

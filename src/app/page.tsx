import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsGrid from '../components/ProjectsGrid'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="bg-white">
        <div className="container-max py-16">
          <AboutSection />
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-green">
        <div className="container-max py-16">
          <ServicesSection />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-max py-16">
          <h2 className="text-3xl font-title text-dark mb-8">Projets phares</h2>
          <ProjectsGrid />
        </div>
      </section>

      <section className="bg-light">
        <div className="container-max py-16">
          <h2 className="text-3xl font-title text-dark mb-6">Contact</h2>
          <ContactForm />
        </div>
      </section>
    </>
  )
}

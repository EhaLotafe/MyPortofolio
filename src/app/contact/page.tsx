import ContactForm from '../../components/ContactForm'

export default function ContactPage() {
  return (
    <section className="bg-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-title mb-6">Contact</h1>
        <p className="mb-6">Contactez-moi pour un audit, un projet ou une collaboration.</p>
        <ContactForm />
      </div>
    </section>
  )
}

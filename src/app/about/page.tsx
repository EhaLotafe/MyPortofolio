export default function AboutPage() {
  return (
    <section className="bg-white">
      <div className="container-max py-16">
        <h1 className="text-4xl font-title mb-4">À propos</h1>
        <p className="text-lg mb-6">
          Je suis <strong>Manasse Lotafe</strong>, développeur logiciel, architecte de solutions numériques et chercheur en IA appliquée.
          Je conçois des outils pragmatiques pour résoudre des problèmes réels en RDC et en Afrique centrale.
        </p>

        <h2 className="text-2xl font-title mt-8 mb-4">Vision</h2>
        <p className="mb-6">Construire des plateformes et des outils qui élèvent la productivité locale, accélèrent la transformation économique et forment une nouvelle génération de bâtisseurs.</p>

        <h2 className="text-2xl font-title mt-8 mb-4">Valeurs</h2>
        <ul className="list-disc ml-6">
          <li>Innovation</li>
          <li>Rigueur</li>
          <li>Accessibilité</li>
          <li>Scalabilité</li>
          <li>Résilience</li>
        </ul>
      </div>
    </section>
  )
}

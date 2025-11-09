// src/components/AboutSection.tsx
'use client'

import MotionWrapper from './MotionWrapper'

export default function AboutSection() {
  return (
    <MotionWrapper>
      <div className="space-y-16">
        {/* ======================= */}
        {/* SECTION À PROPOS */}
        {/* ======================= */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl font-title mb-4">À propos</h2>
            <p className="mb-4">
              Je suis <strong>Manasse Lotafe</strong>, développeur orienté solutions avec une vision : utiliser le numérique pour résoudre des problèmes réels, concrets et scalables en Afrique — en particulier en RDC. Je conçois et construis des systèmes utiles : plateformes métiers, gestion de stocks, éducation digitale, automations intelligentes, SaaS… en combinant analyse, ingénierie logicielle et impact business.
            </p>
            <p className="mb-4">
              J’apprends vite, je teste, j’itère, et je cherche à produire des outils pratiques, accessibles, qui créent de la valeur immédiatement — pas juste du code pour du code.  
              Ma mission long terme : construire une entreprise technologique qui relie agri + éducation + logiciel, former les jeunes et ouvrir des perspectives.
            </p>
            <p>
              Tech que j'utilise :<br />
              <strong>Back-end:</strong> TypeScript (Express), Python, PHP<br />
              <strong>ORM / DB:</strong> Drizzle ORM, PostgreSQL, SQL<br />
              <strong>Front:</strong> HTML / CSS / JS / Vue.js<br />
              <strong>Autres:</strong> API REST, Auth, Security, Stock analysis, automatisations
            </p>
          </div>
          <div>
            <div className="bg-white rounded-xl p-6 shadow space-y-4">
              <h3 className="font-semibold mb-2">Mission</h3>
              <p>Construire des solutions numériques pragmatiques, accessibles et intelligentes qui favorisent l’innovation locale et la scalabilité.</p>
              <hr className="my-4" />
              <h3 className="font-semibold mb-2">Vision</h3>
              <p>Créer des plateformes durables, scalables, accessibles et adaptées à des environnements contraints, notamment en zones à faible connectivité.</p>
            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* SECTION PROJETS */}
        {/* ======================= */}
        <div>
          <h2 className="text-3xl font-title mb-6">Projets</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Projet 1 */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">AgriConnect – Plateforme agro-commerce</h3>
              <p>
                Solution digitale permettant de connecter agriculteurs ruraux et acheteurs urbains via un modèle hybride (Web + USSD/SMS). Rôles multi-accès, gestion des offres agricoles, commandes, système de confiance et orientation vers un modèle marketplace évolutif.
              </p>
            </div>
            {/* Projet 2 */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">GIFA – Gestion intelligente de facturation (MVP)</h3>
              <p>
                Application web pour digitaliser les opérations de facturation pour PME et structures locales. Suivi des paiements, génération des factures, tableaux de bord, gestion des rôles utilisateurs et déploiement cloud (Vercel + Railway).
              </p>
            </div>
            {/* Projet 3 */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">EduPay – Paiement scolaire digitalisé (Prototype)</h3>
              <p>
                Automatisation du suivi des frais scolaires : inscription, paiements, relances, état des élèves et reporting pour comptables/administration scolaire. Réduction des erreurs humaines et gain d’efficacité administrative.
              </p>
            </div>
            {/* Projet 4 */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">L’Art du Plaisir – Produit digital et programme privé</h3>
              <p>
                Produit premium incluant un livre numérique, un programme d’accompagnement et un canal privé. Focus sur développement personnel masculin, confiance, discipline et performance.
              </p>
            </div>
            {/* Projet 5 */}
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">Portfolio IA & Branding</h3>
              <p>
                Catalogue IA regroupant prompts avancés, identités visuelles et créations AI-assisted destinées aux créateurs, entrepreneurs et marques.
              </p>
            </div>
          </div>
        </div>

        {/* ======================= */}
        {/* SECTION SERVICES */}
        {/* ======================= */}
        <div>
          <h2 className="text-3xl font-title mb-6">Services</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">Développement d’applications Web & SaaS</h3>
              <p>Conception de plateformes web modernes (React, Tailwind, Node/TypeScript, API). Mise en place de systèmes multi-rôles, dashboards, automatisations et infrastructures cloud.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">Stratégie Produit & MVP</h3>
              <p>Accompagnement complet pour lancer un produit digital : architecture fonctionnelle, feuille de route, priorisation des features, structuration MVP et déploiement.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">Intégration de l’IA dans les processus métier</h3>
              <p>Conception de solutions augmentées par l’IA : automatisations, agents IA, amélioration du contenu, génération créative et intégrations sur mesure selon les besoins business.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">Branding Digital & Contenu IA</h3>
              <p>Création d’identités digitales distinctives, contenus optimisés pour visibilité, influence et conversion. Accompagnement sur IA générative, prompts, positionnement et communication digitale.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="font-semibold mb-2">Conseil & Support Technique</h3>
              <p>Assistance sur projets web et écosystèmes digitaux : audits techniques, optimisation, refonte, amélioration UX/UI, scalabilité et bonnes pratiques de développement.</p>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  )
}

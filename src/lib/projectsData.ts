// src/lib/projectsData.ts
export type Project = {
  id: string
  title: string
  stack: string[]
  description: string
  image: string
  kpis?: string[]
}

export const projects: Project[] = [
  {
    id: 'agri',
    title: 'AgriConnect – Plateforme agro-commerce',
    stack: ['React','Node.js','MongoDB','USSD/SMS'],
    description: 'Solution digitale permettant de connecter agriculteurs ruraux et acheteurs urbains via un modèle hybride (Web + USSD/SMS). Rôles multi-accès, gestion des offres agricoles, commandes, système de confiance et orientation vers un modèle marketplace évolutif.',
    image: '/projects/agric-connect.png',
    kpis: ['Auth multi-rôle', 'UI low-connectivity', 'Marketplace évolutive']
  },
  {
    id: 'gifa',
    title: 'GIFA – Gestion intelligente de facturation (MVP)',
    stack: ['React','Node.js','Express','PostgreSQL'],
    description: 'Application web pour digitaliser les opérations de facturation pour PME et structures locales. Suivi des paiements, génération des factures, tableaux de bord, gestion des rôles utilisateurs et déploiement cloud (Vercel + Railway).',
    image: '/projects/gifa.png',
    kpis: ['MVP fonctionnel', 'Tableaux de bord', 'Déploiement cloud']
  },
  {
    id: 'edupay',
    title: 'EduPay – Paiement scolaire digitalisé (Prototype/Concept)',
    stack: ['Express','TypeScript','PostgreSQL','Web'],
    description: 'Automatisation du suivi des frais scolaires : inscription, paiements, relances, état des élèves et reporting pour comptables/administration scolaire. Réduction des erreurs humaines et gain d’efficacité administrative.',
    image: '/projects/edupay.png',
    kpis: ['Réduction erreurs', 'Reporting temps réel', 'Traçabilité']
  },
  {
    id: 'art-plaisir',
    title: 'L’Art du Plaisir – Produit digital et programme privé',
    stack: ['Web','PDF','Programme digital'],
    description: 'Produit premium incluant un livre numérique, un programme d’accompagnement et un canal privé. Focus sur développement personnel masculin, confiance, discipline et performance.',
    image: '/projects/art-du-plaisir.png',
    kpis: ['Produit premium', 'Programme digital', 'Canal privé']
  },
  {
    id: 'portfolio-ia',
    title: 'Portfolio IA & Branding',
    stack: ['AI','Design','Branding'],
    description: 'Catalogue IA regroupant prompts avancés, identités visuelles et créations AI-assisted destinées aux créateurs, entrepreneurs et marques.',
    image: '/projects/portfolio-ia.png',
    kpis: ['Prompts avancés', 'Identités visuelles', 'AI-assisted']
  },
  {
    id: 'school-platform',
    title: 'Plateforme scolaire modulaire',
    stack: ['Express','PostgreSQL','Drizzle ORM','WebSocket'],
    description: 'Gestion étudiants, enseignants, parents, notes, paiements, devoirs, ressources, calendrier et messagerie temps réel via WebSocket.',
    image: '/projects/school-platform.png',
    kpis: ['WebSocket messaging', 'Gestion complète école', 'Reporting intégré']
  },
  {
    id: 'stock-system',
    title: 'Système de gestion de stock (V1 / V2 en cours)',
    stack: ['PHP','SQL','Excel','PDF','API'],
    description: 'Gestion des mouvements, marges, alertes, export Excel/PDF et intégration WooCommerce/POS pour plusieurs petits commerces.',
    image: '/projects/stock-system.png',
    kpis: ['Gestion complète stock', 'Alertes automatisées', 'Export multi-format']
  },
  {
    id: 'vitrine-lub',
    title: 'Plateforme vitrine / annuaire nouveaux arrivants à Lubumbashi',
    stack: ['Django','Web'],
    description: 'Permet de découvrir services, structures et contacts utiles pour les nouveaux arrivants à Lubumbashi.',
    image: '/projects/vitrine-lub.png',
    kpis: ['Annuaire pratique', 'Découverte services', 'Web responsive']
  },
  {
    id: 'chatbots-cozo',
    title: 'Chatbots personnalisés pour entreprises (Cozo DB)',
    stack: ['Chatbot','Node.js','IA'],
    description: 'Automatisation de réponses métier avec knowledge base structurée et intégration aux processus internes.',
    image: '/projects/chatbots-cozo.png',
    kpis: ['Automatisation métier', 'Knowledge base', 'IA intégrée']
  },
  {
    id: 'rh-excel',
    title: 'Système RH Excel + Python',
    stack: ['Python','Excel','SaaS'],
    description: 'Gestion du personnel, paies, heures et horaires. Version SaaS en cours de développement.',
    image: '/projects/rh-excel.png',
    kpis: ['Gestion RH', 'Automatisation paie', 'SaaS en développement']
  }
]

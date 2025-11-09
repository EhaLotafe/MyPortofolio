
// src/lib/servicesData.ts
export type Service = {
  id: string
  title: string
  description: string
  stack?: string[]
}

export const services: Service[] = [
  {
    id: 'web-saas',
    title: 'Développement d’applications Web & SaaS',
    description: 'Conception de plateformes web modernes (React, Tailwind, Node/TypeScript, API). Mise en place de systèmes multi-rôles, dashboards, automatisations et infrastructures cloud.',
    stack: ['React', 'Tailwind', 'Node.js', 'TypeScript', 'API', 'Cloud']
  },
  {
    id: 'product-strategy',
    title: 'Stratégie Produit & MVP',
    description: 'Accompagnement complet pour lancer un produit digital : architecture fonctionnelle, feuille de route, priorisation des features, structuration MVP et déploiement.',
    stack: ['Architecture', 'Roadmap', 'MVP', 'Gestion de projet']
  },
  {
    id: 'ia-integration',
    title: 'Intégration de l’IA dans les processus métier',
    description: 'Conception de solutions augmentées par l’IA : automatisations, agents IA, amélioration du contenu, génération créative et intégrations sur mesure selon les besoins business.',
    stack: ['IA', 'Automatisation', 'Agents IA', 'Intégration sur mesure']
  },
  {
    id: 'branding-ia',
    title: 'Branding Digital & Contenu IA',
    description: 'Création d’identités digitales distinctives, contenus optimisés pour visibilité, influence et conversion. Accompagnement sur IA générative, prompts, positionnement et communication digitale.',
    stack: ['Branding', 'IA générative', 'Contenu digital']
  },
  {
    id: 'tech-support',
    title: 'Conseil & Support Technique',
    description: 'Assistance sur projets web et écosystèmes digitaux : audits techniques, optimisation, refonte, amélioration UX/UI, scalabilité et bonnes pratiques de développement.',
    stack: ['Audit', 'Optimisation', 'UX/UI', 'Scalabilité']
  },
  {
    id: 'lowcost-solutions',
    title: 'Focus spécial : outils numériques pour PME locales',
    description: 'Création d’outils low cost, efficaces et scalables pour petites entreprises locales (RDC / Afrique), adaptés aux contraintes de connectivité et ressources limitées.',
    stack: ['PME', 'Low-cost', 'Scalable', 'Afrique']
  }
]

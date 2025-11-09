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
    title: 'AgriConnect',
    stack: ['React','Node.js','MongoDB'],
    description: 'Marketplace reliant agriculteurs et acheteurs urbains. Auth multi-rôle, dashboard et extension USSD.',
    image: '/projects/agric-connect.png',
    kpis: ['Auth multi-rôle','UI low-connectivity']
  },
  {
    id: 'edupay',
    title: 'EduPay',
    stack: ['Express','TypeScript','PostgreSQL'],
    description: 'Système de gestion des paiements scolaires — automatisation et reporting.',
    image: '/projects/edupay.png',
    kpis: ['Réduction erreurs','Reporting temps réel']
  },
  {
    id: 'gifa',
    title: 'GIFA',
    stack: ['React','Node.js'],
    description: 'Gestion agricole: suivi, commandes et interactions — MVP déployé.',
    image: '/projects/gifa.png',
    kpis: ['MVP fonctionnel']
  }
]

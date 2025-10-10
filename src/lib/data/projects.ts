import { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Sistema de Avaliação de Riscos Automatizado',
    description:
      'Planilha Excel avançada com VBA para avaliação automática de riscos empresariais. Inclui escalas de impacto/probabilidade, mapeamento de processos e geração automática de relatórios de compliance.',
    technologies: ['Excel', 'VBA', 'JSON', 'API Integration'],
    githubUrl: 'https://github.com/luizmiguel/risk-assessment-system',
    featured: true,
  },
  {
    id: 'proj-2',
    title: 'Dashboard de KPIs Empresariais',
    description:
      'Dashboard interativo em Power BI com integração em tempo real de múltiplas fontes de dados. Visualização de indicadores de performance, alertas automáticos e análise preditiva.',
    technologies: ['Power BI', 'SQL', 'Python', 'DAX'],
    liveUrl: 'https://app.powerbi.com/dashboard-demo',
    featured: true,
  },
  {
    id: 'proj-3',
    title: 'Automação de Processos de Auditoria',
    description:
      'Sistema VBA para automatização de processos de auditoria interna, incluindo checklist digital, análise de não-conformidades e geração de relatórios padronizados.',
    technologies: ['VBA', 'Excel', 'Access', 'Business Intelligence'],
    githubUrl: 'https://github.com/luizmiguel/audit-automation',
    featured: true,
  },
  {
    id: 'proj-4',
    title: 'Analisador de Supply Chain',
    description:
      'Ferramenta para análise e otimização de cadeia de suprimentos utilizando modelo SCOR, com simulação de cenários e recomendações automatizadas.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Supply Chain Analytics'],
    githubUrl: 'https://github.com/luizmiguel/supply-chain-analyzer',
    featured: false,
  },
  {
    id: 'proj-5',
    title: 'Sistema de Notificações Inteligentes',
    description:
      'Aplicação para envio de notificações automatizadas baseadas em regras de negócio, integração com múltiplas APIs e sistemas de monitoramento.',
    technologies: ['VBA', 'JSON', 'REST APIs', 'Excel'],
    githubUrl: 'https://github.com/luizmiguel/smart-notifications',
    featured: false,
  },
  {
    id: 'proj-6',
    title: 'Genealogy Research Tool',
    description:
      'Ferramenta desenvolvida para pesquisa genealógica automatizada, com integração de bases de dados públicas e geração de árvores familiares.',
    technologies: ['Python', 'Web Scraping', 'Data Analysis', 'Genealogy'],
    githubUrl: 'https://github.com/luizmiguel/genealogy-tool',
    featured: false,
  },
]

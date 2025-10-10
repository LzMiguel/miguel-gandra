import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Merck Group',
    position: 'Analista de Riscos Sênior',
    startDate: '2024-01',
    description:
      'Desenvolvimento e implementação de sistemas de avaliação de riscos empresariais para operações farmacêuticas. Criação de planilhas automatizadas para análise de impacto e probabilidade, mapeamento de macro-processos e verificação de conformidade regulatória.',
    technologies: [
      'Excel',
      'VBA',
      'Power BI',
      'SQL',
      'Python',
      'Risk Assessment',
    ],
    achievements: [
      'Desenvolveu sistema automatizado de avaliação de riscos que reduziu tempo de análise em 60%',
      'Implementou framework de compliance que aumentou a conformidade regulatória em 40%',
      'Liderou projeto de mapeamento de processos críticos em toda a operação brasileira',
    ],
  },
  {
    id: 'exp-2',
    company: 'Consultoria Empresarial',
    position: 'Desenvolvedor de Automação',
    startDate: '2023-03',
    endDate: '2023-12',
    description:
      'Especialista em automação de processos empresariais utilizando VBA e Excel. Desenvolvimento de soluções customizadas para otimização de workflows, integração de sistemas e análise de dados para tomada de decisão.',
    technologies: [
      'VBA',
      'Excel',
      'JSON',
      'API Integration',
      'Business Intelligence',
    ],
    achievements: [
      'Automatizou processos manuais economizando 200+ horas mensais de trabalho',
      'Desenvolveu sistema de notificações automáticas com integração de múltiplas fontes de dados',
      'Criou dashboards interativos para acompanhamento de KPIs em tempo real',
    ],
  },
  {
    id: 'exp-3',
    company: 'Empresa de Auditoria',
    position: 'Auditor Interno Júnior',
    startDate: '2022-06',
    endDate: '2023-02',
    description:
      'Execução de auditorias internas focadas em segurança do trabalho, conformidade regulatória e gestão de riscos. Especialização em normas brasileiras (NR5, CIPA, RAT) e procedimentos de detecção de fraudes.',
    technologies: [
      'Excel',
      'Sistemas de Auditoria',
      'Análise de Dados',
      'Compliance',
    ],
    achievements: [
      'Conduziu 50+ auditorias internas com 95% de conformidade',
      'Desenvolveu checklist automatizado para auditorias de segurança do trabalho',
      'Identificou e corrigiu não-conformidades que resultaram em economia de R$ 500K+',
    ],
  },
]

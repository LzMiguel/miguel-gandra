import { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Merck Group',
    position: 'Assistente de EHS',
    startDate: '2024-03',
    description:
      'Responsável pela parte digital do setor de EHS, incluindo análise de dados, relatórios e automação de processos.',
    technologies: ['Excel', 'VBA', 'Power BI', 'SQL', 'Python'],
    achievements: [
      'Desenvolveu sistema de registro de atendimentos de saúde ocupacional, reduzindo erros e garantindo registros precisos.',
      'Me tornei certificado no programa de Blue Belt da Merck, focado em metodologias Lean Six Sigma.',
      'Reestruturei o processo de relatos de incidentes, melhorando a precisão e a eficiência do sistema.',
    ],
  },
  {
    id: 'exp-2',
    company: 'Merck Group',
    position: 'Estagio em logística',
    startDate: '2022-03',
    endDate: '2024-03',
    description:
      'Responsável por otimizar processos logísticos através de automação e análise de dados, focando em eficiência operacional e redução de custos. Assim como suporte em atividades administrativas e operacionais do setor.',
    technologies: [
      'VBA',
      'Excel',
      'Python',
      'Power BI',
      'SAP',
      'SAP GUI Scripting',
      'Business Intelligence',
    ],
    achievements: [
      'Desenvolveu macros em VBA que automatizaram tarefas repetitivas, economizando mais de 10 horas semanais',
      'Implementou dashboards em Power BI para monitoramento de KPIs logísticos, melhorando a tomada de decisões',
      'Criou dashboards interativos para acompanhamento de KPIs em tempo real',
      'Desenvolveu automações com SAP GUI Scripting para extração de dados do SAP',
    ],
  },
  {
    id: 'exp-3',
    company: 'Rede Elite de Ensino',
    position: 'Estagiário de inteligência pedagógica',
    startDate: '2021-04',
    endDate: '2022-03',
    description:
      'Responsável pela criação de soluções de inteligência de negócios para otimização de processos educacionais. Desenvolvimento de dashboards e relatórios analíticos, criação de automações em Python, Google Apps Script e VBA. Análise e tratamento de dados para suporte à tomada de decisões, com foco na facilitação de atividades de diversos setores da instituição.',
    technologies: [
      'Excel',
      'Google Sheets',
      'Google Apps Script',
      'VBA',
      'Python',
    ],
    achievements: [
      'Aqui eu desenvolvi minha primeira automação em Python, que era a separação automática de notas de alunos em planilhas individuais',
      'Desenvolveu sistema de monitoramento de entrega de documentos de alunos, melhorando a eficiência do processo',
      'Desenvolveu automações e controles para facilitar atividades e melhorar a eficiência dos processos internos',
    ],
  },
  {
    id: 'exp-4',
    company: 'CBI of Miami',
    position: 'Estagiário de secretaria acadêmica',
    startDate: '2020-07',
    endDate: '2021-01',
    description:
      'Responsável por atividades administrativas da secretaria acadêmica, incluindo emissão de certificados, conferência de documentação e pagamentos. Desenvolvimento de soluções em VBA para automação de processos diários, contribuindo para maior eficiência nas rotinas manuais da secretaria.',
    technologies: ['Excel', 'VBA'],
    achievements: [
      'Desenvolveu macros em VBA para automatizar tarefas administrativas, economizando tempo e reduzindo erros',
      'Implementou soluções em Excel para otimização de processos, melhorando a eficiência do trabalho da secretaria',
      'Desenvolveu melhorias para macros existentes, aumentando a eficiência das automações',
    ],
  },
]

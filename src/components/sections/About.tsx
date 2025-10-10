import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { personalInfo } from '@/lib/data'
import { Code, Database, TrendingUp, Shield } from 'lucide-react'

const skills = [
  {
    category: 'Desenvolvimento',
    icon: Code,
    skills: ['VBA', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'JSON'],
    color: 'text-primary',
  },
  {
    category: 'Data Science',
    icon: Database,
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Power BI',
      'Excel',
      'Statistics',
    ],
    color: 'text-accent',
  },
  {
    category: 'Business Intelligence',
    icon: TrendingUp,
    skills: ['Dashboard', 'KPIs', 'Reporting', 'Automation', 'Process Mapping'],
    color: 'text-primary',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 bg-secondary/20"
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Sobre mim</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transformando desafios complexos em soluções elegantes através da
            tecnologia
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Minha jornada</h3>
              <p className="text-muted-foreground leading-relaxed">
                {personalInfo.bio}
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                Especialidades principais:
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Automação de processos empresariais com VBA e Python
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Análise e avaliação de processos para otimização contínua
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Desenvolvimento de dashboards e sistemas de BI
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Análise de dados e estatísticas aplicadas a negócios
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                  Criação de soluções personalizadas para desafios únicos
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skillGroup) => {
              const Icon = skillGroup.icon
              return (
                <Card
                  key={skillGroup.category}
                  className="group hover:border-primary/50 transition-colors"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-5 w-5 ${skillGroup.color}`} />
                      <CardTitle className="text-base">
                        {skillGroup.category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-1">
                      {skillGroup.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">4+</div>
            <div className="text-sm text-muted-foreground">
              Anos de experiência
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">20+</div>
            <div className="text-sm text-muted-foreground">
              Projetos concluídos
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">10+</div>
            <div className="text-sm text-muted-foreground">
              Automações criadas
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold gradient-text">700+</div>
            <div className="text-sm text-muted-foreground">
              Horas economizadas
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

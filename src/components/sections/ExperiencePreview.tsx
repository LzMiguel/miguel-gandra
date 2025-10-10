import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/lib/data'
import { formatDateRange } from '@/lib/utils'
import { ArrowRight, MapPin, Calendar } from 'lucide-react'

export function ExperiencePreview() {
  const recentExperiences = experiences.slice(0, 2)

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Experiência profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Minha trajetória construindo soluções inovadoras em empresas de
            referência
          </p>
        </div>

        <div className="space-y-8 mb-12">
          {recentExperiences.map((experience, index) => (
            <Card
              key={experience.id}
              className="group hover:border-primary/50 transition-all animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {experience.position}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 text-base font-medium">
                      <MapPin className="h-4 w-4" />
                      {experience.company}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {formatDateRange(experience.startDate, experience.endDate)}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {experience.description}
                </p>

                {experience.achievements && (
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Principais conquistas:</h4>
                    <ul className="space-y-1">
                      {experience.achievements
                        .slice(0, 2)
                        .map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-wrap gap-1">
                  {experience.technologies.slice(0, 6).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                  {experience.technologies.length > 6 && (
                    <Badge
                      variant="secondary"
                      className="text-xs"
                    >
                      +{experience.technologies.length - 6}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
          >
            <Link href="/about">
              Ver currículo completo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

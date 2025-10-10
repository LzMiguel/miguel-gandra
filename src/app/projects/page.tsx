import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { experiences, education, courses, personalInfo } from '@/lib/data'
import { formatDateRange, formatDate } from '@/lib/utils'
import {
  Download,
  MapPin,
  Calendar,
  Award,
  GraduationCap,
  Briefcase,
} from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="py-24">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Sobre mim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {personalInfo.bio}
          </p>
          <Button
            size="lg"
            className="mt-6"
          >
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </Button>
        </div>

        {/* Experience Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Experiência Profissional</h2>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <Card
                key={experience.id}
                className="hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="space-y-2">
                      <CardTitle className="text-xl">
                        {experience.position}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base font-medium">
                        <MapPin className="h-4 w-4" />
                        {experience.company}
                      </CardDescription>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4" />
                      {formatDateRange(
                        experience.startDate,
                        experience.endDate
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {experience.achievements && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-primary">
                        Principais conquistas:
                      </h4>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="text-sm text-muted-foreground flex items-start"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">
                      Tecnologias utilizadas:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Formação Acadêmica</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {education.map((edu, index) => (
              <Card
                key={edu.id}
                className="hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{edu.degree}</CardTitle>
                  <CardDescription>{edu.field}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {edu.institution}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {formatDateRange(edu.startDate, edu.endDate)}
                    </div>
                    {edu.description && (
                      <p className="text-sm text-muted-foreground">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Cursos e Certificações</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card
                key={course.id}
                className="hover:border-primary/50 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{course.name}</CardTitle>
                  <CardDescription className="flex items-center justify-between">
                    <span>{course.provider}</span>
                    <span className="text-xs bg-secondary px-2 py-1 rounded">
                      {formatDate(course.completionDate)}
                    </span>
                  </CardDescription>
                </CardHeader>

                {course.description && (
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {course.description}
                    </p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

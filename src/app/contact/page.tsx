import { Button } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { personalInfo } from '@/lib/data'
import { Mail, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  'Contato',
  'Entre em contato para discutir projetos, colaborações ou oportunidades em desenvolvimento e ciência de dados.',
  '/contact'
)

export default function ContactPage() {
  return (
    <div className="py-24">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Entre em contato</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem algum projeto interessante? Vamos conversar sobre como posso
            ajudar a transformar suas ideias em soluções inovadoras.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Vamos trabalhar juntos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estou sempre interessado em novos desafios e oportunidades de
                colaboração. Se você tem um projeto que precisa de automação,
                análise de dados ou desenvolvimento de soluções personalizadas,
                adoraria ouvir sobre ele.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Localização</p>
                  <p className="text-muted-foreground">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h3 className="font-semibold mb-4">Conecte-se comigo</h3>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                >
                  <a href={`mailto:${personalInfo.email}`}>
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Cards */}
          <div className="space-y-6">
            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  Projetos e Colaborações
                </CardTitle>
                <CardDescription>
                  Interessado em desenvolvimento de soluções personalizadas,
                  automação de processos ou análise de dados.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  asChild
                  className="w-full"
                >
                  <a
                    href={`mailto:${personalInfo.email}?subject=Proposta de Projeto`}
                  >
                    Enviar proposta
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Github className="h-5 w-5 text-primary" />
                  Contribuições Open Source
                </CardTitle>
                <CardDescription>
                  Vamos colaborar em projetos de código aberto ou discutir
                  ideias técnicas interessantes.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  asChild
                  className="w-full"
                >
                  <a
                    href={personalInfo.socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver no GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5 text-primary" />
                  Networking Profissional
                </CardTitle>
                <CardDescription>
                  Conecte-se comigo no LinkedIn para discussões sobre
                  tecnologia, carreira e oportunidades.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="outline"
                  asChild
                  className="w-full"
                >
                  <a
                    href={personalInfo.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Conectar no LinkedIn
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

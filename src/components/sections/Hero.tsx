'use client'

import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { personalInfo } from '@/lib/data'
import Link from 'next/link'

export function HeroSection() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10 opacity-30" />
      </div>

      <div className="container relative z-10 max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-6">
          {/* Avatar placeholder - você pode adicionar sua foto depois */}
          <div className="mx-auto w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <span className="text-4xl font-bold gradient-text">LM</span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge
              variant="outline"
              className="px-4 py-2"
            >
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              Disponível para novos projetos
            </Badge>
          </div>

          {/* Main heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Olá, eu sou <span className="gradient-text">Luiz Miguel</span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              {personalInfo.title}
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            Especializado em{' '}
            <span className="text-primary font-semibold">
              automação de processos
            </span>
            ,
            <span className="text-accent font-semibold">
              {' '}
              análise de riscos
            </span>{' '}
            e
            <span className="text-primary font-semibold">
              {' '}
              desenvolvimento de soluções
            </span>{' '}
            que transformam dados em insights acionáveis para o crescimento dos
            negócios.
          </p>

          {/* Tech stack preview */}
          <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
            {[
              'VBA',
              'Python',
              'Excel',
              'Power BI',
              'Data Science',
              'Risk Analysis',
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="group"
              asChild
            >
              <Link href="/projects">
                Ver meus projetos
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
            >
              <a
                href="/cv-luiz-miguel.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href={personalInfo.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a
                href={personalInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
            >
              <a href={`mailto:${personalInfo.email}`}>
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Rolar para próxima seção"
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}

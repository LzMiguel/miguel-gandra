'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { personalInfo } from '@/lib/data'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Início', href: '/' },
  { name: 'Sobre', href: '/about' },
  { name: 'Projetos', href: '/projects' },
  { name: 'Snippets', href: '/snippets' },
  { name: 'Contato', href: '/contact' },
]

const socialLinks = [
  {
    name: 'GitHub',
    href: personalInfo.socialLinks.github || '#',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    href: personalInfo.socialLinks.linkedin || '#',
    icon: Linkedin,
  },
  { name: 'Email', href: `mailto:${personalInfo.email}`, icon: Mail },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <Link
            href="/"
            className="mr-6 flex items-center space-x-2"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-background font-bold text-sm">LM</span>
            </div>
            <span className="hidden font-bold sm:inline-block gradient-text text-lg">
              Luiz Miguel
            </span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary relative',
                  pathname === item.href
                    ? 'text-primary font-medium after:absolute after:bottom-[-8px] after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                    : 'text-muted-foreground'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link
              href="/"
              className="flex items-center space-x-2 md:hidden"
            >
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-background font-bold text-sm">LM</span>
              </div>
              <span className="font-bold gradient-text">Luiz Miguel</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-2">
            {socialLinks.map((item) => {
              const Icon = item.icon
              return (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="hover:text-primary"
                >
                  <a
                    href={item.href}
                    target={
                      item.href.startsWith('mailto:') ? '_self' : '_blank'
                    }
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{item.name}</span>
                  </a>
                </Button>
              )
            })}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="border-b md:hidden animate-fade-in">
          <nav className="flex flex-col gap-4 p-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'transition-colors hover:text-primary text-lg',
                  pathname === item.href
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground'
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-6 border-t">
              {socialLinks.map((item) => {
                const Icon = item.icon
                return (
                  <Button
                    key={item.name}
                    variant="ghost"
                    size="icon"
                    asChild
                  >
                    <a
                      href={item.href}
                      target={
                        item.href.startsWith('mailto:') ? '_self' : '_blank'
                      }
                      rel="noopener noreferrer"
                    >
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  </Button>
                )
              })}
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}

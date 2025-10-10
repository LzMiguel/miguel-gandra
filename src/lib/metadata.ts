import type { Metadata } from 'next'
import { personalInfo } from './data'

export const defaultMetadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio,
  keywords: [
    'desenvolvedor',
    'cientista de dados',
    'VBA',
    'Excel',
    'Python',
    'automação',
    'análise de riscos',
    'portfolio',
    'Power BI',
    'data science',
    'business intelligence',
  ],
  authors: [{ name: personalInfo.name, url: personalInfo.socialLinks.github }],
  creator: personalInfo.name,
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://luizmiguel-portfolio.vercel.app',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    siteName: `Portfolio - ${personalInfo.name}`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export function generatePageMetadata(
  title: string,
  description?: string,
  path?: string
): Metadata {
  return {
    title,
    description: description || personalInfo.bio,
    openGraph: {
      title: `${title} | ${personalInfo.name}`,
      description: description || personalInfo.bio,
      url: `https://luizmiguel-portfolio.vercel.app${path || ''}`,
    },
    twitter: {
      title: `${title} | ${personalInfo.name}`,
      description: description || personalInfo.bio,
    },
  }
}

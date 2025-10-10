import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Miguel Gandra - Desenvolvedor & Cientista de Dados',
  description:
    'Portfolio pessoal de Miguel Gandra, desenvolvedor e cientista de dados especializado em soluções inovadoras e automação de processos.',
  keywords: [
    'desenvolvedor',
    'cientista de dados',
    'VBA',
    'programação',
    'data science',
    'automação de processos',
  ],
  authors: [{ name: 'Miguel Gandra' }],
  creator: 'Miguel Gandra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="pt-BR"
      className="dark"
    >
      <body className={jetbrainsMono.className}>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { generatePageMetadata } from '@/lib/metadata'

export const metadata: Metadata = generatePageMetadata(
  'Code Snippets',
  'Uma coleção de trechos de código úteis em VBA, Python e outras tecnologias, testados e prontos para uso.',
  '/snippets'
)

export default function SnippetsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

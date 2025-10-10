'use client'

import { useState } from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { CodeBlock } from '@/components/ui/CodeBlock'
import { codeSnippets } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { Code, Calendar, Tag, Search } from 'lucide-react'

export function SnippetsClient() {
  const [selectedSnippet, setSelectedSnippet] = useState<string | null>(null)
  const [filter, setFilter] = useState<string>('')

  const allTags = Array.from(
    new Set(codeSnippets.flatMap((snippet) => snippet.tags))
  )

  const filteredSnippets = codeSnippets.filter(
    (snippet) =>
      filter === '' ||
      snippet.tags.includes(filter) ||
      snippet.title.toLowerCase().includes(filter.toLowerCase()) ||
      snippet.language.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div className="py-24">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">Code Snippets</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma coleção de trechos de código úteis e soluções que desenvolvi ao
            longo da minha carreira.
          </p>
        </div>

        <div className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Button
              variant={filter === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setFilter('')}
            >
              Todos
            </Button>
            {allTags.map((tag) => (
              <Button
                key={tag}
                variant={filter === tag ? 'default' : 'outline'}
                size="sm"
                onClick={() => setFilter(tag)}
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredSnippets.map((snippet, index) => (
            <Card
              key={snippet.id}
              className="group hover:border-primary/50 transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {snippet.title}
                    </CardTitle>
                  </div>
                  <Badge
                    variant="outline"
                    className="text-xs"
                  >
                    {snippet.language.toUpperCase()}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">
                  {snippet.description}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {formatDate(snippet.createdAt)}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {snippet.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs cursor-pointer hover:bg-primary/20"
                        onClick={() => setFilter(tag)}
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() =>
                        setSelectedSnippet(
                          selectedSnippet === snippet.id ? null : snippet.id
                        )
                      }
                      className="w-full"
                    >
                      {selectedSnippet === snippet.id
                        ? 'Ocultar código'
                        : 'Ver código'}
                    </Button>

                    {selectedSnippet === snippet.id && (
                      <div className="animate-fade-in">
                        <CodeBlock
                          code={snippet.code}
                          language={snippet.language}
                          title={snippet.title}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredSnippets.length === 0 && (
          <div className="text-center py-12">
            <Search className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              Nenhum snippet encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou procurar por outros termos.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

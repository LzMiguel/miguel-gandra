export interface Experience {
  id: string
  company: string
  position: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  achievements?: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startDate: string
  endDate?: string
  description?: string
}

export interface Course {
  id: string
  name: string
  provider: string
  completionDate: string
  certificateUrl?: string
  description?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
}

export interface CodeSnippet {
  id: string
  title: string
  description: string
  language: string
  code: string
  tags: string[]
  createdAt: string
}

export interface PersonalInfo {
  name: string
  title: string
  email: string
  location: string
  bio: string
  avatar?: string
  socialLinks: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
  }
}

import { HeroSection } from '@/components/sections/Hero'
import { AboutSection } from '@/components/sections/About'
import { ProjectsPreview } from '@/components/sections/ProjectsPreview'
import { ExperiencePreview } from '@/components/sections/ExperiencePreview'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExperiencePreview />
      <ProjectsPreview />
    </>
  )
}

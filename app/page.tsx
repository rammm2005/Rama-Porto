import { Hero } from "@/components/pages/hero"
import { Projects } from "@/components/pages/projects"
import { Skills } from "@/components/pages/skills"
import { Stats } from "@/components/pages/stats"
import { Contact } from "@/components/pages/contact"

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Stats />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}


import { Hero } from "@/components/pages/hero"
import { Projects } from "@/components/pages/projects"
import { Skills } from "@/components/pages/skills"
import { Stats } from "@/components/pages/stats"
import { Contact } from "@/components/pages/contact"
import { MyAchievements } from "@/components/pages/achiments"

export async function generateMetadata({ }) {
  const domain = process.env.DOMAIN || 'https://rama-porto.vercel.app/';

  return {
    authors: [{ name: 'I Putu Rama Dita', email: 'ditarama985@gmail.com' }],
    title: 'Protofolio App - Rama Dita',
    description: 'Portofolio resmi Rama Dita, seorang Software Engineer dan Web Developer berpengalaman. Spesialisasi dalam pengembangan aplikasi web modern, desain responsif, dan solusi berbasis teknologi yang inovatif.',
    keywords: 'protofolio ramadita, software engineer, web developer, pengembang web, teknologi, desain responsif, aplikasi modern, frontend, backend, full stack developer',
    alternates: {
      canonical: `${domain}`
    },
    verification: {
      google: 'IPke39NX4YK4yn4RnsMtR39IbY6pHOZcN8Gnq00Z_Tg'
    }
  };
}

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Stats />
      <MyAchievements />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}


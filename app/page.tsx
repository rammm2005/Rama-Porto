import { Hero } from "@/components/pages/hero"
import { Projects } from "@/components/pages/projects"
import { Skills } from "@/components/pages/skills"
import { Stats } from "@/components/pages/stats"
import { Contact } from "@/components/pages/contact"
import { MyAchievements } from "@/components/pages/achiments"
import type { Metadata } from "next"

export const generateMetadata = async (): Promise<Metadata> => {
  const domain = process.env.DOMAIN || "https://www.rama-dev.tech";
  const title = "Portfolio Rama Dita | Software Engineer & Web Developer";
  const description =
    "Portofolio resmi Rama Dita, seorang Software Engineer dan Web Developer berpengalaman. Spesialisasi dalam aplikasi web modern, desain responsif, frontend, backend, dan solusi full stack inovatif.";

  return {
    metadataBase: new URL(domain),
    authors: [{ name: "I Putu Rama Dita", url: domain }],
    title,
    description,
    keywords: [
      "Rama Dita",
      "Portfolio Rama",
      "Portofolio Rama",
      "Rama",
      "Rama Software Engineer",
      "Rama Web Developer",
      "Portofolio Web Rama",
      "Software Engineer Indonesia",
      "Web Developer",
      "Web 3 Developer",
      "Blockchain Developer",
      "AI Trainer",
      "AI Engineer",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
      "Aplikasi Web Modern",
      "Desain Responsif",
    ],
    alternates: {
      canonical: domain,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      type: "website",
      url: domain,
      title,
      description,
      siteName: "Rama Dita Portfolio",
      images: [
        {
          url: `${domain}/profile/profile-me.jpg?v=2.2`,
          width: 1200,
          height: 630,
          alt: "Portfolio Rama Dita",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${domain}/profile/profile-me.jpg?v=2.2`],
      creator: "@RamaDit22",
    },
  };
};

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <div className="mt-32 md:mt-20 sm:mt-40">
        <Stats />
      </div>
      <MyAchievements />
      <Skills />
      <Projects />
      <Contact />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "I Putu Rama Dita",
            url: "https://www.rama-dev.tech",
            sameAs: [
              "https://github.com/rammm2005",
              "https://www.linkedin.com/in/rama-dita-486a6b249/",
              "https://x.com/RamaDit22",
            ],
            jobTitle: "Software Engineer & Web Developer",
            worksFor: {
              "@type": "Organization",
              name: "Freelance / Remote",
            },
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.rama-dev.tech/?s={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
    </main>
  );
}

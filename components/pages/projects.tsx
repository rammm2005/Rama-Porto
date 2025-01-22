"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"

const Icon: Record<string, string> = {
    React: "/lang/react.svg",
    "Next.js": "/lang/next-js.svg",
    TypeScript: "/lang/typescript.svg",
    TailwindCSS: "/lang/tailwindcss.svg",
    "Framer Motion": "/lang/framer.svg",
    "Date Fns": "/lang/date.svg",
    Javascript: "/lang/javascript.svg",
    PHP: "/lang/php.svg",
    JQuery: "/lang/jquery.svg",
    HTML5: "/lang/html5.svg",
    CSS3: "/lang/css3.svg",
    "Node.js": "/lang/node-js.svg",
    Express: "/lang/express.svg",
    PostgreSQL: "/lang/postgresql.svg",
    MongoDB: "/lang/mongodb.svg",
    Kotlin: "/lang/kotlin.svg",
    "REST API": "/lang/api.svg",
    Mysql: "/lang/mysql.svg",
    Laravel: "/lang/laravel.svg",
    Git: "/lang/git.svg",
    "VS Code": "/lang/vs-code.svg",
    Figma: "/lang/figma.svg",
    "Simple Agile Methods": "/lang/agile.svg",
};

const projects = [
    {
        title: "Population Management Mobile Application",
        description: "Population Management and Dues Collection in Bali's Traditional Villages.",
        tags: ["Kotlin", "Laravel", "Mysql", "REST API"],
        image: "/mobile-app/pendataan-warga.jpg",
        github: "#",
        status: 'progress',
        source_code: false,
        demo_url: false,
        demo: "#",
    },
    {
        title: "E-commerce Platform for Semmaga Business",
        description: "Simple Modern e-commerce solution with PHP",
        tags: ["PHP", "Mysql", "JQuery", "TailwindCSS"],
        image: "/web-app/semaaga.png",
        github: "#",
        status: 'publish',
        source_code: false,
        demo_url: false,
        demo: "#",
    },
    {
        title: "Static Travel websites in Indonesia",
        description: "Travel website that provides cool and interesting features for users",
        tags: ["React", "SWIPER JS", "Date Fns", "TailwindCSS"],
        image: "/web-app/landingpage-tour.jpg",
        github: "#",
        status: 'publish',
        source_code: true,
        demo_url: true,
        demo: "https://web-lomba-pnb-2.vercel.app/",
    },
    {
        title: "Data Visualization from Spreadsheet",
        description: "Data visualization from spreadsheets using Google Sheet API and Next js technology",
        tags: ["Next.js", "Shadcn UI", "Google Sheet API", "Chart JS", "Zod"],
        image: "/web-app/auto-visualition-data.png",
        github: "#",
        source_code: true,
        demo_url: true,
        status: 'publish',
        demo: "https://data-visualitation-challenge.vercel.app/",
    },
    {
        title: "Freelancer Static Website gets First Winner on ITCC 2023",
        description: "Static freelancer website that supports Digital Transformation supports the creativity of the younger generation to realize Indonesia 2045",
        tags: ["HTML5", "CSS3", "JQuery", "Animation Js"],
        image: "/web-app/workpal-landingpage.jpg",
        github: "#",
        status: 'publish',
        demo: "https://work-pal-testing-unit.vercel.app/",
        source_code: true,
        demo_url: true,
    },
    {
        title: "Modern Eccommers Static Website get Third Winner on IDB Campus",
        description: "This award-winning static e-commerce website supports Balinese MSMEs by leveraging HTML5, CSS3, and JavaScript to expand their market reach and boost competitiveness.",
        tags: ["HTML5", "CSS3", "Javascript"],
        image: "/web-app/clothink-landingpage.jpg",
        status: 'publish',
        github: "#",
        source_code: true,
        demo_url: true,
        demo: "https://clothink-view.vercel.app/",
    },
]

export function Projects() {
    return (
        <section id="projects" className="container py-24 space-y-8 px-4">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover some of my best work. Each project represents unique challenges
                    and innovative solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="overflow-hidden group">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={100}
                                    height={100}
                                    className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription>{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary" className="flex items-center gap-2">
                                            {Icon[tag] && (
                                                <Image
                                                    src={Icon[tag]}
                                                    alt={tag}
                                                    width={16}
                                                    height={16}
                                                    className="inline-block"
                                                />
                                            )}
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="w-full flex flex-row items-center gap-2"
                                        disabled={!project.source_code}
                                    >
                                        {project.source_code ? (
                                            <a href={project.github} target="_blank" className="flex flex-row items-center gap-2" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        ) : (
                                            <>
                                                <Github className="w-4 h-4 mr-2" />
                                                Unavailable
                                            </>
                                        )}
                                    </Button>
                                    <Button
                                        size="sm"
                                        className="w-full flex items-center gap-2"
                                        disabled={!project.demo_url}
                                        variant="default"
                                    >
                                        {project.demo_url ? (
                                            <a href={project.demo} target="_blank" className="flex flex-row items-center gap-2" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Demo
                                            </a>
                                        ) : (
                                            <>
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                Unavailable
                                            </>
                                        )}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

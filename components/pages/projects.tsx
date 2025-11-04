"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
    Retrovit: "/lang/retrovit.svg",
    "REST API": "/lang/api.svg",
    Mysql: "/lang/mysql.svg",
    Laravel: "/lang/laravel.svg",
    Git: "/lang/git.svg",
    MaterialDesign: "/lang/material-design.svg",
    "VS Code": "/lang/vs-code.svg",
    Figma: "/lang/figma.svg",
    "Simple Agile Methods": "/lang/agile.svg",
    "Python": "/lang/python-svgrepo-com.svg",
    "TelegramBotAPI": "/lang/telegram-svgrepo-com.svg",
    "Cybersecurity": "/lang/cybersecurity-two-tone-svgrepo-com.svg",
    "SWIPER JS": "/lang/swiper.png",
    "Google Sheet API": "/lang/spreadsheet.svg",
    "Chart JS": "/lang/chart-js.svg",
    Zod: "/lang/zod.svg",
    "Shadcn UI": "/lang/shadcn-ui.png",
    "Animation Js": "/lang/d2bPk.gif",
}


const projects = [
    {
        title: "Population Management Mobile Application",
        description: "Population Management and Dues Collection in Bali's Traditional Villages.",
        tags: ["Kotlin", "Laravel", "Mysql", "REST API"],
        image: "/mobile-app/pendataan-warga.jpg",
        github: "#",
        status: 'done',
        source_code: false,
        demo_url: false,
        category: "Mobile App",
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
        category: "Web Development",
        demo: "#",
    },
    {
        title: "Static Travel websites in Indonesia",
        description: "Travel website that provides cool and interesting features for users",
        tags: ["React", "SWIPER JS", "Date Fns", "TailwindCSS"],
        image: "/web-app/landingpage-tour.jpg",
        github: "https://github.com/rammm2005/Travel-Ina",
        status: 'publish',
        source_code: true,
        demo_url: true,
        category: "Web Development",
        demo: "https://web-lomba-pnb-2.vercel.app/",
    },

    {
        "title": "Portfolio Website Templates",
        "description": "Portfolio website for designers to showcase their work with modern UI, responsive design, and interactive features.",
        "tags": ["React", "SWIPER JS", "Date Fns", "TailwindCSS"],
        "image": "/web-app/porto-designer.png",
        "github": "https://github.com/rammm2005/Techart",
        "status": "publish",
        "source_code": true,
        "demo_url": true,
        "category": "Web Development",
        "demo": "https://techart.vercel.app/"
    },
    {
        title: "Tictactoe Game that",
        description: "A fun and interactive Tic-Tac-Toe game built with Javascript and Plain CSS.",
        tags: ["Javascript", "CSS3"],
        image: "/game/ticatactoe.png",
        github: "#",
        status: "publish",
        source_code: true,
        demo_url: true,
        category: "Game Development",
        demo: "https://game-kill-the-bird.vercel.app/"
    },

    {
        title: "Kill the Bird in the Air",
        description: "An exciting game where players must shoot birds flying in the sky.",
        tags: ["HTML5", "CSS3"],
        image: "/game/kill-bird.png",
        github: "#",
        status: "publish",
        source_code: true,
        demo_url: true,
        category: "Game Development",
        demo: "https://game-kill-the-bird.vercel.app/killbird.html"
    },
    {
        title: "Data Visualization from Spreadsheet",
        description: "Data visualization from spreadsheets using Google Sheet API and Next js technology",
        tags: ["Next.js", "Shadcn UI", "Google Sheet API", "Chart JS", "Zod"],
        image: "/web-app/auto-visualition-data.png",
        github: "https://github.com/rammm2005/Data-Visualitation-Challenge",
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
        github: "https://github.com/rammm2005/WorkPal-Testing-Unit",
        status: 'publish',
        demo: "https://work-pal-testing-unit.vercel.app/",
        source_code: true,
        demo_url: true,
        category: "Web Development",
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
        category: "Web Development",
        demo: "https://clothink-view.vercel.app/",
    },
    {
        title: "Modern Daily Me Tracking App for Young people to keep a healthy life",
        description: "Modern Daily Me adalah aplikasi mobile modern berbasis Kotlin yang dirancang khusus untuk membantu anak muda menjaga gaya hidup sehat dengan cara yang fun, mudah, dan personal. Aplikasi ini memungkinkan pengguna melacak aktivitas harian mereka seperti olahraga, tidur, mood, pola makan, air minum, dan produktivitas untuk membangun kebiasaan positif.",
        tags: ["MongoDB", "Kotlin", "Retrovit", "MaterialDesign"],
        image: "/mobile-app/Bold Sale Brand Website Homepage Banner.png",
        status: 'publish',
        github: "https://github.com/rammm2005/daily_life_tracking_app",
        source_code: true,
        demo_url: true,
        category: "Mobile App",
        demo: "#",
    },
    {
        "title": "Kiddygoo Real-time Child Monitoring And Cyberbullying Prevention",
        "description": "Kiddygoo is a secure, real-time child monitoring and cyberbullying prevention web application built with Next.js, Supabase, and Vercel. It allows parents to track their children's locations, manage safe zones, and detect potential online bullying behavior with a modern and intuitive interface.",
        "tags": ["Next.js", "Supabase", "Cybersecurity", "Child Safety", "Realtime App"],
        "image": "/web-app/dashboard-kiddy-1.jpg?v=1",
        "status": "publish",
        "source_code": false,
        "demo_url": true,
        "category": "Child Safety Platform",
        "demo": "https://kiddygoo.my.id/"
    }
]

export function Projects() {
    return (
        <section id="projects" className="container py-24 space-y-8 px-4">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Featured Projects</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover some of my best work. Each project represents unique challenges and innovative solutions.
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
                        <Link href={`/projects/${project.title.toLowerCase().replace(/\s+/g, "-")}`}>
                            <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                                    <Image
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        quality={95}
                                    />
                                    {/* Overlay with category badge */}
                                    <div className="absolute top-4 left-4">
                                        <Badge variant="secondary" className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm">
                                            {project.category}
                                        </Badge>
                                    </div>

                                    {/* Status badge */}
                                    <div className="absolute top-4 right-4">
                                        <Badge
                                            className={
                                                project.status === "publish"
                                                    ? "bg-green-500/90 hover:bg-green-500 text-white"
                                                    : "bg-blue-500/90 hover:bg-blue-500 text-white"
                                            }
                                        >
                                            {project.status === "publish" ? "Completed" : "In Progress"}
                                        </Badge>
                                    </div>
                                    {/* Gradient overlay for better text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content Container */}
                                <div className="flex flex-col flex-grow">
                                    <CardHeader className="flex-grow">
                                        <CardTitle className="line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                                    </CardHeader>

                                    <CardContent className="space-y-4 pt-0">
                                        {/* Tech Stack Tags */}
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.slice(0, 4).map((tag) => (
                                                <Badge
                                                    key={tag}
                                                    variant="outline"
                                                    className="flex items-center gap-1.5 text-xs hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                                                >
                                                    {Icon[tag] && (
                                                        <Image
                                                            src={Icon[tag] || "/placeholder.svg"}
                                                            alt={tag}
                                                            width={14}
                                                            height={14}
                                                            className="inline-block"
                                                        />
                                                    )}
                                                    {tag}
                                                </Badge>
                                            ))}
                                            {project.tags.length > 4 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{project.tags.length - 4} more
                                                </Badge>
                                            )}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-2 pt-2">
                                            <Button
                                                size="sm"
                                                variant="outline"
                                                className="flex-1 h-9"
                                                disabled={!project.source_code}
                                                onClick={(e) => {
                                                    if (project.source_code) {
                                                        e.preventDefault()
                                                        window.open(project.github, "_blank")
                                                    }
                                                }}
                                            >
                                                <Github className="w-4 h-4 mr-1.5" />
                                                {project.source_code ? "Code" : "Private"}
                                            </Button>
                                            <Button
                                                size="sm"
                                                className="flex-1 h-9"
                                                disabled={!project.demo_url}
                                                onClick={(e) => {
                                                    if (project.demo_url) {
                                                        e.preventDefault()
                                                        window.open(project.demo, "_blank")
                                                    }
                                                }}
                                            >
                                                <ExternalLink className="w-4 h-4 mr-1.5" />
                                                {project.demo_url ? "Demo" : "Soon"}
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </Card>
                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

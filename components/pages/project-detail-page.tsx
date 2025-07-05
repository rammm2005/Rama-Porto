"use client"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Separator } from "@/components/ui/separator"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    ArrowLeft,
    ChevronLeft,
    ChevronRight,
    Github,
    Globe,
    Code,
    Smartphone,
    Monitor,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Project } from "@/lib/data"

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
    "SWIPER JS": "/lang/swiper.png",
    "Google Sheet API": "/lang/spreadsheet.svg",
    "Chart JS": "/lang/chart-js.svg",
    Zod: "/lang/zod.svg",
    "Shadcn UI": "/lang/shadcn-ui.png",
    "Animation Js": "/lang/d2bPk.gif",
}


interface Props {
    project: Project
}

export default function ProjectDetailPage({ project }: Props) {
    const [activeImage, setActiveImage] = useState(0)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    // console.log('image', project.images)

    const getStatusColor = (status: string) => {
        switch (status) {
            case "publish":
                return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
            case "progress":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
        }
    }

    const getCategoryIcon = (category: string) => {
        switch (category) {
            case "Mobile Development":
                return <Smartphone className="w-5 h-5" />
            case "Web Development":
                return <Monitor className="w-5 h-5" />
            default:
                return <Code className="w-5 h-5" />
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b">
                <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                    <Button variant="ghost" asChild className="group">
                        <Link href="/#projects">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Projects
                        </Link>
                    </Button>
                    <div className="flex gap-2">
                        {project.sourceCode && (
                            <Button variant="outline" size="sm" asChild>
                                <Link href={project.github} target="_blank" className="flex items-center gap-1">
                                    <Github className="w-4 h-4" />
                                    <span className="hidden sm:inline">GitHub</span>
                                </Link>
                            </Button>
                        )}
                        {project.demoUrl && (
                            <Button size="sm" asChild>
                                <Link href={project.demo} target="_blank" className="flex items-center gap-1">
                                    <Globe className="w-4 h-4" />
                                    <span className="hidden sm:inline">Live Demo</span>
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            <section className={`py-20 px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                <div className="max-w-6xl mx-auto text-center space-y-8">
                    <div className="space-y-4">
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <Badge className={`${getStatusColor(project.status)} flex items-center gap-2`}>
                                {getCategoryIcon(project.category)}
                                {project.category}
                            </Badge>
                            <Badge variant="outline" className="capitalize">
                                {project.status === "publish" ? "Completed" : "In Progress"}
                            </Badge>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            {project.title}
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            {project.longDescription}
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="px-4 py-2 text-sm flex items-center gap-2">
                                {Icon[tag] && (
                                    <Image src={Icon[tag]} alt={tag} width={16} height={16} className="inline-block" />
                                )}
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
            </section>

            {project.images.length > 0 && (
                <section className="px-4 space-y-6">
                    <div className="max-w-4xl mx-auto flex items-center justify-center relative gap-4">
                        {project.images.length > 1 && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="self-center"
                                onClick={() =>
                                    setActiveImage((prev) =>
                                        prev === 0 ? project.images.length - 1 : prev - 1
                                    )
                                }
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </Button>
                        )}

                        <div className="rounded-xl overflow-hidden">
                            <Image
                                src={project.images[activeImage]}
                                alt={`${project.title} screenshot`}
                                width={1200}
                                height={600}
                                className="rounded-xl object-cover"
                            />
                        </div>

                        {project.images.length > 1 && (
                            <Button
                                variant="ghost"
                                size="icon"
                                className="self-center"
                                onClick={() =>
                                    setActiveImage((prev) =>
                                        prev === project.images.length - 1 ? 0 : prev + 1
                                    )
                                }
                            >
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        )}
                    </div>
                    {project.images.length > 1 && (
                        <div className="max-w-4xl mx-auto overflow-x-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
                            <div className="flex gap-3 w-max px-1">
                                {project.images.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`rounded-md overflow-hidden border-2 transition-colors duration-200 ${activeImage === index
                                            ? "border-blue-500"
                                            : "border-transparent hover:border-gray-300 dark:hover:border-gray-500"
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Thumbnail ${index + 1}`}
                                            width={120}
                                            height={80}
                                            className="object-cover w-[120px] h-[80px]"
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </section>
            )}



            {/* CTA */}
            <section className="text-center py-16">
                <h2 className="text-3xl font-bold mb-4">Interested in Working Together?</h2>
                <p className="text-muted-foreground max-w-xl mx-auto mb-6">
                    I’d love to help bring your project ideas to life. Let’s discuss how we can work together to create something amazing.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg">Start a Project</Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/#contact">Contact Me</Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
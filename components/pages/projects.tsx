"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { ExternalLink, Github } from 'lucide-react'
import Image from "next/image"

const projects = [
    {
        title: "Project Management App",
        description: "A full-stack application for managing projects and teams",
        tags: ["React", "Node.js", "PostgreSQL", "TypeScript"],
        image: "/placeholder.svg?height=300&width=400",
        github: "#",
        demo: "#",
    },
    {
        title: "E-commerce Platform",
        description: "Modern e-commerce solution with real-time inventory",
        tags: ["Next.js", "Prisma", "Stripe", "TailwindCSS"],
        image: "/placeholder.svg?height=300&width=400",
        github: "#",
        demo: "#",
    },
    {
        title: "AI Writing Assistant",
        description: "AI-powered writing tool for content creators",
        tags: ["Python", "OpenAI", "FastAPI", "React"],
        image: "/placeholder.svg?height=300&width=400",
        github: "#",
        demo: "#",
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
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-2">
                                    <Button size="sm" variant="outline" className="w-full">
                                        <Github className="w-4 h-4 mr-2" />
                                        Code
                                    </Button>
                                    <Button size="sm" className="w-full">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Demo
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


"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Badge } from "../ui/badge"

const skillCategories = [
    {
        title: "Frontend Development",
        description: "Creating responsive and interactive user interfaces",
        skills: [
            "React", "Next.js", "TypeScript", "TailwindCSS",
            "Redux", "Framer Motion", "HTML5", "CSS3"
        ]
    },
    {
        title: "Backend Development",
        description: "Building scalable server-side applications",
        skills: [
            "Node.js", "Express", "PostgreSQL", "MongoDB",
            "GraphQL", "REST APIs", "Docker", "AWS"
        ]
    },
    {
        title: "Tools & Methods",
        description: "Professional development tools and practices",
        skills: [
            "Git", "GitHub Actions", "Jest", "Cypress",
            "Agile", "CI/CD", "VS Code", "Figma"
        ]
    }
]

export function Skills() {
    return (
        <section id="skills" className="container py-24 space-y-8 px-4">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Skills & Expertise</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive overview of my technical skills and areas of expertise
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => (
                    <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <Card className="h-full">
                            <CardHeader>
                                <CardTitle>{category.title}</CardTitle>
                                <CardDescription>{category.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill) => (
                                        <Badge key={skill} variant="secondary">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}


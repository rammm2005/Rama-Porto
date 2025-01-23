"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Code2, Server, Wrench } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const skillIcons: Record<string, string> = {
    React: "/lang/react.svg",
    "Next.js": "/lang/next-js.svg",
    TypeScript: "/lang/typescript.svg",
    TailwindCSS: "/lang/tailwindcss.svg",
    "Framer Motion": "/lang/framer.svg",
    HTML5: "/lang/html5.svg",
    CSS3: "/lang/css3.svg",
    "Node.js": "/lang/node-js.svg",
    Express: "/lang/express.svg",
    PostgreSQL: "/lang/postgresql.svg",
    MongoDB: "/lang/mongodb.svg",
    "REST APIs": "/lang/api.svg",
    Mysql: "/lang/mysql.svg",
    Laravel: "/lang/laravel.svg",
    Git: "/lang/git.svg",
    "VS Code": "/lang/vs-code.svg",
    Figma: "/lang/figma.svg",
    "Agile Software Development": "/lang/agile.svg",
};

const skillCategories = [
    {
        title: "Frontend Development",
        description: "Creating responsive and interactive user interfaces",
        skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "HTML5", "CSS3"],
        icon: Code2,
    },
    {
        title: "Backend Development",
        description: "Building scalable server-side applications",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "Mysql", "Laravel"],
        icon: Server,
    },
    {
        title: "Tools & Methods",
        description: "Professional development tools and practices",
        skills: ["Git", "VS Code", "Figma", "Agile Software Development"],
        icon: Wrench,
    },
];

export function Skills() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    return (
        <section id="skills" className="container py-24 space-y-8 px-4">
            <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Skills & Expertise</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                    A comprehensive overview of my technical skills and areas of expertise
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skillCategories.map((category, index) => {
                    const isExpanded = expandedIndex === index;
                    const Icon = category.icon;

                    return (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                        >
                            <Card
                                className={`h-full cursor-pointer transition-all duration-300 ${isExpanded ? "bg-primary text-primary-foreground" : ""
                                    }`}
                            >
                                <CardHeader>
                                    <div className="flex items-center space-x-2">
                                        <Icon
                                            className={`w-6 h-6 ${isExpanded ? "text-primary-foreground" : "text-primary"
                                                }`}
                                        />
                                        <CardTitle>{category.title}</CardTitle>
                                    </div>
                                    <CardDescription
                                        className={isExpanded ? "text-primary-foreground/70" : ""}
                                    >
                                        {category.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <motion.div
                                        className="flex flex-wrap gap-2"
                                        initial={false}
                                        animate={{ height:  "auto" }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {category.skills.map((skill) => (
                                            <Badge
                                                key={skill}
                                                variant={isExpanded ? "outline" : "secondary"}
                                                className={`flex items-center gap-2 ${isExpanded ? "bg-primary-foreground text-primary" : ""
                                                    }`}
                                            >
                                                {skillIcons[skill] && (
                                                    <Image
                                                        src={skillIcons[skill]}
                                                        alt={`${skill} icon`}
                                                        width={16} height={16}
                                                        className="w-4 h-4"
                                                    />
                                                )}
                                                {skill}
                                            </Badge>
                                        ))}
                                    </motion.div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}

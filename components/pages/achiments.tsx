'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface Achievement {
    id: number
    title: string
    description: string
    icon: 'trophy' | 'award' | 'star'
    category: string
    image: string
}

const achievements: Achievement[] = [
    {
        id: 1,
        title: "First Place in Web Design Competion ITCC 2023",
        description: "Won first place in 1 month of preparation to create a website themed “Freelancer” ",
        icon: "trophy",
        category: "Competition",
        image: "/prestasi/1-place-universitas-udayana.jpg"
    },
    {
        id: 2,
        title: "Third Place in Web Design Competion ITCC 2022",
        description: "Pemilihan Mahasiswa berprestasi program studi teknologin Informasi tahun 2024 ",
        icon: "trophy",
        category: "Competition",
        image: "/prestasi/3-place-universitas-bali-internasional.jpg"
    },
    {
        id: 3,
        title: "Second Place in Pilmapres Technology Information 2024",
        description: "After 2 Weeks of preparation to create a website themed “Eccommers Website” ",
        icon: "trophy",
        category: "Competition",
        image: "/prestasi/2-pilmapres.jpg"
    },
    {
        id: 4,
        title: "Tech Talk Speaker “Slicing Portopholio Website With React JS and TailwindCSS”",
        description: "Live coding creating a static website with react and using simple react hooks",
        icon: "star",
        category: "Speaking",
        image: "/speaker/speaker-Workshop-Techart.png"
    },
    {
        id: 5,
        title: "Awarded the Most Competent Student in Software Engineering",
        description: "Competent student award in senior high school by completing the exam with the best title",
        icon: "award",
        category: "Awards",
        image: "/prestasi/sertifikat-kompeten-smk.jpg"
    },

    {
        id: 6,
        title: "PUBG Mobile Competition Branch Coordinator",
        description: "Coordinator of PUBG Mobile Competition in the study program.",
        icon: "star",
        category: "Organization",
        image: "/organisasi/sporti-pubg.jpg"
    },
    {
        id: 7,
        title: "Assistant Lecturer Basic programming algorithms",
        description: "Mentoring more than 7 students to learn and understand basic programming algorithms and complete 5 case study modules.",
        icon: "trophy",
        category: "Awards",
        image: "/experience/asdos-alprog.jpg"
    },
    {
        id: 8,
        title: "Internship Certificate PT Foxbyte Global Inovasi",
        description: "Internship as a Fullstack developer using laravel to develop a website with a team and develop skills in teamwork.",
        icon: "trophy",
        category: "Awards",
        image: "/experience/foxbyte-intern.jpg"
    },
]

const iconComponents = {
    trophy: Trophy,
    award: Award,
    star: Star,
}

export function MyAchievements() {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

    const clearFilter = () => setSelectedCategory(null)

    const filteredAchievements = selectedCategory
        ? achievements.filter(achievement => achievement.category === selectedCategory)
        : achievements

    const categories = Array.from(new Set(achievements.map(a => a.category)))

    return (

        <>
            <section className="py-12 px-4 max-w-6xl mx-auto">

                <h2 className="text-3xl font-bold mb-8 text-center">My Achievements</h2>

                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {categories.map(category => (
                        <Badge
                            key={category}
                            variant={selectedCategory === category ? "default" : "outline"}
                            className="cursor-pointer"
                            onClick={() => setSelectedCategory(prev => prev === category ? null : category)}
                        >
                            {category}
                        </Badge>
                    ))}
                    {selectedCategory && (
                        <Button variant="destructive" size="sm" onClick={clearFilter}>
                            <Trash2 />
                            Clear All
                        </Button>
                    )}
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    layout
                >
                    {filteredAchievements.map((achievement) => {
                        const IconComponent = iconComponents[achievement.icon]
                        return (
                            <motion.div
                                key={achievement.id}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Card className="overflow-hidden">
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <CardHeader>
                                        <div className="flex items-center justify-between mb-2">
                                            <Badge>{achievement.category}</Badge>
                                            <IconComponent className="h-6 w-6 text-primary" />
                                        </div>
                                        <CardTitle>{achievement.title}</CardTitle>
                                        <CardDescription>{achievement.description}</CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </section>
        </>
    )
}


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Award, Star } from 'lucide-react'
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
        title: "First Place in Hackathon",
        description: "Won first place in a 48-hour coding challenge",
        icon: "trophy",
        category: "Competition",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        id: 2,
        title: "Open Source Contributor",
        description: "Contributed to 5+ popular open source projects",
        icon: "award",
        category: "Community",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        id: 3,
        title: "Tech Talk Speaker",
        description: "Delivered a talk on AI in web development at a major conference",
        icon: "star",
        category: "Speaking",
        image: "/placeholder.svg?height=200&width=300"
    },
    // Add more achievements as needed
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
                    <Button variant="ghost" size="sm" onClick={clearFilter}>
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
    )
}


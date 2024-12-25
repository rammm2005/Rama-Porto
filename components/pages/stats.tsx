"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "../ui/card"
import { Trophy, Code2, Users, Star } from 'lucide-react'

const stats = [
    {
        title: "Projects Completed",
        value: "50+",
        icon: Trophy,
        description: "Successfully delivered projects",
    },
    {
        title: "Lines of Code",
        value: "100K+",
        icon: Code2,
        description: "Written with precision",
    },
    {
        title: "Happy Clients",
        value: "30+",
        icon: Users,
        description: "Across different industries",
    },
    {
        title: "GitHub Stars",
        value: "1.2K",
        icon: Star,
        description: "Open source contributions",
    },
]

export function Stats() {
    return (
        <>
            <section className="container py-24 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <Card>
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <stat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-bold mb-1">{stat.value}</div>
                                        <div className="text-sm text-muted-foreground">{stat.description}</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>

    )
}


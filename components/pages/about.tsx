import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

const skills = [
    "React", "Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "AWS", "Docker"
]

export default function About() {
    return (
        <section className="py-20 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
                <Card>
                    <CardHeader>
                        <CardTitle>Who am I?</CardTitle>
                        <CardDescription>A passionate developer creating awesome web experiences</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">
                            Im a full stack developer with a passion for creating beautiful, functional, and user-friendly websites and applications. With over 5 years of experience in the field, I`ve worked on a wide range of projects from small business websites to large-scale enterprise applications.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">My Skills</h3>
                        <div className="flex flex-wrap gap-2">
                            {skills.map((skill, index) => (
                                <span key={index} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}


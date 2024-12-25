"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { Button } from "../ui/button"
import { BackgroundBeams } from "../ui/background-beams"

export function Contact() {
    return (
        <section id="contact" className="relative">
            <BackgroundBeams />
            <div className="container py-24 space-y-8 relative z-10">
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Let`s work together to create something amazing.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-md mx-auto"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                Fill out the form below and I`ll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-4">
                                <div className="space-y-2">
                                    <Input placeholder="Your Name" />
                                </div>
                                <div className="space-y-2">
                                    <Input type="email" placeholder="Your Email" />
                                </div>
                                <div className="space-y-2">
                                    <Textarea placeholder="Your Message" className="min-h-[150px]" />
                                </div>
                                <Button className="w-full">Send Message</Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </section>
    )
}


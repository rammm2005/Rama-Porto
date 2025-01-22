"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { BackgroundBeams } from "../ui/background-beams";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Mail, Linkedin, Github } from "lucide-react";
import { handleContactSubmission } from "@/service/mailer";

export function Contact() {
    const { toast } = useToast();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const result = await handleContactSubmission(formData);

        if (result.success) {
            toast({
                variant: "success",
                title: "Email sent",
                description: result.message,
            });
            setFormData({ name: "", email: "", message: "" });
        } else {
            toast({
                variant: "destructive",
                title: "Submission failed",
                description: result.errors.join(", "),
            });
        }

        setLoading(false);
    };

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
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div className="space-y-2">
                                    <Input
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, name: e.target.value }))
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Input
                                        type="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, email: e.target.value }))
                                        }
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Textarea
                                        placeholder="Your Message"
                                        className="min-h-[150px]"
                                        value={formData.message}
                                        onChange={(e) =>
                                            setFormData((prev) => ({ ...prev, message: e.target.value }))
                                        }
                                    />
                                </div>
                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>

                <div className="text-center space-y-4 mt-8">
                    <p className="text-muted-foreground">Or Contact me via Social Media:</p>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="https://www.instagram.com/ramaaaaadit/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:ditarama985@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/ramadita"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="https://github.com/rammm2005"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

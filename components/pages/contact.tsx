"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "../ui/tabs";
import { BackgroundBeams } from "../ui/background-beams";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Mail, Linkedin, Github } from "lucide-react";
import { handleContactSubmission } from "@/service/mailer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

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
                {/* heading */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl font-bold">Get in Touch</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Have a project in mind? Let&apos;s work together to create something amazing.
                    </p>
                </div>

                {/* form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-xl mx-auto"
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                Use <b>Markdown</b> with <i>emoji</i>, <code>HTML color</code>, headings, and more.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {/* name */}
                                <Input
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData((p) => ({ ...p, name: e.target.value }))
                                    }
                                    required
                                />

                                {/* email */}
                                <Input
                                    type="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData((p) => ({ ...p, email: e.target.value }))
                                    }
                                    required
                                />

                                {/* message markdown editor */}
                                <Tabs defaultValue="write" className="space-y-2">
                                    <TabsList className="grid grid-cols-2 w-full">
                                        <TabsTrigger value="write">Write</TabsTrigger>
                                        <TabsTrigger value="preview">Preview</TabsTrigger>
                                    </TabsList>

                                    <TabsContent value="write">
                                        <div data-color-mode="light">
                                            <MDEditor
                                                height={200}
                                                value={formData.message}
                                                onChange={(val) =>
                                                    setFormData((p) => ({
                                                        ...p,
                                                        message: val || "",
                                                    }))
                                                }
                                            />
                                        </div>
                                    </TabsContent>

                                    <label htmlFor="markdown-editor" className="sr-only">
                                        Message
                                    </label>
                                    <TabsContent
                                        value="preview"
                                        className="border rounded-md p-4 min-h-[200px] overflow-y-auto prose dark:prose-invert"
                                    >
                                        {formData.message ? (
                                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                                {formData.message}
                                            </ReactMarkdown>
                                        ) : (
                                            <p className="text-muted-foreground italic">Nothing to preview</p>
                                        )}
                                    </TabsContent>
                                </Tabs>

                                <Button type="submit" className="w-full" disabled={loading}>
                                    {loading ? "Sending..." : "Send Message"}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </motion.div>

                {/* socials */}
                <div className="text-center space-y-4 mt-8">
                    <p className="text-muted-foreground">Or contact me via social media:</p>
                    <div className="flex justify-center space-x-6">
                        <SocialIcon href="https://www.instagram.com/ramaaaaadit/" icon={Instagram} />
                        <SocialIcon href="mailto:ditarama985@gmail.com" icon={Mail} />
                        <SocialIcon href="https://www.linkedin.com/in/rama-dita-486a6b249/" icon={Linkedin} />
                        <SocialIcon href="https://github.com/rammm2005" icon={Github} />
                    </div>
                </div>
            </div>
        </section>
    );
}

function SocialIcon({
    href,
    icon: Icon,
}: {
    href: string;
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
        >
            <Icon className="w-6 h-6" />
        </a>
    );
}

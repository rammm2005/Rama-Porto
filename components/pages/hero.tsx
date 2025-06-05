"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { SparklesCore } from "../ui/sparkles"
import { BackgroundBeams } from "../ui/background-beams"
import { TypewriterEffectSentences } from "../ui/typewriter-effect"
import { FlipWords } from "../ui/flip-words";
import { Spotlight } from "../ui/spotlight";
import { BackgroundLines } from "../ui/background-lines"
import { FileUser, LayoutPanelTop, Telescope } from "lucide-react"
import { useEffect } from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Hero() {

    useEffect(() => {
        const handleSmoothScroll = (event: MouseEvent) => {
            const target = event.target as HTMLAnchorElement;
            if (target.matches("[href^='#']")) {
                event.preventDefault();
                const element = document.querySelector(target.getAttribute("href")!);
                element?.scrollIntoView({ behavior: "smooth" });
            }
        };

        document.addEventListener("click", handleSmoothScroll);
        return () => {
            document.removeEventListener("click", handleSmoothScroll);
        };
    }, []);

    const sentences = [
        "Hi there my name is Rama",
        "I'm a Web Developer and Software Engineer",
        "Welcome to my portfolio",
        "Check out my projects below"
    ];

    const word = ["better", "awsome", "beautiful", "modern"];

    const downloadFile = (filename: string) => {
        const fileUrl = `/assets/cv/${filename}`;
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = filename;
        link.click();
    };

    return (
        <BackgroundLines>

            <div className="h-[calc(100vh-4rem)] relative flex flex-col items-center justify-center overflow-hidden">
                <Spotlight />
                <BackgroundBeams />
                <div className="w-full absolute inset-0">
                    <SparklesCore
                        id="tsparticlesfullpage"
                        background="transparent"
                        minSize={0.6}
                        maxSize={1.4}
                        particleDensity={100}
                        className="w-full h-full"
                        particleColor="#7C3AED"
                    />
                </div>
                <div className="relative z-10 text-center space-y-8">
                    <TypewriterEffectSentences className="md:text-3xl text-3xl px-0 md:px-3 " sentences={sentences} />
                    {/* <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl max-w-2xl mx-auto px-4"
                >
                    <div className="flex justify-center items-center px-4">
                        <div className="text-3xl font-semibold mx-auto text-neutral-800 dark:text-neutral-200">
                            Build your

                            websites with Us
                        </div>
                    </div>
                </motion.p> */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="hidden md:block text-muted-foreground text-xl max-w-2xl mx-auto px-4"
                    >
                        Transforming ideas into exceptional <FlipWords words={word} /> <br /> digital experiences.
                        Full-stack developer specializing in modern web technologies.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {/* <Button size="lg" className="rounded-full">
                        View Projects
                    </Button> */}

                        <Button size="lg" variant="primary" className="rounded-full">
                            <a href="#projects" className="flex flex-row gap-2 items-center">
                                <Telescope />
                                View Project
                            </a>
                        </Button>

                        <Button size="lg" variant="outline" className="hidden md:flex rounded-full">
                            <a href="#contact" className="flex flex-row gap-2 items-center">
                                Contact Me
                            </a>
                        </Button>

                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="center">
                                <DropdownMenuItem className="flex flex-row gap-2 items-center justify-center text-sm" onClick={() => downloadFile("cv_with_design.pdf")}>

                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex flex-row gap-2 items-center justify-center text-sm" onClick={() => downloadFile("cv_default.pdf")}>

                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>


                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button className="flex md:hidden">Download CV</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={() => downloadFile("cv_with_design.pdf")}>
                                    <LayoutPanelTop />
                                    CV With Design
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => downloadFile("cv_default.pdf")}>
                                    <FileUser />
                                    CV Default
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </motion.div>
                </div>
            </div >
        </BackgroundLines>
    )
}


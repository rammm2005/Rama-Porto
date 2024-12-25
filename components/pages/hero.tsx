"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { SparklesCore } from "../ui/sparkles"
import { BackgroundBeams } from "../ui/background-beams"
import { TypewriterEffectSentences } from "../ui/typewriter-effect"
import { FlipWords } from "../ui/flip-words";
import { Spotlight } from "../ui/spotlight";

export function Hero() {
    const sentences = [
        "Hi there my name is Rama",
        "I'm a Web Developer and Software Engineer",
        "Welcome to my portfolio",
        "Check out my projects below"
    ];

    const word = ["better", "awsome", "beautiful", "modern"];

    return (
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
                <TypewriterEffectSentences sentences={sentences} />
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
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-muted-foreground text-xl max-w-2xl mx-auto px-4"
                >
                    Transforming ideas into exceptional <FlipWords words={word} /> <br /> digital experiences.
                    Full-stack developer specializing in modern web technologies.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-4"
                >
                    {/* <Button size="lg" className="rounded-full">
                        View Projects
                    </Button> */}
                    <button className="relative inline-flex overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                            View Projects
                        </span>
                    </button>
                    <Button size="lg" variant="outline" className="rounded-full">
                        Contact Me
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}


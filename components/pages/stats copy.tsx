"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Trophy, Code2, Users, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Stats() {
    const [active, setActive] = useState<(typeof stats)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                        onClick={() => setActive(null)}
                    />
                )}
            </AnimatePresence>

            {/* Card Content */}
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.05 },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>

                        {/* Card Modal */}
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                        >
                            <div className="flex justify-between items-start p-4">
                                <div>
                                    <motion.h3
                                        layoutId={`title-${active.title}-${id}`}
                                        className="font-bold text-neutral-700 dark:text-neutral-200"
                                    >
                                        {active.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${active.description}-${id}`}
                                        className="text-neutral-600 dark:text-neutral-400"
                                    >
                                        {active.description}
                                    </motion.p>
                                </div>

                                <motion.button
                                    layoutId={`button-${active.title}-${id}`}
                                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                >
                                    Learn More
                                </motion.button>
                            </div>
                            <div className="pt-4 relative px-4">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                >
                                    {active.miniDescription}
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* Grid layout for stats cards */}
            <section className="container py-24 px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1.05, // Add a subtle scaling effect for smooth entry
                            }}
                            exit={{ opacity: 0, scale: 0.95 }} // Add exit scale effect for smooth exit
                            transition={{
                                delay: index * 0.2,
                                type: "spring",
                                stiffness: 200,
                                damping: 30,
                                ease: "easeOut",
                            }}
                            onClick={() => setActive(stat)} // Open card when clicked
                            className="cursor-pointer"
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
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const stats = [
    {
        title: "Projects Completed",
        value: "50+",
        icon: Trophy,
        description: "Successfully delivered projects",
        miniDescription: "A growing portfolio of delivered projects",
    },
    {
        title: "Lines of Code",
        value: "100K+",
        icon: Code2,
        description: "Written with precision",
        miniDescription: "Code quality and quantity combined",
    },
    {
        title: "Happy Clients",
        value: "30+",
        icon: Users,
        description: "Across different industries",
        miniDescription: "Happy clients in diverse sectors",
    },
    {
        title: "GitHub Stars",
        value: "1.2K",
        icon: Star,
        description: "Open source contributions",
        miniDescription: "Appreciated by the open-source community",
    },
];

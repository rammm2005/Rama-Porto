"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { Trophy, Code2, Users, Star } from "lucide-react";

export function Stats() {
    const [active, setActive] = useState<(typeof stats)[number] | boolean | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

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
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
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
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1.05,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 30,
                                ease: "easeOut",
                            }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
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
                                    className="p-3 text-sm rounded-full font-bold bg-blue-600"
                                >
                                    <active.icon className="w-8 h-8" />
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
            <ul className="container py-24 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat) => (
                    <motion.div
                        layoutId={`card-${stat.title}-${id}`}
                        key={`card-${stat.title}-${id}`}
                        onClick={() => setActive(stat)}
                        className="p-4 flex flex-col gap-3 justify-start items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <motion.div layoutId={`icon-${stat.title}-${id}`} className="flex items-center p-4 justify-center bg-primary/10 rounded-full">
                            <stat.icon className="w-6 h-6" />
                        </motion.div>
                        <div className="ml-4 text-center">
                            <motion.h3
                                layoutId={`title-${stat.title}-${id}`}
                                className="font-medium text-neutral-800 dark:text-neutral-200"
                            >
                                {stat.title}
                            </motion.h3>
                            <motion.p
                                layoutId={`description-${stat.description}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-sm"
                            >
                                {stat.description}
                            </motion.p>
                        </div>
                        <motion.button
                            layoutId={`button-${stat.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-600 hover:text-white text-black mt-4 md:mt-0 ml-auto"
                        >
                            {stat.value}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>
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
        value: "10+",
        icon: Trophy,
        description: "Successfully delivered projects with a focus on quality, timeliness, and client satisfaction.",
        miniDescription: "A growing portfolio of delivered projects across various industries.",
    },
    {
        title: "Lines of Code",
        value: "1K+",
        icon: Code2,
        description: "Written with precision and a focus on maintainability and performance.",
        miniDescription: "Code quality and quantity combined with a passion for clean and efficient solutions.",
    },
    {
        title: "Happy Clients",
        value:'😁',
        icon: Users,
        description: "Across different industries, including tech, Travel, and Eccomerse.",
        miniDescription: "A growing list of satisfied clients who trust and rely on our services.",
    },
    {
        title: "GitHub Stars",
        value: "31+",
        icon: Star,
        description: "Contributions to open source that have been recognized by the community.",
        miniDescription: "Appreciated by the open-source community for quality and impactful contributions.",
    },
];

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
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute z-30 top-2 left-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0, scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 200, damping: 30, ease: "easeOut" }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="w-full max-w-[500px] sm:py-1 sm:px-1 py-10 px-2 h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 rounded-3xl overflow-hidden"
                        >
                            <div className="flex flex-col items-center p-4">
                                <motion.div
                                    layoutId={`icon-${active.title}-${id}`}
                                    className="mb-4"
                                    initial={{ scale: 1 }}
                                    animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
                                >
                                    <active.icon className="w-16 h-16 text-blue-600" />
                                </motion.div>
                                <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="font-bold text-2xl text-center text-neutral-700 dark:text-neutral-200 mb-2"
                                >
                                    {active.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${active.description}-${id}`}
                                    className="text-neutral-600 text-start w-full dark:text-neutral-400"
                                >
                                    {active.description}
                                </motion.p>
                            </div>
                            <div className="pt-4 relative px-4">
                                <motion.div
                                    layout

                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-sm md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                >
                                    <i> {active.miniDescription}</i>
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
                                layoutId={`description-${stat.miniDescription}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 text-sm"
                            >
                                {stat.miniDescription}
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
        description: "We take pride in having successfully completed over 10 projects across diverse industries. Each project was executed with an unwavering focus on quality, timeliness, and client satisfaction. Our approach involves close collaboration with stakeholders to ensure every requirement is met with precision, resulting in solutions that truly address our clients' needs. Our growing portfolio reflects a track record of overcoming unique challenges and delivering impactful outcomes. By adopting a results-driven mindset, we ensure every completed project not only meets expectations but also creates lasting value for our clients.",
        miniDescription: "A growing portfolio of delivered projects across various industries.",
    },
    {
        title: "Lines of Code",
        value: "1K+",
        icon: Code2,
        description: "With over 1,000 lines of code written, we emphasize precision, maintainability, and performance in every solution we develop. Each line is crafted with care to ensure it addresses present requirements while remaining adaptable to future needs. Our commitment to clean and efficient code ensures ease of maintenance and facilitates seamless scaling or enhancement. By adhering to industry best practices, we deliver robust, well-documented, and thoroughly tested solutions. This attention to detail enables us to provide software that is not only reliable but also capable of standing the test of time.",
        miniDescription: "Code quality and quantity combined with a passion for clean and efficient solutions.",
    },
    {
        title: "Happy Clients",
        value: '😁',
        icon: Users,
        description: "We’ve had the privilege of working with clients from various sectors, including technology, travel, and e-commerce. By understanding their unique challenges and delivering tailored solutions, we’ve built lasting relationships rooted in trust and satisfaction. Each happy client is a testament to our dedication to excellence. Our commitment to client satisfaction goes beyond delivering results—it encompasses a transparent working process and clear communication.By consistently exceeding expectations, we aim to ensure every client feels valued and supported throughout their journey with us.",
        miniDescription: "A growing list of satisfied clients who trust and rely on our services.",
    },
    {
        title: "GitHub Stars",
        value: "31+",
        icon: Star,
        description: "My contributions to the open-source community have garnered recognition, earning over 31 GitHub stars. These contributions represent our dedication to creating impactful solutions that support the broader tech ecosystem. They also reflect our technical expertise and commitment to innovation. This recognition from the community serves as both an honor and a motivation to continue contributing high-quality, meaningful code. We believe that collaboration in open source is a powerful catalyst for advancing technology and fostering innovation.",
        miniDescription: "Appreciated by the open-source community for quality and impactful contributions.",
    },
];

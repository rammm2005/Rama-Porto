"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

export function Navbar() {
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

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm"
        >
            <div className="container flex h-16 items-center justify-around">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                        <Image
                            src="https://avatars.githubusercontent.com/u/119766108?v=4"
                            alt="my-profile-pic"
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>
                    <span className="font-bold">RamaDev</span>
                </Link>

                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    <a href="#about" className="transition-colors hover:text-primary">
                        About
                    </a>
                    <a href="#projects" className="transition-colors hover:text-primary">
                        Projects
                    </a>
                    <a href="#skills" className="transition-colors hover:text-primary">
                        Skills
                    </a>
                    <a href="#contact" className="transition-colors hover:text-primary">
                        Contact
                    </a>
                </nav>

                <div className="flex items-center space-x-4">
                    <ModeToggle />
                    <Button>Download CV</Button>
                </div>
            </div>
        </motion.header>
    );
}

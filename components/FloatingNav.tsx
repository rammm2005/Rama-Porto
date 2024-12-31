'use client';

import React from 'react';
import { FloatingDock } from './ui/floating-dock';
// import { FloatingNav, FloatingNavRef } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser, IconBriefcase } from "@tabler/icons-react";
import { Share } from 'lucide-react';
export function FloatingNavbar() {
    const navItems = [
        {
            title: "Home",
            href: "#",
            icon: <IconHome className="h-4 w-4" />,
        },
        {
            title: "About",
            href: "#about",
            icon: <IconUser className="h-4 w-4" />,
        },
        {
            title: "Projects",
            href: "#projects",
            icon: <IconBriefcase className="h-4 w-4" />,
        },
        {
            title: "Contact",
            href: "#contact",
            icon: <IconMessage className="h-4 w-4" />,
        },
        {
            title: "Share",
            href: "#share",
            icon: <Share className="h-4 w-4" />,
        },
    ];

    return (
        <>
            <div className="fixed bottom-0 left-0 w-full shadow-md z-50">
                <FloatingDock
                    mobileClassName="translate-y-20"
                    items={navItems}
                />
            </div>
        </>
    );
}


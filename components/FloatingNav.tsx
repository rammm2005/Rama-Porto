'use client';

import React from 'react';
import { FloatingDock } from './ui/floating-dock';
import { IconHome, IconMessage, IconUser, IconBriefcase, IconShare } from "@tabler/icons-react";

export function FloatingNavbar() {
    const navItems = [
        {
            title: "Home",
            href: "#",
            icon: <IconHome className="h-6 w-6" />,
        },
        {
            title: "About",
            href: "#about",
            icon: <IconUser className="h-6 w-6" />,
        },
        {
            title: "Projects",
            href: "#projects",
            icon: <IconBriefcase className="h-6 w-6" />,
        },
        {
            title: "Contact",
            href: "#contact",
            icon: <IconMessage className="h-6 w-6" />,
        },
        {
            title: "Share",
            href: "#share",
            icon: <IconShare className="h-6 w-6" />,
        },
    ];

    return (
        <div className="flex md:hidden fixed bottom-0 left-0 w-full shadow-lg z-50">
            <div className="flex justify-around items-center w-full p-2">
                <FloatingDock
                    desktopClassName="flex flex-row items-center justify-between"
                    items={navItems}
                />
            </div>
        </div>
    );
}


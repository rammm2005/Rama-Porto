"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <motion.div
            className="absolute inset-0 rounded-lg bg-slate-800 dark:bg-slate-700"
            style={{
              transformOrigin: "50% 50% 0px",
            }}
            animate={{
              transform:
                hoveredIndex === idx
                  ? "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                  : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(0.95, 0.95, 1)",
            }}
            transition={{ duration: 0.5, ease: "backOut" }}
          ></motion.div>
          <div className="relative z-10 p-5">
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-sm text-slate-300">{item.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
};


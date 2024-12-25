"use client";
import React, { useRef, useEffect, useState } from "react";
import { useMousePosition } from "@/lib/mouse";

interface SparklesProps {
    id?: string;
    background?: string;
    minSize?: number;
    maxSize?: number;
    particleDensity?: number;
    className?: string;
    particleColor?: string;
    particleImage?: string;
    particleShape?: "circle" | "square" | "triangle" | "line";
    particleShapeProps?: {
        radius?: number;
        sides?: number;
        depth?: number;
        width?: number;
        height?: number;
    };
    speed?: number;
    easing?: "linear" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad";
    style?: React.CSSProperties;
}

export const SparklesCore = (props: SparklesProps) => {
    const {
        id,
        background,
        minSize = 0.4,
        maxSize = 1,
        particleDensity = 100,
        className,
        particleColor = "#FFF",
        particleImage,
        particleShape,
        particleShapeProps,
        speed = 1,
        easing = "easeOutQuad",
        style,
    } = props;
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mousePosition = useMousePosition();
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [particles, setParticles] = useState<any[]>([]);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [drawing, setDrawing] = useState(false);

    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            setContext(ctx);
        }
    }, []);

    useEffect(() => {
        if (context) {
            initializeParticles();
            setDrawing(true);
            animate();
        }
        return () => {
            setDrawing(false);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [context]);

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                setWidth(canvasRef.current.offsetWidth);
                setHeight(canvasRef.current.offsetHeight);
                initializeParticles();
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initializeParticles = () => {
        if (canvasRef.current) {
            const newParticles = [];
            const numParticles = Math.floor(
                (canvasRef.current.offsetWidth * canvasRef.current.offsetHeight) /
                particleDensity
            );
            for (let i = 0; i < numParticles; i++) {
                newParticles.push({
                    x: Math.random() * canvasRef.current.offsetWidth,
                    y: Math.random() * canvasRef.current.offsetHeight,
                    size: Math.random() * (maxSize - minSize) + minSize,
                    speedX: (Math.random() - 0.5) * speed,
                    speedY: (Math.random() - 0.5) * speed,
                });
            }
            setParticles(newParticles);
        }
    };

    const animate = () => {
        if (!context || !canvasRef.current || !drawing) return;

        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        particles.forEach((particle) => {
            if (mousePosition) {
                const dx = mousePosition.x - particle.x;
                const dy = mousePosition.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    const angle = Math.atan2(dy, dx);
                    particle.x += Math.cos(angle) * 0.5;
                    particle.y += Math.sin(angle) * 0.5;
                }
            }

            particle.x += particle.speedX;
            particle.y += particle.speedY;

            if (particle.x < 0 || particle.x > canvasRef.current!.width) {
                particle.speedX = -particle.speedX;
            }
            if (particle.y < 0 || particle.y > canvasRef.current!.height) {
                particle.speedY = -particle.speedY;
            }

            context.beginPath();
            if (particleImage) {
                const img = new Image();
                img.src = particleImage;
                context.drawImage(
                    img,
                    particle.x,
                    particle.y,
                    particle.size,
                    particle.size
                );
            } else if (particleShape === "square") {
                context.rect(
                    particle.x,
                    particle.y,
                    particle.size,
                    particleShapeProps?.width || particle.size
                );
            } else if (particleShape === "triangle") {
                context.moveTo(particle.x, particle.y);
                context.lineTo(
                    particle.x + particle.size / 2,
                    particle.y + particle.size
                );
                context.lineTo(
                    particle.x - particle.size / 2,
                    particle.y + particle.size
                );
                context.closePath();
            } else if (particleShape === "line") {
                context.moveTo(particle.x, particle.y);
                context.lineTo(
                    particle.x + (particleShapeProps?.width || particle.size),
                    particle.y
                );
            } else {
                // Default to circle
                context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            }
            context.fillStyle = particleColor;
            context.fill();
        });

        requestAnimationFrame(animate);
    };

    return (
        <canvas
            ref={canvasRef}
            id={id}
            style={{
                width: "100%",
                height: "100%",
                background: background || "transparent",
                ...style,
            }}
            width={width}
            height={height}
            className={className}
        />
    );
};


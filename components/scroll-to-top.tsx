'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        const toggleVisibility = () => {
            setIsVisible(window.pageYOffset > 300)
        }

        window.addEventListener('scroll', toggleVisibility)
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!mounted || !isVisible) return null

    return (
        <button
            onClick={scrollToTop}
            className="hidden md:flex fixed bottom-5 right-5 p-2 rounded-full bg-background text-foreground shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-6 h-6" />
        </button>
    )
}

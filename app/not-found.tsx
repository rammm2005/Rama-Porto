"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Home, Search, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function NotFoundPage() {
    const [isVisible, setIsVisible] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        setIsVisible(true)
    }, [])


    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
            <div className="max-w-4xl mx-auto w-full">
                {/* Main 404 Content */}
                <div
                    className={`text-center mt-20 space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {/* 404 Illustration */}
                    <div className="relative">
                        <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            404
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl -z-10 animate-pulse" />
                    </div>

                    {/* Error Message */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">Oops! Page Not Found</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The page you&apos;re looking for seems to have wandered off into the digital void. Don&apos;t worry, even the best
                            developers get lost sometimes!
                        </p>
                    </div>

                    {/* Animated Elements */}
                    <div className="flex justify-center items-center space-x-4 my-8">
                        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                        <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <Button size="lg" asChild className="group">
                            <Link href="/">
                                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="group">
                            <Link href="/#projects">
                                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                View Projects
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Search Section */}
                <div
                    className={`mt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <Card className="max-w-md mx-auto">
                        <CardContent className="p-6">
                            <div className="space-y-4">
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold">Looking for something specific?</h3>
                                    <p className="text-sm text-muted-foreground">Try searching for what you need</p>
                                </div>
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                                    <Input
                                        placeholder="Search pages, projects, or content..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                <Button className="w-full">Search</Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Fun Fact */}
                <div
                    className={`mt-12 text-center transition-all duration-1000 delay-1100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto">
                        <p className="text-sm text-muted-foreground">
                            💡 <strong>Fun Fact:</strong> The first 404 error was discovered at CERN in 1992. You&apos;re now part of
                            internet history!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

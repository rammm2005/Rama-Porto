"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import {
    AlertTriangle,
    RefreshCw,
    Home,
    ArrowLeft,
    Mail,
    Github,
    Server,
    Wifi,
    Shield,
    Clock,
    Bug,
    HelpCircle,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

interface ErrorPageProps {
    errorType?: "server" | "network" | "forbidden" | "timeout" | "generic"
    errorCode?: string
    errorMessage?: string
    showRetry?: boolean
    onRetry?: () => void
}

export default function ErrorPage({
    errorType = "generic",
    errorCode = "500",
    errorMessage = "Something went wrong",
    showRetry = true,
    onRetry,
}: ErrorPageProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [retryCount, setRetryCount] = useState(0)
    const [isRetrying, setIsRetrying] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    const errorConfigs = {
        server: {
            icon: <Server className="w-16 h-16" />,
            title: "Server Error",
            description:
                "Our servers are experiencing some technical difficulties. We're working to fix this as soon as possible.",
            color: "text-red-500",
            bgColor: "bg-red-50 dark:bg-red-950/20",
            suggestions: [
                "Try refreshing the page in a few minutes",
                "Check if the issue persists across different pages",
                "Contact support if the problem continues",
            ],
        },
        network: {
            icon: <Wifi className="w-16 h-16" />,
            title: "Connection Error",
            description: "Unable to connect to our servers. Please check your internet connection and try again.",
            color: "text-orange-500",
            bgColor: "bg-orange-50 dark:bg-orange-950/20",
            suggestions: ["Check your internet connection", "Try refreshing the page", "Disable any VPN or proxy if enabled"],
        },
        forbidden: {
            icon: <Shield className="w-16 h-16" />,
            title: "Access Forbidden",
            description:
                "You don't have permission to access this resource. Please contact the administrator if you believe this is an error.",
            color: "text-yellow-500",
            bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
            suggestions: [
                "Make sure you're logged in with the correct account",
                "Contact the administrator for access",
                "Return to the homepage and try again",
            ],
        },
        timeout: {
            icon: <Clock className="w-16 h-16" />,
            title: "Request Timeout",
            description: "The request took too long to complete. This might be due to high server load or network issues.",
            color: "text-blue-500",
            bgColor: "bg-blue-50 dark:bg-blue-950/20",
            suggestions: [
                "Try again in a few moments",
                "Check your internet connection speed",
                "Contact support if timeouts persist",
            ],
        },
        generic: {
            icon: <AlertTriangle className="w-16 h-16" />,
            title: "Unexpected Error",
            description: "An unexpected error occurred while processing your request. Our team has been notified.",
            color: "text-purple-500",
            bgColor: "bg-purple-50 dark:bg-purple-950/20",
            suggestions: [
                "Try refreshing the page",
                "Clear your browser cache and cookies",
                "Contact support if the issue persists",
            ],
        },
    }

    const currentConfig = errorConfigs[errorType]

    const handleRetry = async () => {
        setIsRetrying(true)
        setRetryCount((prev) => prev + 1)

        await new Promise((resolve) => setTimeout(resolve, 1000))

        if (onRetry) {
            onRetry()
        } else {
            window.location.reload()
        }

        setIsRetrying(false)
    }

    const troubleshootingSteps = [
        {
            step: 1,
            title: "Refresh the page",
            description: "Sometimes a simple refresh can resolve temporary issues",
            action: () => window.location.reload(),
        },
        {
            step: 2,
            title: "Clear browser cache",
            description: "Clear your browser's cache and cookies, then try again",
            action: null,
        },
        {
            step: 3,
            title: "Check your connection",
            description: "Ensure you have a stable internet connection",
            action: null,
        },
        {
            step: 4,
            title: "Try a different browser",
            description: "Test if the issue occurs in a different web browser",
            action: null,
        },
    ]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex items-center justify-center p-4">
            <div className="max-w-4xl mx-auto w-full">
                {/* Main Error Content */}
                <div
                    className={`text-center space-y-8 mt-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    {/* Error Icon and Code */}
                    <div className="relative">
                        <div className={`${currentConfig.color} flex justify-center mb-6`}>{currentConfig.icon}</div>
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <Badge variant="destructive" className="text-lg px-4 py-2">
                                Error {errorCode}
                            </Badge>
                            {retryCount > 0 && <Badge variant="outline">Retry attempt: {retryCount}</Badge>}
                        </div>
                    </div>

                    {/* Error Message */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground">{currentConfig.title}</h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            {errorMessage || currentConfig.description}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {showRetry && (
                            <Button size="lg" onClick={handleRetry} disabled={isRetrying} className="group">
                                <RefreshCw
                                    className={`w-4 h-4 mr-2 ${isRetrying ? "animate-spin" : "group-hover:rotate-180"} transition-transform`}
                                />
                                {isRetrying ? "Retrying..." : "Try Again"}
                            </Button>
                        )}
                        <Button variant="outline" size="lg" asChild className="group">
                            <Link href="/">
                                <Home className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                Back to Home
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild className="group">
                            <Link href="/#contact">
                                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                Contact Support
                            </Link>
                        </Button>
                    </div>
                </div>

                {/* Error Details */}
                <div
                    className={`mt-16 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* What Happened */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Bug className="w-5 h-5" />
                                    What Happened?
                                </CardTitle>
                                <CardDescription>Here&apos;s what we know about this error</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Alert className={currentConfig.bgColor}>
                                    <AlertTriangle className="h-4 w-4" />
                                    <AlertDescription>
                                        <strong>Error Type:</strong> {currentConfig.title}
                                    </AlertDescription>
                                </Alert>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium">Possible causes:</p>
                                    <ul className="text-sm text-muted-foreground space-y-1">
                                        {currentConfig.suggestions.map((suggestion, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <span className="w-1 h-1 bg-muted-foreground rounded-full mt-2 flex-shrink-0" />
                                                {suggestion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        {/* What You Can Do */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <HelpCircle className="w-5 h-5" />
                                    What You Can Do
                                </CardTitle>
                                <CardDescription>Try these troubleshooting steps</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    {troubleshootingSteps.map((step) => (
                                        <div key={step.step} className="flex gap-4">
                                            <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                                                {step.step}
                                            </div>
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <h4 className="font-medium">{step.title}</h4>
                                                    {step.action && (
                                                        <Button variant="ghost" size="sm" onClick={step.action} className="text-xs">
                                                            Try Now
                                                        </Button>
                                                    )}
                                                </div>
                                                <p className="text-sm text-muted-foreground">{step.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Technical Details */}
                <div
                    className={`mt-12 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Technical Details</CardTitle>
                            <CardDescription>Information for developers and support team</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                                <div>
                                    <span className="font-medium text-muted-foreground">Error Code:</span>
                                    <p className="font-mono bg-muted px-2 py-1 rounded mt-1">{errorCode}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-muted-foreground">Timestamp:</span>
                                    <p className="font-mono bg-muted px-2 py-1 rounded mt-1">{new Date().toISOString()}</p>
                                </div>
                                <div>
                                    <span className="font-medium text-muted-foreground">Session ID:</span>
                                    <p className="font-mono bg-muted px-2 py-1 rounded mt-1">{Math.random().toString(36).substr(2, 9)}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Contact Support */}
                <div
                    className={`mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-0">
                        <CardContent className="p-8 text-center">
                            <div className="space-y-6">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">Need More Help?</h2>
                                    <p className="text-muted-foreground">
                                        If the problem persists, don&apos;t hesitate to reach out. I&apos;m here to help resolve any issues.
                                    </p>
                                </div>

                                <div className="flex flex-wrap justify-center gap-4">
                                    <Button asChild className="group">
                                        <Link href="/#contact">
                                            <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                            Contact Support
                                        </Link>
                                    </Button>
                                    <Button variant="outline" asChild className="group">
                                        <Link href="#" target="_blank">
                                            <Github className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                                            Report Issue
                                        </Link>
                                    </Button>
                                </div>

                                <div className="text-sm text-muted-foreground">
                                    <p>Response time: Usually within 24 hours</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Back Navigation */}
                <div
                    className={`mt-8 text-center transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        }`}
                >
                    <Button variant="ghost" asChild className="group">
                        <Link href="javascript:history.back()">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

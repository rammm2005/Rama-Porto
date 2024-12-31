import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { ScrollToTop } from "@/components/scroll-to-top";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rama Portfolio",
  description: "A modern portfolio website with awesome animations",
  icons: {
    icon: "/ico/origami.ico",
    shortcut: "/ico/origami.ico",
    apple: "/ico/origami.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-br scroll-smooth from-background to-background/95 min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Suspense fallback={<div className="flex justify-center items-center min-h-screen">
            <Image src='./Animation - 1735654802366.gif' alt="loading" width={100} height={100} />
          </div>}>
            {children}
          </Suspense>
          <Toaster />
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}

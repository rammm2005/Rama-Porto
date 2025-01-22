import { Github, Twitter, Linkedin, Instagram, ArchiveRestore } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-6 text-center bg-background">
            <p className="text-sm text-muted-foreground mb-4">
                © {currentYear} Rama Dita. All rights reserved.
            </p>

            <div className="flex justify-center space-x-4">
                <a
                    href="https://github.com/rammm2005"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="https://twitter.com/ramadita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <Twitter className="w-5 h-5" />
                </a>
                <a
                    href="https://linkedin.com/in/ramadita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                </a>

                <a
                    href="https://www.instagram.com/ramaaaaadit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <Instagram className="w-5 h-5" />
                </a>

                <a
                    href="mailto:ditarama985@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                >
                    <ArchiveRestore className="w-5 h-5" />
                </a>

            </div>
        </footer>
    );
}

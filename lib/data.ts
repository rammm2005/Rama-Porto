
export interface Project {
    slug: string
    title: string
    description: string
    longDescription: string
    tags: string[]
    image: string
    images: string[]
    github: string
    demo: string
    status: string
    sourceCode: boolean
    demoUrl: boolean
    category: string
    client: string
    duration: string
    teamSize: string
    role: string
    challenges: string[]
    solutions: string[]
    features: string[]
    techDetails: {
        frontend?: string[]
        backend?: string[]
        database?: string[]
        tools?: string[]
    }
    outcomes: string[]
}

export const projects: Project[] = [
    {
        slug: "e-commerce-platform-for-semmaga-business",
        title: "E-commerce Platform for Semmaga Business",
        description: "Simple Modern e-commerce solution with PHP.",
        longDescription: "A user-friendly e-commerce platform built with PHP, designed to support local businesses with product listings, shopping cart, and order management.",
        tags: ["PHP", "Mysql", "JQuery", "TailwindCSS"],
        image: "/web-app/semaaga.png",
        images: ["/web-app/semaaga.png"],
        github: "#",
        demo: "#",
        status: "publish",
        sourceCode: false,
        demoUrl: false,
        category: "Web Development",
        client: "Semmaga",
        duration: "2 months",
        teamSize: "2 people",
        role: "Fullstack Developer",
        challenges: ["Basic shopping cart logic", "Clean UI for small businesses"],
        solutions: ["PHP session-based cart", "TailwindCSS for fast styling"],
        features: ["Product listing", "Cart management", "Order handling"],
        techDetails: {
            frontend: ["JQuery", "TailwindCSS"],
            backend: ["PHP"],
            database: ["Mysql"],
            tools: ["VS Code", "XAMPP"],
        },
        outcomes: ["Supported local commerce", "Easy-to-use admin panel"]
    },
    {
        slug: "tictactoe-game-that",
        title: "Tictactoe Game",
        description: "A fun and interactive Tic-Tac-Toe game built with Javascript and Plain CSS.",
        longDescription: "A minimalist Tic-Tac-Toe web game where players take turns placing X or O. It emphasizes logic and turn-based game mechanics.",
        tags: ["Javascript", "CSS3"],
        image: "/game/ticatactoe.png",
        images: ["/game/ticatactoe.png"],
        github: "#",
        demo: "https://game-kill-the-bird.vercel.app/",
        status: "publish",
        sourceCode: true,
        demoUrl: true,
        category: "Game Development",
        client: "Self Project",
        duration: "1 week",
        teamSize: "1 person",
        role: "Game Developer",
        challenges: ["Turn logic", "Win condition detection"],
        solutions: ["2D array board logic", "JS functions for win check"],
        features: ["Turn-based play", "Restart button", "Win alert"],
        techDetails: {
            frontend: ["Javascript", "CSS3"],
            backend: [],
            database: [],
            tools: ["VS Code"],
        },
        outcomes: ["Improved understanding of game loops", "Good feedback on interactivity"]
    },
    {
        slug: "data-visualization-from-spreadsheet",
        title: "Data Visualization from Spreadsheet",
        description: "Data visualization from spreadsheets using Google Sheet API and Next js technology.",
        longDescription: "A web dashboard that automatically visualizes spreadsheet data using Chart.js and Google Sheet API, integrated via Next.js.",
        tags: ["Next.js", "Shadcn UI", "Google Sheet API", "Chart JS", "Zod"],
        image: "/web-app/auto-visualition-data.png",
        images: ["/web-app/auto-visualition-data.png", "/web-app/Data-Visualization-Platform.png", "/web-app/data-visual-create-url.png", "/web-app/data-visual-visual.png", "/web-app/datavisual-data.png"],
        github: "#",
        demo: "https://data-visualitation-challenge.vercel.app/",
        status: "publish",
        sourceCode: true,
        demoUrl: true,
        category: "Web Development",
        client: "Challenge Project",
        duration: "2 weeks",
        teamSize: "1 person",
        role: "Frontend Engineer",
        challenges: ["Realtime sync with Google Sheets", "Chart rendering"],
        solutions: ["Used fetch + caching", "Integrated Chart.js with custom data"],
        features: ["Charts from spreadsheet", "Live data reload", "Clean dashboard UI"],
        techDetails: {
            frontend: ["Next.js", "Shadcn UI", "Chart JS"],
            backend: [],
            database: ["Google Sheets"],
            tools: ["VS Code", "Figma"],
        },
        outcomes: ["Streamlined data reporting", "Low-maintenance dashboard"]
    },
    {
        slug: "freelancer-static-website-gets-first-winner-on-itcc-2023",
        title: "Freelancer Static Website gets First Winner on ITCC 2023",
        description: "Static freelancer website that supports Digital Transformation supports the creativity of the younger generation to realize Indonesia 2045.",
        longDescription: "An award-winning freelancer profile landing page that embraces digital transformation with clean animations and responsive layout.",
        tags: ["HTML5", "CSS3", "JQuery", "Animation Js"],
        image: "/web-app/workpal-landingpage.jpg",
        images: ["/web-app/workpal-landingpage.jpg"],
        github: "#",
        demo: "https://work-pal-testing-unit.vercel.app/",
        status: "publish",
        sourceCode: true,
        demoUrl: true,
        category: "Web Development",
        client: "Competition Project",
        duration: "3 weeks",
        teamSize: "2 people",
        role: "Frontend Developer",
        challenges: ["Scroll-based animations", "Responsive layout"],
        solutions: ["Animation.js integration", "Media query setup"],
        features: ["Freelancer profile", "Smooth animation", "Call to action"],
        techDetails: {
            frontend: ["HTML5", "CSS3", "JQuery", "Animation Js"],
            backend: [],
            database: [],
            tools: ["VS Code"],
        },
        outcomes: ["Won 1st place ITCC", "Inspired young devs"]
    },
    {
        slug: "modern-eccommers-static-website-get-third-winner-on-idb-campus",
        title: "Modern E-commerce Static Website get Third Winner on IDB Campus",
        description: "Award-winning e-commerce website for Balinese MSMEs leveraging HTML5, CSS3, and JS.",
        longDescription: "A clean and modern e-commerce landing page built to support Balinese MSMEs, optimized for performance and visual appeal.",
        tags: ["HTML5", "CSS3", "Javascript"],
        image: "/web-app/clothink-landingpage.jpg",
        images: ["/web-app/clothink-landingpage.jpg"],
        github: "#",
        demo: "https://clothink-view.vercel.app/",
        status: "publish",
        sourceCode: true,
        demoUrl: true,
        category: "Web Development",
        client: "IDB Campus Competition",
        duration: "3 weeks",
        teamSize: "1 person",
        role: "Frontend Developer",
        challenges: ["Static yet attractive", "Fast loading"],
        solutions: ["Optimized assets", "Clean semantic HTML structure"],
        features: ["Product catalog", "About section", "CTA buttons"],
        techDetails: {
            frontend: ["HTML5", "CSS3", "Javascript"],
            backend: [],
            database: [],
            tools: ["VS Code", "Figma"],
        },
        outcomes: ["3rd winner at IDB", "Supported MSME exposure"]
    },
    {
        slug: "population-management-mobile-application",
        title: "Population Management Mobile Application",
        description: "Population Management and Dues Collection in Bali's Traditional Villages.",
        longDescription: "A mobile app to manage citizen data and contribution tracking in traditional Balinese villages.",
        tags: ["Kotlin", "Laravel", "Mysql", "REST API"],
        image: "/mobile-app/pendataan-warga.jpg",
        images: ["/mobile-app/pendataan-warga.jpg"],
        github: "#",
        demo: "#",
        status: "progress",
        sourceCode: false,
        demoUrl: false,
        category: "Mobile Development",
        client: "Traditional Village",
        duration: "3 months",
        teamSize: "3 people",
        role: "Mobile Developer",
        challenges: ["Tracking contributions offline", "Integrating local identity system"],
        solutions: ["Used local DB sync", "Implemented NIK-based auth"],
        features: ["Add/edit resident", "Collect dues", "Export to Excel"],
        techDetails: {
            frontend: ["Kotlin"],
            backend: ["Laravel"],
            database: ["Mysql"],
            tools: ["Git", "VS Code"],
        },
        outcomes: ["Improved village data transparency", "Reduced manual tracking"]
    },
    {
        slug: "static-travel-websites-in-indonesia",
        title: "Static Travel websites in Indonesia",
        description: "Travel website that provides cool and interesting features for users.",
        longDescription: "This travel website offers a clean interface with travel destination information, image sliders, and data integration using public APIs and spreadsheet-based backend.",
        tags: ["React", "SWIPER JS", "Date Fns", "TailwindCSS"],
        image: "/web-app/landingpage-tour.jpg",
        images: ["/web-app/landingpage-tour.jpg"],
        github: "#",
        demo: "https://web-lomba-pnb-2.vercel.app/",
        status: "publish",
        sourceCode: true,
        demoUrl: true,
        category: "Web Development",
        client: "Tourism Agency",
        duration: "2 months",
        teamSize: "2 people",
        role: "Frontend Developer",
        challenges: ["Dynamic content from spreadsheets", "Responsive layout"],
        solutions: ["Used Google Sheets API", "Responsive grid system with TailwindCSS"],
        features: ["Swiper image slider", "Dynamic content from Google Sheet", "Responsive design"],
        techDetails: {
            frontend: ["React", "TailwindCSS", "SWIPER JS", "Date Fns"],
            backend: [],
            database: [],
            tools: ["Figma", "Git", "VS Code"],
        },
        outcomes: ["Boosted tourism visibility", "Fast static delivery via Vercel"]
    },
    {
        slug: "kill-the-bird-in-the-air",
        title: "Kill the Bird in the Air",
        description: "An exciting game where players must shoot birds flying in the sky.",
        longDescription: "This JavaScript game tests reflexes where players shoot flying birds. Built entirely with HTML5, CSS3 and JavaScript.",
        tags: ["HTML5", "CSS3", "Javascript"],
        image: "/game/kill-bird.png",
        images: ["/game/kill-bird.png"],
        github: "#",
        demo: "https://game-kill-the-bird.vercel.app/killbird.html",
        status: "publish",
        sourceCode: true,
        demoUrl: true,
        category: "Game Development",
        client: "Self Project",
        duration: "2 weeks",
        teamSize: "1 person",
        role: "Game Developer",
        challenges: ["Simple game physics", "Bird animation & click tracking"],
        solutions: ["Used CSS animation", "Event listener tracking"],
        features: ["Shooting mechanic", "Score system", "Bird movement animation"],
        techDetails: {
            frontend: ["HTML5", "CSS3", "Javascript"],
            backend: [],
            database: [],
            tools: ["VS Code"],
        },
        outcomes: ["Improved JS skills", "Reached 100+ players in demo"]
    },
]

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug)
}


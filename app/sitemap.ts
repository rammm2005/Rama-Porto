import { MetadataRoute } from "next";

const projects = [
    "population-management-mobile-application",
    "e-commerce-platform-for-semmaga-business",
    "static-travel-websites-in-indonesia",
    "portfolio-website-templates",
    "tictactoe-game-that",
    "kill-the-bird-in-the-air",
    "data-visualization-from-spreadsheet",
    "freelancer-static-website-gets-first-winner-on-itcc-2023",
    "modern-eccommers-static-website-get-third-winner-on-idb-campus",
    "modern-daily-me-tracking-app-for-young-people-to-keep-a-healthy-life",
    "3des-encryption-decryption-algorithm-with-python-and-telegram-bot",
];

export default function sitemap(): MetadataRoute.Sitemap {
    const domain = "https://www.rama-dev.tech";

    return [
        {
            url: domain,
            lastModified: new Date(),
        },
        {
            url: `${domain}/projects`,
            lastModified: new Date(),
        },
        ...projects.map((slug) => ({
            url: `${domain}/projects/${slug}`,
            lastModified: new Date(),
        })),
    ];
}

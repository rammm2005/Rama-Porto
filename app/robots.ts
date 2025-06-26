import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const domain = process.env.DOMAIN || 'https://rama-dev.tech/';
    return {
        rules: {
            userAgent: '*',
            allow: '/*',
            disallow: '/api/*',
        },
        sitemap: `${domain}/sitemap.xml`
    }
}
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const domain = process.env.DOMAIN || 'https://rama-porto.vercel.app/';
    return {
        rules: {
            userAgent: '*',
            allow: '/*',
            disallow: '/api/*',
        },
        sitemap: `${domain}/sitemap.xml`
    }
}
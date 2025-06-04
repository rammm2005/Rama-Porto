import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const domain = process.env.DOMAIN || 'https://www.rama-dev.tech';
    return [

        {
            url: domain,
            lastModified: new Date(),
        },
        {
            url: `${domain}/projects/{slug}`,
            lastModified: new Date(),
        },
    ];
}
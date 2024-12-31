import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const domain = process.env.DOMAIN || 'https://rama-porto.vercel.app/';
    return [

        {
            url: domain,
            lastModified: new Date(),
        },
        {
            url: `${domain}/detail-projects/{projectSlug}`,
            lastModified: new Date(),
        },
        {
            url: `${domain}/about`,
            lastModified: new Date(),
        }
    ];
}
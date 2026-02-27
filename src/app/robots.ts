import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.APP_URL || "https://entrextlabs.entrext.com";
    return {
        rules: {
            userAgent: '*',
            allow: ['/', '/products', '/teams', '/niches'],
            disallow: ['/api/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}

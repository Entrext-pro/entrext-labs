import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const rawBaseUrl = process.env.APP_URL || "https://entrextlabs.entrext.com";
    const baseUrl = rawBaseUrl.replace(/['"]/g, '').replace(/\/+$/, '');

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/api/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}

import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const rawBaseUrl = process.env.APP_URL || "https://entrextlabs.entrext.com";
    // Sanitize URL by removing quotes and trailing slashes
    const baseUrl = rawBaseUrl.replace(/['"]/g, '').replace(/\/+$/, '');

    const appDirectory = path.join(process.cwd(), 'src', 'app');
    const routes: string[] = [];

    function findRoutes(dir: string, baseRoute = '') {
        try {
            if (!fs.existsSync(dir)) return;
            const files = fs.readdirSync(dir);

            for (const file of files) {
                const fullPath = path.join(dir, file);
                const stat = fs.statSync(fullPath);

                if (stat.isDirectory()) {
                    // Skip private folders, api, components, etc.
                    if (file.startsWith('_') || file.startsWith('(') || file === 'api') continue;
                    findRoutes(fullPath, `${baseRoute}/${file}`);
                } else if (file === 'page.tsx' || file === 'page.js') {
                    routes.push(baseRoute === '' ? '/' : baseRoute);
                }
            }
        } catch (e) {
            console.error(`Error scanning directory ${dir}:`, e);
        }
    }

    try {
        findRoutes(appDirectory);
    } catch (error) {
        console.error('Error scanning for routes:', error);
    }

    // Fallback if no routes found or scanning failed
    if (routes.length === 0) {
        return [
            { url: `${baseUrl}`, lastModified: new Date(), priority: 1, changeFrequency: 'daily' },
            { url: `${baseUrl}/products`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
            { url: `${baseUrl}/teams`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
            { url: `${baseUrl}/niches`, lastModified: new Date(), priority: 0.8, changeFrequency: 'weekly' },
        ];
    }

    return routes.map(route => ({
        url: `${baseUrl}${route === '/' ? '' : route}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'daily' : 'weekly',
        priority: route === '/' ? 1 : 0.7,
    }));
}

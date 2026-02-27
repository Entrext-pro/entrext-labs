import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.APP_URL || "https://entrextlabs.entrext.com";
    const appDirectory = path.join(process.cwd(), 'src', 'app');

    const routes: string[] = [];

    function findRoutes(dir: string, baseRoute = '') {
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
    }

    try {
        findRoutes(appDirectory);
    } catch (error) {
        console.error('Error scanning for routes:', error);
        // Fallback if scanning fails
        return [
            { url: baseUrl, lastModified: new Date() },
            { url: `${baseUrl}/products`, lastModified: new Date() },
            { url: `${baseUrl}/teams`, lastModified: new Date() },
            { url: `${baseUrl}/niches`, lastModified: new Date() },
        ];
    }

    return routes.map(route => ({
        url: `${baseUrl}${route === '/' ? '' : route}`,
        lastModified: new Date(),
        changeFrequency: route === '/' ? 'daily' : 'weekly',
        priority: route === '/' ? 1 : 0.7,
    }));
}

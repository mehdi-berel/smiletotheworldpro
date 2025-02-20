import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smile2theworldpro.com';

  const routes = [
    // Main pages
    { url: '/', lastModified: new Date() },
    { url: '/about', lastModified: new Date() },
    { url: '/services', lastModified: new Date() },
    { url: '/laboratory', lastModified: new Date() },
    { url: '/marketplace', lastModified: new Date() },
    { url: '/vendors', lastModified: new Date() },
    { url: '/contact', lastModified: new Date() },
    { url: '/site-map', lastModified: new Date() },

    // Profile section
    { url: '/profile/profile', lastModified: new Date() },
    { url: '/profile/listings', lastModified: new Date() },
    { url: '/profile/earnings', lastModified: new Date() },
    { url: '/profile/orders', lastModified: new Date() },
    { url: '/profile/billing', lastModified: new Date() },

    // Configuration
    { url: '/config', lastModified: new Date() },

    // Legal pages
    { url: '/privacy-policy', lastModified: new Date() },
    { url: '/terms-of-service', lastModified: new Date() },
    { url: '/cookie-policy', lastModified: new Date() },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: 'daily',
    priority: route.url === '/' ? 1 : 0.8,
  }));
}

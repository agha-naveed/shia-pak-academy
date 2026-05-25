// app/robots.ts
export const dynamic = 'force-static'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*', // Applies to all search engine bots
      allow: '/',     // Allow them to crawl everything
      // You can add disallow rules if you have private pages like admin dashboards:
      // disallow: '/admin/', 
    },
    // IMPORTANT: Replace this with your actual live domain
    sitemap: 'https://shiaquranpak.com/sitemap.xml',
  }
}
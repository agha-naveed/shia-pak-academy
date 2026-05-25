import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Replace with your actual production URL
  const baseUrl = 'https://shiaquranpak.com'

  // 1. STATIC PARENT ROUTES
  const staticRoutes = [
    '',
    '/pricing',
    '/about-shia-quran-pak-academy',
    '/contact-us',
    '/teachers',
    '/ziyarat',
    '/courses',
    '/blogs'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. STATIC EDUCATIONAL (MORE) ROUTES
  const educationalRoutes = [
    '/more/shia-quran-classes-online',
    '/more/shia-quran-lesson-online',
    '/more/shia-quran-education-online',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  // =====================================================================
  // DYNAMIC ROUTES (In a real app, you would fetch these from a database)
  // Example: const courses = await db.query('SELECT slug FROM courses')
  // =====================================================================

  // 3. NESTED COURSES
  const courseSlugs = ['qaida-and-tajweed', 'hifz', 'tafseer-and-translation', 'fiqh-and-ahkam'];
  const courseRoutes = courseSlugs.map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 4. NESTED BLOGS
  const blogSlugs = ['importance-of-tajweed', 'how-to-memorize-quran-fast', 'understanding-ziyarat-ashura'];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const, // Blogs change more frequently
    priority: 0.7,
  }));

  // 5. NESTED TEACHERS
  const teacherIds = ['scholar-ali-raza', 'aalima-fatima', 'qari-hussain'];
  const teacherRoutes = teacherIds.map((id) => ({
    url: `${baseUrl}/teachers/${id}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const, // Teacher profiles rarely change
    priority: 0.6,
  }));

  // 6. NESTED ZIYARATS
  const ziyaratSlugs = ['ashura', 'warith', 'aminullah', 'nahiya'];
  const ziyaratRoutes = ziyaratSlugs.map((slug) => ({
    url: `${baseUrl}/ziyarat/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.7,
  }));

  // Combine all arrays and return
  return [
    ...staticRoutes, 
    ...educationalRoutes, 
    ...courseRoutes,
    ...blogRoutes,
    ...teacherRoutes,
    ...ziyaratRoutes
  ]
}
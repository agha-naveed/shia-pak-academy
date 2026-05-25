export const dynamic = 'force-static'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Replace with your actual production URL
  const baseUrl = 'https://shiaquranpak.com'

  // 1. STATIC PARENT ROUTES
  const staticRoutes = [
    '',
    '/about-shia-quran-pak-academy',
    '/teachers',
    '/ziyarat',
    '/courses',
    '/blogs',
    "/more"
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
    changeFrequency: 'yearly' as const,
    priority: 0.9,
  }));

  // =====================================================================
  // DYNAMIC ROUTES (In a real app, you would fetch these from a database)
  // Example: const courses = await db.query('SELECT slug FROM courses')
  // =====================================================================

  // 3. NESTED COURSES
  const courseSlugs = ['nahjul-balagha-course', 'online-shia-quran-memorization-course', 'online-shia-quran-tajweed-course', 'online-shia-quran-translation-course', "online-shia-tafseer-e-quran-course", "online-shia-yassarnal-quran-course", "shia-islamic-studies-course"];
  const courseRoutes = courseSlugs.map((slug) => ({
    url: `${baseUrl}/courses/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }));

  // 4. NESTED BLOGS
  const blogSlugs = ['how-to-connect-with-quran', "life-lessons-from-ahlulbayt", "ramadan-a-month-of-transformation", "the-importance-of-taqwa-in-todays-world", "what-imam-ali-sermons-teach-modern-society"];
  const blogRoutes = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blogs/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const, // Blogs change more frequently
    priority: 0.7,
  }));

  // 5. NESTED TEACHERS
  const teacherIds = ["shia-male-teacher", "shia-female-teacher", "online-shia-tutors"];

  const teacherRoutes = teacherIds.map((slug) => ({
    url: `${baseUrl}/teachers/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const, // Teacher profiles rarely change
    priority: 0.6,
  }));

  // 6. NESTED ZIYARATS
  const ziyaratSlugs = ['ziyarat-e-ashura', 'ziyarat-e-warisa', 'ziyarat-e-ameenullah', 'ziyarat-e-nahiya', "ziyarat-e-arbaeen"];
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
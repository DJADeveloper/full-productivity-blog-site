import { getCollection } from 'astro:content';

export async function GET() {
  const blogPosts = await getCollection('blog');
  
  // Base URLs for your site
  const pages = [
    '',
    'blog',
    'resources',
    'store',
    'about',
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>https://problemsolvio.com/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
      <priority>${page === '' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
  ${blogPosts
    .map(
      (post) => `
    <url>
      <loc>https://problemsolvio.com/blog/${post.slug}</loc>
      <lastmod>${post.data.date.toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.6</priority>
    </url>`
    )
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 
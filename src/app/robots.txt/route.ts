export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.memattrading.com/sitemap.xml

# Arabic content optimization
User-agent: Googlebot
Allow: /
Crawl-delay: 1

# Block unnecessary crawling
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /*.pdf$

# Allow important resources
Allow: /public/
Allow: /*.css$
Allow: /*.js$
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
Allow: /*.webp$
Allow: /*.svg$
Allow: /*.avif$`

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}

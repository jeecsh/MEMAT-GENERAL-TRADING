export async function GET() {
  const baseUrl = 'https://www.memattrading.com'
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}"/>
  </url>
  <url>
    <loc>${baseUrl}/products</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/products"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/products"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/products"/>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/about"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/about"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/about"/>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/contact"/>
    <xhtml:link rel="alternate" hreflang="ar" href="${baseUrl}/ar/contact"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/contact"/>
  </url>
</urlset>`

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}

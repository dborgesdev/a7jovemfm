// Somente arquivos necessários ao site podem ser entregues pelo servidor.
export function isPublicPath(pathname) {
  if (pathname.includes('\\') || pathname.split('/').some((part) => part.startsWith('.'))) return false;
  return ['/', '/index.html', '/favicon.png', '/og-image.webp', '/robots.txt', '/sitemap.xml'].includes(pathname)
    || /^\/src\/[a-z-]+\.(js|css)$/.test(pathname)
    || /^\/images\/[a-zA-Z0-9/_-]+\.(webp|png)$/.test(pathname);
}

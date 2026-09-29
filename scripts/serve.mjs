import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { getNowPlayingStats } from './metadata.mjs';
import { isPublicPath } from './public-path.mjs';
const root = resolve(process.argv[2] || '.');
const port = Number(process.env.PORT || 4174);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.xml': 'application/xml', '.txt': 'text/plain' };
createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    if (pathname === '/api/now-playing') {
      const stats = await getNowPlayingStats();
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(JSON.stringify(stats));
      return;
    }
    if (!isPublicPath(pathname)) { res.writeHead(404).end('Não encontrado'); return; }
    const relative = pathname === '/' ? 'index.html' : pathname.slice(1);
    let file = resolve(root, relative);
    if (!file.startsWith(root + sep)) { res.writeHead(403).end(); return; }
    let data;
    try { data = await readFile(file); } catch {
      file = resolve(root, 'public', relative);
      if (!file.startsWith(resolve(root, 'public') + sep)) throw new Error('Invalid path');
      data = await readFile(file);
    }
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
    res.end(data);
  } catch { res.writeHead(404).end('Não encontrado'); }
}).listen(port, '127.0.0.1', () => console.log('Preview: http://127.0.0.1:' + port));

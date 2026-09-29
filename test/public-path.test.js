import test from 'node:test';
import assert from 'node:assert/strict';
import { isPublicPath } from '../scripts/public-path.mjs';

test('Servidor permite os arquivos públicos e bloqueia arquivos internos', () => {
  for (const path of ['/', '/index.html', '/src/main.js', '/src/styles.css', '/images/moments/momento-01-ao-ar-livre.webp', '/robots.txt']) {
    assert.equal(isPublicPath(path), true, path);
  }
  for (const path of ['/.git/config', '/.env', '/README.md', '/docs/project.md', '/scripts/metadata.mjs', '/package.json', '/images/../.env', '/images/..\\.git/config']) {
    assert.equal(isPublicPath(path), false, path);
  }
});

import { readdir, readFile, access } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import assert from 'node:assert/strict';
for (const dir of ['src', 'scripts', 'test']) {
  for (const file of await readdir(dir)) {
    if (/\.m?js$/.test(file)) execFileSync(process.execPath, ['--check', dir + '/' + file]);
  }
}
const html = await readFile('index.html', 'utf8');
const css = await readFile('src/styles.css', 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
assert.equal(ids.length, new Set(ids).size, 'IDs únicos');
for (const [, id] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(id), 'Âncora: ' + id);
for (const [, path] of html.matchAll(/(?:src|href)="(\/[^"]+)"/g)) await access(path.startsWith('/src/') ? '.' + path : 'public' + path);
for (const [, path] of css.matchAll(/url\('([^']+)'\)/g)) await access('public' + path);
assert.equal((html.match(/<h1\b/g) || []).length, 1);
assert.ok(!html.includes('autoplay'));
assert.ok(!css.includes('!important'));
console.log('Lint estático: sintaxe JS, assets, âncoras, IDs, H1 e restrições OK.');

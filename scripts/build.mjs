import { mkdir, cp, copyFile, rm } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await cp('public', 'dist', { recursive: true });
await cp('src', 'dist/src', { recursive: true });
await copyFile('index.html', 'dist/index.html');
console.log('Build concluído: dist/');

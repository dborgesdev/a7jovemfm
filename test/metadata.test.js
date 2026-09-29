import test from 'node:test';
import assert from 'node:assert/strict';
import { readSongTitle, startMetadataPolling } from '../src/metadata.js';

test('Metadados reais válidos; fallback para offline, ausente ou inválido', () => {
  assert.equal(readSongTitle({ streamstatus: 1, songtitle: '  Título recebido  ' }), 'Título recebido');
  for (const data of [null, {}, { streamstatus: 0, songtitle: 'Antigo' }, { streamstatus: 1, songtitle: 123 }, { streamstatus: 1, songtitle: 'Unknown' }]) {
    assert.equal(readSongTitle(data), '');
  }
});
test('Atualização periódica substitui título antigo por fallback ao falhar', async () => {
  let calls = 0;
  const titles = [];
  await new Promise((resolve) => {
    const stop = startMetadataPolling({
      url: '/api/now-playing', interval: 1,
      fetcher: async () => {
        if (calls++ === 0) return { ok: true, json: async () => ({ streamstatus: 1, songtitle: 'Título do servidor' }) };
        throw new Error('offline');
      },
      onTitle: (title) => {
        titles.push(title);
        if (titles.length === 2) { stop(); resolve(); }
      },
    });
  });
  assert.deepEqual(titles, ['Título do servidor', '']);
});
test('Resposta tardia não atualiza a página após cancelamento', async () => {
  let finish;
  const titles = [];
  const stop = startMetadataPolling({
    url: '/api/now-playing', interval: 1,
    fetcher: () => new Promise((resolve) => { finish = resolve; }),
    onTitle: (title) => titles.push(title),
  });
  stop();
  finish({ ok: true, json: async () => ({ streamstatus: 1, songtitle: 'Antigo' }) });
  await new Promise((resolve) => setImmediate(resolve));
  assert.deepEqual(titles, []);
});

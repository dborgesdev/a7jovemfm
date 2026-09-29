import { radio } from '../src/config.js';
import { readSongTitle } from '../src/metadata.js';

// Consulta no servidor, como na referência Geração Vinil: o upstream não envia CORS.
let cached;
let expires = 0;
let pending;
export async function getNowPlayingStats() {
  if (cached && Date.now() < expires) return cached;
  if (pending) return pending;
  pending = (async () => {
    try {
      const response = await fetch(radio.stats, {
        signal: AbortSignal.timeout(6000),
        headers: { 'User-Agent': 'A7JovemFM/1.0' },
      });
      if (!response.ok) throw new Error('Stats unavailable');
      const data = await response.json();
      cached = { songtitle: readSongTitle(data), streamstatus: data.streamstatus === 1 ? 1 : 0 };
    } catch {
      cached = { songtitle: '', streamstatus: 0 };
    }
    expires = Date.now() + radio.metadataInterval;
    return cached;
  })();
  try { return await pending; } finally { pending = undefined; }
}

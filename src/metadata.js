// Somente o título recebido do servidor; sem inferir artista, capa ou gênero.
export function readSongTitle(data) {
  if (!data || data.streamstatus !== 1 || typeof data.songtitle !== 'string') return '';
  const title = data.songtitle.trim();
  if (!title || title.length > 300 || /^(unknown|undefined|null|auto.?dj|stream|web radio|ao vivo)$/i.test(title)) return '';
  return title;
}

export function startMetadataPolling({ url, interval, onTitle, fetcher = fetch }) {
  let stopped = false;
  let timer;
  let controller;
  async function refresh() {
    controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetcher(url, { signal: controller.signal, cache: 'no-store' });
      if (!response.ok) throw new Error('Metadata unavailable');
      const data = await response.json();
      if (!stopped) onTitle(readSongTitle(data));
    } catch {
      if (!stopped) onTitle('');
    } finally {
      clearTimeout(timeout);
      if (!stopped) timer = setTimeout(refresh, interval);
    }
  }
  refresh();
  return () => { stopped = true; clearTimeout(timer); controller?.abort(); };
}

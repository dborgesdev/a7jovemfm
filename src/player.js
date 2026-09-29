export function createPlayer(audio, onState) {
  let request = 0;
  let timeout;
  const update = (state) => { clearTimeout(timeout); onState(state); };
  const fail = () => { request++; audio.pause(); update('error'); };
  audio.addEventListener('playing', () => update('playing'));
  audio.addEventListener('pause', () => update('paused'));
  audio.addEventListener('error', fail);
  audio.addEventListener('ended', () => update('paused'));
  audio.addEventListener('waiting', () => {
    if (!audio.paused) { update('loading'); timeout = setTimeout(fail, 20000); }
  });
  return {
    async play() {
      if (!audio.paused && !audio.error) return;
      const current = ++request;
      if (audio.error) audio.load();
      update('loading');
      timeout = setTimeout(fail, 20000);
      try { await audio.play(); } catch {
        if (current === request) update('error');
      }
    },
    pause() { request++; audio.pause(); update('paused'); },
    volume(value) { audio.volume = Math.min(1, Math.max(0, value)); },
  };
}

import { radio } from './config.js';
import { createPlayer } from './player.js';
import { initNavigation } from './navigation.js';
import { startMetadataPolling } from './metadata.js';

document.querySelectorAll('[data-app]').forEach((link) => { link.href = radio.app; });
document.querySelectorAll('[data-instagram]').forEach((link) => { link.href = radio.instagram; });
const audio = document.querySelector('#radio-audio');
const toggle = document.querySelector('#play-toggle');
const status = document.querySelector('#player-status');
const error = document.querySelector('#player-error');
let state = 'paused';
audio.src = radio.stream;
const player = createPlayer(audio, (next) => {
  state = next;
  const active = next === 'playing' || next === 'loading';
  toggle.setAttribute('aria-label', active ? 'Pausar A7 Jovem FM' : 'Reproduzir A7 Jovem FM');
  toggle.setAttribute('aria-pressed', String(active));
  toggle.dataset.state = next;
  toggle.querySelector('span').textContent = active ? 'Ⅱ' : '▶';
  status.textContent = { paused: 'Pronto para ouvir', loading: 'Conectando…', playing: 'Reproduzindo ao vivo', error: 'Reprodução indisponível' }[next];
  error.hidden = next !== 'error';
});
toggle.addEventListener('click', () => {
  if (state === 'playing' || state === 'loading') player.pause(); else player.play();
});
document.querySelectorAll('[data-listen]').forEach((button) => button.addEventListener('click', () => {
  player.play();
  document.querySelector('#ao-vivo').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  toggle.focus({ preventScroll: true });
}));
const volume = document.querySelector('#volume');
player.volume(Number(volume.value));
volume.addEventListener('input', () => player.volume(Number(volume.value)));
initNavigation();
const songTitle = document.querySelector('#song-title');
let stopMetadata;
function connectMetadata() {
  stopMetadata?.();
  stopMetadata = startMetadataPolling({
    url: radio.metadataPath,
    interval: radio.metadataInterval,
    onTitle: (title) => { songTitle.textContent = title || 'A7 Jovem FM • Ao vivo'; },
  });
}
connectMetadata();
window.addEventListener('pagehide', () => stopMetadata?.());
window.addEventListener('pageshow', (event) => { if (event.persisted) connectMetadata(); });

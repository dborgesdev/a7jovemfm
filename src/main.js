import { radio } from './config.js';
import { initNavigation } from './navigation.js';

document.querySelectorAll('[data-app]').forEach((link) => { link.href = radio.app; });
document.querySelectorAll('[data-instagram]').forEach((link) => { link.href = radio.instagram; });

const iframe = document.querySelector('#radio-player');
iframe.src = radio.player;

document.querySelectorAll('[data-listen]').forEach((button) => button.addEventListener('click', () => {
  document.querySelector('#ao-vivo').scrollIntoView({
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'center',
  });
  iframe.focus({ preventScroll: true });
}));

initNavigation();

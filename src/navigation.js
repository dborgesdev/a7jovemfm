export function initNavigation() {
  const toggle = document.querySelector('#menu-toggle');
  const nav = document.querySelector('#navigation');
  const close = () => { toggle.setAttribute('aria-expanded', 'false'); nav.classList.remove('is-open'); };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    nav.classList.toggle('is-open', open);
  });
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) close(); });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { close(); toggle.focus(); }
  });
  document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && !toggle.contains(event.target)) close();
  });
  matchMedia('(min-width: 701px)').addEventListener('change', close);
}

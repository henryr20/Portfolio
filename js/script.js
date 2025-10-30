const btn = document.getElementById('nav-toggle');
const menu = document.getElementById('nav-list');

btn.addEventListener('click', () => {
  menu.classList.toggle('is-open');
});

document.addEventListener('click', (e) => {
  const clickFuera = !menu.contains(e.target) && !btn.contains(e.target);
  if (clickFuera && menu.classList.contains('is-open')) {
    menu.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }
});
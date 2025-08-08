// app.js — yashalava
const toggle = document.querySelector('.menu-toggle');
const drawer = document.getElementById('mobile-menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    drawer.hidden = open;
  });
}

const root = document.documentElement;
const themeBtn = document.getElementById('themeToggle');
const saved = localStorage.getItem('theme');
if (saved) document.documentElement.setAttribute('data-theme', saved);
themeBtn?.addEventListener('click', () => {
  const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  })
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelector('.preorder')?.addEventListener('submit', (e)=>{
  const btn = e.target.querySelector('button');
  btn.disabled = true; btn.textContent = 'Спасибо! Проверяйте почту';
  setTimeout(()=>{btn.disabled=false; btn.textContent='Уведомить меня'}, 4000);
});

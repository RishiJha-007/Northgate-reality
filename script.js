const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu-button');

menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  })
);

document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault();
  alert('Thank you! Our team will contact you shortly.');
});

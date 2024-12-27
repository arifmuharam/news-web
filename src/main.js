import './scss/style.scss';

const body = document.querySelector('body');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

function openMobileNavigation() {
  btnOpen.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
}

function closeMobileNavigation() {
  btnOpen.setAttribute('aria-expanded', 'false');
  body.classList.remove('noscroll');
}

function setupNav(e) {
  if (e.matches) {
    // Mobile
    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
  } else {
    navContent.style.display = '';
  }
}

setupNav(media);

btnOpen.addEventListener('click', openMobileNavigation);
btnClose.addEventListener('click', closeMobileNavigation);

media.addEventListener('change', (e) => {
  setupNav(e);
});

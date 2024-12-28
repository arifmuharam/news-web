import './scss/style.scss';

const body = document.querySelector('body');
const main = document.querySelector('main');
const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 69.375em)');
const navContent = document.querySelector('.nav__content');
const navOverlay = document.querySelector('.nav__overlay');

function openMobileNavigation() {
  btnOpen.setAttribute('aria-expanded', 'true');
  body.classList.add('noscroll');
  navContent.removeAttribute('inert');
  main.setAttribute('inert', '');
  btnClose.focus();
}

function closeMobileNavigation() {
  btnOpen.setAttribute('aria-expanded', 'false');
  body.classList.remove('noscroll');
  navContent.setAttribute('inert', '');
  main.removeAttribute('inert');
  btnOpen.focus();
}

function setupNav(e) {
  if (e.matches) {
    // Mobile
    navContent.setAttribute('inert', ''); // Atur Aksesibilitas (Screen Reader) Saat Tab Tidak ke Menu nav__content

    setTimeout(() => {
      navContent.style.display = 'block';
      navOverlay.style.display = 'block';
    }, 500);
  } else {
    // Desktop
    navContent.style.display = '';
    navContent.removeAttribute('inert');
    main.removeAttribute('inert');
  }
}

setupNav(media);

btnOpen.addEventListener('click', openMobileNavigation);
btnClose.addEventListener('click', closeMobileNavigation);

media.addEventListener('change', (e) => {
  setupNav(e);
});

// Atur Aksesibilitas (Screen Reader)
document.addEventListener('keyup', (e) => {
  if (e.key == 'Tab') {
    console.log(document.activeElement);
  }
});

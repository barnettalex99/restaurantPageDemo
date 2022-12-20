import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

const content = document.getElementById('content');
const nav = document.createElement('nav');
nav.setAttribute('id', 'nav');
const header = document.createElement('header');
header.setAttribute('id', 'header');
const main = document.createElement('div');
main.setAttribute('id', 'main');
const footer = document.createElement('div');
footer.setAttribute('id', 'footer');

function clearMain() {
  let mainContent = document.getElementsByClassName('main-content');
  mainContent[0].remove();
}

function navTo(loadPage) {
  clearMain();
  if (loadPage === 'home') {
    main.appendChild(loadHome());
  } else if (loadPage === 'menu') {
    main.appendChild(loadMenu());
  } else if (loadPage === 'contact') {
    main.appendChild(loadContact());
  }
  content.appendChild(main);
  content.insertBefore(main, footer);
}

function createNav() {
  const homeButton = document.createElement('button');
  homeButton.setAttribute('id', 'home-button');
  homeButton.addEventListener('click', () => { navTo('home'); });
  homeButton.textContent = 'HOME';
  const menuButton = document.createElement('button');
  menuButton.setAttribute('id', 'menu-button');
  menuButton.addEventListener('click', () => { navTo('menu'); });
  menuButton.textContent = 'MENU';
  const contactButton = document.createElement('button');
  contactButton.setAttribute('id', 'contact-button');
  contactButton.addEventListener('click', () => { navTo('contact'); });
  contactButton.textContent = 'CONTACT';
  nav.appendChild(homeButton);
  nav.appendChild(menuButton);
  nav.appendChild(contactButton);
  return nav;
}

function createHeader() {
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = 'SPACE GRUB';
  header.appendChild(restaurantName);
  header.appendChild(createNav());
  return header;
}

function createMain() {
  main.appendChild(loadHome());
  return main;
}

function createFooter() {
  const copyright = document.createElement('div');
  copyright.setAttribute('id', 'copyright');
  const copyrightText = 'Copyright 2022 barnettalex99';
  copyright.innerHTML = copyrightText;
  footer.appendChild(copyright);
  return footer;
}

function initializeWebsite() {
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default initializeWebsite;

import 'regenerator-runtime';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/root.css';
import '../styles/nav.css';
import '../styles/header.css';
import '../styles/main.css';
import '../styles/footer.css';
import '../styles/responsive.css';
import '../styles/spinner.css';
import '../styles/restaurant-detail.css';
import '../styles/restaurant-fav.css';
import App from './view/app';
import swRegister from './utils/sw-register';
import './component/navbar';
import './component/header';
import './component/footer';

const app = new App({
  button: document.querySelector('.menu'),
  drawer: document.querySelector('.nav-list'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

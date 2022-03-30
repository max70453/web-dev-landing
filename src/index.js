import '@fortawesome/fontawesome-free/js/all';
import 'animate.css';
import './styles/index.scss';
import './js/search';
import './js/slider';
import './js/contactFormValidate';
import './js/burgerMenu';
import './js/clickclose';
import './js/headerScroll';
import './js/navigation';
import WOW from 'wow.js/dist/wow.js';
import clickclose from './js/clickclose';

new WOW().init();

document.addEventListener('', () => {
  Slider();
  Search();
  formValidate();
  burgerMenu();
  clickclose();
  scrollHeader();
  navigation();
});



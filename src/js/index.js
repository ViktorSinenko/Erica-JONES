import Swiper from "swiper";

import mobileNav from './modules/mobile-nav.js';
import accordion from './modules/accordion.js';
import mask from './modules/loader.js';

mobileNav();
accordion();
// mask();

console.log(Swiper);


const swiper = new Swiper(".swiper", {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});



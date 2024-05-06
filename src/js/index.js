import Swiper from "swiper";

import mobileNav from './modules/mobile-nav.js';
import accordion from './modules/accordion.js';

mobileNav();
accordion();

console.log(Swiper);


const swiper = new Swiper(".swiper", {
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});



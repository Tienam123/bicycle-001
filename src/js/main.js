import Swiper from "swiper";
import {Autoplay, Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuBtn = document.querySelector('.nav-header__menu-button');
const mobileMenu = document.querySelector('.nav-header__menu-list');
menuBtn.addEventListener('click', handleClickMenuBtn);

function handleClickMenuBtn(e) {
    menuBtn.classList.toggle('active')
    mobileMenu.classList.toggle('is-open')

}

const swiper = new Swiper('.swiper', {
    modules:    [
        Navigation,
        Pagination,
        Autoplay,
    ],
    pagination: {
        el: '.swiper-pagination',
        clickable: true,  // Пагинация будет кликабельной
    },
    loop:       true,
    autoplay:   {
        delay:             5000,
        waitForTransition: true,
    },
    speed:      1000,
    direction:  'horizontal',
    effect:     'fade',
    fadeEffect: {
        crossFade: true,
    },

});
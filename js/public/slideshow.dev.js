"use strict";

var swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 3 * 1000
  },
  grid: {
    rows: 3
  },
  breakpoints: {
    768: {
      grid: {
        rows: 1
      },
      slidesPerView: 3,
      spaceBetween: 24
    }
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
"use strict";

var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 24,
  //分頁
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true
});
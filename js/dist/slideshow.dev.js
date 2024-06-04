"use strict";

var swiper = new Swiper('.swiper', {
  spaceBetween: 24,
  autoplay: {
    // 自動輪播 swiper
    delay: 3 * 1000 // 每兩秒切換下一張

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
  //分頁
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  loop: true
});
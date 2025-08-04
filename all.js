const swiper = new Swiper(".intro-swiper", {
  //手機優先
  slidesPerView: 1.1,
  spaceBetween: 16,
  //桌機
  breakpoints: {
    768: {
      slidesPerView: 2.3,
      spaceBetween: 24,
    },
  },
  autoplay: true,
});

const aboutsSwiper = new Swiper(".about-swiper", {
  //手機優先
  slidesPerView: 1.1,
  spaceBetween: 16,
  //桌機
  breakpoints: {
    768: {
      slidesPerView: 3.8,
      spaceBetween: 24,
    },
  },
  autoplay: true,
});

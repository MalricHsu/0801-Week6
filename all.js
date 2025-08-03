const swiper = new Swiper(".intro-swiper", {
  //手機優先
  slidesPerView: 1.1,
  spaceBetween: 16,
  grid: {
    rows: 1,
    fill: "row",
  },
  //桌機
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 24,
    },
  },
  autoplay: true,
});

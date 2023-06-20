const swiper = new Swiper('.swiper-loved', {
  direction: 'horizontal',
  loop: false,
  initialSlide: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: true,
  autoplaySpeed: 7500,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  waitForAnimate: false,
  spaceBetween: 20, // Встановити відстань між картками
  slidesPerView: 'auto',
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 16, // Встановити відстань між картками
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28, // Встановити відстань між картками
    },
  },
});

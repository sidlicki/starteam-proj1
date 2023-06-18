const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false, // Вимкнення параметра loop
  initialSlide: 0, // Встановлення початкового слайда на перший елемент
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 20,
  autoplay: true,
  autoplaySpeed: 7500,
  pauseOnHover: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  waitForAnimate: false,
  variableWidth: true,
  slidesPerView: 'auto',
});
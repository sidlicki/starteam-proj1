let swiper = null;

function initializeSwiper() {
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  if (swiper !== null) {
    swiper.destroy(); // Видаляємо попередню інстанцію Swiper
  }

  swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    initialSlide: 0,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    spaceBetween: 18,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDotsHover: true,
    waitForAnimate: false,
    variableWidth: true,
    slidesPerView: 'auto',
    speed: 400,
    effect: mediaQuery.matches ? 'cube' : 'slide', // Змінюємо ефект в залежності від розміру екрану

    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },

    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
    mousewheel: {
      sensitivity: 1,
    },
  });

  swiper.init(); // Ініціалізуємо новий екземпляр Swiper з оновленими настройками
}

window.addEventListener('DOMContentLoaded', initializeSwiper);
window.addEventListener('resize', initializeSwiper);

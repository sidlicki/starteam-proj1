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
    variableWidth: true,
    slidesPerView: 'auto',
    breakpoints: {
      768: {
        slidesPerView: 2, // Відображати 2 елементи на екранах шириною 768px і більше
      },
      1200: {
        slidesPerView: 3, // Відображати 3 елементи на екранах шириною 1200px і більше
      },
    },
  });
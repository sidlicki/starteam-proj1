  // Отримуємо посилання на відео та кнопку
  var video = document.getElementById("made_video");
  var button = document.getElementById("button-play-video");

  // Функція для зміни видимості відео та кнопки
  function toggleVideo() {
    video.classList.toggle("hidden");
    button.classList.toggle("hidden");
  }

  // Додати обробник події для кнопки
  button.addEventListener("click", toggleVideo);

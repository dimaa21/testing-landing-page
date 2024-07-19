const slider = document.querySelector('.slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.style.transition = 'none'; // Вимкнути плавний перехід під час перетягування
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
  slider.style.transition = 'transform 0.5s ease'; // Включити плавний перехід після відпускання
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Налаштування швидкості прокручування
  slider.scrollLeft = scrollLeft - walk;
});

let currentIndex = 1;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function updateSliderPosition() {
  slider.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
}

function autoSlide() {
  currentIndex++;
  if (currentIndex >= totalSlides - 1) {
    currentIndex = 1;
    slider.style.transition = 'none';
    slider.style.transform = `translateX(-${currentIndex * 100 / totalSlides}%)`;
    setTimeout(() => {
      slider.style.transition = 'transform 0.5s ease';
    }, 20);
  } else {
    slider.style.transition = 'transform 0.5s ease';
    updateSliderPosition();
  }
}

slider.addEventListener('transitionend', () => {
  if (currentIndex === 0) {
    currentIndex = totalSlides - 2;
    slider.style.transition = 'none';
    updateSliderPosition();
  }
  if (currentIndex === totalSlides - 1) {
    currentIndex = 1;
    slider.style.transition = 'none';
    updateSliderPosition();
  }
});

setInterval(autoSlide, 5000); // Автоматична зміна кожні 5 секунд

// Ініціалізуємо початкову позицію
updateSliderPosition();

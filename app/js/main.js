<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
  const carousel = document.querySelector('.slider-carousel');
  const images = document.querySelectorAll('.slider-carousel .slider-img');
  const leftArrow = document.getElementById('left');
  const rightArrow = document.getElementById('right');
  let currentIndex = 0;
  const totalImages = images.length;
  let autoSlide;

  const startAutoSlide = () => {
    autoSlide = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      updateCarousel();
    }, 3000);
  };

  const updateCarousel = () => {
    const offset = currentIndex * 100; // Adjust based on the image width
    carousel.style.transform = `translateX(-${offset}%)`;
  };

  const handleManualNavigation = (direction) => {
    clearInterval(autoSlide);
    if (direction === 'left') {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    } else {
      currentIndex = (currentIndex + 1) % totalImages;
    }
    updateCarousel();
    startAutoSlide();
  };

  leftArrow.addEventListener('click', () => handleManualNavigation('left'));
  rightArrow.addEventListener('click', () => handleManualNavigation('right'));

  let isDragging = false;
  let startPos = 0;
  let currentTranslate = 0;
  let prevTranslate = 0;
  let animationID = 0;

  carousel.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPos = e.pageX - carousel.offsetLeft;
    clearInterval(autoSlide);
    animationID = requestAnimationFrame(animation);
    carousel.classList.add('dragging');
  });

  carousel.addEventListener('mouseup', () => {
    isDragging = false;
    cancelAnimationFrame(animationID);
    carousel.classList.remove('dragging');
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) {
      currentIndex = (currentIndex + 1) % totalImages;
    }
    if (movedBy > 100) {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }
    updateCarousel();
    startAutoSlide();
  });

  carousel.addEventListener('mouseleave', () => {
    if (isDragging) {
      isDragging = false;
      cancelAnimationFrame(animationID);
      carousel.classList.remove('dragging');
      updateCarousel();
      startAutoSlide();
    }
  });

  carousel.addEventListener('mousemove', (e) => {
    if (isDragging) {
      const currentPosition = e.pageX - carousel.offsetLeft;
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  });

  carousel.addEventListener('touchstart', (e) => {
    isDragging = true;
    startPos = e.touches[0].clientX - carousel.offsetLeft;
    clearInterval(autoSlide);
    animationID = requestAnimationFrame(animation);
    carousel.classList.add('dragging');
  });

  carousel.addEventListener('touchend', () => {
    isDragging = false;
    cancelAnimationFrame(animationID);
    carousel.classList.remove('dragging');
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -100) {
      currentIndex = (currentIndex + 1) % totalImages;
    }
    if (movedBy > 100) {
      currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    }
    updateCarousel();
    startAutoSlide();
  });

  carousel.addEventListener('touchmove', (e) => {
    if (isDragging) {
      const currentPosition = e.touches[0].clientX - carousel.offsetLeft;
      currentTranslate = prevTranslate + currentPosition - startPos;
    }
  });

  const animation = () => {
    setCarouselPosition();
    if (isDragging) requestAnimationFrame(animation);
  };

  const setCarouselPosition = () => {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
  };

  startAutoSlide();
});
=======
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
>>>>>>> e01ebec52e5a5d98c407106835208094c2bd1285

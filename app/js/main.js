document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel .slider-img');
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
      const offset = currentIndex * (carousel.clientWidth / 3); // Adjust based on the image width
      carousel.scrollTo({
        left: offset,
        behavior: 'smooth'
      });
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
  
    const animation = () => {
      setCarouselPosition();
      if (isDragging) requestAnimationFrame(animation);
    };
  
    const setCarouselPosition = () => {
      carousel.style.transform = `translateX(${currentTranslate}px)`;
    };
  
    startAutoSlide();
  });
  
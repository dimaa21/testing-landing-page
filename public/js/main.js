new Swiper('.image-slider', {
  simulateTouch: true,

  touchRatio: 1,

  touchAngle: 45, 

  grabCursor: true,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },

  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.image-slider',
  },

  autoHeight: true,

  height: 300,

  slidesPerView: 4.5,

  spaceBetween: 10,

  loop: true,

  loopedSlised: 3,

  freeMood: true,

  autoplay: {
    delay: 1000, 

    stopOnLastSlide: true, 

    disableOnInteraction: false,
    
    speed: 800
    },
    
breakpoints: {
    320: {
        slidesPerView: 1,
    },
    480: {
        slidesPerView: 2,
    },
    992: {
        slidesPerView: 3,
    }
},
  
});

new Swiper('.image-slider-2', {
    simulateTouch: true,
  
    touchRatio: 1,
  
    touchAngle: 45, 
  
    grabCursor: true,
  
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  
    mousewheel: {
      sensitivity: 1,
      eventsTarget: '.image-slider-2',
    },
  
    autoHeight: true,
  
    slidesPerView: 4.5,
  
    spaceBetween: 5,
  
    loop: true,
  
    loopedSlised: 3,
  
    freeMood: true,
  
    autoplay: {
      delay: 1000, 
  
      stopOnLastSlide: true, 
  
      disableOnInteraction: false,
      
      speed: 800
      },
      
  breakpoints: {
      320: {
          slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      992: {
          slidesPerView: 3,
      }
  },
    
  });


  window.onload = function() {
    document.getElementById('scroll-button').addEventListener('click', function() {
      document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scroll-button-2').addEventListener('click', function() {
      document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scroll-button-3').addEventListener('click', function() {
      document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('scroll-button-4').addEventListener('click', function() {
      document.getElementById('form-container').scrollIntoView({ behavior: 'smooth' });
    });
  }
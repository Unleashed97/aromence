const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 10,

  
    // If we need pagination
    pagination: {
      el: '.slider__dots',
      type: 'bullets',
      clickable: true,
    
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.slider__btn--next',
      prevEl: '.slider__btn--prev',
    },
});
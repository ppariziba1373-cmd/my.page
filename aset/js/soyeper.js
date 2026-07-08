const swiper = new Swiper('.swiper', {
//   direction: 'vertical',
  direction: 'horizontal',
  loop: true,

speed:1500,

  autoplay:{
    delay:3000,
  },
  
  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
  
});



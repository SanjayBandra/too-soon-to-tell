// Sticky Header Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header-nav');
    header.classList.toggle('sticky', window.scrollY > 0);
});

// Simple Department Menu Toggle (for mobile/tablet)
const dptTrigger = document.querySelector('.dpt-trigger');
const dptMenu = document.querySelector('.dpt-menu');

if(dptTrigger) {
    dptTrigger.addEventListener('click', () => {
        dptMenu.classList.toggle('show');
    });
}
//SLIDER
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },



  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
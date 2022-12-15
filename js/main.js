new Swiper('.promotion .swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
    delay: 3000
    },
    slidesPerView: 3,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: true
});

const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8
})
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
});
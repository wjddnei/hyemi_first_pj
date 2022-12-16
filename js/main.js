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

const listIcon = document.querySelector('.list__icon');
const listEl = document.querySelector('.list');
const exitIcon = document.querySelector('.exit__icon');

listIcon.addEventListener('click',function(){
// toggle은 없으면 넣어주고 있으면 빼준다 add remove 합친거라 생각하면 됨
listEl.classList.toggle('active');
});
exitIcon.addEventListener('click',function(){
  // toggle은 없으면 넣어주고 있으면 빼준다 add remove 합친거라 생각하면 됨
  listEl.classList.toggle('active');
  });

import 'swiper/css';
import Swiper, { Pagination } from 'swiper';
import 'swiper/css/pagination';

Swiper.use([Pagination]);

const Slider = function(){
  const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    loop: true,
    loopFillGroupWithBlank: true,
    
    pagination: {
      dynamicBullets: true,
      dynamicMainBullets: 3,
      el: '.swiper-pagination',
      clickable: true
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20
      },
      // when window width is >= 640px
      640: {
        spaceBetween: 30,
        slidesPerView: 3,
        slidesPerGroup: 3,
      }
    }
  });
};

export default Slider();

import $ from 'jquery';

const burgerMenu = function(){
  const burger = $('.header__burger');
  const navigation = $('.header__menu-mobile');

  burger.on('click', function(){
    navigation.addClass('animate__animated animate__fadeInDown')
    navigation.css({display: 'block'});
    window.addEventListener('resize', function(){
      if(window.innerWidth > 720){
        navigation.css({display: 'none'});
      }
    });
  });
};

export default burgerMenu();
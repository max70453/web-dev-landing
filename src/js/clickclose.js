import $ from 'jquery';

const clickClose = function(){
  const closeIcon = $('.header__iconCloseWrap');
  const navigation = $('.header__menu-mobile');

  closeIcon.on('click', function(){
    navigation.removeClass('animate__animated animate__fadeInDown');
    navigation.css({display: 'none'});
  });
};

export default clickClose();
import $ from 'jquery';

const scrollHeader = function(){
  
  const header = $('.header');
  const headerContent = $('.header__content');
  const logo = $('.header__logo');
  header.addClass('animate__animated animate__fadeInDown wow')
  logo.addClass('animate__animated animate__bounce animate__delay-1s')

  $(document).on('scroll', function(){
    if ($(this).scrollTop() > 100){
      headerContent.css({paddingTop: '5px', paddingBottom: '5px'});
      logo.css({width: '6%'})
    }
    else{
      headerContent.css({paddingTop: '10px', paddingBottom: '10px'});  
      logo.css({width: '8%'})
    } 
  });
};

export default scrollHeader();

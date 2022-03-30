import $ from 'jquery';

const Search = function(){
  const search = $('.header__search');
  const inputSearch = $('.header__inputSearch');
  const burger = $('.header__burger');

  search.on('click', function(){
    burger.css({display: 'none'});
    inputSearch.animate({opacity: 'show'}, 1500);
    inputSearch.trigger( "focus" ) 
  });

  inputSearch.on('focusout', function(){
    inputSearch.css( {display: 'none'} );
    burger.animate({opacity: 'show'}, 1500);
  })
};

export default Search();

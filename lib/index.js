$('.img-holder').on('click', function(){
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?numer='+modelLink;
});

let centerNextPrevHolder = function(){
  // $('.nextprevHolder').hide();
  let element_width = $('.nextprevHolder').innerWidth();
  $('.nextprevHolder').css({'margin-left': -element_width/2 });
  $('.nextprevHolder').fadeIn(800);
  // console.log(element_width);
}
centerNextPrevHolder();

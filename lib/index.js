$('.img-holder').on('click', function(){
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?model='+modelLink;
});
$('.category_container').on('click', function(){
  window.location.href = 'index.php';
});
let centerNextPrevHolder = function(){
  let element_width = $('.nextprevHolder').innerWidth();
  $('.nextprevHolder').css({'margin-left': -element_width/2 });
  $('.nextprevHolder').fadeIn(800);
}
centerNextPrevHolder();

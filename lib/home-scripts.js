$('.load-model').on('click', function(){
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?model='+modelLink;
});

$('.img-holder').on('click', function(){
  let category = $(this).data('category');
  $('#category-' + category).css('display', 'flex');
});

$('.category__close').on('click', function(){
  $('.category').fadeOut();
});
$('.category').on('click', function(e){
  if (e.target.className == "category") {
    $('.category').fadeOut();
  }
});
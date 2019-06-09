$('.img-holder').on('click', function(){
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?numer='+modelLink;
});

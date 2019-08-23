let sizePopulate = function (familyFetch) {
  $('.clickOverlay').remove();
  $('.sizeSelector2').append('<div class="clickOverlay"><ul class="topWrapper"><p class="ssClickOverlay"></p></ul></div>');
  for (i = 0; i <= familyFetch.length - 1; i++) {
    let niceName = models[familyFetch[i]].name;
    let csOption = '<li value="' + familyFetch[i] + '">' + niceName + '</li>';
    $('.topWrapper').append(csOption);
  }
  $('.ssClickOverlay').on('click', function () {
    $('.topWrapper').toggleClass('onClick');
  });
  selectActive();
  sortAfterChosen();
}

let selectActive = function () {
  $('.topWrapper li[value=' + cookieModel + ']').addClass('ssActive');
}

let sortAfterChosen = function () {
  var listitems = $('li:not(.ssActive)', $('.topWrapper')).get();
  listitems.sort(function (a, b) {
    var compA = $(a).text().toUpperCase();
    var compB = $(b).text().toUpperCase();
    return (compA < compB) ? -1 : 1;
  });
  $.each(listitems, function (i, itm) {
    $('.topWrapper').append(itm)
  });
}

$(document).on('click', '.srozmiar li', function () {
  cookieModel = $(this).attr('value');
  history.pushState(null, null, 'index_2.php?model=' + cookieModel);
  Cookies.set(cookieModel, chosenArray, {
    expires: 7
  });
  selectActive();
  animIn(cookieModel);

  if( Cookies.get('textureSwitch') == 'yes' ){
    $('.dnp, .cwn').click();
  }

  if( models[cookieModel].hasOwnProperty('dimensions') ){
    // console.log('posiada wymiary');
    $('.swymiar').show();
    $('.srozmiar').css({'margin-bottom': '0em'});
  }
  else {
    group_main.scale.set(1, 1, 1);
    // console.log('nie posiada wymiarow');
    $('.swymiar').hide();
    $('.topWrapper3').empty();
    $('.srozmiar').css({'margin-bottom': '1em'});
  }

});
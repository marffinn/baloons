let dimensionPopulate = function (dimensionsFetch) {

    if (typeof dimensionsFetch !== 'undefined' && dimensionsFetch.length > 0) {
      $('.clickOverlay3').remove();
      $('.sizeSelector3').append('<div class="clickOverlay3"><ul class="topWrapper3"><p class="ssClickOverlay3"></p></ul></div>');
      for (i = 0; i <= dimensionsFetch.length - 1; i++) {
        let csOption = '<li value="' + dimensionsFetch[i][1] + '">' + dimensionsFetch[i][0] + '</li>';
        $('.topWrapper3').append(csOption);
      }
      $('.ssClickOverlay3').on('click', function () {
        $('.topWrapper3').toggleClass('onClick');
      });

      selectActive3('1');
      sortAfterChosen3();
    }
  }


  let selectActive3 = function (cookieScale) {
    $('.topWrapper3 li').removeClass('ssActive3');
    $('.topWrapper3 li[value="'+cookieScale+'"]').addClass('ssActive3');
  }
  
  $(document).ready(function() {
    str = $('.sizeSelector3').text();
    if($.trim(str) === "") {
      $('.swymiar').hide();
    }
 });


  let sortAfterChosen3 = function () {
    var listitems = $('li:not(.ssActive3)', $('.topWrapper3')).get();
    listitems.sort(function (a, b) {
      var compA = $(a).text().toUpperCase();
      var compB = $(b).text().toUpperCase();
      return (compA < compB) ? -1 : 1;
    });
    $.each(listitems, function (i, itm) {
      $('.topWrapper3').append(itm)
    });
  }
  


  $(document).on('click', '.swymiar li', function () {
    cookieScale = $(this).attr('value');
    let scaleSet = { 'scale': cookieScale }
    Cookies.set(cookieModel, scaleSet, {
      expires: 7
    });
    group_main.scale.set(cookieScale, cookieScale, cookieScale);
    selectActive3(cookieScale);
    sortAfterChosen3();
    $('.topWrapper3').removeClass('onClick');
  });
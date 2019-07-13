var clipboard = new ClipboardJS('.btn');

$('.img-holder').on('click', function() {
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?model=' + modelLink;
});
$('.category_container').on('click', function() {
  window.location.href = 'index.php';
});

$('.sizeSelector').on('selectric-change', function(event, element, selectric) {
  chosenModel = $(".selected, .last.selected").text();
  cookieModel = chosenModel;

  animIn(chosenModel);
  history.pushState(null, null, 'index_2.php?model=' + chosenModel);
  Cookies.set(chosenModel, chosenArray, {
    expires: 7
  });

});

$('.cwn, .dnp').on('click', function() {
  $("#modal").fadeIn();
});

$("#modal p, #modalOrder p").on('click', function() {
  $("#modal, #modalOrder").fadeOut();
});

$('.srozmiar a.clr').on('click', function() {
  $('.srozmiar a').each(function() {
    $(this).removeClass('check')
  });
});

$('.skolory a:not(".clr")').on('click', function() {
  $('.skolory a p').removeClass('mark');
  let selected_color = $(this).attr('hex');
  let object = scene.getObjectByName(objectChosen, true);
  let hexConverted = selected_color.replace('#', '0x');
  color.setHex(hexConverted);
  object.material.color.set(color);
  $(this).children('p').toggleClass('mark');
  chosenArray[object.name] = selected_color;
  Cookies.set(cookieModel, chosenArray, {
    expires: 7
  });
});

$('.select a.clr').on('click', function() {
  $(this).toggleClass('check');
});

$('.fullscreen_container').on('click', function() {
  let state = $(this).attr('state');
  if (state == 'on') {
    THREEx.FullScreen.cancel();
    $(this).attr('state', 'off');
    for (x; x <= blinkCount; x++) {
      $(this).fadeOut(100).delay(100).fadeIn(100);
    }
  } else {
    THREEx.FullScreen.request();
    $(this).attr('state', 'on');
    for (x; x <= blinkCount; x++) {
      $(this).fadeOut(100).delay(100).fadeIn(100);
    }
  }
});

$('.rotate_container').on('click', function() {
  let switchState = $(this).attr('state');
  if (switchState == 'off') {
    rotationSpeed = 0.005;
    $(this).attr('state', 'on');
  } else {
    rotationSpeed = 0;
    $(this).attr('state', 'off');
  }
});

$('.rotateRight').mousedown(function() {
  rotationSpeed = 0.02;
}).mouseup(function() {
  rotationSpeed = 0;
}).mouseleave(function() {
  rotationSpeed = 0;
});

$('.rotateLeft').mousedown(function() {
  rotationSpeed = -0.02;
}).mouseup(function() {
  rotationSpeed = 0;
}).mouseleave(function() {
  rotationSpeed = 0;
});

if (Cookies.get('info') == 'seen') {
  $('.pickInfo').hide();
}

$('.pickInfo p').on('click', function() {
  $('.pickInfo').fadeOut();
  Cookies.set('info', 'seen', {
    expires: 7
  });
});

$('.info_container').on('click', function() {
  $('.pickInfo').fadeIn();
});

$('.zoomIn').on('click', function(event) {
  event.preventDefault();
  controls.zoomIn();
});
$('.zoomOut').on('click', function(event) {
  event.preventDefault();
  controls.zoomOut();
});

$('.select i, .select h4').on('click', function() {
  $(this).parent().find('.listerFoldable').stop().slideToggle();
});

$('input, textarea').on('click', function() {
  $(this).focus();
});

$('.backToconfig, .placeOrder').on('click', function() {
  $('.pick, .order').slideToggle();
});

let messageSent = function(response) {
  if (response == 'OK') {
    $('.orderModelName').text(' Zapytanie ofertowe zostało wysłane pozytywnie');
    $('#modalOrder').fadeIn().delay(4000).fadeOut();
    $('.pick, .order').slideToggle();

  } else {
    $('.orderModelName').text(' Zapytanie ofertowe nie zostało wysłane, upewnij się czy wypełniono wszystkie pola formularza');
    $('#modalOrder').fadeIn();
  }
}
// ===================================================================================

function jsonToURI(json) {
  return encodeURIComponent(JSON.stringify(json));
}

function uriToJSON(urijson) {
  return JSON.parse(decodeURIComponent(urijson));

}

let linkInterpreter = function(link) {

  if (link == undefined) {
    link = window.location.href;
  }

  let retrievedArray = JSON.parse(decodeURIComponent(link.split('#')[1]));

  $.each(retrievedArray, function(k, v) {
    let option = '<li> <i>' + k + '</i> <b>' + v + '</b> </li>';
    console.log(option);
  });

}
linkInterpreter();
// ===================================================================================


$('.sendMail').on('click', function() {

  let xMailBody = $('.xMailBody').val();
  let xEmail = $('.xEmail').val();
  let xFirma = $('.xFirma').val();
  let xOsoba = $('.xOsoba').val();
  let xTelefon = $('.xTelefon').val();

  let xLink = window.location.href + jsonToURI(chosenArray);

  Email.send({
    SecureToken: "02277365-2d3a-49c0-832a-1540deaf5d28",
    To: [
      'marffinn@gmail.com',
      // 'biuro@tentgrupa.pl',
      // 'bartosz@yprojects.pl',
    ],
    From: xEmail,
    Subject: "Zamówienie/Zapytanie - KONFIGURATOR",
    Body: "<b>Osoba kontaktowa: </b>" + xOsoba + "<br/>" +
      "<b>Firma: </b> " + xFirma + " <br/>" +
      "<b>Telefon: </b> " + xTelefon + " <br/>" +
      "<b>Produkt: </b>" + models[chosenModel].name + "<br/>" +
      '<b>Link zamówienia: </b><a href="' + xLink + '" target="_blank"> Zobacz swój model </a><br/>' +
      "<b>Wiadomość: </b>" + xMailBody

  }).then(
    message => messageSent(message)
  );

});

$('.rodo_info').on('click', function(e){
  e.preventDefault();
  $.ajax({
    url: "rodo.php"
  }).done(function(data) {
    $('#modal-rodo').html(data).fadeToggle(500).attr('data-state', 'on');
  });
});

$(document).on('click', '.rodo-close', function(){ 
  $('#modal-rodo').fadeToggle();
});



$('.img-holder').on('click', function () {
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?model=' + modelLink;
});
$('.category_container').on('click', function () {
  window.location.href = 'index.php';
});

$('.skolory a:not(".clr")').on('click', function () {
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

$('.skolory a.clr').on('click', function () {
  $('.skolory a.clr').each(function () {
    $(this).removeClass('check')
  });
  $(this).toggleClass('check');
});

let addinsArray = {};
$('.sdodatki a.clr').on('click', function () {
  if ($(this).hasClass('check')) {
    $(this).toggleClass('check');
    let option = $(this).text();
    addinsArray[option] = 'no';
    Cookies.set('addins', addinsArray, {
      expires: 7
    });
  } else {
    $(this).toggleClass('check');
    let option = $(this).text();
    addinsArray[option] = 'yes';
    Cookies.set('addins', addinsArray, {
      expires: 7
    });
  }
  chosenArray.addins = addinsArray;
});



function jsonToURI(json) {
  return encodeURIComponent(JSON.stringify(json));
}

function uriToJSON(urijson) {
  return JSON.parse(decodeURIComponent(urijson));
}

let linkInterpreter = function () {
  let part = null;
  if (window.location.hash) {
    let retrievedArray = JSON.parse(decodeURIComponent(window.location.href.split('#')[1]));
    $.each(retrievedArray.addins, function (v, k) {
      if (k == 'yes') {
        $('.sdodatki a:contains(' + v + ')').toggleClass('check');
      } else {
        $('.sdodatki a').removeClass('check');
      }
    });
    $.each(retrievedArray, function (partName, colorToSet) {
      if (partName !== 'addins') {
        part = scene.getObjectByName(partName, true);
        part.material.color.set(colorToSet);
      }
    });
  }
}

let addonsInMail = function () {
  let htmlTable = '';
  $('.sdodatki a').each(function () {
    if ($(this).hasClass('check')) {
      htmlTable += ' - '+$(this).text()+'<br/>';
    }
  });
  return htmlTable;
}
let printTypeInMail = function () {
  let htmlTable = '';
  $('.skolory .clr').each(function () {
    if ($(this).hasClass('check')) {
      htmlTable += $(this).text() + '<br/>';
    }
  });
  return htmlTable;
}
let modelSizeInMail = function () {
  let htmlTable = '';
  $('.sizeSelector3 li').each(function () {
    if ($(this).hasClass('ssActive3')) {
      htmlTable += $(this).text() + '<br/>';
    }
  });
  return htmlTable;
}

let checkIfAttachment = function () {
  if (chosenArray.logotype !== null) {
    return chosenArray.logotype;
  } else {
    return null;
  }
}

let elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}

$('.fullscreen_container').on('click', function () {
  let state = $(this).attr('state');
  if (state == 'on') {
    $(this).attr('state', 'off');
    closeFullscreen();
  } else {
    $(this).attr('state', 'on');
    openFullscreen();
  }
});

$("#modal p, #modalOrder p").on('click', function () {
  $("#modal, #modalOrder").fadeOut();
});

$('.rotateRight').mousedown(function () {
  rotationSpeed = 0.02;
}).mouseup(function () {
  rotationSpeed = 0;
}).mouseleave(function () {
  rotationSpeed = 0;
});

$('.rotateLeft').mousedown(function () {
  rotationSpeed = -0.02;
}).mouseup(function () {
  rotationSpeed = 0;
}).mouseleave(function () {
  rotationSpeed = 0;
});

if (Cookies.get('info') !== 'seen') {
  $('.pickInfo').show();
} else {
  $('.pickInfo').hide();
}

$('.pickInfo p').on('click', function () {
  $('.pickInfo').fadeOut();
  Cookies.set('info', 'seen', {
    expires: 7
  });
});
$('.info_container').on('click', function () {
  $('.pickInfo').fadeIn();
});

$('.zoomIn').on('click', function (event) {
  event.preventDefault();
  controls.zoomIn();
});
$('.zoomOut').on('click', function (event) {
  event.preventDefault();
  controls.zoomOut();
});
$('.select i, .select h4').on('click', function () {
  $(this).parent().find('.listerFoldable').stop().slideToggle(100);
});
let centerSteering = function () {
  let steeringWidth = $('.steering').outerWidth();
  $('.steering').css({
    'margin-left': -(steeringWidth / 2)
  });
}
$('input, textarea').on('click', function () {
  $(this).focus();
});
$('.backToconfig, .placeOrder').on('click', function () {
  $('.pick, .order').slideToggle();
});

$('.sagree i').on('click', function () {
  $(this).children('b').fadeToggle(200);
  $('.sendMail').toggleClass('sendDisable');
});

$(".upload-box").dmUploader({
  url: 'uploader/upload.php',
  onUploadSuccess: function (id, data) {
    var response = JSON.stringify(data);
    let imager = 'baloons/' + data.path;
    chosenArray.logotype = imager;
    $("#modal").append(' Zdjęcie wgrano pomyślnie ').delay(2000).fadeOut();
    let imgSRC = '<p><img src="' + imager + '" /></p>';
    $('.inFileList').append(imgSRC);
    picturesUploaded.push(imgSRC);
    Cookies.remove('x_picturesUploaded');
    Cookies.set('x_picturesUploaded', imager, {
      expires: 7
    });
  }
});

$(".ub2").dmUploader({
  url: 'uploader/upload.php',
  onUploadSuccess: function (id, data) {
    var response = JSON.stringify(data);
    let imager = 'baloons/' + data.path;
    chosenArray.logotype = imager;
    $("#modal").append(' Zdjęcie wgrano pomyślnie ').delay(2000).fadeOut();
    let imgSRC = '<p><img src="' + imager + '" /></p>';
    $('.inFileList').append(imgSRC);
    picturesUploaded.push(imgSRC);
    Cookies.remove('x_picturesUploaded');
    Cookies.set('x_picturesUploaded', imager, {
      expires: 7
    });
  }
});

function pan_hex() {
  $(".skolory a").each(function () {
    let box_color = $(this).attr('hex');
    $(this).css({
      'background-color': box_color
    });
  });
}

let checkAddons = function () {
  $('.sdodatki a').each(function () {
    if ($(this).hasClass('check')) {} else {
      return 0;
    }
  });
}

let clearMailContent = function(){
  $('.xMailBody').val("");
  $('.xEmail').val("");
  $('.xFirma').val("");
  $('.xOsoba').val("");
  $('.xTelefon').val("");
  $('.sendMail').children('b').fadeToggle(200);
  $('.sendMail').toggleClass('sendDisable');

  Cookies.remove('x_picturesUploaded');
}


let messageSent = function (response) {
  if (response == 'OK') {
    $('.orderModelName').text(' Zapytanie ofertowe zostało wysłane pozytywnie');
    $('#modalOrder').fadeIn().delay(3000).fadeOut();
    $('.pick, .order').slideToggle();
    clearMailContent();
  } else {
    $('.orderModelName').text(' Zapytanie ofertowe nie zostało wysłane, upewnij się czy wypełniono wszystkie pola formularza');
    $('#modalOrder').fadeIn();
  }
}

let checkIfLogotype = function(){
  let pathie      = JSON.stringify(document.URL.substr(0, document.URL.lastIndexOf('/')) + '/' + Cookies.get('x_picturesUploaded')).replace(/\"/g, "");
  let logoPath    = '<b>Link do logotypu: <a href="'+pathie+'" target="_blank"> LOGOTYP </a><br/>';
  if( Cookies.get('x_picturesUploaded') ){
    return logoPath;
  } else { return '';}
}

let checkIfNadruk = function(){

}

$('.sendMail').on('click', function () {
  let xMailBody   = $('.xMailBody').val();
  let xEmail      = $('.xEmail').val();
  let xFirma      = $('.xFirma').val();
  let xOsoba      = $('.xOsoba').val();
  let xTelefon    = $('.xTelefon').val();
  let xLink       = window.location.href + jsonToURI(chosenArray);

  Email.send({
    SecureToken: "02277365-2d3a-49c0-832a-1540deaf5d28",
    To: [
      // 'biuro@tentgrupa.pl',
      xEmail
    ],
    From: xEmail,
    Subject: "Zamówienie/Zapytanie - KONFIGURATOR",
    Body: "<b>Osoba kontaktowa: </b>" + xOsoba + "<br/>" +
          "<b>Firma: </b> " + xFirma + " <br/>" +
          "<b>Telefon: </b> " + xTelefon + " <br/>" +
          "<b>Produkt: </b>" + models[cookieModel].name + "<br/>" +
          "<b>Rozmiar: </b>" + modelSizeInMail() + "<br/>" +
          "<b>Nadruk: </b><br/>" + printTypeInMail() + "<br/>" +
          "<b>Opcje: </b><br/>" + addonsInMail() + "<br/>" +
          '<b>Link zamówienia: </b><a href="' + xLink + '" target="_blank"> Zobacz swój model </a><br/>' +
          "<b>Treść wiadomości: </b>" + xMailBody+ "<br/>"+
          checkIfLogotype()


  }).then(
    message => messageSent(message),
    message => alert(message)
  );
});

pan_hex();
centerSteering();
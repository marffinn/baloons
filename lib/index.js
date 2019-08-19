$('.img-holder').on('click', function () {
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?model=' + modelLink;
});
$('.category_container').on('click', function () {
  window.location.href = 'index.php';
});

$('.skolory a:not(".clr")').on('click', function () {

  $('.skolory a.clr').each(function () {
    $(this).removeClass('check')
  });
  $('.bnd').addClass('check');
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

let checkAddons = function () {
  $('.sdodatki a').each(function () {
    if ($(this).hasClass('check')) {} else {
      return 0;
    }
  });
}

let messageSent = function (response) {
  if (response == 'OK') {
    $('.orderModelName').text(' Zapytanie ofertowe zostało wysłane pozytywnie');
    $('#modalOrder').fadeIn().delay(4000).fadeOut();
    $('.pick, .order').slideToggle();

  } else {
    $('.orderModelName').text(' Zapytanie ofertowe nie zostało wysłane, upewnij się czy wypełniono wszystkie pola formularza');
    $('#modalOrder').fadeIn();
  }
}

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



let languages = {
  'CATEGORY': {
    'pl': 'Kategorie',
    'en': 'Category'
  },
  'COLOURS' : {
    'pl': 'Kolory',
    'en': 'Colours'
  },
  'TYPE' : {
    'pl': 'Typ',
    'en': 'Type'
  },
  'ADDONS' : {
    'pl': 'Dodatki',
    'en': 'Addons'
  },
  'ROTATE_LEFT' : {
    'pl': 'Obracaj w lewo',
    'en': 'Rotate anticlockwise'
  },
  'ROTATE_RIGHT' : {
    'pl': 'Obracaj w prawo',
    'en': 'Rotate clockwise'
  },
  'ZOOM_IN' : {
    'pl': 'Przybliż',
    'en': 'Zoom in'
  },
  'ZOOM_OUT' : {
    'pl': 'Oddal',
    'en': 'Zoom out'
  },
  'HELP_INFO' : {
    'pl': 'Pomoc/informacje',
    'en': 'Help/Info'
  },
  'FULL_SCREEN' : {
    'pl': 'Pełny ekran',
    'en': 'Full screen'
  },
  'NO_PRINT' : {
    'pl': 'Bez nadruku',
    'en': 'No print'
  },
  'ALL_PRINT' : {
    'pl': 'Cały w nadruku',
    'en': 'All on print'
  },
  'STRIPE_PRINT' : {
    'pl': 'Druk na pasie',
    'en': 'Stripe imprint'
  },
  'SIZE' : {
    'pl': 'Rozmiar',
    'en': 'Size'
  },
  'INNER_LIGHT' : {
    'pl': 'Oświetlenie wewnątrz balonu',
    'en': 'Inner light'
  },
  'NON_FLAMMABLE_CERT' : {
    'pl': 'Materiał trudnopalny z cert. B1',
    'en': 'B1 cert. non-flammable material'
  },
  'SAND_WEIGHTS' : {
    'pl': 'Obciążniki piaskowe',
    'en': 'Sand weights'
  },
  'NON_FLAMMABLE' : {
    'pl': 'Materiał trudnopalny',
    'en': 'Non-flammable material'
  },
  'NIGHT_SWITCH' : {
    'pl': 'Włącznik zmierzchowyo',
    'en': 'Night switch timer'
  },
  'PLACE_ORDER' : {
    'pl': 'Zamawiam',
    'en': 'Place order'
  },
  'ORDER_FORM' : {
    'pl': 'Formularz zamówienia',
    'en': 'Order form'
  },
  'COMPANY_NAME' : {
    'pl': 'Nazwa firmy:',
    'en': 'Company:'
  },
  'CLIENTS_NAME' : {
    'pl': 'Osoba kontaktowa:',
    'en': 'Name:'
  },
  'PHONE' : {
    'pl': 'Telefon:',
    'en': 'Phone:'
  },
  'MAIL' : {
    'pl': 'E-Mail:',
    'en': 'E-Mail:'
  },
  'LOGOTYPE' : {
    'pl': 'Wgraj swoje logo<',
    'en': 'Upload your logotype'
  },
  'MESSAGE' : {
    'pl': 'Wiadomość:',
    'en': 'Message:'
  },
  'AGREEMENT' : {
    'pl': 'Zgadzam się z regulaminem konfiguratora',
    'en': 'I agree to terms and conditions'
  },
  'SEND' : {
    'pl': 'Wyślij',
    'en': 'Send'
  },
  'INSTRUCTION' : {
    'pl': 'Kliknij na element bolonu, po czym wybierz kolor, wraz z pozostałymi opcjami.',
    'en': 'Click on any part of model and change its colour and imprint accordingly'
  },

}
$('.language_container').on('click', function(){
  change_language($(this).attr('state'));
});
let change_language = function( language ){
  $('[data-lang]').each(function( index ){
    $(this).text( languages[$(this).attr('data-lang')][language] );
  });
}


let optionsInMail = function () {
  let htmlTable = '';
  $('.sdodatki a').each(function () {
    if ($(this).hasClass('check')) {
      htmlTable += $(this).text() + '<br/>';
    }
  });
  return htmlTable;
}

let checkIfAttachment = function () {
  if (chosenArray.logotype !== null) {
    return chosenArray.logotype;
    console.log(chosenArray.logotype);
  } else {
    return null;
    console.log('no logotype uploded for this particular model');
  }
}

$('.sendMail').on('click', function () {
  let xMailBody   = $('.xMailBody').val();
  let xEmail      = $('.xEmail').val();
  let xFirma      = $('.xFirma').val();
  let xOsoba      = $('.xOsoba').val();
  let xTelefon    = $('.xTelefon').val();

  // let pathie = JSON.stringify(document.URL.substr(0, document.URL.lastIndexOf('/')) + '/' + Cookies.get('x_picturesUploaded'));
  // let logoMail = {
  //   name: "logo.jpg",
  //   path: "https://localhost/ssa/baloons/files/5d49e1b74afe1_16-10-06_1711.jpg"
  // };
  // console.log(pathie);
  let xLink = window.location.href + jsonToURI(chosenArray);
  Email.send({
    SecureToken: "02277365-2d3a-49c0-832a-1540deaf5d28",
    To: [
      // 'marffinn@gmail.com',
      'produkcja.felder@gmail.com',
      xEmail
    ],
    From: xEmail,
    Subject: "Zamówienie/Zapytanie - KONFIGURATOR",
    Body: "<b>Osoba kontaktowa: </b>" + xOsoba + "<br/>" +
          "<b>Firma: </b> " + xFirma + " <br/>" +
          "<b>Telefon: </b> " + xTelefon + " <br/>" +
          "<b>Produkt: </b>" + models[cookieModel].name + "<br/>" +
          "<b>Opcje: </b><br/>" + optionsInMail() + "<br/>" +
          '<b>Link zamówienia: </b><a href="' + xLink + '" target="_blank"> Zobacz swój model </a><br/>' +
          "<b>Treść wiadomości: </b>" + xMailBody

    // Attachments: [logoMail]

  }).then(
    message => messageSent(message),
    message => alert(message)
  );

});
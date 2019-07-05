$('.img-holder').on('click', function() {
  let modelLink = $(this).attr('model-data');
  window.location.href = 'index_2.php?model=' + modelLink;
});
$('.category_container').on('click', function() {
  window.location.href = 'index.php';
});


$("body").on("click", ".dynamic", function() {
  chosenModel = $(this).attr('alt');
  $('.srozmiar a[alt!=' + chosenModel + ']').each(function() {
    $(this).removeClass('check');
  });
  animIn(chosenModel);

  Cookies.set(chosenModel, chosenArray, {
    expires: 7
  });
});

$('.cwn').on('click', function() {
  $("#modal").fadeIn();
});

$('.dnp').on('click', function() {
  $("#modal").fadeIn();
});


let picturesUploaded = [];

$("#modal").dmUploader({
  url: 'uploader/upload.php',
  onUploadSuccess: function(id, data) {
    var response = JSON.stringify(data);
    let imager = 'files/' + data.path;
    chosenArray.logotype = imager;
    $("#modal").append(' Zdjęcie wgrano pomyślnie ').delay(2000).fadeOut();


    let imgSRC = '<p><img src="' + imager + '" /></p>';
    $('.inFileList').append(imgSRC);

    picturesUploaded.push(imgSRC);
    Cookies.set(chosenModel, chosenArray, {
      expires: 7
    });
    Cookies.set('x_picturesUploaded', imager, {
      expires: 7
    });

  }
});

$("#modal p, #modalOrder p").on('click', function() {
  $("#modal, #modalOrder").fadeOut();
});

$('.placeOrder').on('click', function() {
  $('#modalOrder .orderModelName').text(models[chosenModel].name);
  $.each(chosenArray, function(k, v) {
    let option = '<li> <i>'+k+'</i> <b>'+v+'</b> </li>';
    $('.orderOptions').append( option );
  });
  $('#modalOrder').fadeIn();
});

var clipboard = new ClipboardJS('.btn');

$('.srozmiar a.clr').on('click', function() {
  $('.srozmiar a').each(function() {
    $(this).removeClass('check')
  });
});
$('.skolory a.clr').on('click', function() {
  $('.skolory a.clr').each(function() {
    $(this).removeClass('check')
  });
});


//////////////////////////////////////////////////////////////////////////////////////////////////////////

$('.skolory a:not(".clr")').on('click', function() {
  $('.skolory a p').removeClass('mark');
  let selected_color = $(this).attr('hex');
  let object = scene.getObjectByName(objectChosen, true);
  let hexConverted = selected_color.replace('#', '0x');
  color.setHex(hexConverted);
  object.material.color.set(color);
  $(this).children('p').toggleClass('mark');
  chosenArray[object.name] = hexConverted;
  Cookies.set(cookieModel, chosenArray, {
    expires: 7
  });
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////


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

$('.zoomIn').on('click', function() {
  event.preventDefault();
  controls.zoomIn();
});
$('.zoomOut').on('click', function() {
  event.preventDefault();
  controls.zoomOut();
});

$('.select i, .select h4').on('click', function() {
  $(this).parent().find('.listerFoldable').stop().slideToggle();
});

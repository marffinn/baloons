<?php
  $model = $_GET['model'];
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width = device-width, initial-scale = 1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap&subset=latin-ext" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <link href="selectric.css" rel="stylesheet">
    <title> Konfigurator </title>
</head>

<body class="noflow">
    <div id="container"></div>

    <div id="modal">
      <p></p>
      <input type="file" name="upload" id="upload" class="upload-box" placeholder=" Wyślij plik">
    </div>

    <div id="modalOrder" style="padding-bottom:0">
      <p></p>
      <h4 class="orderModelName" style="border-bottom: none"></h4>
    </div>

    <div class='fileList'>
      <div class='inFileList'></div>
    </div>

    <div class="category_container">
        <img src="assets/img/category.svg">
        <p>Kategorie</p>
    </div>

    <div class="rotate_container" state='off'>
        <img src="assets/img/3d.svg">
    </div>

    <div class="rotateHolder">
      <div class="rotateLeft">
        <img src="assets/img/rotating-circular-arrow.svg">
        <p>obracaj w lewo</p>
      </div>
      <div class="rotateRight">
        <img src="assets/img/rotating-circular-arrow.svg">
        <p>obracaj w prawo</p>
      </div>
    </div>

    <div class="zoomInOut">
      <div class="zoomIn">
        <img src="assets\img\zoomIn.svg">
        <p>przybliż</p>
      </div>
      <div class="zoomOut">
        <img src="assets\img\zoomOut.svg">
        <p>oddal</p>
      </div>
    </div>

    <div id="picklist">
      <div class="pick">
        <h2 class="product-name"></h2>
        <div class="select skolory">
          <i></i>
          <h4> Kolory: </h4>
          <div class="listerFoldable">
            <a href="#" target="_self" rel="white"        hex="#ffffff"> <p></p> </a>
            <a href="#" target="_self" rel="black"        hex="#000000"> <p></p> </a>
            <a href="#" target="_self" rel="pantone012c"  hex="#FEDD00"> <p></p> </a>
            <a href="#" target="_self" rel="pantone1375c" hex="#FF9E1B"> <p></p> </a>
            <a href="#" target="_self" rel="pantone158c"  hex="#E87722"> <p></p> </a>
            <a href="#" target="_self" rel="pantone186c"  hex="#C8102E"> <p></p> </a>
            <a href="#" target="_self" rel="pantone368c"  hex="#78BE20"> <p></p> </a>
            <a href="#" target="_self" rel="pantone347c"  hex="#009A44"> <p></p> </a>
            <a href="#" target="_self" rel="pantone2925c" hex="#009CDE"> <p></p> </a>
            <a href="#" target="_self" rel="pantone286c"  hex="#0033A0"> <p></p> </a>
            <a href="#" target="_self" rel="pantone420c"  hex="#C7C9C7"> <p></p> </a>
            <a href="#" target="_self" rel="pantone425c"  hex="#54585A"> <p></p> </a>
            <a class="clr bnd" style="margin-top:0.5em" href="#" target="_self"> Brak nadruku</a>
            <a class="clr cwn" href="#" target="_self" > Cały w nadruku</a>
            <a class="clr dnp" href="#" target="_self"> Druk na pasie</a>
          </div>
        </div>
        <div class="select srozmiar">
          <!-- <i></i> -->
          <h4> Rozmiar/Typ: </h4>
          <select class="sizeSelector">
            <!--  options to be loaded into this option list -->
          </select>
        </div>
        <div class="select sdodatki">
          <i></i>
          <h4> Dodatki: </h4>
          <div class="listerFoldable">
            <a class="clr" href="#" target="_self"> Oświetlenie wewnątrz balonu</a>
            <a class="clr" href="#" target="_self"> Materiał trudnopalny z cert. B1</a>
            <a class="clr" href="#" target="_self"> Obciążniki piaskowe</a>
            <a class="clr" href="#" target="_self"> Materiał trudnopalny</a>
            <a class="clr" href="#" target="_self"> Włącznik zmierzchowy</a>
          </div>
        </div>
        <a href="#" name="summary" class="placeOrder">Zamawiam</a>
      </div>
      <div class="order">
        <div class="backToconfig">
          <img src="assets/img/left-arrow.svg" alt="">
        </div>

        <label for="firma">Nazwa firmy:</label><input type="text" class="xFirma" name="firma">
        <label for="osoba">Osoba kontaktowa:</label><input class="xOsoba" type="text"  name="osoba">
        <label for="telefon">Telefon:</label><input type="text" class="xTelefon" name="telefon">
        <label for="email">E-Mail:</label><input class="xEmail" type="text"  name="email">
        <label>Wiadomość:</label><div class="mailBodyContainer"><textarea class="xMailBody"></textarea></div>

        <div class="sendMail">Wyślij</div>

      </div>
    </div>

    <div class="pickInfo">Kliknij na element bolonu, po czym wybierz kolor, wraz z pozostałymi opcjami.<p></p></div>
    <div class="info_container" state="off"><img src="assets/img/info.svg"></div>
    <div class="fullscreen_container" state="off"><img src="assets/img/fullscreen.svg"></div>

    <!-- scripts & libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/104/three.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/clipboard@2/dist/clipboard.min.js"></script>

    <script src="uploader/jquery.dm-uploader.min.js"></script>
    <script src="uploader/config.js"></script>
    <script src="lib/jquery.selectric.min.js"></script>
    <script src="lib/smtp.js"></script>


    <script src="lib/WebGL.js" type="text/javascript"></script>
    <script src="lib/threex.fullscreen.js" type="text/javascript"></script>
    <script src="lib/loaders/JSONLoader.js" type="text/javascript"></script>
    <script src="lib/orbitcontrols.js" type="text/javascript"></script>
    <script src="lib/driver.js" type="text/javascript"></script>
    <script src="lib/scene.js" type="text/javascript"></script>
    <script src="lib/index.js" type="text/javascript"></script>
    <script type="text/javascript">
      animIn('<?php echo $model; ?>');
    </script>

</body>

</html>

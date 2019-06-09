<?php
  $numer = $_GET['numer'];
?>
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width = device-width, initial-scale = 1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.ico" />
    <link href="style.css" rel="stylesheet">
    <title> Konfigurator </title>
</head>

<body class="noflow">
    <div id="container"></div>
    <div id="modal"></div>

    <div class="nextprevHolder">
      <div class="prev"></div>
      <div class="next"></div>
    </div>

    <div id="picklist">
        <div class="pickInfo">Kliknij na element bolonu, po czym wybierz kolor poniżej.<p></p></div>
        <h2 class="product-name"> . </h2>
        <div class="select skolory">
          <h4> Kolory: </h4>
          <a href="#" target="_self" rel="white"        hex="#ffffff"><p></p></a>
          <a href="#" target="_self" rel="black"        hex="#000000"><p></p></a>
          <a href="#" target="_self" rel="pantone012c"  hex="#FEDD00"><p></p></a>
          <a href="#" target="_self" rel="pantone1375c" hex="#FF9E1B"><p></p></a>
          <a href="#" target="_self" rel="pantone158c"  hex="#E87722"><p></p></a>
          <a href="#" target="_self" rel="pantone186c"  hex="#C8102E"><p></p></a>
          <a href="#" target="_self" rel="pantone368c"  hex="#78BE20"><p></p></a>
          <a href="#" target="_self" rel="pantone347c"  hex="#009A44"><p></p></a>
          <a href="#" target="_self" rel="pantone2925c" hex="#009CDE"><p></p></a>
          <a href="#" target="_self" rel="pantone286c"  hex="#0033A0"><p></p></a>
          <a href="#" target="_self" rel="pantone420c"  hex="#C7C9C7"><p></p></a>
          <a href="#" target="_self" rel="pantone425c"  hex="#54585A"><p></p></a>

          <a class="clr" style="margin-top:0.5em" href="#" target="_self"> Brak nadruku</a>
          <a class="clr" href="#" target="_self"> Cały w nadruku</a>
          <a class="clr" href="#" target="_self"> Druk na pasie</a>
        </div>
        <div class="select srozmiar">
          <h4> Rozmiar: </h4>
          <a class="clr" href="#" target="_self" >B-16</a>
          <a class="clr" href="#" target="_self" >B-12</a>
          <a class="clr" href="#" target="_self" >Kula</a>
        </div>
        <div class="select sdodatki">
          <h4> Dodatki: </h4>
          <a class="clr" href="#" target="_self"> Oświetlenie wewnątrz balonu</a>
          <a class="clr" href="#" target="_self"> Materiał trudnopalny z cert. B1</a>
          <a class="clr" href="#" target="_self"> Obciążniki piaskowe</a>
        </div>

        <a href="#" name="summary" class="placeOrder">Zamawiam</a>
    </div>
    <div class="button_container">
        <section>
            <input type="checkbox" id="light-switch" state="off" />
            <label for="light-switch"></label>
            <p>zatrzymaj animację</p>
            <p>rozpocznij animację</p>
        </section>
    </div>
    <div class="fullscreen_container" state="off">
        <img src="assets/img/fullscreen.svg">
    </div>

    <!-- scripts & libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/104/three.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/tween.js/17.3.5/Tween.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="lib/WebGL.js" type="text/javascript"></script>
    <script src="lib/threex.fullscreen.js" type="text/javascript"></script>
    <script src="lib/loaders/JSONLoader.js" type="text/javascript"></script>
    <script src="lib/orbitcontrols.js" type="text/javascript"></script>
    <script src="lib/index.js" type="text/javascript"></script>
    <!-- <script src="lib\threex.domevents.js" type="text/javascript"></script> -->
    <script src="lib/driver.js" type="text/javascript"></script>
    <script src="lib/scene.js" type="text/javascript"></script>
    <script type="text/javascript">
      animIn(<?php echo $numer; ?>);
    </script>



</body>

</html>

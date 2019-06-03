<?php $numer = 0; ?>
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

<body>

    <div id="container"></div>
    <div id="picklist">

        <div class="select skolory">
          <h2> Kolory </h2>
          <a href="#" target="_self" rel="white"        hex="#ffffff"></a>
          <a href="#" target="_self" rel="black"        hex="#000000"></a>
          <a href="#" target="_self" rel="pantone012c"  hex="#FEDD00"></a>
          <a href="#" target="_self" rel="pantone1375c" hex="#FF9E1B"></a>
          <a href="#" target="_self" rel="pantone158c"  hex="#E87722"></a>
          <a href="#" target="_self" rel="pantone186c"  hex="#C8102E"></a>
          <a href="#" target="_self" rel="pantone368c"  hex="#78BE20"></a>
          <a href="#" target="_self" rel="pantone347c"  hex="#009A44"></a>
          <a href="#" target="_self" rel="pantone2925c" hex="#009CDE"></a>
          <a href="#" target="_self" rel="pantone286c"  hex="#0033A0"></a>
          <a href="#" target="_self" rel="pantone420c"  hex="#C7C9C7"></a>
          <a href="#" target="_self" rel="pantone425c"  hex="#54585A"></a>
        </div>
        <div class="select srozmiar">
          <h2> Rozmiar </h2>
          <a href="#" target="_self" rel="red" hex="#fff000">B-16</a>
          <a href="#" target="_self" rel="red" hex="#fff000">B-12</a>
          <a href="#" target="_self" rel="red" hex="#fff000">Kula</a>
        </div>
        <div class="select sdodatki">
          <h2> Dodatki </h2>
          <a href="#" target="_self" rel="red" hex="#fff000"></a>
          <a href="#" target="_self" rel="red" hex="#fff000"></a>
          <a href="#" target="_self" rel="red" hex="#fff000"></a>
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
    <script src="lib/driver.js" type="text/javascript"></script>
    <script src="lib/scene.js" type="text/javascript"></script>


</body>

</html>

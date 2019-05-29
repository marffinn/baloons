<?php
    $numer = 0;
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

<body>

    <div id="container"></div>



    <div class="button_container">
        <section>
            <input type="checkbox" id="light-switch" state="off" />
            <label for="light-switch"></label>
            <p>zatrzymaj animację</p>
            <p>rozpocznij animację</p>
        </section>
    </div>

    <div class="fullscreen_container" state="off">
        <img src="lib/fullscreen.svg">
    </div>

    <!-- scripts & libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.13.1/TweenMax.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="lib/Tween.js" type="text/javascript"></script>

    <script src="lib/three.js" type="text/javascript"></script>
    <script src="lib/WebGL.js" type="text/javascript"></script>
    <script src="lib/loaders/JSONLoader.js" type="text/javascript"></script>
    <script src="lib/orbitcontrols.js" type="text/javascript"></script>
    <script src="lib/threex.fullscreen.js" type="text/javascript"></script>
    <script src="lib/index.js" type="text/javascript"></script>
    <script src="lib/driver.js" type="text/javascript"></script>
    <script src="lib/scene.js" type="text/javascript"></script>

    <!-- initial model load and entry animation -->
    <script type="text/javascript">
        animIn( <?php  echo $numer ?> );
    </script>

</body>

</html>

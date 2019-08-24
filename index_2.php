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
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap&subset=latin-ext"
        rel="stylesheet">
    <link href="style.css" rel="stylesheet">
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
        <p data-lang="CATEGORY">Kategorie</p>
    </div>

    <div class="steering">
        <div class="rotateHolder">
            <div class="rotateLeft">
                <img src="assets\img\rotate-left.svg">
                <p data-lang="ROTATE_LEFT">obracaj w lewo</p>
            </div>
            <div class="rotateRight">
                <img src="assets\img\rotate-right.svg">
                <p data-lang="ROTATE_RIGHT">obracaj w prawo</p>
            </div>
        </div>

        <div class="zoomInOut">
            <div class="zoomIn">
                <img src="assets\img\zoom-in.svg">
                <p data-lang="ZOOM_IN">przybliż</p>
            </div>
            <div class="zoomOut">
                <img src="assets\img\zoom-out.svg">
                <p data-lang="ZOOM_OUT">oddal</p>
            </div>
        </div>
        <div class="info_container" state="off">
            <img src="assets\img\info-about.svg">
            <p data-lang="HELP_INFO">pomoc/informacje</p>
        </div>
        <div class="fullscreen_container" state="off">
            <img src="assets\img\full-screen.svg">
            <p data-lang="FULL_SCREEN">pełny ekran</p>
        </div>
        <!-- <div class="language_container" state="pl">
            <img src="assets\img\pl.svg">
            <p>Polski</p>
        </div>
        <div class="language_container" state="en">
            <img src="assets\img\en.svg">
            <p>English</p>
        </div> -->

    </div>


    <div id="picklist">
        <div class="pick">
            <h2 class="product-name"></h2>
            <div class="select skolory">
                <i></i>
                <h4 data-lang="COLOURS"> Kolory: </h4>
                <div class="listerFoldable">
                    <a href="#" target="_self" rel="white" hex="#ffffff">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="black" hex="#000000">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone012c" hex="#FEDD00">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone1375c" hex="#FF9E1B">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone158c" hex="#E87722">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone186c" hex="#C8102E">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone368c" hex="#78BE20">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone347c" hex="#009A44">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone2925c" hex="#009CDE">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone286c" hex="#0033A0">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone420c" hex="#C7C9C7">
                        <p></p>
                    </a>
                    <a href="#" target="_self" rel="pantone425c" hex="#54585A">
                        <p></p>
                    </a>
                    <a class="clr bnd" style="margin-top:0.5em" href="#" target="_self" data-lang="NO_PRINT"> Brak nadruku</a>
                    <!-- <a class="clr cwn" href="#" target="_self" data-lang="ALL_PRINT"> > Cały w nadruku</a> -->
                    <a class="clr dnp" href="#" target="_self" data-lang="STRIPE_PRINT"> Druk na pasie</a>
                </div>
            </div>
            <div class="select srozmiar" style="margin-bottom:1em">
                <h4 data-lang="TYPE"> Rozmiar/Typ: </h4>
                <div class="sizeSelector2">
                    <!-- here are options to be loaded -->
                </div>
            </div>
            <div class="select swymiar" style="border:none">
                <h4 data-lang="SIZE"> Wymiary: </h4>
                <div class="sizeSelector3">
                </div>
            </div>



            <div class="select sdodatki">
                <i></i>
                <h4 data-lang="ADDONS"> Dodatki: </h4>
                <div class="listerFoldable">
                    <a class="clr" href="#" target="_self" data-lang="INNER_LIGHT">Oświetlenie wewnątrz balonu</a>
                    <a class="clr" href="#" target="_self" data-lang="NON_FLAMMABLE_CERT">Materiał trudnopalny z cert. B1</a>
                    <a class="clr" href="#" target="_self" data-lang="SAND_WEIGHTS">Obciążniki piaskowe</a>
                    <a class="clr" href="#" target="_self" data-lang="NON_FLAMMABLE">Materiał trudnopalny</a>
                    <a class="clr" href="#" target="_self" data-lang="NIGHT_SWITCH">Włącznik zmierzchowy</a>
                </div>
            </div>
            <a href="#" name="summary" class="placeOrder" data-lang="PLACE_ORDER">Zamawiam</a>
        </div>
        <div class="order">
            <div class="backToconfig">
                <img src="assets/img/left-arrow.svg" alt="">
            </div>
            <div class="formOrder" data-lang="ORDER_FORM">
                Formularz zamówienia
            </div>

            <label for="firma" data-lang="COMPANY_NAME">Nazwa firmy:</label><input type="text" class="xFirma" name="firma">
            <label for="osoba" data-lang="CLIENTS_NAME">Osoba kontaktowa:</label><input class="xOsoba" type="text" name="osoba">
            <label for="telefon" data-lang="PHONE">Telefon:</label><input type="text" class="xTelefon" name="telefon">
            <label for="email" data-lang="MAIL">E-Mail:</label><input class="xEmail" type="text" name="email">
            <label for="upload" id="upload-label" data-lang="LOGOTYPE">Wgraj swoje logo</label><input type="file" name="upload" id="upload"
                class="upload-box" placeholder="Wyślij plik">
            <label data-lang="MESSAGE">Wiadomość:</label>
            <div class="mailBodyContainer"><textarea class="xMailBody"></textarea></div>

            <div class="sagree">
                <p data-lang="AGREEMENT"><i> <b></b> </i> Zgadzam się z regulaminem konfiguratora</p>
            </div>
            <div class="sendMail sendDisable" data-lang="SEND">Wyślij</div>

        </div>
    </div>

    <div class="pickInfo" data-lang="INSTRUCTION">Kliknij na element bolonu, po czym wybierz kolor, wraz z pozostałymi opcjami.<p></p>
    </div>


    <!-- scripts & libraries -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/104/three.min.js" type="text/javascript"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>

    <script src="uploader/jquery.dm-uploader.min.js"></script>
    <script src="uploader/config.js"></script>
    <script src="lib/smtp.js"></script>

    <script src="lib/WebGL.js" type="text/javascript"></script>
    <script src="lib/JSONLoader.min.js" type="text/javascript"></script>
    <script src="lib/orbitcontrols.min.js" type="text/javascript"></script>
    <script src="lib/driver.min.js" type="text/javascript"></script>
    <script src="lib/select_type.js" type="text/javascript"></script>
    <script src="lib/select_size.js" type="text/javascript"></script>
    <script src="lib/lights.min.js" type="text/javascript"></script>
    <script src="lib/scene.min.js" type="text/javascript"></script>
    <script src="lib/index.min.js" type="text/javascript"></script>
    <script src="lib/languages.min.js" type="text/javascript"></script>
    <script type="text/javascript">
    animIn('<?php echo $model; ?>');
    </script>

</body>

</html>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width = device-width, initial-scale = 1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="favicon.ico" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,800&display=swap&subset=latin-ext" rel="stylesheet">
    <link href="style-home.css" rel="stylesheet">
    <title> Konfigurator - Tent Grupa</title>
</head>
<body>
    <div class="container head-stuff">
      <a href="https://tentgrupa.pl/" title="TentGrupa" target="_blank">
        <img src="assets/img/logo-tent.svg" alt="Logo Tent Grupa" class="logotype">
      </a>
      <h3>Witaj w konfiguratorze balonów</h3>
      <p>Wybierz produkt do konfiguracji</p>
    </div>
    <div class="container">
        <div class="inside-container">
            <div class="img-holder" data-category="balony">
                <img src="assets/img/Tent-Grupa_balon.svg" />
                <p>Balon</p>
            </div>
            <div class="img-holder" data-category="bramy">
                <img src="assets/img/Tent-Grupa_brama.svg" />
                <p>Brama</p>
            </div>
            <div class="img-holder" data-category="chwieje">
              <img src="assets/img/Tent-Grupa_chwiej.svg" />
              <p>Chwiej</p>
            </div>
            <div class="img-holder" data-category="flagi">
                <img src="assets/img/Tent-Grupa_flagi.svg" />
                <p>Flaga</p>
            </div>
            <div class="img-holder" data-category="namioty">
                <img src="assets/img/Tent-Grupa_namiot.svg" />
                <p>Namiot</p>
            </div>
            <div class="img-holder" data-category="ramy">
                <img src="assets/img/Tent-Grupa_rama.svg" />
                <p>Rama</p>
            </div>
            <div class="img-holder" data-category="slupy">
                <img src="assets/img/Tent-Grupa_slup.svg" />
                <p>Słup</p>
            </div>
            <div class="img-holder" data-category="nowalinia">
                <img src="assets/img/Tent-Grupa_nowa-linia.svg" />
                <p>Nowa linia</p>
            </div>
        </div>

        <div class="category" id="category-balony">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Balony:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='balon'>
                        <img src="assets/img/icons/balon_1.svg" />
                        <p>Balon Kula</p>
                    </div>
                    <div class="load-model" model-data='b12'>
                        <img src="assets/img/icons/balon_2.svg" />
                        <p>Balon B12</p>
                    </div>
                    <div class="load-model" model-data='b16'>
                        <img src="assets/img/icons/balon_3.svg" />
                        <p>Balon B16</p>
                    </div>
                    <!-- <div class="load-model" model-data='grzybek'>
                        <img src="assets/img/icons/balon_3.svg" />
                        <p>Balon Grzybek</p>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="category" id="category-bramy">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Bramy:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='brama'>
                        <img src="assets/img/icons/brama_1.svg" />
                        <p>Prostokatna</p>
                    </div>
                    <div class="load-model" model-data='prostok6x3'>
                        <img src="assets/img/icons/brama_2.svg" />
                        <p>Łamana</p>
                    </div>
                    <div class="load-model" model-data='prostok8x4'>
                        <img src="assets/img/icons/brama_3.svg" />
                        <p>Półokrągła</p>
                    </div>
                    <!-- <div class="load-model" model-data='prostok10x5'>
                        <img src="assets/img/icons/brama_1.svg" />
                        <p>Prostokatna 10x5 wew śr 180</p>
                    </div>
                    <div class="load-model" model-data='brama_hex'>
                        <img src="assets/img/icons/brama_1.svg" />
                        <p>Prostokatna 10x5 wew śr 180</p>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="category" id="category-chwieje">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Chwieje:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='chwiej'>
                        <img src="assets/img/icons/chwiej_1.svg" />
                        <p>Chwiej 1 nożny</p>
                    </div>
                    <div class="load-model" model-data='chwiej6m'>
                        <img src="assets/img/icons/chwiej_2.svg" />
                        <p>Chwiej 2 nożny</p>
                    </div>
                    <!-- <div class="load-model" model-data='chwiej7m'>
                        <img src="assets/img/icons/chwiej_2.svg" />
                        <p>Chwiej 7m</p>
                    </div>
                    <div class="load-model" model-data='chwiej5mj'>
                        <img src="assets/img/icons/chwiej_1.svg" />
                        <p>Chwiej 5m jednonożny</p>
                    </div>
                    <div class="load-model" model-data='chwiej6mj'>
                        <img src="assets/img/icons/chwiej_1.svg" />
                        <p>Chwiej 6m jednonożny</p>
                    </div>
                    <div class="load-model" model-data='chwiej7mj'>
                        <img src="assets/img/icons/chwiej_1.svg" />
                        <p>Chwiej 7m jednonożny</p>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="category" id="category-flagi">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Flagi:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='batfans_65x200'>
                        <img src="assets/img/icons/flaga_1.svg" />
                        <p>Batefan S</p>
                    </div>
                    <!-- <div class="load-model" model-data='batfanbeach_130x330'>
                        <img src="assets/img/icons/flaga_2.svg" />
                        <p>Batefan ALU</p>
                    </div> -->
                    <div class="load-model" model-data='batfanbeach_150x380'>
                        <img src="assets/img/icons/flaga_2.svg" />
                        <p>Batefan Beach</p>
                    </div>
                    <div class="load-model" model-data='batfant_50x150'>
                        <img src="assets/img/icons/flaga_3.svg" />
                        <p>Batefan T</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="category" id="category-namioty">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Namioty:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='namiot'>
                        <img src="assets/img/icons/namiot_1.svg" />
                        <p>4 nożny</p>
                    </div>
                    <div class="load-model" model-data='namiot5x5'>
                        <img src="assets/img/icons/namiot_2.svg" />
                        <p>5 nożny</p>
                    </div>
                    <div class="load-model" model-data='namiot6x5'>
                        <img src="assets/img/icons/namiot_3.svg" />
                        <p>6 nożny</p>
                    </div>
                    <!-- <div class="load-model" model-data='namiot7x5'>
                        <img src="assets/img/icons/namiot_4.svg" />
                        <p>8 nożny</p>
                    </div> -->
                    <!-- <div class="load-model" model-data='namiot6n6x5'>
                        <img src="assets/img/icons/namiot_5.svg" />
                        <p></p>
                    </div>
                    <div class="load-model" model-data='namiot6n6x5'>
                        <img src="assets/img/icons/namiot_6.svg" />
                        <p></p>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="category" id="category-ramy">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Ramy:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='rama5x3'>
                        <img src="assets/img/icons/rama.svg" />
                        <p>AirWall</p>
                    </div>
                    <!-- <div class="load-model" model-data='rama6x4'>
                        <img src="assets/img/icons/rama.svg" />
                        <p>Rama 6x4</p>
                    </div>
                    <div class="load-model" model-data='rama7x4'>
                        <img src="assets/img/icons/rama.svg" />
                        <p>Rama 7x4</p>
                    </div>
                    <div class="load-model" model-data='rama8x6'>
                        <img src="assets/img/icons/rama.svg" />
                        <p>Rama 8x6</p>
                    </div>
                    <div class="load-model" model-data='rama10x6'>
                        <img src="assets/img/icons/rama.svg" />
                        <p>Rama 10x6</p>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="category" id="category-slupy">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Słupy:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='slup'>
                        <img src="assets/img/icons/slup.svg" />
                        <p>Słupy</p>
                    </div>
                    <div class="load-model" model-data='slup2x5sr60'>
                        <img src="assets/img/icons/puszka.svg" />
                        <p>Puszki</p>
                    </div>
                    <!-- <div class="load-model" model-data='slup3sr60'>
                        <img src="assets/img/icons/puszka.svg" />
                        <p>Słup 3m śr 60</p>
                    </div>
                    <div class="load-model" model-data='slup4sr80'>
                        <img src="assets/img/icons/puszka.svg" />
                        <p>Słup 4m śr 80</p>
                    </div>
                    <div class="load-model" model-data='slup4sr100'>
                        <img src="assets/img/icons/puszka.svg" />
                        <p>Słup 4m śr 100</p>
                    </div>
                    <div class="load-model" model-data='slup5sr130'>
                        <img src="assets/img/icons/puszka.svg" />
                        <p>Słup 5m śr 130</p>
                    </div> -->
                    <!-- <div class="load-model" model-data='slupKrzywy'>
                        <img src="assets/img/icons/puszka.svg" />
                        <p>Słup 5m śr 130</p>
                    </div> -->
                </div>
            </div>
        </div>
        <div class="category" id="category-nowalinia">
            <div class="category__inner">
                <span class="category__close">&times;</span>
                <h3 class="category__title">Nowa linia:</h3>
                <div class="category__products">
                    <div class="load-model" model-data='grzybek'>
                        <img src="assets/img/icons/nowa-linia_1.svg" />
                        <p>Balon grzybek</p>
                    </div>
                    <div class="load-model" model-data='brama_hex'>
                        <img src="assets/img/icons/nowa-linia_3.svg" />
                        <p>Brama Hex</p>
                    </div>
                    <div class="load-model" model-data='ramaHex'>
                        <img src="assets/img/icons/nowa-linia_4.svg" />
                        <p>Rama Hex</p>
                    </div>
                    <div class="load-model" model-data='slupKrzywy'>
                        <img src="assets/img/icons/nowa-linia_5.svg" />
                        <p>Słup krzywy</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer class="footer">
        copyrights 2019 <a href="https://tentgrupa.pl/">TentGrupa</a>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js" type="text/javascript"></script>
    <script src="home-scripts.js" type="text/javascript"></script>
</body>
</html>

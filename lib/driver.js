let mates, model;

$('.dnp, .cwn').on('click', function () {
  let tx_extract = models[cookieModel.toString()].arya;
  for (i = 0; i <= tx_extract.length; i++) {
    if ($.inArray("t", tx_extract[i]) !== -1) {
      let object = scene.getObjectByName(tx_extract[i][1], true);
      group_main.remove(object);
      let part_src = tx_extract[i][0];
      let part_name = tx_extract[i][1];
      protoTexture = new THREE.TextureLoader().load('assets/img/tent_sample.jpg', function () {
        mat = new THREE.MeshLambertMaterial({
          map: protoTexture,
          combine: THREE.MultiplyOperation
        });
        loader.load(part_src, function (geo) {
          let part = new THREE.Mesh(geo, mat);
          part.material.needsUpdate = true;
          part.position.set(0, 0, 0);
          part.scale.set(1, 1, 1);
          part.name = part_name;
          group_main.add(part);
          raycastArray.push(part);
        });
      });
    }
  }
  Cookies.set('textureSwitch', 'yes', {
    expires: 7
  });  
});

$('.bnd').on('click', function () {
  animIn(cookieModel);
  Cookies.set('textureSwitch', 'no', {
    expires: 7
  });
});


$('.dnp, .cwn').on('click', function () {
   $('#modal, .ub2').show();
});

let load_consecutive = function (objectFetch, nameFetch, materialFetch, familyFetch, mainName, dimensions) {

  loader.load(objectFetch, function (object) {
    objectile = new THREE.Mesh(object, materialFetch);
    objectile.material.needsUpdate = true;
    objectile.position.set(0, 0, 0);
    objectile.name = nameFetch;
    let colorHEX = '#' + materialFetch.color.getHexString().toUpperCase();
    chosenArray[nameFetch] = colorHEX;
    raycastArray.push(objectile);
    group_main.add(objectile);
  });
}

function animIn(model_name) {

  model = models[model_name];
  cookieModel = model_name;
  raycastArray = [];
  chosenArray = {};

  for (var i = group_main.children.length - 1; i >= 0; i--) {
    group_main.remove(group_main.children[i]);
  }

  sizePopulate(model.family);

  dimensionPopulate(model.dimensions);

  for (i = 0; i <= model.arya.length - 1; i++) {

    mates = new THREE.MeshLambertMaterial({
      color: model.arya[i][2],
      side: THREE.DoubleSide
    });

    $('.product-name').text(model.name);

    load_consecutive(model.arya[i][0], model.arya[i][1], mates, model.family, model.name, model.dimensions);

  }

  Cookies.set(cookieModel, chosenArray, { expires: 7 });

}





let models = {

  ////  BALONY reklamowe
  'balon': {
    name: 'Balon Kula',
    family: ['balon', 'b12', 'b16', 'grzybek'],
    arya: [
      ['assets/BALONY/Kula/k1.json', 'Górna część', 0xC7C9C7],
      ['assets/BALONY/Kula/kg2.json', 'Środkowa część', 0x54585A, 't'],
      ['assets/BALONY/Kula/k3.json', 'Szyjka', 0xC7C9C7],
      ['assets/BALONY/Kula/kg4.json', 'Spód', 0x54585A, 't']
    ],
    dimensions: [ ['2m', .5] , ['3m', 0.74], ['4m', 0.99], ['6m', 1.485]],
  },
  'b12': {
    name: 'Balon B12',
    family: ['balon', 'b12', 'b16', 'grzybek'],
    arya: [
      ['assets/BALONY/B12/top.json', 'top', 0xC7C9C7],
      ['assets/BALONY/B12/under-top.json', 'under-top', 0x54585A, 't'],
      ['assets/BALONY/B12/over-bottom.json', 'over-bottom', 0xC7C9C7],
      ['assets/BALONY/B12/bottom.json', 'bottom', 0x54585A, 't']
    ],
    dimensions: [['2m', 0.5] , ['3m', 0.75], ['4m', 1], ['6m', 1.5], ['8m', 2], ['10m', 2.5]],
  },
  'b16': {
    name: 'Balon B16',
    family: ['balon', 'b12', 'b16', 'grzybek'],
    arya: [
      ['assets/BALONY/B16/top.json', 'top', 0xC7C9C7],
      ['assets/BALONY/B16/under-top.json', 'under-top', 0x54585A, 't'],
      ['assets/BALONY/B16/over-bottom.json', 'over-bottom', 0xC7C9C7],
      ['assets/BALONY/B16/bottom.json', 'bottom', 0x54585A, 't']
    ],
    dimensions: [['2m', 0.33] , ['3m', 0.5], ['4m', 0.67], ['6m', 1], ['8m', 1.33], ['10m', 1.66]],
  },
  'grzybek': {
    name: 'Balon Grzybek',
    family: ['balon', 'b12', 'b16', 'grzybek'],
    arya: [
      ['assets/BALONY/grzybek/b1.json', 'b1', 0x54585A, 't'],
      ['assets/BALONY/grzybek/b2.json', 'b2', 0x54585A, 't'],
      ['assets/BALONY/grzybek/b3.json', 'b3', 0x54585A, 't'],
      ['assets/BALONY/grzybek/b4.json', 'b4', 0x54585A, 't'],
      ['assets/BALONY/grzybek/bk1.json', 'bk1', 0xC7C9C7],
      ['assets/BALONY/grzybek/bk2.json', 'bk2', 0xC7C9C7],
      ['assets/BALONY/grzybek/bk3.json', 'bk3', 0xC7C9C7],
      ['assets/BALONY/grzybek/bk4.json', 'bk4', 0xC7C9C7],
      ['assets/BALONY/grzybek/s.json', 's', 0xC7C9C7]
    ]
  },

  // FLAGI
  'batfanbeach_90x195': {
    name: 'Bat fan beach',
    family: ['batfanbeach_90x195', 'batfans_65x200', 'batfant_50x150'],
    arya: [
      ['assets/FLAGI_BATFANY/bat fan beach/bat fan beach 90x195/baner1.json', 'baner 1', 0x54585A, 't'],
      ['assets/FLAGI_BATFANY/bat fan beach/bat fan beach 90x195/baner2.json', 'baner 2', 0x54585A, 't'],
      ['assets/FLAGI_BATFANY/bat fan beach/bat fan beach 90x195/oslonka.json', 'osłonka', 0xC7C9C7],
      ['assets/FLAGI_BATFANY/bat fan beach/bat fan beach 90x195/slupek.json', 'słupek', 0xC7C9C7],
    ],
    dimensions: [['70x195 cm', 0.8], ['90x195 cm', 1] , ['105x270 cm', 1.8], ['130x330 cm', 2], ['150x380 cm', 2.2], ['140x420 cm', 2.2] ],
  },
  'batfans_65x200': {
    name: 'Bat fan S',
    family: ['batfanbeach_90x195', 'batfans_65x200', 'batfant_50x150'],
    arya: [
      ['assets/FLAGI_BATFANY/bat fan s/bat fan s 65x200/baner1.json', 'baner 1', 0x54585A, 't'],
      ['assets/FLAGI_BATFANY/bat fan s/bat fan s 65x200/baner2.json', 'baner 2', 0x54585A, 't'],
      ['assets/FLAGI_BATFANY/bat fan s/bat fan s 65x200/opaska.json', 'opaska', 0xC7C9C7],
      ['assets/FLAGI_BATFANY/bat fan s/bat fan s 65x200/stopka.json', 'stopka', 0xC7C9C7]
    ],
    dimensions: [['65x165 cm', 1] , ['65x200 cm', 1.8], ['70x300 cm', 2], ['80x400 cm', 2.2], ['80x430 cm', 2.2] ],
  },
  'batfant_50x150': {
    name: 'Bat fan T',
    family: ['batfanbeach_90x195', 'batfans_65x200', 'batfant_50x150'],
    arya: [
      ['assets/FLAGI_BATFANY/bat fan t/bat fan t 50x150/baner.json', 'baner 1', 0x54585A, 't'],
      ['assets/FLAGI_BATFANY/bat fan t/bat fan t 50x150/klips1.json', 'klips1', 0xC7C9C7],
      ['assets/FLAGI_BATFANY/bat fan t/bat fan t 50x150/klips2.json', 'klips2', 0xC7C9C7],
      ['assets/FLAGI_BATFANY/bat fan t/bat fan t 50x150/klips3.json', 'klips3', 0xC7C9C7],
      ['assets/FLAGI_BATFANY/bat fan t/bat fan t 50x150/kulka.json', 'kulka', 0xC7C9C7],
      ['assets/FLAGI_BATFANY/bat fan t/bat fan t 50x150/poprzeczka.json', 'poprzeczka', 0xC7C9C7],
      ['assets/FLAGI_BATFANY/bat fan t/bat fan t 50x150/slup.json', 'slup', 0xC7C9C7]
    ],
    dimensions: [['50x150 cm', 1] , ['50x220 cm', 1.8], ['70x250 cm', 2], ['70x350 cm', 2.2] ],
  },

  // namioty reklamowe
  'namiot': {
    name: 'Namiot 4 nogi',
    family: ['namiot', 'namiot6x5', 'namiot6n6x5'],
    arya: [
      ['assets/NAMIOTY/4 nogi 4x4/b1.json', 'b1', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/b2.json', 'b2', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/b3.json', 'b3', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/b4.json', 'b4', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/g1.json', 'g1', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/g2.json', 'g2', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/g3.json', 'g3', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/g4.json', 'g4', 0x54585A, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/n1.json', 'Noga 1', 0xC7C9C7],
      ['assets/NAMIOTY/4 nogi 4x4/n2.json', 'Noga 2', 0xC7C9C7],
      ['assets/NAMIOTY/4 nogi 4x4/n3.json', 'Noga 3', 0xC7C9C7],
      ['assets/NAMIOTY/4 nogi 4x4/n4.json', 'Noga 4', 0xC7C9C7],
      ['assets/NAMIOTY/4 nogi 4x4/sbd.json', 'Panel 0', 0xC7C9C7, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/sz1.json', 'Panel 1', 0xC7C9C7, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/sz2.json', 'Panel 2', 0xC7C9C7, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/sz3.json', 'Panel 3', 0xC7C9C7, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/szo.json', 'Panel 4', 0xC7C9C7, 't'],
      ['assets/NAMIOTY/4 nogi 4x4/szo1.json', 'Panel 5', 0xC7C9C7, 't']
    ],
    dimensions: [['4x4 m', 1] , ['5x5 m', 1.2]],
  },
  'namiot6x5': {
    name: 'Namiot 5 nog',
    family: ['namiot', 'namiot6x5', 'namiot6n6x5'],
    arya: [
      ['assets/NAMIOTY/5 nog 6,5m zew/daszek1.json', 'Daszek 1', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/daszek2.json', 'Daszek 2', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/daszek3.json', 'Daszek 3', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/daszek4.json', 'Daszek 4', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/daszek5.json', 'Daszek 5', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/noga1.json', 'Noga 1', 0xC7C9C7],
      ['assets/NAMIOTY/5 nog 6,5m zew/noga2.json', 'Noga 2', 0xC7C9C7],
      ['assets/NAMIOTY/5 nog 6,5m zew/noga3.json', 'Noga 3', 0xC7C9C7],
      ['assets/NAMIOTY/5 nog 6,5m zew/noga4.json', 'Noga 4', 0xC7C9C7],
      ['assets/NAMIOTY/5 nog 6,5m zew/noga5.json', 'Noga 5', 0xC7C9C7],
      ['assets/NAMIOTY/5 nog 6,5m zew/nb1.json', 'Noga banner 1', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/nb2.json', 'Noga banner 2', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/nb3.json', 'Noga banner 3', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/nb4.json', 'Noga banner 4', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/nb5.json', 'Noga banner 4', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/scianka1.json', 'Ścianka 1', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/scianka2.json', 'Ścianka 2', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/scianka3.json', 'Ścianka 3', 0x54585A],
      ['assets/NAMIOTY/5 nog 6,5m zew/scianka4.json', 'Ścianka 4', 0x54585A]
    ],
    dimensions: [['6x5 m', 1] , ['7x5 m', 1.2]],
  },
  'namiot6n6x5': {
    name: 'Namiot 6 nog 6,5m wew',
    family: ['namiot', 'namiot6x5', 'namiot6n6x5'],
    arya: [
      ['assets/NAMIOTY/6 nog 6,5 wew/g1.json', 'Góra 1', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/g2.json', 'Góra 2', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/g3.json', 'Góra 3', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/g4.json', 'Góra 4', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/g5.json', 'Góra 5', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/g6.json', 'Góra 6', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/n1.json', 'Noga 1', 0xC7C9C7],
      ['assets/NAMIOTY/6 nog 6,5 wew/n2.json', 'Noga 2', 0xC7C9C7],
      ['assets/NAMIOTY/6 nog 6,5 wew/n3.json', 'Noga 3', 0xC7C9C7],
      ['assets/NAMIOTY/6 nog 6,5 wew/n4.json', 'Noga 4', 0xC7C9C7],
      ['assets/NAMIOTY/6 nog 6,5 wew/n5.json', 'Noga 5', 0xC7C9C7],
      ['assets/NAMIOTY/6 nog 6,5 wew/n6.json', 'Noga 6', 0xC7C9C7],
      ['assets/NAMIOTY/6 nog 6,5 wew/nb1.json', 'Noga banner 1', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/nb2.json', 'Noga banner 2', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/nb3.json', 'Noga banner 3', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/nb4.json', 'Noga banner 4', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/nb5.json', 'Noga banner 5', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/szo1.json', 'Panel 1', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/szo2.json', 'Panel 2', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/szo3.json', 'Panel 3', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/szo4.json', 'Panel 4', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/szo5.json', 'Panel 5', 0x54585A],
      ['assets/NAMIOTY/6 nog 6,5 wew/szw.json', 'Panel 6', 0x54585A]
    ],
  },
  
  // bramy reklamowe
  'prostok4x3': {
    name: 'Brama prostokatna',
    family: ['prostok4x3', 'p_4x3', 'brama_hex'],
    arya: [
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b1.json', 'Banner 1', 0x54585A, 't'],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b2.json', 'Banner 2', 0x54585A, 't'],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b3.json', 'Banner 3', 0x54585A, 't'],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b4.json', 'Banner 4', 0x54585A, 't'],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b5.json', 'Banner 5', 0x54585A, 't'],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/bp1.json', 'Poprzeczka', 0xC7C9C7, 't'],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/n1.json', 'Rama 1', 0xC7C9C7],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/n2.json', 'Rama 2', 0xC7C9C7],
      ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/p1.json', 'Rama 3', 0xC7C9C7]
    ],
    dimensions: [['4x3 m', 1.01] , ['6x3 m', 1.52], ['8x4 m', 2.03] ,['10x5 m', 2.54] ],
  },
  'brama_hex': {
    name: 'Brama łamana',
    family: ['prostok4x3', 'p_4x3', 'brama_hex'],
    arya: [
      ['assets/BRAMY/hex_brama/baner1.json', 'Banner 1', 0x54585A, 't'],
      ['assets/BRAMY/hex_brama/baner2.json', 'Banner 2', 0x54585A, 't'],
      ['assets/BRAMY/hex_brama/baner3.json', 'Banner 3', 0x54585A, 't'],
      ['assets/BRAMY/hex_brama/baner4.json', 'Banner 4', 0x54585A, 't'],
      ['assets/BRAMY/hex_brama/baner5.json', 'Banner 5', 0x54585A, 't'],
      ['assets/BRAMY/hex_brama/baner6.json', 'Banner 6', 0x54585A, 't'],
      ['assets/BRAMY/hex_brama/rama1.json', 'Rama 1', 0xC7C9C7],
      ['assets/BRAMY/hex_brama/rama2.json', 'Rama 2', 0xC7C9C7],
      ['assets/BRAMY/hex_brama/rama3.json', 'Rama 3', 0xC7C9C7],
      ['assets/BRAMY/hex_brama/rama4.json', 'Rama 4', 0xC7C9C7],
      ['assets/BRAMY/hex_brama/rama5.json', 'Rama 5', 0xC7C9C7]
    ],
    
  },
  'p_4x3': {
    name: 'Półokrągła 4x3 wew. sr. 95',
    family: ['prostok4x3', 'p_4x3', 'brama_hex'],
    arya: [
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/b1.json', 'Banner 1', 0x54585A, 't'],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/b1a.json', 'Banner 2', 0x54585A, 't'],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/b2.json', 'Banner 3', 0x54585A, 't'],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/b2a.json', 'Banner 4', 0x54585A, 't'],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/b3.json', 'Banner 5', 0x54585A, 't'],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/b3a.json', 'Banner 6', 0x54585A, 't'],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br1.json', 'Brama 1', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br2.json', 'Brama 2', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br3.json', 'Brama 3', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br4.json', 'Brama 4', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br5.json', 'Brama 5', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br6.json', 'Brama 6', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br7.json', 'Brama 7', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br8.json', 'Brama 8', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br9.json', 'Brama 9', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br10.json', 'Brama 10', 0xC7C9C7],
      ['assets/BRAMY/POLOKRAGLA/4x3 wew sr 95/br11.json', 'Brama 11', 0xC7C9C7],
    ],
    dimensions: [['4x3 m', 1] , ['6x3 m', 1.2],['8x4 m', 1.5] ,['10x5 m', 1.6] ],
  },
 
  // ramy reklamowe
  'rama5x3': {
    name: 'Rama 5x3',
    family: ['rama5x3', 'ramaHex'],
    arya: [
      ['assets/RAMY/r5x3/b1_5x3.json', 'Banner', 0x54585A, 't'],
      ['assets/RAMY/r5x3/r1_5x3.json', 'Rama', 0xC7C9C7]
    ],
    dimensions: [['4x3 m', 0.8] , ['5x3 m', 1],['6x4 m', 1.2] ,['7x4 m', 1.3], ['8x6 m', 1.4], ['10x6 m', 1.5] ],
  },
  'ramaHex': {
    name: 'Rama HEX',
    family: ['rama5x3', 'ramaHex'],
    arya: [
      ['assets/RAMY/hex rama/b1.json', 'Banner 1', 0x54585A, 't'],
      ['assets/RAMY/hex rama/b2.json', 'Banner 2', 0x54585A, 't'],
      ['assets/RAMY/hex rama/r1.json', 'Ramię 1', 0xC7C9C7],
      ['assets/RAMY/hex rama/r2.json', 'Ramię 2', 0xC7C9C7],
      ['assets/RAMY/hex rama/r3.json', 'Ramię 3', 0xC7C9C7],
      ['assets/RAMY/hex rama/r4.json', 'Ramię 4', 0xC7C9C7],
      ['assets/RAMY/hex rama/r5.json', 'Ramię 5', 0xC7C9C7],
      ['assets/RAMY/hex rama/r6.json', 'Ramię 6', 0xC7C9C7]
    ],
    
  },
  // slupy reklamowe
  'slup': {
    name: 'Slup 2m sr 60',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/2m sr 60cm/w.json', 'Słup', 0x54585A, 't']
    ],
  },
  'slup2x5sr60': {
    name: 'Slup 2,5m sr 60',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/2,5m sr 60/w.json', 'Słup', 0x54585A, 't']
    ],
  },
  'slup3sr60': {
    name: 'Slup 3m sr 60',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/3m sr 60cm/w.json', 'Słup', 0x54585A, 't']
    ],
  },
  'slup4sr80': {
    name: 'Slup 4m sr 80',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/4m sr 80cm/w.json', 'Słup', 0x54585A, 't']
    ],
  },
  'slup4sr100': {
    name: 'Slup 4m sr 100',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/4m sr 100cm/w.json', 'Słup', 0x54585A, 't']
    ],
  },
  'slup5sr100': {
    name: 'Slup 5m sr 100',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/5m sr 100cm/w.json', 'Słup', 0x54585A, 't']
    ],
  },
  'slup5sr130': {
    name: 'Slup 5m sr 130',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/5m sr 130cm/w.json', 'Słup', 0x54585A, 't']
    ],
  },
  'slupKrzywy': {
    name: 'Slup 5m sr 130',
    family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/krzywy/z1.json', 'Krzywa 1', 0x54585A, 't'],
      ['assets/SLUPY/krzywy/z2.json', 'Krzywa 2', 0xC7C9C7, 't'],
      ['assets/SLUPY/krzywy/z3.json', 'Krzywa 3', 0x54585A, 't']
    ],
  },
  'slupKrzywy': {
    name: 'Slup 5m sr 130',
    family: ['slup', 'slupKrzywy'],
    arya: [
      ['assets/SLUPY/krzywy/z1.json', 'Krzywa 1', 0x54585A, 't'],
      ['assets/SLUPY/krzywy/z2.json', 'Krzywa 2', 0xC7C9C7, 't'],
      ['assets/SLUPY/krzywy/z3.json', 'Krzywa 3', 0x54585A, 't']
    ],
  },
  // chwieje
  'chwiej': {
    name: 'Chwiej 5m',
    family: ['chwiej', 'chwiej6m', 'chwiej7m', 'chwiej5mj', 'chwiej6mj', 'chwiej7mj'],
    arya: [
      ['assets/CHWIEJE/DWUNOZNE/chwiej5m/brzuch5.json', 'brzuch5', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej5m/glowa5.json', 'glowa5', 0xC7C9C7],
      ['assets/CHWIEJE/DWUNOZNE/chwiej5m/nogi5.json', 'nogi5', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej5m/palce5.json', 'palce5', 0xC7C9C7],
      ['assets/CHWIEJE/DWUNOZNE/chwiej5m/rece5.json', 'rece5', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej5m/wlosy5.json', 'wlosy5', 0xC7C9C7]
    ],
  },
  'chwiej6m': {
    name: 'Chwiej 6m',
    family: ['chwiej', 'chwiej6m', 'chwiej7m', 'chwiej5mj', 'chwiej6mj', 'chwiej7mj'],
    arya: [
      ['assets/CHWIEJE/DWUNOZNE/chwiej6m/brzuch6.json', 'brzuch6', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej6m/glowa6.json', 'glowa6', 0xC7C9C7],
      ['assets/CHWIEJE/DWUNOZNE/chwiej6m/nogi6.json', 'nogi6', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej6m/palce6.json', 'palce6', 0xC7C9C7],
      ['assets/CHWIEJE/DWUNOZNE/chwiej6m/rece6.json', 'rece6', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej6m/wlosy6.json', 'wlosy6', 0xC7C9C7]
    ],
  },
  'chwiej7m': {
    name: 'Chwiej 7m',
    family: ['chwiej', 'chwiej6m', 'chwiej7m', 'chwiej5mj', 'chwiej6mj', 'chwiej7mj'],
    arya: [
      ['assets/CHWIEJE/DWUNOZNE/chwiej7m/brzuch7.json', 'brzuch7', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej7m/glowa7.json', 'glowa7', 0xC7C9C7],
      ['assets/CHWIEJE/DWUNOZNE/chwiej7m/nogi7.json', 'nogi7', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej7m/palce7.json', 'palce7', 0xC7C9C7],
      ['assets/CHWIEJE/DWUNOZNE/chwiej7m/rece7.json', 'rece7', 0x54585A, 't'],
      ['assets/CHWIEJE/DWUNOZNE/chwiej7m/wlosy7.json', 'wlosy7', 0xC7C9C7]
    ],
  },
  'chwiej5mj': {
    name: 'Chwiej 5m jednonożny',
    family: ['chwiej', 'chwiej6m', 'chwiej7m', 'chwiej5mj', 'chwiej6mj', 'chwiej7mj'],
    arya: [
      ['assets/CHWIEJE/JEDNONOZNE/chwiej5/brzuch5.json', 'brzuch5', 0x54585A, 't'],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej5/glowa5.json', 'glowa5', 0xC7C9C7],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej5/palce5.json', 'palce5', 0xC7C9C7],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej5/rece5.json', 'rece5', 0x54585A, 't'],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej5/wlosy5.json', 'wlosy5', 0xC7C9C7]
    ],
  },
  'chwiej6mj': {
    name: 'Chwiej 6m jednonożny',
    family: ['chwiej', 'chwiej6m', 'chwiej7m', 'chwiej5mj', 'chwiej6mj', 'chwiej7mj'],
    arya: [
      ['assets/CHWIEJE/JEDNONOZNE/chwiej6/brzuch6.json', 'brzuch6', 0x54585A, 't'],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej6/glowa6.json', 'glowa6', 0xC7C9C7],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej6/palce6.json', 'palce6', 0xC7C9C7],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej6/rece6.json', 'rece6', 0x54585A, 't'],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej6/wlosy6.json', 'wlosy6', 0xC7C9C7]
    ],
  },
  'chwiej7mj': {
    name: 'Chwiej 7m jednonożny',
    family: ['chwiej', 'chwiej6m', 'chwiej7m', 'chwiej5mj', 'chwiej6mj', 'chwiej7mj'],
    arya: [
      ['assets/CHWIEJE/JEDNONOZNE/chwiej7/brzuch7.json', 'brzuch7', 0x54585A, 't'],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej7/glowa7.json', 'glowa7', 0xC7C9C7],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej7/palce7.json', 'palce7', 0xC7C9C7],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej7/rece7.json', 'rece7', 0x54585A, 't'],
      ['assets/CHWIEJE/JEDNONOZNE/chwiej7/wlosy7.json', 'wlosy7', 0xC7C9C7]
    ],
  }
}
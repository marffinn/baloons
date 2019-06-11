var load_consecutive = function(objectFetch, nameFetch, scaleFetch, positionFetch, materialFetch) {
  loader.load(objectFetch, function(object) {
    object = new THREE.Mesh(object, materialFetch);
    object.material.needsUpdate = true;
    object.position.set(0, positionFetch, 0);
    object.scale.set(scaleFetch, scaleFetch, scaleFetch);
    object.name = nameFetch;

    chosenArray[nameFetch] = null;  // prepare an array to store selected parts color.
    raycastArray.push(object);      // array for raycaster.
    group_main.add(object);         // Group object. All model parts are assigned and reasigned to it.
  });
}

var models = [
  [
    kula = {
      name: 'Balon Kula',
      family: ['kula','b12','b16'],
      arya: [
        ['assets/BALONY/Kula/k1.json', 'top', 0xC7C9C7],
        ['assets/BALONY/Kula/kg2.json', 'under-top', 0x54585A],
        ['assets/BALONY/Kula/k3.json', 'over-bottom', 0xC7C9C7],
        ['assets/BALONY/Kula/kg4.json', 'bottom', 0x54585A]
      ],
      scala: 1,
      posiy: -20,
      modposi: function() {
        group_main.scale.set(this.scala, this.scala, this.scala);
        group_main.position.y = this.posiy;
      },
      loadmodel: function() {
        for (i = 0; i <= this.arya.length - 1; i++) {
          let namesvar = this.arya[i][1];
          let scalevar = this.scala;
          let posiYvar = this.posiy;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates);
        }
      }
    }
  ],
  [
    b12 = {
      name: 'Balon B12',
      family: ['kula','b12','b16'],
      arya: [
        ['assets/BALONY/B12/top.json', 'top', 0xC7C9C7],
        ['assets/BALONY/B12/under-top.json', 'under-top', 0x54585A],
        ['assets/BALONY/B12/over-bottom.json', 'over-bottom', 0xC7C9C7],
        ['assets/BALONY/B12/bottom.json', 'bottom', 0x54585A]
      ],
      scala: 1,
      posiy: -20,
      modposi: function() {
        group_main.scale.set(this.scala, this.scala, this.scala);
        group_main.position.y = this.posiy;
      },
      loadmodel: function() {
        for (i = 0; i <= this.arya.length - 1; i++) {
          let namesvar = this.arya[i][1];
          let scalevar = this.scala;
          let posiYvar = this.posiy;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates);
        }
      }
    }
  ],
  [
    b16 = {
      name: 'Balon B16',
      family: ['kula','b12','b16'],
      arya: [
        ['assets/BALONY/B16/top.json', 'top', 0xC7C9C7],
        ['assets/BALONY/B16/under-top.json', 'under-top', 0x54585A],
        ['assets/BALONY/B16/over-bottom.json', 'over-bottom', 0xC7C9C7],
        ['assets/BALONY/B16/bottom.json', 'bottom', 0x54585A]
      ],
      scala: 1,
      posiy: -20,
      modposi: function() {
        group_main.scale.set(this.scala, this.scala, this.scala);
        group_main.position.y = this.posiy;
      },
      loadmodel: function() {
        for (i = 0; i <= this.arya.length - 1; i++) {
          let namesvar = this.arya[i][1];
          let scalevar = this.scala;
          let posiYvar = this.posiy;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates);
        }
      }
    }
  ],
  [
  lamana4x3wew95 = {
    name: 'Balon łamany 4x3 śr.wew. 95',
    family: ['kula','b12','b16'],
    arya: [
      ['assets/LAMANA/4x3wew95/1.json', '1', 0xC7C9C7],
      ['assets/LAMANA/4x3wew95/1a.json', '1a', 0x54585A],
      ['assets/LAMANA/4x3wew95/2.json', '2', 0xC7C9C7],
      ['assets/LAMANA/4x3wew95/2a.json', '2a', 0x54585A],
      ['assets/LAMANA/4x3wew95/3.json', '3', 0xC7C9C7],
      ['assets/LAMANA/4x3wew95/3a.json', '3a', 0x54585A],
      ['assets/LAMANA/4x3wew95/n1.json', 'n1', 0xC7C9C7],
      ['assets/LAMANA/4x3wew95/p.json', 'p', 0xC7C9C7],
      ['assets/LAMANA/4x3wew95/s1.json', 's1', 0x54585A],
      ['assets/LAMANA/4x3wew95/s2.json', 's2', 0xC7C9C7]
    ],
    scala: 1,
    posiy: -20,
    modposi: function() {
      group_main.scale.set(this.scala, this.scala, this.scala);
      group_main.position.y = this.posiy;
    },
    loadmodel: function() {
      for (i = 0; i <= this.arya.length - 1; i++) {
        let namesvar = this.arya[i][1];
        let scalevar = this.scala;
        let posiYvar = this.posiy;
        let mates = new THREE.MeshLambertMaterial({
          color: this.arya[i][2],
          side: THREE.DoubleSide
        });
        $('.product-name').text(this.name);
        load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates);
      }
    }
  }
]

];

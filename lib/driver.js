// let outline_mat = new THREE.MeshBasicMaterial({ color : 0xffffff, side: THREE.BackSide });


let load_consecutive = function(objectFetch, nameFetch, scaleFetch, positionFetch, materialFetch) {

  loader.load(objectFetch, function(object) {
    objectile = new THREE.Mesh(object, materialFetch);
    objectile.material.needsUpdate = true;
    objectile.position.set(0, positionFetch, 0);
    objectile.scale.set(scaleFetch, scaleFetch, scaleFetch);
    objectile.name = nameFetch;

    // let outline_scale = scaleFetch*1.2;
    // objectile_outline = new THREE.Mesh(object, outline_mat);
    // objectile_outline.position.set(0, positionFetch, 0);
    // objectile_outline.scale.set(outline_scale, outline_scale, outline_scale);
    // objectile_outline.name = nameFetch + '-outline';
    // group_main.add(objectile_outline);

    chosenArray[nameFetch] = null;  // prepare an array to store selected parts color.
    raycastArray.push(objectile);      // array for raycaster.
    group_main.add(objectile);         // Group object. All model parts are assigned and reasigned to it.
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
],
[
lamana6x3wew130 = {
  name: 'Balon łamany 6x3 śr.wew. 130',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/LAMANA/6x3wew130/1.json', '1', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/1a.json', '1a', 0x54585A],
    ['assets/LAMANA/6x3wew130/2.json', '2', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/2a.json', '2a', 0x54585A],
    ['assets/LAMANA/6x3wew130/3.json', '3', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/3a.json', '3a', 0x54585A],
    ['assets/LAMANA/6x3wew130/4.json', '4', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/4a.json', '4a', 0x54585A],
    ['assets/LAMANA/6x3wew130/5.json', '5', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/5a.json', '5a', 0x54585A],
    ['assets/LAMANA/6x3wew130/n1.json', 'n1', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/n2.json', 'n2', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/p.json', 'p', 0xC7C9C7],
    ['assets/LAMANA/6x3wew130/s1.json', 's1', 0x54585A],
    ['assets/LAMANA/6x3wew130/s2.json', 's2', 0xC7C9C7]
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
lamana8x4wew160 = {
  name: 'Balon łamany 8x4 śr.wew. 160',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/LAMANA/8x4wew160/b1.json', '1', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/b1a.json', '1a', 0x54585A],
    ['assets/LAMANA/8x4wew160/b2.json', '2', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/b2a.json', '2a', 0x54585A],
    ['assets/LAMANA/8x4wew160/b3.json', '3', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/b3a.json', '3a', 0x54585A],
    ['assets/LAMANA/8x4wew160/b4.json', '4', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/b4a.json', '4a', 0x54585A],
    ['assets/LAMANA/8x4wew160/b5.json', '5', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/b5a.json', '5a', 0x54585A],
    ['assets/LAMANA/8x4wew160/n1.json', 'n1', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/n2.json', 'n2', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/p.json', 'p', 0xC7C9C7],
    ['assets/LAMANA/8x4wew160/s1.json', 's1', 0x54585A],
    ['assets/LAMANA/8x4wew160/s2.json', 's2', 0xC7C9C7]
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
lamana10x5wew180 = {
  name: 'Balon łamany 10x5 śr.wew. 180',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/LAMANA/10x5wew180/b1.json', '1', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/b1a.json', '1a', 0x54585A],
    ['assets/LAMANA/10x5wew180/b2.json', '2', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/b2a.json', '2a', 0x54585A],
    ['assets/LAMANA/10x5wew180/b3.json', '3', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/b3a.json', '3a', 0x54585A],
    ['assets/LAMANA/10x5wew180/b4.json', '4', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/b4a.json', '4a', 0x54585A],
    ['assets/LAMANA/10x5wew180/b5.json', '5', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/b5a.json', '5a', 0x54585A],
    ['assets/LAMANA/10x5wew180/n1.json', 'n1', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/n2.json', 'n2', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/p.json', 'p', 0xC7C9C7],
    ['assets/LAMANA/10x5wew180/s1.json', 's1', 0x54585A],
    ['assets/LAMANA/10x5wew180/s2.json', 's2', 0xC7C9C7]
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
namiot4x4 = {
  name: 'Namiot 4 nogi 4x4',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/NAMIOTY/4 nogi 4x4/b1.json', 'b1', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/b2.json', 'b2', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/b3.json', 'b3', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/b4.json', 'b4', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/g1.json', 'g1', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/g2.json', 'g2', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/g3.json', 'g3', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/g4.json', 'g4', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/n1.json', 'n1', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/n2.json', 'n2', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/n3.json', 'n3', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/n4.json', 'n4', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/sbd.json', 'sbd', 0xC7C9C7],
    ['assets/NAMIOTY/4 nogi 4x4/sz1.json', 'sz1', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/sz2.json', 'sz2', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/sz3.json', 'sz3', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/szo.json', 'szo', 0x54585A],
    ['assets/NAMIOTY/4 nogi 4x4/szo1.json', 'szo1', 0x54585A]
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
namiot5x5 = {
  name: 'Namiot 4 nogi 4x4',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/NAMIOTY/4nogi 5x5/d1.json', 'd1', 0xC7C9C7],
    ['assets/NAMIOTY/4nogi 5x5/d2.json', 'd2', 0x54585A],
    ['assets/NAMIOTY/4nogi 5x5/d3.json', 'd3', 0xC7C9C7],

    ['assets/NAMIOTY/4nogi 5x5/g1.json', 'g1', 0xC7C9C7],
    ['assets/NAMIOTY/4nogi 5x5/g2.json', 'g2', 0x54585A],
    ['assets/NAMIOTY/4nogi 5x5/g3.json', 'g3', 0xC7C9C7],
    ['assets/NAMIOTY/4nogi 5x5/g4.json', 'g4', 0x54585A],

    ['assets/NAMIOTY/4nogi 5x5/n1.json', 'n1', 0xC7C9C7],
    ['assets/NAMIOTY/4nogi 5x5/n2.json', 'n2', 0x54585A],
    ['assets/NAMIOTY/4nogi 5x5/n3.json', 'n3', 0xC7C9C7],
    ['assets/NAMIOTY/4nogi 5x5/n4.json', 'n4', 0xC7C9C7],
    ['assets/NAMIOTY/4nogi 5x5/sc.json', 'sc', 0xC7C9C7],

    ['assets/NAMIOTY/4nogi 5x5/sn1.json', 'sn1', 0xC7C9C7],
    ['assets/NAMIOTY/4nogi 5x5/sn2.json', 'sn2', 0x54585A],
    ['assets/NAMIOTY/4nogi 5x5/sn3.json', 'sn3', 0x54585A],
    ['assets/NAMIOTY/4nogi 5x5/sn4.json', 'sn4', 0x54585A],

    ['assets/NAMIOTY/4nogi 5x5/wej.json', 'wej', 0x54585A],
    ['assets/NAMIOTY/4nogi 5x5/szo1.json', 'szo1', 0x54585A],
    ['assets/NAMIOTY/4nogi 5x5/szo2.json', 'szo2', 0x54585A]
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
namiot6x5 = {
  name: 'Namiot 5 nog 6,5m zew',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/NAMIOTY/5 nog 6,5m zew/d1.json', 'd1', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 6,5m zew/d2.json', 'd2', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/d3.json', 'd3', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 6,5m zew/d4.json', 'd4', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/d5.json', 'd5', 0xC7C9C7],

    ['assets/NAMIOTY/5 nog 6,5m zew/n1.json', 'n1', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 6,5m zew/n2.json', 'n2', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/n3.json', 'n3', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 6,5m zew/n4.json', 'n4', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 6,5m zew/n5.json', 'n5', 0xC7C9C7],

    ['assets/NAMIOTY/5 nog 6,5m zew/nb1.json', 'nb1', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 6,5m zew/nb2.json', 'nb2', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/nb3.json', 'nb3', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/nb4.json', 'nb4', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/nb5.json', 'nb4', 0x54585A],

    ['assets/NAMIOTY/5 nog 6,5m zew/s1.json', 's1', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/s2.json', 's2', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/s3.json', 's3', 0x54585A],
    ['assets/NAMIOTY/5 nog 6,5m zew/s4.json', 's4', 0x54585A]
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
namiot7x5 = {
  name: 'Namiot 5 nog 7,5m zew',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/NAMIOTY/5 nog 7,5m wew/d1.json', 'd1', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 7,5m wew/d2.json', 'd2', 0x54585A],
    ['assets/NAMIOTY/5 nog 7,5m wew/d3.json', 'd3', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 7,5m wew/d4.json', 'd4', 0x54585A],
    ['assets/NAMIOTY/5 nog 7,5m wew/d5.json', 'd5', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 7,5m wew/n1.json', 'n1', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 7,5m wew/n2.json', 'n2', 0x54585A],
    ['assets/NAMIOTY/5 nog 7,5m wew/n3.json', 'n3', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 7,5m wew/n4.json', 'n4', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 7,5m wew/n5.json', 'n5', 0xC7C9C7],
    ['assets/NAMIOTY/5 nog 7,5m wew/s1.json', 's1', 0x54585A],
    ['assets/NAMIOTY/5 nog 7,5m wew/s2.json', 's2', 0x54585A],
    ['assets/NAMIOTY/5 nog 7,5m wew/s3.json', 's3', 0x54585A],
    ['assets/NAMIOTY/5 nog 7,5m wew/s4.json', 's4', 0x54585A]
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
namiot6n6x5 = {
  name: 'Namiot 6 nog 6,5m wew',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/NAMIOTY/6 nog 6,5 wew/g1.json', 'g1', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/g2.json', 'g2', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/g3.json', 'g3', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/g4.json', 'g4', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/g5.json', 'g5', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/g6.json', 'g6', 0xC7C9C7],

    ['assets/NAMIOTY/6 nog 6,5 wew/n1.json', 'n1', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/n2.json', 'n2', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/n3.json', 'n3', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/n4.json', 'n4', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/n5.json', 'n5', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/n6.json', 'n6', 0xC7C9C7],

    ['assets/NAMIOTY/6 nog 6,5 wew/nb1.json', 'nb1', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/nb2.json', 'nb2', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/nb3.json', 'nb3', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/nb4.json', 'nb4', 0x54585A],
    ['assets/NAMIOTY/6 nog 6,5 wew/nb5.json', 'nb5', 0x54585A],

    ['assets/NAMIOTY/6 nog 6,5 wew/szo1.json', 'szo1', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/szo2.json', 'szo2', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/szo3.json', 'szo3', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/szo4.json', 'szo4', 0xC7C9C7],
    ['assets/NAMIOTY/6 nog 6,5 wew/szo5.json', 'szo5', 0xC7C9C7],

    ['assets/NAMIOTY/6 nog 6,5 wew/szw.json', 'szw', 0xC7C9C7]
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
polokr4x3 = {
  name: 'Polokragla 4x3 wew sr 95',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/POLOKRAGLA/4x3 wew sr 95/b1.json', 'b1', 0xC7C9C7],
    ['assets/POLOKRAGLA/4x3 wew sr 95/b1a.json', 'b1a', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/b2.json', 'b2', 0xC7C9C7],
    ['assets/POLOKRAGLA/4x3 wew sr 95/b2a.json', 'b2a', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/b3.json', 'b3', 0xC7C9C7],
    ['assets/POLOKRAGLA/4x3 wew sr 95/b3a.json', 'b3a', 0xC7C9C7],

    ['assets/POLOKRAGLA/4x3 wew sr 95/br1.json', 'br1', 0xC7C9C7],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br2.json', 'br2', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br3.json', 'br3', 0xC7C9C7],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br4.json', 'br4', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br5.json', 'br5', 0xC7C9C7],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br6.json', 'br6', 0xC7C9C7],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br7.json', 'br7', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br8.json', 'br8', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br9.json', 'br9', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br10.json', 'br10', 0x54585A],
    ['assets/POLOKRAGLA/4x3 wew sr 95/br11.json', 'br11', 0x54585A]
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
polokr6x3 = {
  name: 'Polokragla 6x3 wew sr 130',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/POLOKRAGLA/6x3 wew sr 130/b1.json', 'b1', 0xC7C9C7],
    ['assets/POLOKRAGLA/6x3 wew sr 130/b1a.json', 'b1a', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/b2.json', 'b2', 0xC7C9C7],
    ['assets/POLOKRAGLA/6x3 wew sr 130/b2a.json', 'b2a', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/b3.json', 'b3', 0xC7C9C7],
    ['assets/POLOKRAGLA/6x3 wew sr 130/b3a.json', 'b3a', 0xC7C9C7],

    ['assets/POLOKRAGLA/6x3 wew sr 130/br1.json', 'br1', 0xC7C9C7],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br2.json', 'br2', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br3.json', 'br3', 0xC7C9C7],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br4.json', 'br4', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br5.json', 'br5', 0xC7C9C7],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br6.json', 'br6', 0xC7C9C7],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br7.json', 'br7', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br8.json', 'br8', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br9.json', 'br9', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br10.json', 'br10', 0x54585A],
    ['assets/POLOKRAGLA/6x3 wew sr 130/br11.json', 'br11', 0x54585A]
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
polokr8x4 = {
  name: 'Polokragla 8x4 wew sr 160',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/POLOKRAGLA/8x4 wew sr 160/b1.json', 'b1', 0xC7C9C7],
    ['assets/POLOKRAGLA/8x4 wew sr 160/b1a.json', 'b1a', 0x54585A],
    ['assets/POLOKRAGLA/8x4 wew sr 160/b2.json', 'b2', 0xC7C9C7],
    ['assets/POLOKRAGLA/8x4 wew sr 160/b2a.json', 'b2a', 0x54585A],
    ['assets/POLOKRAGLA/8x4 wew sr 160/b3.json', 'b3', 0xC7C9C7],
    ['assets/POLOKRAGLA/8x4 wew sr 160/b3a.json', 'b3a', 0xC7C9C7],

    ['assets/POLOKRAGLA/8x4 wew sr 160/br1.json', 'br1', 0xC7C9C7],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br2.json', 'br2', 0x54585A],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br3.json', 'br3', 0xC7C9C7],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br4.json', 'br4', 0x54585A],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br5.json', 'br5', 0xC7C9C7],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br6.json', 'br6', 0xC7C9C7],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br7.json', 'br7', 0x54585A],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br8.json', 'br8', 0x54585A],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br9.json', 'br9', 0x54585A],
    ['assets/POLOKRAGLA/8x4 wew sr 160/br10.json', 'br10', 0x54585A]
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
// [
// polokr10x5 = {
//   name: 'Polokragla 10x5 wew sr 180',
//   family: ['kula','b12','b16'],
//   arya: [
//     ['assets/POLOKRAGLA/8x4 wew sr 160/b1.json', 'b1', 0xC7C9C7],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/b1a.json', 'b1a', 0x54585A],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/b2.json', 'b2', 0xC7C9C7],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/b2a.json', 'b2a', 0x54585A],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/b3.json', 'b3', 0xC7C9C7],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/b3a.json', 'b3a', 0xC7C9C7],
//
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br1.json', 'br1', 0xC7C9C7],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br2.json', 'br2', 0x54585A],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br3.json', 'br3', 0xC7C9C7],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br4.json', 'br4', 0x54585A],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br5.json', 'br5', 0xC7C9C7],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br6.json', 'br6', 0xC7C9C7],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br7.json', 'br7', 0x54585A],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br8.json', 'br8', 0x54585A],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br9.json', 'br9', 0x54585A],
//     ['assets/POLOKRAGLA/8x4 wew sr 160/br10.json', 'br10', 0x54585A]
//   ],
//   scala: 1,
//   posiy: -20,
//   modposi: function() {
//     group_main.scale.set(this.scala, this.scala, this.scala);
//     group_main.position.y = this.posiy;
//   },
//   loadmodel: function() {
//     for (i = 0; i <= this.arya.length - 1; i++) {
//       let namesvar = this.arya[i][1];
//       let scalevar = this.scala;
//       let posiYvar = this.posiy;
//       let mates = new THREE.MeshLambertMaterial({
//         color: this.arya[i][2],
//         side: THREE.DoubleSide
//       });
//       $('.product-name').text(this.name);
//       load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates);
//     }
//   }
// }
// ]
[
prostok4x3 = {
  name: 'Prostokatna 4x3 wew sr 95',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/PROSTOKATNA/4x3 wew sr 95/b1.json', 'b1', 0xC7C9C7],
    ['assets/PROSTOKATNA/4x3 wew sr 95/b2.json', 'b2', 0x54585A],
    ['assets/PROSTOKATNA/4x3 wew sr 95/b3.json', 'b3', 0xC7C9C7],
    ['assets/PROSTOKATNA/4x3 wew sr 95/b4.json', 'b4', 0x54585A],
    ['assets/PROSTOKATNA/4x3 wew sr 95/b5.json', 'b5', 0xC7C9C7],
    ['assets/PROSTOKATNA/4x3 wew sr 95/bp1.json', 'bp1', 0xC7C9C7],

    ['assets/PROSTOKATNA/4x3 wew sr 95/n1.json', 'br1', 0xC7C9C7],
    ['assets/PROSTOKATNA/4x3 wew sr 95/n2.json', 'br2', 0x54585A],
    ['assets/PROSTOKATNA/4x3 wew sr 95/p1.json', 'br3', 0xC7C9C7]
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
prostok6x3 = {
  name: 'Prostokatna 6x3 wew sr 130',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/PROSTOKATNA/6x3 wew sr 130/b1.json', 'b1', 0xC7C9C7],
    ['assets/PROSTOKATNA/6x3 wew sr 130/b2.json', 'b2', 0x54585A],
    ['assets/PROSTOKATNA/6x3 wew sr 130/b3.json', 'b3', 0xC7C9C7],
    ['assets/PROSTOKATNA/6x3 wew sr 130/b4.json', 'b4', 0x54585A],
    ['assets/PROSTOKATNA/6x3 wew sr 130/b5.json', 'b5', 0xC7C9C7],
    ['assets/PROSTOKATNA/6x3 wew sr 130/bp1.json', 'bp1', 0xC7C9C7],

    ['assets/PROSTOKATNA/6x3 wew sr 130/n1.json', 'n1', 0xC7C9C7],
    ['assets/PROSTOKATNA/6x3 wew sr 130/n2.json', 'n2', 0x54585A],
    ['assets/PROSTOKATNA/6x3 wew sr 130/p.json', 'p', 0xC7C9C7]
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
prostok8x4 = {
  name: 'Prostokatna 8x4 wew sr 160',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/PROSTOKATNA/8x4 wew sr 160/b1.json', 'b1', 0xC7C9C7],
    ['assets/PROSTOKATNA/8x4 wew sr 160/b1a.json', 'b2', 0x54585A],
    ['assets/PROSTOKATNA/8x4 wew sr 160/b2.json', 'b3', 0xC7C9C7],
    ['assets/PROSTOKATNA/8x4 wew sr 160/b2a.json', 'b4', 0x54585A],
    ['assets/PROSTOKATNA/8x4 wew sr 160/b3.json', 'b5', 0xC7C9C7],
    ['assets/PROSTOKATNA/8x4 wew sr 160/b3a.json', 'bp1', 0xC7C9C7],
    ['assets/PROSTOKATNA/8x4 wew sr 160/n1.json', 'n1', 0xC7C9C7],
    ['assets/PROSTOKATNA/8x4 wew sr 160/n2.json', 'n2', 0x54585A],
    ['assets/PROSTOKATNA/8x4 wew sr 160/p.json', 'p', 0xC7C9C7]
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
prostok10x5 = {
  name: 'Prostokatna 10x5 wew sr 180',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/PROSTOKATNA/10x5 wew sr 180/b1.json', 'b1', 0xC7C9C7],
    ['assets/PROSTOKATNA/10x5 wew sr 180/b1a.json', 'b2', 0x54585A],
    ['assets/PROSTOKATNA/10x5 wew sr 180/b2.json', 'b3', 0xC7C9C7],
    ['assets/PROSTOKATNA/10x5 wew sr 180/b2a.json', 'b4', 0x54585A],
    ['assets/PROSTOKATNA/10x5 wew sr 180/b3.json', 'b5', 0xC7C9C7],
    ['assets/PROSTOKATNA/10x5 wew sr 180/b3a.json', 'bp1', 0xC7C9C7],
    ['assets/PROSTOKATNA/10x5 wew sr 180/n1.json', 'n1', 0xC7C9C7],
    ['assets/PROSTOKATNA/10x5 wew sr 180/n2.json', 'n2', 0x54585A],
    ['assets/PROSTOKATNA/10x5 wew sr 180/p.json', 'p', 0xC7C9C7]
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
rama5x3 = {
  name: 'Rama 5x3',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/RAMY/r5x3/b1_5x3.json', 'b1_5x3', 0xC7C9C7],
    ['assets/RAMY/r5x3/r1_5x3.json', 'r1_5x3', 0x54585A]
  ],
  scala: 1,
  posiy: 20,
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
rama6x4 = {
  name: 'Rama 6x4',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/RAMY/r6x4/b1_6x4.json', 'b1_6x4', 0xC7C9C7],
    ['assets/RAMY/r6x4/r1_6x4.json', 'r1_6x4', 0x54585A]
  ],
  scala: 1,
  posiy: 20,
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
rama7x4 = {
  name: 'Rama 7x4',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/RAMY/r7x4/b1_7x4.json', 'b1_7x4', 0xC7C9C7],
    ['assets/RAMY/r7x4/r1_7x4.json', 'r1_7x4', 0x54585A]
  ],
  scala: 1,
  posiy: 20,
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
rama8x6 = {
  name: 'Rama 8x6',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/RAMY/r8x6/b1_8x6.json', 'b1_8x6', 0xC7C9C7],
    ['assets/RAMY/r8x6/r1_8x6.json', 'r1_8x6', 0x54585A]
  ],
  scala: 1,
  posiy: 20,
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
rama10x6 = {
  name: 'Rama 10x6',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/RAMY/r10x6/r10x6bb.json', 'b1_10x6', 0xC7C9C7],
    ['assets/RAMY/r10x6/r1_10x6.json', 'r1_10x6', 0x54585A]
  ],
  scala: 1,
  posiy: 20,
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
slup2sr60 = {
  name: 'Slup 2m sr 60',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/SLUPY/2m sr 60cm/w.json', 'w', 0xC7C9C7]
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
slup2x5sr60 = {
  name: 'Slup 2,5m sr 60',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/SLUPY/2,5m sr 60/w.json', 'w', 0xC7C9C7]
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
slup3sr60 = {
  name: 'Slup 3m sr 60',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/SLUPY/3m sr 60cm/w.json', 'w', 0xC7C9C7]
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
slup4sr80 = {
  name: 'Slup 4m sr 80',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/SLUPY/4m sr 80cm/w.json', 'w', 0xC7C9C7]
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
slup4sr100 = {
  name: 'Slup 4m sr 100',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/SLUPY/4m sr 100cm/w.json', 'w', 0xC7C9C7]
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
slup5sr100 = {
  name: 'Slup 5m sr 100',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/SLUPY/5m sr 100cm/w.json', 'w', 0xC7C9C7]
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
slup5sr130 = {
  name: 'Slup 5m sr 130',
  family: ['kula','b12','b16'],
  arya: [
    ['assets/SLUPY/5m sr 130cm/w.json', 'w', 0xC7C9C7]
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

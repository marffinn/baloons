let chosenModel = null;
let sizePopulate = function( contents ){
  $('.srozmiar a').each(function() {
    $(this).remove();
  });
  for(i=0;i<=contents.length-1;i++){
    let checkData = '<a class="clr dynamic" href="#" target="_self" alt="'+contents[i]+'"  >'+ contents[i] +'</a>';
    $('.srozmiar').append(checkData);
  }
}

let load_consecutive = function(objectFetch, nameFetch, scaleFetch, positionFetch, materialFetch, familyFetch) {

  loader.load(objectFetch, function(object) {
    objectile = new THREE.Mesh(object, materialFetch);
    objectile.material.needsUpdate = true;
    objectile.position.set(0, positionFetch, 0);
    objectile.scale.set(scaleFetch, scaleFetch, scaleFetch);
    objectile.name = nameFetch;

    sizePopulate( familyFetch );                                // pick list family names populate
    chosenArray[nameFetch] = null;                              // prepare an array to store selected parts color.
    raycastArray.push(objectile);                               // array for raycaster.
    group_main.add(objectile);                                  // Group object. All model parts are assigned and reasigned to it.
    $('.srozmiar a[alt='+chosenModel+']').addClass('check');
  });

}

let models = {

    'balon' : {
      name: 'Balon Kula',
      family: ['balon', 'b12', 'b16','grzybek'],
      arya: [
        ['assets/BALONY/Kula/k1.json', 'Górna część', 0xC7C9C7],
        ['assets/BALONY/Kula/kg2.json', 'Środkowa część', 0x54585A],
        ['assets/BALONY/Kula/k3.json', 'Szyjka', 0xC7C9C7],
        ['assets/BALONY/Kula/kg4.json', 'Spód', 0x54585A]
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
          let familyvar = this.family;

          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },

    'b12' : {
      name: 'Balon B12',
      family: ['balon', 'b12', 'b16','grzybek'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'b16' : {
      name: 'Balon B16',
      family: ['balon', 'b12', 'b16','grzybek'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'grzybek' : {
      name: 'Balon Grzybek',
      family: ['balon', 'b12', 'b16','grzybek'],
      arya: [
        ['assets/BALONY/grzybek/b1.json', 'b1', 0xC7C9C7],
        ['assets/BALONY/grzybek/b2.json', 'b2', 0xC7C9C7],
        ['assets/BALONY/grzybek/b3.json', 'b3', 0xC7C9C7],
        ['assets/BALONY/grzybek/b4.json', 'b4', 0xC7C9C7],
        ['assets/BALONY/grzybek/bk1.json', 'bk1', 0xC7C9C7],
        ['assets/BALONY/grzybek/bk2.json', 'bk2', 0xC7C9C7],
        ['assets/BALONY/grzybek/bk3.json', 'bk3', 0xC7C9C7],
        ['assets/BALONY/grzybek/bk4.json', 'bk4', 0xC7C9C7],
        ['assets/BALONY/grzybek/s.json', 's', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },

    // lamana reklamowe

    'lamana4x3wew95' : {
      name: 'Balon łamany 4x3 śr.wew. 95',
      family: ['lamana4x3wew95', 'lamana6x3wew130', 'lamana8x4wew160', 'lamana10x5wew180'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'lamana6x3wew130' : {
      name: 'Balon łamany 6x3 śr.wew. 130',
      family: ['lamana4x3wew95', 'lamana6x3wew130', 'lamana8x4wew160', 'lamana10x5wew180'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'lamana8x4wew160' : {
      name: 'Balon łamany 8x4 śr.wew. 160',
      family: ['lamana4x3wew95', 'lamana6x3wew130', 'lamana8x4wew160', 'lamana10x5wew180'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'lamana10x5wew180' : {
      name: 'Balon łamany 10x5 śr.wew. 180',
      family: ['lamana4x3wew95', 'lamana6x3wew130', 'lamana8x4wew160', 'lamana10x5wew180'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },

    // namioty reklamowe

    'namiot' : {
      name: 'Namiot 4 nogi 4x4',
      family: ['namiot', 'namiot5x5', 'namiot6x5', 'namiot7x5', 'namiot6n6x5'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'namiot5x5' : {
      name: 'Namiot 4 nogi 4x4',
      family: ['namiot', 'namiot5x5', 'namiot6x5', 'namiot7x5', 'namiot6n6x5'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'namiot6x5' : {
      name: 'Namiot 5 nog 6,5m zew',
      family: ['namiot', 'namiot5x5', 'namiot6x5', 'namiot7x5', 'namiot6n6x5'],
      arya: [
        ['assets/NAMIOTY/5 nog 6,5m zew/daszek1.json', 'd1', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/daszek2.json', 'd2', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/daszek3.json', 'd3', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/daszek4.json', 'd4', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/daszek5.json', 'd5', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/noga1.json', 'n1', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/noga2.json', 'n2', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/noga3.json', 'n3', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/noga4.json', 'n4', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/noga5.json', 'n5', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/nb1.json', 'nb1', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 6,5m zew/nb2.json', 'nb2', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/nb3.json', 'nb3', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/nb4.json', 'nb4', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/nb5.json', 'nb4', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/scianka1.json', 's1', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/scianka2.json', 's2', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/scianka3.json', 's3', 0x54585A],
        ['assets/NAMIOTY/5 nog 6,5m zew/scianka4.json', 's4', 0x54585A]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'namiot7x5' : {
      name: 'Namiot 5 nog 7,5m zew',
      family: ['namiot', 'namiot5x5', 'namiot6x5', 'namiot7x5', 'namiot6n6x5'],
      arya: [
        ['assets/NAMIOTY/5 nog 7,5m zew/daszek1.json', 'daszek1', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 7,5m zew/daszek2.json', 'daszek2', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 7,5m zew/daszek3.json', 'daszek3', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 7,5m zew/daszek4.json', 'daszek4', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 7,5m zew/daszek5.json', 'daszek5', 0xC7C9C7],

        ['assets/NAMIOTY/5 nog 7,5m zew/noga1.json', 'noga1', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 7,5m zew/noga2.json', 'noga2', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/noga3.json', 'noga3', 0xC7C9C7],
        ['assets/NAMIOTY/5 nog 7,5m zew/noga4.json', 'noga4', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/noga5.json', 'noga5', 0xC7C9C7],

        ['assets/NAMIOTY/5 nog 7,5m zew/nb1.json', 'nb1', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/nb2.json', 'nb2', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/nb3.json', 'nb3', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/nb4.json', 'nb4', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/nb5.json', 'nb5', 0x54585A],

        ['assets/NAMIOTY/5 nog 7,5m zew/scianka1.json', 'scianka1', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/scianka2.json', 'scianka2', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/scianka3.json', 'scianka3', 0x54585A],
        ['assets/NAMIOTY/5 nog 7,5m zew/scianka4.json', 'scianka4', 0x54585A]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'namiot6n6x5' : {
      name: 'Namiot 6 nog 6,5m wew',
      family: ['namiot', 'namiot5x5', 'namiot6x5', 'namiot7x5', 'namiot6n6x5'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },

    // polokragle reklamowe

    'polokr4x3' : {
      name: 'Polokragla 4x3 wew sr 95',
      family: ['polokr4x3', 'polokr6x3', 'polokr8x4', 'polokr10x5'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'polokr6x3' : {
      name: 'Polokragla 6x3 wew sr 130',
      family: ['kula', 'b12', 'b16'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'polokr8x4' : {
      name: 'Polokragla 8x4 wew sr 160',
      family: ['kula', 'b12', 'b16'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },

    // bramy reklamowe

    'brama' : {
      name: 'Prostokatna 4x3 wew sr 95',
      family: ['brama', 'prostok6x3', 'prostok8x4', 'prostok10x5','brama_hex'],
      arya: [
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b1.json', 'b1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b2.json', 'b2', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b3.json', 'b3', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b4.json', 'b4', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/b5.json', 'b5', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/bp1.json', 'bp1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/n1.json', 'br1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/n2.json', 'br2', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/4x3 wew sr 95/p1.json', 'br3', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'prostok6x3' : {
      name: 'Prostokatna 6x3 wew sr 130',
      family: ['brama', 'prostok6x3', 'prostok8x4', 'prostok10x5','brama_hex'],
      arya: [
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/b1.json', 'b1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/b1a.json', 'b1a', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/b2.json', 'b2', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/b2a.json', 'b2a', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/b3.json', 'b3', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/b3a.json', 'b3a', 0xC7C9C7],

        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/n1.json', 'n1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/n2.json', 'n2', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/6x3 wew sr 130/p.json', 'p', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'prostok8x4' : {
      name: 'Prostokatna 8x4 wew sr 160',
      family: ['brama', 'prostok6x3', 'prostok8x4', 'prostok10x5','brama_hex'],
      arya: [
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/b1.json', 'b1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/b1a.json', 'b2', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/b2.json', 'b3', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/b2a.json', 'b4', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/b3.json', 'b5', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/b3a.json', 'bp1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/n1.json', 'n1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/n2.json', 'n2', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/8x4 wew sr 160/p.json', 'p', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'prostok10x5' : {
      name: 'Prostokatna 10x5 wew sr 180',
      family: ['brama', 'prostok6x3', 'prostok8x4', 'prostok10x5','brama_hex'],
      arya: [
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/b1.json', 'b1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/b1a.json', 'b2', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/b2.json', 'b3', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/b2a.json', 'b4', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/b3.json', 'b5', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/b3a.json', 'bp1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/n1.json', 'n1', 0xC7C9C7],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/n2.json', 'n2', 0x54585A],
        ['assets/BRAMY/PROSTOKATNA/10x5 wew sr 180/p.json', 'p', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'brama_hex' : {
      name: 'Prostokatna 10x5 wew sr 180',
      family: ['brama', 'prostok6x3', 'prostok8x4', 'prostok10x5','brama_hex'],
      arya: [
        ['assets/BRAMY/hex_brama/baner1.json', 'b1', 0xC7C9C7],
        ['assets/BRAMY/hex_brama/baner2.json', 'b2', 0xC7C9C7],
        ['assets/BRAMY/hex_brama/rama1.json', 'r1', 0xC7C9C7],
        ['assets/BRAMY/hex_brama/rama2.json', 'r2', 0xC7C9C7],
        ['assets/BRAMY/hex_brama/rama3.json', 'r3', 0xC7C9C7],
        ['assets/BRAMY/hex_brama/rama4.json', 'r4', 0xC7C9C7],
        ['assets/BRAMY/hex_brama/rama5.json', 'r5', 0xC7C9C7],
        ['assets/BRAMY/hex_brama/rama6.json', 'r6', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },

    // ramy reklamowe

    'rama5x3' : {
      name: 'Rama 5x3',
      family: ['rama5x3', 'rama6x4', 'rama7x4', 'rama8x6', 'rama10x6', 'ramaHex'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'rama6x4' : {
      name: 'Rama 6x4',
      family: ['rama5x3', 'rama6x4', 'rama7x4', 'rama8x6', 'rama10x6', 'ramaHex'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'rama7x4' : {
      name: 'Rama 7x4',
        family: ['rama5x3', 'rama6x4', 'rama7x4', 'rama8x6', 'rama10x6', 'ramaHex'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'rama8x6' : {
      name: 'Rama 8x6',
        family: ['rama5x3', 'rama6x4', 'rama7x4', 'rama8x6', 'rama10x6', 'ramaHex'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'rama10x6' : {
      name: 'Rama 10x6',
        family: ['rama5x3', 'rama6x4', 'rama7x4', 'rama8x6', 'rama10x6', 'ramaHex'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'ramaHex' : {
      name: 'Rama 10x6',
      family: ['rama5x3', 'rama6x4', 'rama7x4', 'rama8x6', 'rama10x6', 'ramaHex'],
      arya: [
        ['assets/RAMY/hex rama/b1.json', 'b1', 0xC7C9C7],
        ['assets/RAMY/hex rama/b2.json', 'b2', 0xC7C9C7],
        ['assets/RAMY/hex rama/r1.json', 'r1', 0xC7C9C7],
        ['assets/RAMY/hex rama/r2.json', 'r2', 0xC7C9C7],
        ['assets/RAMY/hex rama/r3.json', 'r3', 0xC7C9C7],
        ['assets/RAMY/hex rama/r4.json', 'r4', 0xC7C9C7],
        ['assets/RAMY/hex rama/r5.json', 'r5', 0xC7C9C7],
        ['assets/RAMY/hex rama/r6.json', 'r6', 0x54585A]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },

    // slupy reklamowe

    'slup' : {
      name: 'Slup 2m sr 60',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'slup2x5sr60' : {
      name: 'Slup 2,5m sr 60',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'slup3sr60' : {
      name: 'Slup 3m sr 60',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'slup4sr80' : {
      name: 'Slup 4m sr 80',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'slup4sr100' : {
      name: 'Slup 4m sr 100',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'slup5sr100' : {
      name: 'Slup 5m sr 100',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'slup5sr130' : {
      name: 'Slup 5m sr 130',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'slupKrzywy' : {
      name: 'Slup 5m sr 130',
      family: ['slup', 'slup2x5sr60', 'slup3sr60', 'slup4sr80', 'slup4sr100', 'slup5sr100', 'slup5sr130','slupKrzywy'],
      arya: [
        ['assets/SLUPY/krzywy/z1.json', 'z1', 0xC7C9C7],
        ['assets/SLUPY/krzywy/z2.json', 'z2', 0xC7C9C7],
        ['assets/SLUPY/krzywy/z3.json', 'z3', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },


    // chwieje

    'chwiej' : {
      name: 'Chwiej 5m',
      family: ['chwiej','chwiej6m', 'chwiej7m','chwiej5mj','chwiej6mj','chwiej7mj'],
      arya: [
        ['assets/CHWIEJE/DWUNOZNE/chwiej5m/brzuch5.json', 'brzuch5', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej5m/glowa5.json', 'glowa5', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej5m/nogi5.json', 'nogi5', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej5m/palce5.json', 'palce5', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej5m/rece5.json', 'rece5', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej5m/wlosy5.json', 'wlosy5', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'chwiej6m' : {
      name: 'Chwiej 6m',
      family: ['chwiej','chwiej6m', 'chwiej7m','chwiej5mj','chwiej6mj','chwiej7mj'],
      arya: [
        ['assets/CHWIEJE/DWUNOZNE/chwiej6m/brzuch6.json', 'brzuch6', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej6m/glowa6.json', 'glowa6', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej6m/nogi6.json', 'nogi6', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej6m/palce6.json', 'palce6', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej6m/rece6.json', 'rece6', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej6m/wlosy6.json', 'wlosy6', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'chwiej7m' : {
      name: 'Chwiej 7m',
      family: ['chwiej','chwiej6m', 'chwiej7m','chwiej5mj','chwiej6mj','chwiej7mj'],
      arya: [
        ['assets/CHWIEJE/DWUNOZNE/chwiej7m/brzuch7.json', 'brzuch7', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej7m/glowa7.json', 'glowa7', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej7m/nogi7.json', 'nogi7', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej7m/palce7.json', 'palce7', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej7m/rece7.json', 'rece7', 0xC7C9C7],
        ['assets/CHWIEJE/DWUNOZNE/chwiej7m/wlosy7.json', 'wlosy7', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'chwiej5mj' : {
      name: 'Chwiej 5m jednonożny',
      family: ['chwiej','chwiej6m', 'chwiej7m','chwiej5mj','chwiej6mj','chwiej7mj'],
      arya: [
        ['assets/CHWIEJE/JEDNONOZNE/chwiej5/brzuch5.json', 'brzuch5', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej5/glowa5.json', 'glowa5', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej5/palce5.json', 'palce5', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej5/rece5.json', 'rece5', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej5/wlosy5.json', 'wlosy5', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'chwiej6mj' : {
      name: 'Chwiej 6m jednonożny',
      family: ['chwiej','chwiej6m', 'chwiej7m','chwiej5mj','chwiej6mj','chwiej7mj'],
      arya: [
        ['assets/CHWIEJE/JEDNONOZNE/chwiej6/brzuch6.json', 'brzuch6', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej6/glowa6.json', 'glowa6', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej6/palce6.json', 'palce6', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej6/rece6.json', 'rece6', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej6/wlosy6.json', 'wlosy6', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    },
    'chwiej7mj' : {
      name: 'Chwiej 7m jednonożny',
      family: ['chwiej','chwiej6m', 'chwiej7m','chwiej5mj','chwiej6mj','chwiej7mj'],
      arya: [
        ['assets/CHWIEJE/JEDNONOZNE/chwiej7/brzuch7.json', 'brzuch7', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej7/glowa7.json', 'glowa7', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej7/nogi7.json', 'nogi7', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej7/palce7.json', 'palce7', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej7/rece7.json', 'rece7', 0xC7C9C7],
        ['assets/CHWIEJE/JEDNONOZNE/chwiej7/wlosy7.json', 'wlosy7', 0xC7C9C7]
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
          let familyvar = this.family;
          let mates = new THREE.MeshLambertMaterial({
            color: this.arya[i][2],
            side: THREE.DoubleSide
          });
          $('.product-name').text(this.name);
          load_consecutive(this.arya[i][0], namesvar, scalevar, posiYvar, mates, familyvar);
        }
      }
    }


}

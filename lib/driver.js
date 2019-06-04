var load_consecutive = function(objectFetch, nameFetch, scaleFetch, positionFetch, materialFetch) {
  loader.load(objectFetch, function(object) {
    object = new THREE.Mesh(object, materialFetch);
    object.material.needsUpdate = true;
    object.position.set(0, positionFetch, 0);
    object.scale.set(scaleFetch, scaleFetch, scaleFetch);
    object.name = nameFetch;

    raycastArray.push(object);
    group_main.add(object);
  });
}

var models = [
  [
    _0 = {
      name: 'Balon Kula',
      arya: [
        ['assets/BALONY/Kula/k1.json', 'top', 0xFEDD00],
        ['assets/BALONY/Kula/kg2.json', 'under-top', 0x009CDE],
        ['assets/BALONY/Kula/k3.json', 'over-bottom', 0x78BE20],
        ['assets/BALONY/Kula/kg4.json', 'bottom', 0xE87722]
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

          load_consecutive( this.arya[i][0], namesvar, scalevar, posiYvar, mates );
        }

      }

    }
  ]
];

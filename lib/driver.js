var meshNameArray = [
    'part1'
];
var models = [
    [
        _0 = {
            name:   'Balon Kula',
            part1:  'assets/BALONY/Kula/baza.json',
            scala:   0.04,
            posiy:  -6,
            modposi: function(){
                group_main.scale.set( this.scala, this.scala, this.scala );
                group_main.position.y = this.posiy;
            },
            loadmodel: function () {
              let mates = new THREE.MeshLambertMaterial({
                  color: 0x22FF11,
                  side: THREE.DoubleSide
              });

              loader.load('assets/BALONY/Kula/kula.json', function (geo) {
                  let part1 = new THREE.Mesh(geo, mates);
                  part1.material.needsUpdate = true;
                  part1.position.set(0, 0, 0);
                  part1.scale.set(0.04, 0.04, 0.04);
                  scene.add( part1 );
              });

            }
        }
    ]
  ];

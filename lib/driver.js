var meshNameArray = [
    'part1'
];
var models = [
    [
        _0 = {
            name:   'Balon Kula',
            part1:  'assets/BALONY/Kula/baza.json',
            scala:   1,
            posiy:  -6,
            modposi: function(){
                group_main.scale.set( this.scala, this.scala, this.scala );
                group_main.position.y = this.posiy;
            },
            loadmodel: function () {
                var mat = new THREE.MeshLambertMaterial({
                    color: 0x22FF11,
                    side: THREE.DoubleSide
                });

                loader.load(this.part1, function (geo) {
                    let part1 = new THREE.Mesh(geo, mat);
                    part1.material.needsUpdate = true;
                    part1.position.set(0, 0, 0);
                    part1.scale.set(this.scala, this.scala, this.scala);
                    group_main.add( part1 );
                });

            }
        }
    ]
  ];

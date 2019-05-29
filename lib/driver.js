var meshNameArray = [
    'k1',
    'k3',
    'kg2',
    'kg4'
];
var models = [
    [
        _0 = {
            name:   'Balon Kula',
            k1:  'assets/BALONY/Kula/k1.json', // in the future this will enumerate through an array
            kg2:  'assets/BALONY/Kula/kg2.json', // in the future this will enumerate through an array
            k3:  'assets/BALONY/Kula/k3.json', // in the future this will enumerate through an array
            kg4:  'assets/BALONY/Kula/kg4.json', // in the future this will enumerate through an array

            scala:   1,
            posiy:  -8,
            modposi: function(){
                group_main.scale.set( this.scala, this.scala, this.scala );
                group_main.position.y = this.posiy;
            },
            loadmodel: function () {
              let mates = new THREE.MeshLambertMaterial({
                  color: 0x22FF11,
                  side: THREE.DoubleSide
              });

              loader.load( this.k1 , function (geo) {
                  let k1 = new THREE.Mesh(geo, mates);
                  k1.material.needsUpdate = true;
                  k1.position.set(0, 0, 0);
                  k1.scale.set(this.scala, this.scala, this.scala);
                  k1.name = 'k1';
                  group_main.add( k1 );
              });
              loader.load( this.kg2 , function (geo) {
                  let kg2 = new THREE.Mesh(geo, mates);
                  kg2.material.needsUpdate = true;
                  kg2.position.set(0, 0, 0);
                  kg2.scale.set(this.scala, this.scala, this.scala);
                  kg2.name = 'kg2';
                  group_main.add( kg2 );
              });
              loader.load( this.k3 , function (geo) {
                  let k3 = new THREE.Mesh(geo, mates);
                  k3.material.needsUpdate = true;
                  k3.position.set(0, 0, 0);
                  k3.scale.set(this.scala, this.scala, this.scala);
                  k3.name = 'k3';
                  group_main.add( k3 );
              });
              loader.load( this.kg4 , function (geo) {
                  let kg4 = new THREE.Mesh(geo, mates);
                  kg4.material.needsUpdate = true;
                  kg4.position.set(0, 0, 0);
                  kg4.scale.set(this.scala, this.scala, this.scala);
                  kg4.name = 'kg4';
                  group_main.add( kg4 );
              });

            }
        }
    ]
  ];

var models = [
    [
        _0 = {
            name:     'Balon Kula',
            arya: [
              ['assets/BALONY/Kula/k1.json','top'],
              ['assets/BALONY/Kula/kg2.json','under-top'],
              ['assets/BALONY/Kula/k3.json','over-bottom'],
              ['assets/BALONY/Kula/kg4.json','bottom']
            ],
            scala:   1,
            posiy:  -20,
            modposi: function(){
                group_main.scale.set( this.scala, this.scala, this.scala );
                group_main.position.y = this.posiy;
            },
            loadmodel: function () {

              let mates = new THREE.MeshLambertMaterial({
                  color: 0xfff000,
                  side: THREE.DoubleSide
              });

              for( i=0 ; i<= this.arya.length - 1; i++ ){

                let namesvar = this.arya[i][1];
                let scalevar = this.scala;
                let posiYvar = this.posiy;

                loader.load( this.arya[i][0] , function (object) {
                  object = new THREE.Mesh(object, mates);
                  object.material.needsUpdate = true;
                  object.position.set(0, posiYvar, 0);
                  object.scale.set(scalevar,scalevar,scalevar);
                  object.name = namesvar;
                  group_main.add( object );
                });
              }

            }

        }
    ]
  ];

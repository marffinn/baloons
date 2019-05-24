TweenMax.staggerFrom(".is-one-quarter", 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

$(".is-one-quarter").click(function(){
  TweenMax.staggerTo(".is-one-quarter", 0.5, {opacity:0, y:-100, ease:Back.easeIn}, 0.1);
});

$(".logotype").click(function(){
  TweenMax.staggerTo(".is-one-quarter", 0.5, {opacity:1, y:0, ease:Back.easeIn}, 0.1);
});



var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer( { alpha: true } );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

var animate = function () {
  requestAnimationFrame( animate );

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();

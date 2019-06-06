if (WEBGL.isWebGLAvailable() === false) {
  document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

let camera,
  controls,
  scene,
  renderer,
  group_main,
  object;

let rotationSpeed = 0;
let current_model = 0;
let prevnextLimits = models.length - 1;

let manager = new THREE.LoadingManager();
let loader = new THREE.JSONLoader(manager);

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let raycastArray = [];

var color = new THREE.Color(0xffffff);
let objectChosen = 'top';


init();
animate();

function init() {

  // scene, renderer, camera
  scene = new THREE.Scene();
  scene.name = 'BALOONS_STAGE';

  window.scene = scene;

  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 500);
  camera.position.x = 150;
  camera.position.y = 0;
  camera.position.z = 150;
  camera.lookAt(scene.position);

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.physicallyCorrectLights = true;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  renderer.gammaFactor = 2.2;
  renderer.gammaOutPut = true;

  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  // controls
  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.dampingFactor = 0.1;
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.minDistance = 70;
  controls.maxDistance = 150;
  controls.addEventListener('change', render);

  // loaders & Loading managers
  function startLoad() {
    $('.loadBar').css({
      'width': 0 + '%'
    });
  };

  function endLoad() {
    $('.loadBar').css({
      'width': 0 + '%',
      'display': 'none'
    });
  };

  var manager = new THREE.LoadingManager();
  manager.onStart = function() {
    startLoad();
  }
  manager.onProgress = function(item, loaded, total) {
    var loadedBar = (loaded / total * 100);
    var divi = loadedBar / 100;
    $('.loadBar').css({
      'width': loadedBar + '%'
    });

    console.log((loaded / total * 100) + '% loaded');
  }
  manager.onLoad = function() {
    endLoad();
  }
  var loader = new THREE.JSONLoader(manager);

  // Group/Object3D to hold and manage models easily
  group_main = new THREE.Group();
  group_main.name = 'model';
  scene.add(group_main);

  // world ( basically all the models to be loaded at startup )
  let size = 100;
  let divisions = 8;
  let gridHelper = new THREE.GridHelper(size, divisions);
  gridHelper.position.y = -40;
  scene.add(gridHelper);


  console.log( prevnextLimits );
  // world endline ////////////////////////////////////////////

  // lights
  let lightA = new THREE.DirectionalLight(0xffffff);
  lightA.position.set(1, 1, 1);
  scene.add(lightA);
  let lightB = new THREE.DirectionalLight(0x002288);
  lightB.position.set(-1, -1, -1);
  scene.add(lightB);
  let lightC = new THREE.AmbientLight(0x222222);
  scene.add(lightC);

  // event listeners
  window.addEventListener('resize', onWindowResize, false);

  // fetch the canvas
  $("#container").append(renderer.domElement);

}

// core runtime functions
function animate() {
  group_main.rotation.y += rotationSpeed;
  requestAnimationFrame(animate);
  controls.update();
  TWEEN.update();
  render();
}

function render() {
  renderer.render(scene, camera);
}

// helper functions and event watchdogs
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function removeGroupContents() {
  for (var i = group_main.children.length - 1; i >= 0; i--) {
    group_main.remove(group_main.children[i]);
  }
}

function animIn(model_no) {
  raycastArray = [];
  removeGroupContents();
  models[model_no][0].loadmodel(); // loading model from driver.js array
  models[model_no][0].modposi(); // position and scale group
}

function pan_hex() {
  $(".skolory a").each(function() {
    let box_color = $(this).attr('hex');
    $(this).css({
      'background-color': box_color
    });
  });
}

// event catchers

function onDocumentMouseDown(event) {
  event.preventDefault();
  mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(raycastArray);
  if (intersects.length > 0) {
    objectChosen = intersects[0].object.name;
  }
}
document.addEventListener('mousedown', onDocumentMouseDown, false);

$('.skolory a:not(".clr")').on('click', function() {
  let selected_color = $(this).attr('hex');
  let object = scene.getObjectByName(objectChosen, true);
  let hexConverted = selected_color.replace('#', '0x');
  color.setHex(hexConverted);
  object.material.color.set(color);
});

$('.select a.clr').on('click', function() {
  $(this).toggleClass('check');
});

$('.fullscreen_container').on('click', function() {
  var state = $(this).attr('state');
  if (state == 'on') {
    THREEx.FullScreen.cancel();
    $(this).attr('state', 'off');
  } else {
    THREEx.FullScreen.request();
    $(this).attr('state', 'on');
  }
});
$('#light-switch').on('click', function() {
  let switchState = $(this).attr('state');
  if (switchState == 'off') {
    rotationSpeed = 0.005;
    $(this).attr('state', 'on');
  } else {
    rotationSpeed = 0;
    $(this).attr('state', 'off');
  }
});

$('.next').on('click', function() {
  if( current_model >= prevnextLimits ){
    current_model = 0;
    console.log(current_model +' ====='+ prevnextLimits);
    animIn(current_model);
  } else {
    current_model += 1;
    console.log(current_model +' ====='+ prevnextLimits);
    animIn(current_model);
  }
});


$('.prev').on('click', function() {

  if( current_model <= 0 ){
    current_model = prevnextLimits;
    console.log(current_model +' ====='+ prevnextLimits);
    animIn(current_model);
  } else {
    current_model -= 1;
    console.log(current_model +' ====='+ prevnextLimits);
    animIn(current_model);
  }

});







// post mortem invokes ;)  - yet very important.
animIn(0);
pan_hex();

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
let color = new THREE.Color(0xffffff);
let objectChosen = 'top';
let chosenArray = [];


init();
animate();

function init() {

  // scene, renderer, camera
  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(scene.background, 1, 5000);
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
  controls.maxDistance = 360;
  controls.maxPolarAngle = Math.PI / 2;
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
  gridHelper.name = 'Grid Helper';
  scene.add(gridHelper);

  // world endline ////////////////////////////////////////////

  // lights
  let light = new THREE.AmbientLight(0xffffff);
  light.intensity = .3;
  light.name = 'Ambient Light';
  scene.add(light);

  let hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
  hemisphereLight.color.setHSL(0.6, 1, 0.95);
  hemisphereLight.groundColor.setHSL(0.095, 1, 0.75);
  hemisphereLight.position.set(0, 0, 500);
  scene.add(hemisphereLight);

  let directionalLight = new THREE.DirectionalLight(0xffffff, 0.65);
  directionalLight.color.setHSL(0.1, 1, 0.95);
  directionalLight.position.set(-1, 1, 1);
  directionalLight.position.multiplyScalar(50);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.left = -50;
  directionalLight.shadow.camera.right = 50;
  directionalLight.shadow.camera.top = 50;
  directionalLight.shadow.camera.bottom = -50;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 200;
  directionalLight.name = 'Hemisphere Light';
  scene.add(directionalLight);

  // event listeners

  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
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
  pan_hex();
  raycastArray = [];
  removeGroupContents();
  models[model_no][0].loadmodel();
  models[model_no][0].modposi();
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

function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  var intersects = raycaster.intersectObjects(raycastArray);

  if (intersects.length > 0) {
    $('html,body').css('cursor', 'pointer');
  } else {
    $('html,body').css('cursor', 'default');
  }
}

$('.srozmiar a.clr').on('click', function() {
  $('.srozmiar a').each(function() {
    $(this).removeClass('check')
  });
});
$('.skolory a.clr').on('click', function() {
  $('.skolory a.clr').each(function() {
    $(this).removeClass('check')
  });
});
$('.skolory a:not(".clr")').on('click', function() {
  $('.skolory a p').removeClass('mark');
  let selected_color = $(this).attr('hex');
  let object = scene.getObjectByName(objectChosen, true);
  let hexConverted = selected_color.replace('#', '0x');
  color.setHex(hexConverted);
  object.material.color.set(color);
  $(this).children('p').toggleClass('mark');

  chosenArray[object.name] = hexConverted;
  console.log(chosenArray);
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
  if (current_model >= prevnextLimits) {
    current_model = 0;
    animIn(current_model);
  } else {
    current_model += 1;
    animIn(current_model);
  }
});
$('.prev').on('click', function() {
  if (current_model <= 0) {
    current_model = prevnextLimits;
    animIn(current_model);
  } else {
    current_model -= 1;
    animIn(current_model);
  }
});
$('.pickInfo p').on('click', function() {
  $('.pickInfo').remove();
});

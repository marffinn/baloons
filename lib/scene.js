if (WEBGL.isWebGLAvailable() === false) {
  document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

let camera,
  controls,
  scene,
  outscene,
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
let objectChosen = null;
let chosenArray = {};

let size = 200;
let divisions = 8;
let gridHelper = new THREE.GridHelper(size, divisions);



init();
animate();

function init() {

  // scene, renderer, camera
  scene = new THREE.Scene();

  const color = 0xFFFFFF;
  const near = 20;
  const far = 1000;

  scene.fog = new THREE.Fog(color, near, far);
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


  // let zoomIn = document.getElementById('zoomIn');
  // let zoomOut = document.getElementById('zoom-out');
  //
  // zoomIn.addEventListener('click', onZoomIn, false);
  // zoomOut.addEventListener('click', onZoomOut, false);

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
    let loadedBar = (loaded / total * 100);
    let divi = loadedBar / 100;
    $('.loadBar').css({
      'width': loadedBar + '%'
    });
    // console.log((loaded / total * 100) + '% loaded');
  }
  manager.onLoad = function() {
    endLoad();
  }
  let loader = new THREE.JSONLoader(manager);

  // Group/Object3D to hold and manage models easily
  group_main = new THREE.Group();
  group_main.name = 'baloon model group';
  scene.add(group_main);

  // protoSit = new THREE.TextureLoader().load( 'assets/img/logo-tent.png', function () {
  //       mat = new THREE.MeshPhongMaterial({
  //           map: protoSit,
  //           shininess: 0,
  //           reflectivity: 0,
  //           bumpScale: .0001,
  //           combine: THREE.MultiplyOperation
  //       });
  //       loader.load('assets/SLUPY/2,5m sr 60/w.json', function (geo) {
  //           sit = new THREE.Mesh(geo, mat);
  //           sit.material.needsUpdate = true;
  //           sit.position.set(0, 0, 0);
  //           group_main.add(sit);
  //       });
  //   });

  // world ( basically all the models to be loaded at startup )
  gridHelper.position.y = -40;
  gridHelper.name = 'Grid Helper';
  scene.add(gridHelper);

  // world endline ////////////////////////////////////////////

  let hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5);
  hemisphereLight.color.setHSL(0.6, 1, 0.95);
  hemisphereLight.groundColor.setHSL(0.095, 1, 0.75);
  hemisphereLight.position.set(0, 0, 500);
  hemisphereLight.name = 'Hemisphere Light';
  scene.add(hemisphereLight);

  let directionalLight = new THREE.DirectionalLight(0xffffff, 0.65);
  directionalLight.color.setHSL(0.1, 1, 0.95);
  directionalLight.position.set(100, 20, 100);
  directionalLight.name = 'Directional Light';
  scene.add(directionalLight);

  let directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.65);
  directionalLight2.color.setHSL(0.1, 1, 0.95);
  directionalLight2.position.set(-60, 100, -60);
  directionalLight2.name = 'Directional Light 2';
  scene.add(directionalLight2);

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
  gridHelper.rotation.y += rotationSpeed;

  requestAnimationFrame(animate);
  controls.update();
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
  chosenArray = {};
  removeGroupContents();
  models[model_no].loadmodel();
  models[model_no].modposi();
}

function pan_hex() {
  $(".skolory a").each(function() {
    let box_color = $(this).attr('hex');
    $(this).css({
      'background-color': box_color
    });
  });
}
pan_hex();

// event catchers
function onDocumentMouseDown(event) {
  event.preventDefault();
  $('.skolory a p').removeClass('mark');
  mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObjects(raycastArray);
  if (intersects.length > 0) {
    objectChosen = intersects[0].object.name; // material change and selection
    cR = '#' + intersects[0].object.material.color.getHexString().toUpperCase(); // material change and selection
    $('[hex*="' + cR + '"] p').addClass('mark'); // material change and selection
  }
}

function onDocumentMouseMove(event) {
  event.preventDefault();
  mouse.x = (event.clientX / renderer.domElement.width) * 2 - 1;
  mouse.y = -(event.clientY / renderer.domElement.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  let intersects = raycaster.intersectObjects(raycastArray);

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
  console.log(chosenArray); // later on this array will become esential for ordering and mailing !!!!
});

$('.select a.clr').on('click', function() {
  $(this).toggleClass('check');
});

$('.fullscreen_container').on('click', function() {
  let state = $(this).attr('state');
  if (state == 'on') {
    THREEx.FullScreen.cancel();
    $(this).attr('state', 'off');
    for (x; x <= blinkCount; x++) {
      $(this).fadeOut(100).delay(100).fadeIn(100);
    }
  } else {
    THREEx.FullScreen.request();
    $(this).attr('state', 'on');
    for (x; x <= blinkCount; x++) {
      $(this).fadeOut(100).delay(100).fadeIn(100);
    }
  }
});

$('.rotate_container').on('click', function() {
  let switchState = $(this).attr('state');
  if (switchState == 'off') {
    rotationSpeed = 0.005;
    $(this).attr('state', 'on');
  } else {
    rotationSpeed = 0;
    $(this).attr('state', 'off');
  }
});

$('.rotateRight').mousedown(function() {
  rotationSpeed = 0.02;
}).mouseup(function() {
  rotationSpeed = 0;
}).mouseleave(function() {
  rotationSpeed = 0;
});

$('.rotateLeft').mousedown(function() {
  rotationSpeed = -0.02;
}).mouseup(function() {
  rotationSpeed = 0;
}).mouseleave(function() {
  rotationSpeed = 0;
});

$('.pickInfo p').on('click', function() {
  $('.pickInfo').fadeOut();
});

$('.info_container').on('click', function() {
  $('.pickInfo').fadeIn();
});

$('.zoomIn').on('click', function() {
  event.preventDefault();
  controls.zoomIn();
});
$('.zoomOut').on('click', function() {
  event.preventDefault();
  controls.zoomOut();
});

let appendTexturedModel = function(imgSrc) {
  protoSit = new THREE.TextureLoader().load(imgSrc, function() {
    mat = new THREE.MeshPhongMaterial({
      map: protoSit,
      shininess: 0,
      reflectivity: 0,
      bumpScale: .0001,
      combine: THREE.MultiplyOperation
    });
    loader.load('assets/SLUPY/2,5m sr 60/w.json', function(geo) {
      sit = new THREE.Mesh(geo, mat);
      sit.material.needsUpdate = true;
      sit.position.set(0, 0, 0);
      group_main.add(sit);
    });
  });
}

$("#modal").dmUploader({
  url: 'uploader/backend/upload.php',
  onUploadSuccess: function(id, data) {
    var response = JSON.stringify(data);
    let imager = 'uploader/backend/' + data.path;
    chosenArray.logotype = imager;
    $("#modal").append(' Zdjęcie wgrano pomyślnie ').delay(2000).fadeOut();

  }
});

$('.placeOrder').on('click', function() {
  let orderToPlace = JSON.stringify(chosenArray);
  console.log(orderToPlace);
  alert(orderToPlace);
});

$('.cwn').on('click', function() {
  $("#modal").fadeIn();
});

$('.dnp').on('click', function() {
  $("#modal").fadeIn();
});

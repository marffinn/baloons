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

let manager = new THREE.LoadingManager();
let loader = new THREE.JSONLoader(manager);

let raycaster = new THREE.Raycaster();
let mouse = new THREE.Vector2();
let raycastArray = [];
let color = new THREE.Color(0xffffff);
let objectChosen = null;
let chosenArray = {};
let cookieModel; // name of the current model to be stored in and called from session cookie

let size = 260;
let divisions = 8;
let gridHelper = new THREE.GridHelper(size, divisions);

let picturesUploaded = [];


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
    linkInterpreter();
  };

  manager.onStart = function() {
    startLoad();
  }
  manager.onProgress = function(item, loaded, total) {
    let loadedBar = (loaded / total * 100);
    let divi = loadedBar / 100;
    $('.loadBar').css({
      'width': loadedBar + '%'
    });  // console.log((loaded / total * 100) + '% loaded');
  }
  manager.onLoad = function() {
    endLoad();
  }
  let loader = new THREE.JSONLoader(manager);

  // Group/Object3D to hold and manage models
  group_main = new THREE.Group();
  group_main.name = 'baloon model group';
  scene.add(group_main);

  group_help = new THREE.Group();
  group_help.name = 'baloon model group';
  scene.add(group_help);

  // world ( basically all the stuff to be loaded at startup )
  gridHelper.position.y = -40;
  gridHelper.name = 'Grid Helper';
  group_help.add(gridHelper);


  let dudeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCCCCCC,
    side: THREE.DoubleSide
  });

  loader.load( 'assets/DUDE/reference_dude.json', function(object) {
    objectile = new THREE.Mesh(object, dudeMaterial);
    objectile.material.needsUpdate = true;
    objectile.position.set(-85, -40, 85);
    objectile.scale.set(1, 1, 1);
    objectile.name = 'dudeReference';
    group_help.add(objectile);
  });


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
function animate() {
  group_main.rotation.y += rotationSpeed;
  group_help.rotation.y += rotationSpeed;

  requestAnimationFrame(animate);
  controls.update();
  render();
}
function render() {
  renderer.render(scene, camera);
}
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


// LOADING MODEL FUNCTION !!!

function animIn( model_name ) {
  cookieModel = model_name;
  raycastArray = [];
  chosenArray = {};
  removeGroupContents();

  models[model_name].loadmodel();
  Cookies.set( cookieModel, chosenArray, { expires: 7 });
}

function pan_hex() {
  $(".skolory a").each(function() {
    let box_color = $(this).attr('hex');
    $(this).css({
      'background-color': box_color
    });
  });
}
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

// $('.cwn, .dnp').on('click', function() {
//   $("#modal").fadeIn();
// });
$("#modal p, #modalOrder p").on('click', function() {
  $("#modal, #modalOrder").fadeOut();
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

if (Cookies.get('info') !== 'seen') {
  $('.pickInfo').show();
} else {
  $('.pickInfo').hide();
}

$('.pickInfo p').on('click', function() {
  $('.pickInfo').fadeOut();
  Cookies.set('info', 'seen', {
    expires: 7
  });
});
$('.info_container').on('click', function() {
  $('.pickInfo').fadeIn();
});

$('.zoomIn').on('click', function(event) {
  event.preventDefault();
  controls.zoomIn();
});
$('.zoomOut').on('click', function(event) {
  event.preventDefault();
  controls.zoomOut();
});
$('.select i, .select h4').on('click', function() {
  $(this).parent().find('.listerFoldable').stop().slideToggle(100);
});
let centerSteering = function() {
  let steeringWidth = $('.steering').outerWidth();
  $('.steering').css({
    'margin-left': -(steeringWidth / 2)
  });
}
$('input, textarea').on('click', function() {
  $(this).focus();
});
$('.backToconfig, .placeOrder').on('click', function() {
  $('.pick, .order').slideToggle();
});
$('.sagree i').on('click', function() {
  $(this).children('b').fadeToggle(200);
  $('.sendMail').toggleClass('sendDisable');
});
$("#modal").dmUploader({
  url: 'uploader/upload.php',
  onUploadSuccess: function(id, data) {
    var response = JSON.stringify(data);
    let imager = 'files/' + data.path;
    chosenArray.logotype = imager;
    $("#modal").append(' Zdjęcie wgrano pomyślnie ').delay(2000).fadeOut();
    let imgSRC = '<p><img src="' + imager + '" /></p>';
    $('.inFileList').append(imgSRC);
    picturesUploaded.push(imgSRC);
    Cookies.set(cookieModel, chosenArray, {
      expires: 7
    });
    Cookies.set('x_picturesUploaded', imager, {
      expires: 7
    });
  }
});
pan_hex();
centerSteering();
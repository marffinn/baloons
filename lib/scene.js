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
let cookieModel;

let size = 260;
let divisions = 8;
let gridHelper = new THREE.GridHelper(size, divisions);

let picturesUploaded = [];
let INTERSECTED;


init();
animate();

function init() {

  scene = new THREE.Scene();
  const color = 0xFFFFFF;
  const near = 20;
  const far = 4500;
  scene.fog = new THREE.Fog(color, near, far);
  scene.name = 'BALOONS_STAGE';
  window.scene = scene;

  camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.x = 150;
  camera.position.y = 200;
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

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.dampingFactor = 0.1;
  controls.enableDamping = true;
  // controls.enablePan = false;
  controls.minDistance = 70;
  controls.maxDistance = 1500;
  // controls.maxPolarAngle = Math.PI / 2;
  controls.addEventListener('change', render);


  manager.onLoad = function () {
    linkInterpreter();
  }
  let loader = new THREE.JSONLoader(manager);

  group_main = new THREE.Group();
  group_main.name = 'Models';
  scene.add(group_main);

  group_help = new THREE.Group();
  group_help.name = 'Helper';
  scene.add(group_help);

  gridHelper.position.y = 0;
  gridHelper.name = 'Grid Helper';
  group_help.add(gridHelper);



  lights();

  document.addEventListener('mousedown', onDocumentMouseDown, false);
  document.addEventListener('mousemove', onDocumentMouseMove, false);
  window.addEventListener('resize', onWindowResize, false);

  $("#container").append(renderer.domElement);
}

function render() {
  renderer.render(scene, camera);
}

function animate() {
  group_main.rotation.y += rotationSpeed;
  group_help.rotation.y += rotationSpeed;

  requestAnimationFrame(animate);
  controls.update();
  render();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
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

		if ( intersects[0].object != INTERSECTED ) 
		{
			if ( INTERSECTED )
				INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
			  INTERSECTED = intersects[ 0 ].object;
			  INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
			  INTERSECTED.material.color.setHex( 0xF0E68C );
		}

  } else {
    $('html,body').css('cursor', 'default');

    if ( INTERSECTED )
			INTERSECTED.material.color.setHex( INTERSECTED.currentHex );
		  INTERSECTED = null;
  }
}
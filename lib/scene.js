var WEBGL={isWebGLAvailable:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(e){return!1}},isWebGL2Available:function(){try{var e=document.createElement("canvas");return!(!window.WebGL2RenderingContext||!e.getContext("webgl2"))}catch(e){return!1}},getWebGLErrorMessage:function(){return this.getErrorMessage(1)},getWebGL2ErrorMessage:function(){return this.getErrorMessage(2)},getErrorMessage:function(e){var t={1:window.WebGLRenderingContext,2:window.WebGL2RenderingContext},n='Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>',r=document.createElement("div");return r.id="webglmessage",r.style.fontFamily="monospace",r.style.fontSize="13px",r.style.fontWeight="normal",r.style.textAlign="center",r.style.background="#fff",r.style.color="#000",r.style.padding="1.5em",r.style.width="400px",r.style.margin="5em auto 0",n=(n=t[e]?n.replace("$0","graphics card"):n.replace("$0","browser")).replace("$1",{1:"WebGL",2:"WebGL 2"}[e]),r.innerHTML=n,r}};
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

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


  let ms = .2;
  // loader.load('assets/DUDE/miara.json', ( geometry, materials ) => {
  //   materials.map((material) => {
  //       material.flatShading= true;
  //   });
  //   var material = new THREE.MeshFaceMaterial(materials);
  //   var mesh = new THREE.Mesh(geometry, material);
  //   mesh.scale.set(ms,ms,ms);
  //   group_help.add(mesh);
  // });

  let dudeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCCCCCC,
    side: THREE.DoubleSide
  });

  loader.load('assets/DUDE/reference_dude.json', ( geometry, materials ) => {

    var mesh = new THREE.Mesh(geometry, dudeMaterial);
    mesh.position.set(-100, 0, 100);
    group_help.add(mesh);
  });

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
    objectChosen = intersects[0].object.name;
    cR = '#' + intersects[0].object.material.color.getHexString().toUpperCase();
    $('[hex*="' + cR + '"] p').addClass('mark');
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
if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

let camera,
    controls,
    scene,
    renderer,
    group_main,
    object;

let manager = new THREE.LoadingManager();
let loader = new THREE.JSONLoader(manager);

init();
animate();

function init() {

    // scene, renderer, camera
    scene = new THREE.Scene();
    scene.name = 'BALOONS_STAGE';

    window.scene = scene;

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
    camera.position.x = 25;
    camera.position.y = 15;
    camera.position.z = 25;
    camera.lookAt(scene.position);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    // controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.dampingFactor = 0.15;
    controls.enableDamping = true;
    controls.enablePan = true;
    controls.minDistance = 10;
    controls.maxDistance = 80;
    controls.addEventListener('change', render);

    // loaders
    function startLoad() { $('.loadBar').css({'width': 0 + '%'}); };
    function endLoad() { $('.loadBar').css({'width': 0 + '%', 'display': 'none' }); };
    var manager = new THREE.LoadingManager();
    manager.onStart = function () { startLoad(); }
    manager.onProgress = function (item, loaded, total) {
        var loadedBar = (loaded / total * 100);
        var divi = loadedBar / 100;
        $('.loadBar').css({'width': loadedBar + '%'});
    }
    manager.onLoad = function () { endLoad(); }
    var loader = new THREE.JSONLoader(manager);

    group_main = new THREE.Object3D();
    scene.add(group_main);


    // world ( basically all the models to be loaded at startup )




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


    group_main.position.y = -6;
    group_main.rotation.y = -Math.PI / 2;
    group_main.scale.set(.01, .01, .01);
    scene.add(group_main);

}

// core runtime functions
function animate() {

    // group_main.rotation.y += 0.004;

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
// function removeGroupConrtents(){
//     for (var i = 0; i <= meshNameArray.length; i++) {
//         var item = scene.getObjectByName(meshNameArray[i]);
//         group_main.remove(item);
//     }
// }
function animIn( model_no ) {
    // removeGroupConrtents();
    models[model_no][0].loadmodel();    // loading model from driver.js array
    models[model_no][0].modposi();      // position and scale group
}

$('.fullscreen_container').on('click', function () {
    var state = $(this).attr('state');
    if (state == 'on') {
        THREEx.FullScreen.cancel();
        $(this).attr('state', 'off');
    } else {
        THREEx.FullScreen.request();
        $(this).attr('state', 'on');
    }
});

$('#light-switch').on('click', function () {
    var object = scene.getObjectByName("light");
    var lightState = $(this).attr('state');
    if (lightState == 'off') {
        object.material.emissive.setHex(0xFFFF00);
        $(this).attr('state', 'on');
    } else {
        object.material.emissive.setHex(0x000000);
        $(this).attr('state', 'off');
    }
});

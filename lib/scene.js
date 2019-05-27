TweenMax.staggerFrom(".is-one-quarter", 2, {
    scale: 0.5,
    opacity: 0,
    delay: 0.5,
    ease: Elastic.easeOut,
    force3D: true
}, 0.2);
$(".is-one-quarter").click(function () {
    TweenMax.staggerTo(".is-one-quarter", 0.5, {
        opacity: 0,
        y: -100,
        ease: Back.easeIn
    }, 0.1);
});
$(".logotype").click(function () {
    TweenMax.staggerTo(".is-one-quarter", 0.5, {
        y: 0,
        opacity: 1,
        delay: 0.5,
        ease: Elastic.easeOut,
        force3D: true
    }, 0.1);
});

/////////////////////////////////////////////////////////////////////////////////////////////////////

if (WEBGL.isWebGLAvailable() === false) {
    document.body.appendChild(WEBGL.getWebGLErrorMessage());
}

let camera, controls, scene, renderer, object;



init();
animate();

function init() {

    // scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xcccccc);
    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    $("#container").append(renderer.domElement);

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(500, 450, 0);

    // controls
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.15;
    controls.minDistance = 20;
    controls.maxDistance = 1500;



    // world


    function setSmoothGeometry(obj) {
        obj.traverse(node => {
            if ('geometry' in node) {
                const tempGeometry = new THREE.Geometry().fromBufferGeometry(node.geometry);
                tempGeometry.mergeVertices();
                tempGeometry.computeVertexNormals();
                node.geometry = new THREE.BufferGeometry().fromGeometry(tempGeometry);
            }
        })
    }
    
    var loader = new THREE.OBJLoader();
    loader.load('assets/BALONY/Kula/Kula_4m.obj', function (object) {

        setSmoothGeometry(object);
        object.position.set = (0, 0, 0);
        scene.add(object);
    });

    

    






    // lights
    let lightA = new THREE.DirectionalLight(0xffffff);
    lightA.position.set(1, 1, 1);
    scene.add(lightA);

    let lightB = new THREE.DirectionalLight(0x002288);
    lightB.position.set(-1, -1, -1);
    scene.add(lightB);

    let lightC = new THREE.AmbientLight(0x222222);
    scene.add(lightC);

    window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);

}

function animate() {

    requestAnimationFrame(animate);

    controls.update(); // only required if controls.enableDamping = true, or if controls.autoRotate = true

    render();

}

function render() {

    renderer.render(scene, camera);

}

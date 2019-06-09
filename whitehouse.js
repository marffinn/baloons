// MAIN

// standard global variables
var container, scene, camera, renderer, controls, stats;
var clock = new THREE.Clock();

// custom global variables
var cube;
var projector, mouse = {
    x: 0,
    y: 0
  },
  INTERSECTED;

init();
animate();

// FUNCTIONS
function init() {


  // initialize object to perform world/screen calculations
  projector = new THREE.Projector();

  // when the mouse moves, call the given function
  document.addEventListener('mousemove', onDocumentMouseMove, false);

}

function onDocumentMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

function animate() {
  requestAnimationFrame(animate);
  render();
  update();
}

function update() {
  // find intersections

  // create a Ray with origin at the mouse position
  //   and direction into the scene (camera direction)
  var vector = new THREE.Vector3(mouse.x, mouse.y, 1);
  vector.unproject(camera);
  var ray = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

  // create an array containing all objects in the scene with which the ray intersects
  var intersects = ray.intersectObjects(scene.children);

  // INTERSECTED = the object in the scene currently closest to the camera
  //		and intersected by the Ray projected from the mouse position

  // if there is one (or more) intersections
  if (intersects.length > 0) {
    // if the closest object intersected is not the currently stored intersection object
    if (intersects[0].object != INTERSECTED) {
      // restore previous intersection object (if it exists) to its original color
      if (INTERSECTED)
        INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
      // store reference to closest object as current intersection object
      INTERSECTED = intersects[0].object;
      // store color of closest object (for later restoration)
      INTERSECTED.currentHex = INTERSECTED.material.color.getHex();
      // set a new color for closest object
      INTERSECTED.material.color.setHex(0xffff00);
    }
  } else // there are no intersections
  {
    // restore previous intersection object (if it exists) to its original color
    if (INTERSECTED)
      INTERSECTED.material.color.setHex(INTERSECTED.currentHex);
    // remove previous intersection object reference
    //     by setting current intersection object to "nothing"
    INTERSECTED = null;
  }

  controls.update();
  stats.update();
}

function render() {
  renderer.render(scene, camera);
}

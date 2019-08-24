let lights = function(){
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
}
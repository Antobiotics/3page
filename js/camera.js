
//------------------------------------------------------------------------------
function initCamera() {
    camera = new THREE.PerspectiveCamera(70, 
                             window.innerWidth / window.innerHeight,
                             0.1, 1000);
    camera.position = new THREE.Vector3(0, 150, 500);
    scene.add(camera);
}
//------------------------------------------------------------------------------
function resizeCamera() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
//------------------------------------------------------------------------------
function updateCamera() {
    camera.updateMatrixWorld();
}


//------------------------------------------------------------------------------
function initCamera() {
    camera = new THREE.PerspectiveCamera(70, 
                                        window.innerWidth / window.innerHeight,
                                        0.1, 10);
    camera.position = new THREE.Vector3(0, 0, -1.7);
    scene.add(camera);
}
//------------------------------------------------------------------------------
function resizeCamera() {
    camera.aspect = window.innderWidth / window.innerHeight;
    camera.updateProjectionMatrix();
}
//------------------------------------------------------------------------------
function updateCamera() {

}

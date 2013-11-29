
//------------------------------------------------------------------------------
function initScene() {
    scene = new THREE.Scene();

    light = new THREE.AmbientLight(0x000000);

    geometry = new THREE.CubeGeometry(200, 200, 200);
    material = new THREE.MeshLambertMaterial({color: 0xCC000});
    mesh = new THREE.Mesh(geometry, material);
    console.log("scene initialised");
    mesh.overDraw = true;
    scene.add(mesh);
}
//------------------------------------------------------------------------------

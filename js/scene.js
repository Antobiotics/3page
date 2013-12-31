
//------------------------------------------------------------------------------
function initScene() {
    scene = new THREE.Scene();

    light['sphere'] = new THREE.HemisphereLight( 0xffddee, 0x229988, 1.0 );
    scene.add(light['sphere']);
    light['ambient'] = new THREE.AmbientLight(0x000000);
    scene.add(light['ambient']);

    var startPoint = new THREE.Vector3(0, 0, 0);
    var endPoint = new THREE.Vector3(100, 100, 0);
    cubeEdge = new CubeEdge(startPoint, endPoint);
    scene.add(cubeEdge.line);
    scene.add(cubeEdge.particleSystem);
}
//------------------------------------------------------------------------------

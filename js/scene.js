
//------------------------------------------------------------------------------
function initScene() {
    scene = new THREE.Scene();

//    light = new THREE.AmbientLight(0x000000);
    var geometry = new THREE.CubeGeometry( 200, 200, 200 );

    for(var i = 0; i < geometry.faces.length; i += 2) {
        var hex = Math.random() * 0xffffff;
        geometry.faces[ i ].color.setHex( hex );
        geometry.faces[ i + 1 ].color.setHex( hex );
    }
    var material = new THREE.MeshBasicMaterial( 
            { vertexColors: THREE.FaceColors, 
                  overdraw: 0.5 
            });
    
    cube = new THREE.Mesh(geometry, material);
    cube.position.y = 150;
    scene.add( cube );
}
//------------------------------------------------------------------------------

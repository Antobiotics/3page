
//------------------------------------------------------------------------------
function initScene() {
    scene = new THREE.Scene();

    light['sphere'] = new THREE.HemisphereLight( 0xffddee, 0x229988, 1.0 );
    scene.add(light['sphere']);
    light['ambient'] = new THREE.AmbientLight(0x000000);
    scene.add(light['ambient']);

    // Cube
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
    cube.position.y = 0;
    scene.add( cube );

    // Particle System
    particles = new THREE.Geometry();
    particleMaterial = new THREE.ParticleBasicMaterial(
            {
                color: 0xFF7F00,
                size: 20,
                map: THREE.ImageUtils.loadTexture(
                        "images/particle.png"
                    ),
                blending: THREE.AdditiveBlending,
                transparent: true
            });
    for(var i = 0; i < geometry.vertices.length; i++) {
        for(var p = 0; p < particleCount; p++) {
            var origin = geometry.vertices[i];
            particle = origin;
            particles.vertices.push(particle);
        }
    }
    particleSystem = new THREE.ParticleSystem(particles, particleMaterial);
    particleSystem.sortParticles = true;
    scene.add(particleSystem);
}
//------------------------------------------------------------------------------

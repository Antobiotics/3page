"use strict";

var container, renderer;
var time = 0;
var scene;
var camera;
var mesh;
var cube, geometry, material;
var particleSystem;
var particles = [];
var particleMaterial;
var material;
var light = [];
var time = 0;
var theta = 0;
var radius = 600;
var particleCount = 90;
//------------------------------------------------------------------------------
window.onload = function() {
    if(Detector.webgl) {
        init();
        animate();
    } else {
        document.body.appendChild(Detector.getWebGLErrorMessage());
        tracking('error','no-webgl');
    }
}
//------------------------------------------------------------------------------
function init() {
    {
        container = document.createElement('div');
        document.body.appendChild(container);
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);
        window.addEventListener('resize', onWindowResize, false);
        document.addEventListener('mousedown', onDocumentMouseDown, false);
    }
    // Init functions here.
    initScene();
    initCamera();
    initFullscreen();
}
//------------------------------------------------------------------------------
function onWindowResize() {
    resizeCamera();
    renderer.setSize(window.innerWidth, window.innerHeight);
}
//------------------------------------------------------------------------------
function onDocumentMouseDown() {
    event.preventDefault();
}
//------------------------------------------------------------------------------
function animate() {
    TWEEN.update();
    time = Date.now();
    
    // Temporary Particle System animation
    //particle.velocity.x += particle.dir * Math.random() * 0.5;
    var numberOfVertices = cube.geometry.vertices.length;
    for(var i = 0; i < numberOfVertices * particleCount; i++) {
        var particle = particles.vertices[i];
        switch(i % 3) {
            case 0:
                particle.velocity.x = particle.dir + Math.random() * 0.1;
                break;
            case 1:
                particle.velocity.y = particle.dir + Math.random() * 0.1;
                break;
            case 2:
                particle.velocity.z = particle.dir + Math.random() * 0.1;
                break;
        }
        particle.add(particle.velocity);
        for(var v =  0; v < numberOfVertices; v++) {
            if(particle.distanceTo(cube.geometry.vertices[v]) <= 1 ||
               particle.distanceTo(cube.geometry.vertices[v]) > 200) {
                    particle.dir *= -1;
                    break;
               }
        }
    }
    // Temporary camera animation
    theta += 0.5;
    camera.position.x = radius * Math.sin( THREE.Math.degToRad( theta ) );
    camera.position.y = radius * Math.sin( THREE.Math.degToRad( theta ) );
    camera.position.z = radius * Math.cos( THREE.Math.degToRad( theta ) );
    camera.lookAt( scene.position );

    updateCamera();
    render();
    requestAnimationFrame(animate);
}
//------------------------------------------------------------------------------
function render() {
    renderer.render(scene, camera);
}
//------------------------------------------------------------------------------

"use strict";

var container, renderer;
var scene;
var camera;
var mesh;
var cube;
var material;
var light;
var time = 0;
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
function animate() {
    updateCamera();
    render();
    requestAnimationFrame(animate);
}
//------------------------------------------------------------------------------
function render() {
    renderer.render(scene, camera);
}
//------------------------------------------------------------------------------

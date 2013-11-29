"use strict";

var container;
var renderer;
var scene;
var camera;
var mesh;
var material;
var light;
var time = 0;
//------------------------------------------------------------------------------
window.onload = function() {
    if(Detector.webgl) {
        init();
        animate();
        window.addEventListener('resize', onWindowResize, false);
        onWindowResize();
    } else {
        document.body.appendChild(Detector.getWebGLErrorMessage());
        tracking('error','no-webgl');
    }
}
//------------------------------------------------------------------------------
function init() {
    {
        renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.domElement.style.position = 'fixed';
        renderer.domElement.id = 'canvas';
        document.getElementById('container').appendChild(renderer.domElement);
    }
    // Init functions here.
    initScene();
    initCamera();
}
//------------------------------------------------------------------------------
function onWindowResize() {
    renderer.setSize(window.innerWidth, window.innerHeight);
    resizeCamera();
    render();
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

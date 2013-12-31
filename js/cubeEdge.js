
CubeEdge = function(start, end) {
    this.start = start;
    this.end = end;

   //Line
    this.lineGeometry = new THREE.Geometry();
    this.lineMaterial = new THREE.LineBasicMaterial(
                        {
                            color: 0xFF0000
                        });
    this.lineGeometry.vertices.push(this.start);
    this.lineGeometry.vertices.push(this.end);
    this.line = new THREE.Line(this.lineGeometry, this.lineMaterial);

    // Particule System
    this.particleCount = 50;
    this.particleGeometry = new THREE.Geometry();
    this.particleMaterial = new THREE.ParticleBasicMaterial(
                            {
                                color: 0xFF7F00,
                                 size: 20,
                                  map: THREE.ImageUtils.loadTexture(
                                            "images/particle.png"
                                       ),
                             blending: THREE.AdditiveBlending,
                          transparent: true
                            });
    // Every Particle comes from the start point
    for(var i = 0; i < this.particleCount; i++) {
        var particle = new Particle();
        particle.copy(this.start);
        particle.dir = 1;
        particle.velocity = new THREE.Vector3(0, 0, 0);
        this.particleGeometry.vertices.push(particle);
    }
    this.particleSystem = new THREE.ParticleSystem(this.particleGeometry,
                                                   this.particleMaterial);
    this.particleSystem.sortParticles = true;
};
//------------------------------------------------------------------------------
//CubeEdge.prototype = Object.create(THREE.Geometry.prototype);
//------------------------------------------------------------------------------
CubeEdge.prototype.render = function() {

}
//------------------------------------------------------------------------------



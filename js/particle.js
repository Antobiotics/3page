
Particle = function(x, y, z) {
    THREE.Vector3.call(this);
    this.x = x;
    this.y = y;
    this.z = z;

    this.dir = 1;
};

Particle.prototype = Object.create(THREE.Vector3.prototype);


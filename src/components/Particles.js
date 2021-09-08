import React from 'react';
import ParticleField from 'react-particles-webgl';

const config = {
    showCube: false,
    dimension: '3D',
    velocity: 1,
    boundaryType: 'passthru',
    antialias: false,
    direction: {
        xMin: -1,
        xMax: 1,
        yMin: -1,
        yMax: 1,
        zMin: -1,
        zMax: 1
    },
    lines: {
        colorMode: 'solid',
        color: '#ffee00',
        transparency: 0.9,
        limitConnections: true,
        maxConnections: 20,
        minDistance: 150,
        visible: true
    },
    particles: {
        colorMode: 'rainbow',
        color: '#3FB568',
        transparency: 0.9,
        shape: 'square',
        boundingBox: 'canvas',
        count: 500,
        minSize: 10,
        maxSize: 75,
        visible: false
    },
    cameraControls: {
        enabled: true,
        enableDamping: true,
        dampingFactor: 0.2,
        enableZoom: false,
        autoRotate: true,
        autoRotateSpeed: 1.2,
        resetCameraFlag: false
    }
}

const Particles = () => {
  return (
      <div style={{height: "100vh", width: "100vw"}}>
          <ParticleField config={config} />
      </div>
  );
}

export default Particles;

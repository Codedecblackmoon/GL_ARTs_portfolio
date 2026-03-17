import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, extend } from '@react-three/fiber';
import { OrbitControls, Effects } from '@react-three/drei';
import { UnrealBloomPass } from 'three-stdlib';
import * as THREE from 'three';

extend({ UnrealBloomPass });

const ParticleSwarm = () => {
  const meshRef = useRef();
  const count = 10000;
  const speedMult = 1.4;
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const target = useMemo(() => new THREE.Vector3(), []);
  const pColor = useMemo(() => new THREE.Color(), []);
  const color = pColor; // Alias for user code compatibility
  
  const positions = useMemo(() => {
     const pos = [];
     for(let i=0; i<count; i++) pos.push(new THREE.Vector3((Math.random()-0.5)*100, (Math.random()-0.5)*100, (Math.random()-0.5)*100));
     return pos;
  }, []);

  // Material & Geom
  const material = useMemo(() => new THREE.ShaderMaterial({
    uniforms: {
        uTime: { value: 0 }
    },
    vertexShader: `
        varying vec2 vUv;
        varying vec3 vColor;
        void main() {
            vUv = uv;
            vColor = instanceColor;
            vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(position, 1.0);
            gl_Position = projectionMatrix * mvPosition;
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        varying vec3 vColor;
        uniform float uTime;
        void main() {
            float dist = distance(vUv, vec2(0.5));
            float ring = smoothstep(0.4, 0.45, dist) - smoothstep(0.45, 0.5, dist);
            float core = 1.0 - smoothstep(0.0, 0.1, dist);
            float alpha = core + ring * (0.5 + 0.5 * sin(uTime * 3.0));
            if (alpha < 0.05) discard;
            gl_FragColor = vec4(vColor, alpha); 
        }
    `,
    transparent: true,
    depthWrite: false,
    side: 2 // DoubleSide
}), []);
  const geometry = useMemo(() => new THREE.PlaneGeometry(0.8, 0.8), []);

  const PARAMS = useMemo(() => ({"rate":0.6,"bleb":1,"fragment":8.6,"cycle":12.95}), []);
  const addControl = (id, l, min, max, val) => {
      return PARAMS[id] !== undefined ? PARAMS[id] : val;
  };
  const setInfo = () => {};
  const annotate = () => {};

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime() * speedMult;
    const THREE_LIB = THREE;

    if(material.uniforms && material.uniforms.uTime) {
         material.uniforms.uTime.value = time;
    }

    for (let i = 0; i < count; i++) {
        // USER CODE START
        const rate = addControl("rate", "Process Speed", 0.1, 2.0, 0.6);
        const blebScale = addControl("bleb", "Bleb Intensity", 1.0, 8.0, 4.0);
        const fragmentDist = addControl("fragment", "Body Separation", 5, 50, 25);
        const cycleTime = addControl("cycle", "Cycle Duration", 5, 20, 12);
        
        const t = (time * rate) % cycleTime;
        const ratio = i / count;
        
        // Phase definition based on cycle time
        const isHealthy = t < cycleTime * 0.25;
        const isBlebbing = t >= cycleTime * 0.25 && t < cycleTime * 0.55;
        const isFragmenting = t >= cycleTime * 0.55;
        
        let x = 0, y = 0, z = 0;
        let h = 0, s = 0.7, l = 0.5;
        
        // Base spherical coordinates
        const phi = Math.acos(1.0 - 2.0 * ratio);
        const theta = Math.sqrt(count * Math.PI) * phi;
        
        if (isHealthy) {
        const r = 20.0;
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
        h = 0.3; // Healthy Green
        } else if (isBlebbing) {
        // Membrane Blebbing: Surface distortion using low-frequency noise
        const noise = Math.sin(phi * 4.0 + t * 2.0) * Math.cos(theta * 3.0 - t);
        const r = 20.0 + (Math.max(0, noise) * blebScale);
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta);
        z = r * Math.cos(phi);
        h = 0.15; // Sickly Yellow
        l = 0.4 + noise * 0.2;
        } else if (isFragmenting) {
        // Fragmentation: Breaking into discrete apoptotic bodies
        const clusterId = i % 6;
        const clusterAngle = (clusterId / 6) * Math.PI * 2;
        const progress = (t - cycleTime * 0.55) / (cycleTime * 0.45);
        
        // Each cluster drifts away
        const drift = progress * fragmentDist;
        const r = 6.0 * (1.0 - progress * 0.5); // Bodies shrink
        
        // Internal cluster sphere
        const cRatio = (i % (count / 6)) / (count / 6);
        const cPhi = Math.acos(1.0 - 2.0 * cRatio);
        const cTheta = Math.sqrt((count / 6) * Math.PI) * cPhi + t;
        
        x = Math.cos(clusterAngle) * drift + r * Math.sin(cPhi) * Math.cos(cTheta);
        y = Math.sin(clusterAngle) * drift + r * Math.sin(cPhi) * Math.sin(cTheta);
        z = Math.sin(clusterAngle + t) * (drift * 0.5) + r * Math.cos(cPhi);
        
        h = 0.05; // Fading Red
        l = 0.5 * (1.0 - progress); // Fade out to represent phagocytosis
        }
        
        target.set(x, y, z);
        color.setHSL(h, s, l);
        
        if (i === 0) {
        let stageTitle = "Apoptosis Stage: Healthy";
        let stageDesc = "Normal cellular homeostasis.";
        let labelPos = new THREE.Vector3(0, 35, 0);
        
        if (isBlebbing) {
            stageTitle = "Apoptosis Stage: Blebbing";
            stageDesc = "Cytoskeleton decoupling and membrane bulging.";
            annotate("bleb_label", new THREE.Vector3(25, 0, 0), "Bleb Formation");
        } else if (isFragmenting) {
            stageTitle = "Apoptosis Stage: Fragmentation";
            stageDesc = "Formation of apoptotic bodies for phagocytic cleanup.";
            annotate("frag_label", new THREE.Vector3(0, fragmentDist, 0), "Apoptotic Bodies");
        }
        
        setInfo(stageTitle, stageDesc);
        annotate("status", labelPos, stageTitle);
        }
        // USER CODE END

        positions[i].lerp(target, 0.1);
        dummy.position.copy(positions[i]);
        dummy.updateMatrix();
        meshRef.current.setMatrixAt(i, dummy.matrix);
        meshRef.current.setColorAt(i, pColor);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    if (meshRef.current.instanceColor) meshRef.current.instanceColor.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[geometry, material, count]} />
  );
};

export default function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas camera={{ position: [0, 0, 100], fov: 60 }}>
        <fog attach="fog" args={['#000000', 0.01]} />
        <ParticleSwarm />
        <OrbitControls autoRotate={true} />
        <Effects disableGamma>
            <unrealBloomPass threshold={0} strength={1.8} radius={0.4} />
        </Effects>
      </Canvas>
    </div>
  );
}
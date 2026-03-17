import { Code, Palette, Zap, Smartphone, TrendingUp, MonitorSmartphone } from 'lucide-react';
import backgroundobject from '../assets/images/11.png';

const style: React.CSSProperties = {
    background: "rgba(255, 255, 255, 0.28)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1))",
    backdropFilter: "blur(5.6px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255,255,255,0.3)"
  };

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom-built websites with modern technologies, responsive design, and seamless user experiences that drive results.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration']
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Eye-catching visual designs that communicate your brand story and captivate your target audience effectively.',
    features: ['Logo Design', 'Brand Identity', 'Marketing Materials']
  },
  {
    icon: Zap,
    title: 'Branding & Identity',
    description: 'Comprehensive brand strategies that establish a memorable presence and differentiate you from competitors.',
    features: ['Brand Strategy', 'Visual Guidelines', 'Brand Positioning']
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    description: 'Intuitive and engaging user interfaces designed to enhance user satisfaction and optimize conversion rates.',
    features: ['User Research', 'Prototyping', 'Usability Testing']
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic marketing solutions that boost your online visibility and connect you with your ideal customers.',
    features: ['SEO Optimization', 'Social Media', 'Content Strategy']
  },
  {
    icon: MonitorSmartphone,
    title: 'Custom Apps',
    description: 'Tailor-made applications designed to streamline your business processes, enhance user experience, and scale with your growth.',
    features: ['Web Applications', 'Mobile Apps', 'Dashboard & Admin Systems']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white overflow-hidden relative">
      {/* Background Object */}
      <img
        src={backgroundobject}
        alt=""
        className="absolute left-1/2 top-[57%] w-[800px] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-1"
      />
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our <span className="text-[#CC0000]">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive creative solutions tailored to elevate your brand and achieve your business goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              style={style}
              className="group p-8 hover:border-[#CC0000] hover:border-solid hover:border-2  hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-[#CC0000] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#CC0000] transition-colors duration-300">
                <service.icon className="w-8 h-8 text-[#CC0000] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-2xl font-bold text-black mb-3 group-hover:text-[#CC0000] transition-colors">
                {service.title}
              </h3>

              <p className="text-[#1f1f1f] leading-relaxed pb-5">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-[#1f1f1f]">
                    <div className="w-1.5 h-1.5 bg-[#CC0000] rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}






// import React, { useRef, useMemo } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import * as THREE from 'three';
// import { Code, Palette, Zap, Smartphone, TrendingUp, Package } from 'lucide-react';

// // ── Particle Swarm ────────────────────────────────────────────────────────────
// const ParticleSwarm = () => {
//   const meshRef = useRef<THREE.InstancedMesh>(null);
//   const count = 5000;
//   const speedMult = 1.4;

//   // stable refs — never recreated
//   const dummy    = useRef(new THREE.Object3D());
//   const target   = useRef(new THREE.Vector3());
//   const pColor   = useRef(new THREE.Color());

//   const positions = useMemo(() => {
//     return Array.from({ length: count }, () =>
//       new THREE.Vector3(
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100,
//         (Math.random() - 0.5) * 100
//       )
//     );
//   }, []);

//   // PlaneGeometry billboard particle
//   const geometry = useMemo(() => new THREE.PlaneGeometry(1, 1), []);

//   // ShaderMaterial with instanceColor support
//   const material = useMemo(() => new THREE.ShaderMaterial({
//     uniforms: { uTime: { value: 0 } },
//     vertexShader: /* glsl */`
//       attribute vec3 instanceColor;
//       varying vec3 vColor;
//       varying vec2 vUv;
//       void main() {
//         vUv    = uv;
//         vColor = instanceColor;
//         gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
//       }
//     `,
//     fragmentShader: /* glsl */`
//       varying vec3  vColor;
//       varying vec2  vUv;
//       uniform float uTime;
//       void main() {
//         float d    = distance(vUv, vec2(0.5));
//         float disc = 1.0 - smoothstep(0.3, 0.5, d);
//         if (disc < 0.05) discard;
//         gl_FragColor = vec4(vColor, disc);
//       }
//     `,
//     transparent: true,
//     depthWrite:  false,
//     side:        THREE.DoubleSide,
//   }), []);

//   const PARAMS = { rate: 0.6, bleb: 2.0, fragment: 8.6, cycle: 12.95 };

//   useFrame(({ clock }) => {
//     const mesh = meshRef.current;
//     if (!mesh) return;

//     const time = clock.getElapsedTime() * speedMult;
//     material.uniforms.uTime.value = time;

//     const { rate, bleb: blebScale, fragment: fragmentDist, cycle: cycleTime } = PARAMS;

//     for (let i = 0; i < count; i++) {
//       const t     = (time * rate) % cycleTime;
//       const ratio = i / count;
//       const phi   = Math.acos(Math.max(-1, Math.min(1, 1.0 - 2.0 * ratio)));
//       const theta = Math.sqrt(count * Math.PI) * phi;

//       const isHealthy     = t < cycleTime * 0.25;
//       const isBlebbing    = t >= cycleTime * 0.25 && t < cycleTime * 0.55;
//       const isFragmenting = t >= cycleTime * 0.55;

//       let x = 0, y = 0, z = 0, h = 0.33, s = 0.8, lv = 0.55;

//       if (isHealthy) {
//         const r = 20;
//         x = r * Math.sin(phi) * Math.cos(theta);
//         y = r * Math.sin(phi) * Math.sin(theta);
//         z = r * Math.cos(phi);
//         h = 0.33; s = 0.9; lv = 0.55;

//       } else if (isBlebbing) {
//         const noise = Math.sin(phi * 4 + t * 2) * Math.cos(theta * 3 - t);
//         const r = 20 + Math.max(0, noise) * blebScale;
//         x = r * Math.sin(phi) * Math.cos(theta);
//         y = r * Math.sin(phi) * Math.sin(theta);
//         z = r * Math.cos(phi);
//         h = 0.12; s = 0.9; lv = 0.5 + noise * 0.15;

//       } else if (isFragmenting) {
//         const clusterId    = i % 6;
//         const clusterAngle = (clusterId / 6) * Math.PI * 2;
//         const progress     = (t - cycleTime * 0.55) / (cycleTime * 0.45);
//         const drift        = progress * fragmentDist;
//         const r            = 6 * (1 - progress * 0.5);
//         const cRatio       = (i % Math.floor(count / 6)) / Math.floor(count / 6);
//         const cPhi         = Math.acos(Math.max(-1, Math.min(1, 1 - 2 * cRatio)));
//         const cTheta       = Math.sqrt((count / 6) * Math.PI) * cPhi + t;
//         x = Math.cos(clusterAngle) * drift + r * Math.sin(cPhi) * Math.cos(cTheta);
//         y = Math.sin(clusterAngle) * drift + r * Math.sin(cPhi) * Math.sin(cTheta);
//         z = Math.sin(clusterAngle + t) * drift * 0.5 + r * Math.cos(cPhi);
//         h = 0.02; s = 0.9; lv = Math.max(0.05, 0.5 * (1 - progress));
//       }

//       // lerp position
//       target.current.set(x, y, z);
//       positions[i].lerp(target.current, 0.08);
//       dummy.current.position.copy(positions[i]);
//       dummy.current.updateMatrix();
//       mesh.setMatrixAt(i, dummy.current.matrix);

//       // set color
//       pColor.current.setHSL(h, s, lv);
//       mesh.setColorAt(i, pColor.current);
//     }

//     mesh.instanceMatrix.needsUpdate = true;
//     if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
//   });

//   return (
//     <instancedMesh ref={meshRef} args={[geometry, material, count]}>
//       {/* instancedMesh initialises instanceColor when we call setColorAt */}
//     </instancedMesh>
//   );
// };

// // ── Services data ─────────────────────────────────────────────────────────────
// const services = [
//   { icon: Code,       title: 'Web Development',    description: 'Custom-built websites with modern technologies, responsive design, and seamless user experiences that drive results.',   features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration'] },
//   { icon: Palette,    title: 'Graphic Design',      description: 'Eye-catching visual designs that communicate your brand story and captivate your target audience effectively.',            features: ['Logo Design', 'Brand Identity', 'Marketing Materials'] },
//   { icon: Zap,        title: 'Branding & Identity', description: 'Comprehensive brand strategies that establish a memorable presence and differentiate you from competitors.',              features: ['Brand Strategy', 'Visual Guidelines', 'Brand Positioning'] },
//   { icon: Smartphone, title: 'UI/UX Design',        description: 'Intuitive and engaging user interfaces designed to enhance user satisfaction and optimize conversion rates.',              features: ['User Research', 'Prototyping', 'Usability Testing'] },
//   { icon: TrendingUp, title: 'Digital Marketing',   description: 'Strategic marketing solutions that boost your online visibility and connect you with your ideal customers.',              features: ['SEO Optimization', 'Social Media', 'Content Strategy'] },
//   { icon: Package,    title: 'Print Design',        description: 'Professional print materials that leave lasting impressions and reinforce your brand across all touchpoints.',             features: ['Business Cards', 'Brochures', 'Packaging Design'] },
// ];

// const cardStyle: React.CSSProperties = {
//   background:           'rgba(255,255,255,0.07)',
//   borderRadius:         '16px',
//   boxShadow:            '0 4px 30px rgba(0,0,0,0.4)',
//   backdropFilter:       'blur(14px)',
//   WebkitBackdropFilter: 'blur(14px)',
//   border:               '1px solid rgba(255,255,255,0.15)',
// };

// // ── Page ──────────────────────────────────────────────────────────────────────
// export default function Services() {
//   return (
//     <section
//       id="services"
//       style={{ position: 'relative', minHeight: '100vh', background: '#050508' }}
//     >
//       {/* Canvas — absolute, fills the section */}
//       <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
//         <Canvas
//           camera={{ position: [0, 0, 80], fov: 60 }}
//           onCreated={({ gl, scene }) => {
//             gl.setClearColor(new THREE.Color('#050508'), 1);
//             scene.background = new THREE.Color('#050508');   // ← this is the key line
//           }}
//         >
//           <ParticleSwarm />
//           <OrbitControls
//             autoRotate
//             autoRotateSpeed={0.5}
//             enableZoom={false}
//             enablePan={false}
//             enableRotate={false}
//           />
//         </Canvas>
//       </div>

//       {/* Overlay */}
//       <div style={{
//         position:      'absolute',
//         inset:         0,
//         zIndex:        1,
//         background:    'linear-gradient(to bottom,rgba(5,5,8,0.55),rgba(5,5,8,0.2) 50%,rgba(5,5,8,0.6))',
//         pointerEvents: 'none',
//       }} />

//       {/* Content */}
//       <div style={{ position: 'relative', zIndex: 2 }} className="container mx-auto px-6 py-24">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Our <span className="text-[#FF6600]">Services</span>
//           </h2>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Comprehensive creative solutions tailored to elevate your brand and achieve your business goals
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               style={cardStyle}
//               className="group p-8 hover:border-[#FF6600] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
//             >
//               <div className="w-16 h-16 bg-[#FF6600] bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#FF6600] transition-colors duration-300">
//                 <service.icon className="w-8 h-8 text-[#FF6600] group-hover:text-white transition-colors duration-300" />
//               </div>
//               <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF6600] transition-colors">
//                 {service.title}
//               </h3>
//               <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
//               <ul className="space-y-2">
//                 {service.features.map((feature, idx) => (
//                   <li key={idx} className="flex items-center text-sm text-gray-300">
//                     <div className="w-1.5 h-1.5 bg-[#FF6600] rounded-full mr-3 flex-shrink-0" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
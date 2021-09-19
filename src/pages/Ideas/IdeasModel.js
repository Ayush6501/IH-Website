import * as THREE from "three";
import { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame} from "@react-three/fiber";
import { Text, TrackballControls, Html } from "@react-three/drei";
/* import randomWord from "random-words"; */
/* import Poppins from "../../fonts/Poppins Medium_Regular.json"; */
/* import Bg from "../../assets/images/Logo-white.png";
import { Suspense } from "react"; */
import './IdeasModel.css';

const ideaWords = [
  "innovate",
  "ideate",
  "create",
  "launch",
  "clever",
  "creative",
  "imaginative",
  "ingenious",
  "innovational",
  "innovatory",
  "inventive",
  "original",
  "originative",
  "Promethean",
  "gifted",
  "inspired",
  "talented",
  "resourceful",
  "fecund",
  "fertile",
  "fruitful",
  "generative",
  "germinal",
  "productive",
  "prolific",
  "adventurous",
  "fresh",
  "groundbreaking",
  "novel",
  "original",
  "visionary",
  "cleverish",
  "gadgety",
  "gimmicky",
  "convenient",
  "handy",
  "neat",
  "nifty",
  "practical",
  "useful",
  "complex",
  "sophisticated",
];

/* const font = new THREE.FontLoader().parse(Poppins); */

/* const textOptions = {
  font,
  size: 1,
  height: 1,
  letterSpacing: -0.05,
  curveSegments: 20,
  bevelEnabled: false,
}; */

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    font: "Inter",
    fontSize: 2.75,
    letterSpacing: -0.05,
    lineHeight: 1,
    "material-toneMapped": false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = "pointer";
    return () => (document.body.style.cursor = "auto");
  }, [hovered]);
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? "#EDE75A" : "black"),
      0.1
    );
  });
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      // Taken from https://discourse.threejs.org/t/can-i-place-obects-on-a-sphere-surface-evenly/4773/6
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          ideaWords[Math.floor(Math.random() * ideaWords.length)],
        ]);
    return temp;
  }, [count, radius]);
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos} children={word} />
  ));
}

export default function IdeasModel(props) {
  /* const texture = useLoader(THREE.TextureLoader, Bg); */
  return (
    <div className="model">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        {/* <mesh>
          <planeBufferGeometry attach="geometry" args={[3, 3]} />
          <meshBasicMaterial attach="material" map={texture} />
        </mesh> */}

        <fog attach="fog" args={["white", 0, 80]} />
        <Cloud count={8} radius={20} />
        <TrackballControls />
        {/* <mesh position={[-30, 10, 17]}>
        <textGeometry attach='geometry' args={['SCROLL IN TO ZOOM!', textOptions]} />
        <meshStandardMaterial attach='material' />
      </mesh> */}
       <Html >
         <div style={{
           position: "absolute",
           bottom: 0,
           left: 0,
           width: "100%",
           top: 300,
           right: 30,
           cursor: 'pointer',
           display: 'flex'
         }}>
           <h3 onClick={props.scroll} style={{color: 'white'}}>Scroll</h3>
         </div>
       </Html>
      </Canvas>
    </div>
  );
}

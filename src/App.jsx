import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { useRef } from "react";

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.03;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.05;
    }
  });

  return (
    <mesh ref={meshRef}>
      {/* Use 'args' prop for geometry */}
      <cylinderGeometry  />
      <meshNormalMaterial color="#468585" />
    </mesh>
  );
};

const App = () => {
  return (
    <Canvas
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      background={"#F0F0F0"}
    >
      <OrbitControls enableZoom enablePan enableRotate />
      {/* Use 'directionalLight' as a JSX component */}
      <directionalLight   color={0x9cdba6} />
      <RotatingCube />
    </Canvas>
  );
};

export default App;

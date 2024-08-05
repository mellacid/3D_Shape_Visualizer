import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Shape = ({ position, color }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Canvas3D = ({ shapes }) => {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {shapes.map((shape, index) => (
        <Shape key={shape.id} position={[index * 2, 0, 0]} color="blue" />
      ))}
    </Canvas>
  );
};

export default Canvas3D;

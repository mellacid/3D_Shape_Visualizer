import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import {
  OrbitControls,
  Box,
  Sphere,
  Cylinder,
  Cone,
  PivotControls,
} from "@react-three/drei";

function Shape({ shape, onClick }) {
  const getGeometry = () => {
    switch (shape.type) {
      case "cube":
        return (
          <Box
            args={[shape.dimensions.x, shape.dimensions.y, shape.dimensions.z]}
          />
        );
      case "sphere":
        return <Sphere args={[shape.dimensions.x / 2, 32, 32]} />;
      case "cylinder":
        return (
          <Cylinder
            args={[
              shape.dimensions.x / 2,
              shape.dimensions.x / 2,
              shape.dimensions.y,
              32,
            ]}
          />
        );
      case "cone":
        return <Cone args={[shape.dimensions.x / 2, shape.dimensions.y, 32]} />;
      default:
        return null;
    }
  };

  return (
    <group>
      <PivotControls>
        <mesh onClick={onClick}>
          {getGeometry()}
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>
      <Html
        position={[
          shape.dimensions.x / 2,
          shape.dimensions.y / 2,
          shape.dimensions.z / 2,
        ]}
      >
        <div
          style={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            padding: "5px",
          }}
        >
          {shape.dimensions.x.toFixed(1)}cm x {shape.dimensions.y.toFixed(1)}cm
          x {shape.dimensions.z.toFixed(1)}cm
        </div>
      </Html>
    </group>
  );
}

function Canvas3D({ shapes, onShapeClick }) {
  return (
    <Canvas style={{ background: "black", height: "500px" }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {shapes.map((shape, index) => (
        <Shape
          key={shape.id}
          shape={shape}
          onClick={() => onShapeClick(shape.id)}
        />
      ))}
    </Canvas>
  );
}

export default Canvas3D;

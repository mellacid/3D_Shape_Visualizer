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

const calculatePositions = (shapes) => {
  const totalShapes = shapes.length;
  const spacing = 3;
  const shapesPerRow = 5;
  const rows = Math.ceil(totalShapes / shapesPerRow);

  return shapes.map((shape, index) => {
    const row = Math.floor(index / shapesPerRow);
    const col = index % shapesPerRow;
    const x = (col - (shapesPerRow - 1) / 2) * spacing;
    const z = (row - (rows - 1) / 2) * spacing;
    return { ...shape, position: { x, y: 0, z } };
  });
};

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
    <PivotControls>
      <mesh
        position={[shape.position.x, shape.position.y, shape.position.z]}
        onClick={onClick}
      >
        {getGeometry()}
        <meshStandardMaterial color="orange" />
      </mesh>
    </PivotControls>
  );
}

function Canvas3D({ shapes, onShapeClick }) {
  const positionedShapes = calculatePositions(shapes);

  return (
    <Canvas
      style={{ background: "black", height: "500px" }}
      camera={{ position: [0, 5, 15], fov: 30 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls />
      {positionedShapes.map((shape) => (
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

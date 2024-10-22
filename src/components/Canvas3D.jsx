import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box, Sphere, Cylinder, Cone, Edges } from "@react-three/drei";

// Calculate positions for multiple shapes
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

// Individual shape component
function Shape({ shape, onClick }) {
  // Get the appropriate geometry based on shape type
  const getGeometry = () => {
    switch (shape.type) {
      case "cube":
        return (
          <Box
            args={[shape.dimensions.x, shape.dimensions.y, shape.dimensions.z]}
          >
            <Edges color="grey" />
          </Box>
        );
      case "sphere":
        return (
          <Sphere args={[shape.dimensions.x / 2, 32, 32]}>
            <Edges color="grey" />
          </Sphere>
        );
      case "cylinder":
        return (
          <Cylinder
            args={[
              shape.dimensions.x / 2,
              shape.dimensions.x / 2,
              shape.dimensions.y,
              32,
            ]}
          >
            <Edges color="grey" />
          </Cylinder>
        );
      case "cone":
        return (
          <Cone args={[shape.dimensions.x / 2, shape.dimensions.y, 32]}>
            <Edges color="grey" />
          </Cone>
        );
      default:
        return null;
    }
  };

  return (
    <mesh
      position={[shape.position.x, shape.position.y, shape.position.z]}
      onClick={onClick}
    >
      {getGeometry()}
    </mesh>
  );
}

// Main Canvas3D component
function Canvas3D({ shapes, onShapeClick }) {
  const positionedShapes = calculatePositions(shapes);

  return (
    <Canvas
      camera={{ position: [0, 5, 15], fov: 30 }}
      style={{ background: "black", height: "500px" }}
    >
      <ambientLight intensity={0.3} />
      <OrbitControls />
      {/* Render all shapes */}
      {positionedShapes.map((shape) => (
        <Shape
          key={shape.id}
          shape={shape}
          onClick={() => onShapeClick(shape.id)}
        />
      ))}
      {/* Add a base plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}></mesh>
    </Canvas>
  );
}

export default Canvas3D;

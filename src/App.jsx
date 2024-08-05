import React, { useState, useEffect } from "react";
import ShapeTable from "./components/ShapeTable.jsx";
import { Button, Container } from "@mui/material";
import ShapeModal from "./components/ShapeModal.jsx";
import Canvas3D from "./components/Canvas3D.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const App = () => {
  const [shapes, setShapes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);

  useEffect(() => {
    const storedShapes = JSON.parse(localStorage.getItem("shapes") || "[]");
    setShapes(storedShapes);
  }, []);

  const saveShapes = (newShapes) => {
    localStorage.setItem("shapes", JSON.stringify(newShapes));
    setShapes(newShapes);
  };

  const handleAddShape = (newShape) => {
    const updatedShapes = [...shapes, { ...newShape, id: Date.now() }];
    saveShapes(updatedShapes);
  };

  const handleDeleteShape = (id) => {
    const updatedShapes = shapes.filter((shape) => shape.id !== id);
    saveShapes(updatedShapes);
  };

  const handleRenderAll = () => setShowCanvas(true);
  const handleCloseCanvas = () => setShowCanvas(false);

  return (
    <Container>
      {!showCanvas ? (
        <>
          <Button onClick={() => setModalOpen(true)}>Create Shape</Button>
          <Button onClick={handleRenderAll}>Render All</Button>
          <ShapeTable
            shapes={shapes}
            onDelete={handleDeleteShape}
            onRender={(id) => console.log("Render", id)}
          />
          <ShapeModal
            open={modalOpen}
            onClose={() => setModalOpen(false)}
            onSave={handleAddShape}
          />
        </>
      ) : (
        <>
          <Button onClick={handleCloseCanvas}>Close Canvas</Button>
          <Canvas3D shapes={shapes} />
        </>
      )}
    </Container>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Box,
  Typography,
  Slider,
  Grid,
  Tooltip,
} from "@mui/material";
import ShapeTable from "./components/ShapeTable";
import ShapeModal from "./components/ShapeModal";
import Canvas3D from "./components/Canvas3D";

function App() {
  const [shapes, setShapes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [selectedShape, setSelectedShape] = useState(null);

  useEffect(() => {
    const storedShapes = JSON.parse(localStorage.getItem("shapes") || "[]");
    setShapes(storedShapes);
  }, []);

  const handleAddShape = (newShape) => {
    const updatedShapes = [...shapes, { ...newShape, id: shapes.length + 1 }];
    setShapes(updatedShapes);
    localStorage.setItem("shapes", JSON.stringify(updatedShapes));
  };

  const handleDeleteShape = (id) => {
    const updatedShapes = shapes.filter((shape) => shape.id !== id);
    setShapes(updatedShapes);
    localStorage.setItem("shapes", JSON.stringify(updatedShapes));
  };

  const handleShapeClick = (id) => {
    setSelectedShape(shapes.find((shape) => shape.id === id));
  };

  const handleDimensionChange = (dimension, value) => {
    if (selectedShape) {
      const updatedShapes = shapes.map((shape) =>
        shape.id === selectedShape.id
          ? {
              ...shape,
              dimensions: { ...shape.dimensions, [dimension]: value },
            }
          : shape
      );
      setShapes(updatedShapes);
      setSelectedShape({
        ...selectedShape,
        dimensions: { ...selectedShape.dimensions, [dimension]: value },
      });
      localStorage.setItem("shapes", JSON.stringify(updatedShapes));
    }
  };

  return (
    <Container>
      <h1>3D Shape Visualizer</h1>
      {!showCanvas ? (
        <Box>
          <Tooltip title="Create a new shape">
            <Button
              onClick={() => setIsModalOpen(true)}
              variant="outlined"
              sx={{ margin: "5px" }}
            >
              Create
            </Button>
          </Tooltip>
          <Tooltip title="Render all shapes in 3D">
            <Button onClick={() => setShowCanvas(true)} variant="outlined">
              Render All
            </Button>
          </Tooltip>
          <ShapeTable
            shapes={shapes}
            onDelete={handleDeleteShape}
            onRender={(id) => {
              setSelectedShape(shapes.find((shape) => shape.id === id));
              setShowCanvas(true);
            }}
          />
          <ShapeModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddShape}
          />
        </Box>
      ) : (
        <Box>
          <Button
            onClick={() => {
              setShowCanvas(false);
              setSelectedShape(null);
            }}
            style={{ position: "absolute", top: 10, right: 10 }}
            variant="outlined"
          >
            x
          </Button>
          <Canvas3D
            shapes={selectedShape ? [selectedShape] : shapes}
            onShapeClick={handleShapeClick}
          />
          {selectedShape && (
            <Box
              sx={{
                position: "sticky",
                backgroundColor: "rgba(255,255,255,0.7)",
                padding: "10px",
              }}
            >
              <Typography variant="h6">{selectedShape.name}</Typography>
            </Box>
          )}
          {selectedShape && (
            <Grid
              container
              spacing={2}
              sx={{
                position: "absolute",
                bottom: 10,
                left: 10,
                right: 10,
                backgroundColor: "rgba(255,255,255,0.7)",
                padding: "10px",
              }}
            >
              <Grid item xs={4}>
                <Typography>X dimension:</Typography>
                <Slider
                  value={selectedShape.dimensions.x}
                  onChange={(_, value) => handleDimensionChange("x", value)}
                  min={0.1}
                  max={5}
                  step={0.1}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Y dimension:</Typography>
                <Slider
                  value={selectedShape.dimensions.y}
                  onChange={(_, value) => handleDimensionChange("y", value)}
                  min={0.1}
                  max={5}
                  step={0.1}
                />
              </Grid>
              <Grid item xs={4}>
                <Typography>Z dimension:</Typography>
                <Slider
                  value={selectedShape.dimensions.z}
                  onChange={(_, value) => handleDimensionChange("z", value)}
                  min={0.1}
                  max={5}
                  step={0.1}
                />
              </Grid>
            </Grid>
          )}
        </Box>
      )}
    </Container>
  );
}

export default App;

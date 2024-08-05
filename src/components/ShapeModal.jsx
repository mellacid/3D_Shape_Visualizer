import React, { useState } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";

function ShapeModal({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  const handleSave = () => {
    if (!type) {
      setError("Please select a shape type");
      return;
    }

    const shapeName = name.trim() || type;
    onSave({
      name: shapeName,
      type,
      dimensions: { x: 1, y: 1, z: 1 },
      position: { x: 0, y: 0, z: 0 },
    });
    setName("");
    setType("");
    setError("");
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          minWidth: 300,
        }}
      >
        <TextField
          label="Name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            label="Type"
            onChange={(e) => setType(e.target.value)}
          >
            <MenuItem value="cube">Cube</MenuItem>
            <MenuItem value="sphere">Sphere</MenuItem>
            <MenuItem value="cylinder">Cylinder</MenuItem>
            <MenuItem value="cone">Cone</MenuItem>
          </Select>
        </FormControl>
        {error && <Typography color="error">{error}</Typography>}
        <Button onClick={handleSave} disabled={!type}>
          Save
        </Button>
      </Box>
    </Modal>
  );
}

export default ShapeModal;

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
  FormHelperText,
} from "@mui/material";

function ShapeModal({ open, onClose, onSave }) {
  // State for form inputs and errors
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [errors, setErrors] = useState({});

  // Validate form inputs
  const validateInputs = () => {
    let tempErrors = {};
    if (!name.trim()) tempErrors.name = "Name is required";
    if (!type) tempErrors.type = "Type is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle modal cancel
  const handleCancel = () => {
    setName("");
    setType("");
    setErrors({});
    onClose();
  };

  // Handle modal save
  const handleSave = () => {
    if (validateInputs()) {
      onSave({
        name: name.trim() || type,
        type,
        dimensions: { x: 1, y: 1, z: 1 },
      });
      setName("");
      setType("");
      setErrors({});
      onClose();
    }
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
        {/* Name input field */}
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
          error={!!errors.name}
          helperText={errors.name}
        />
        {/* Shape type selection */}
        <FormControl fullWidth margin="normal" error={!!errors.type}>
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
          {errors.type && <FormHelperText>{errors.type}</FormHelperText>}
        </FormControl>
        {/* Save and Cancel buttons */}
        <Button onClick={handleSave} variant="outlined" sx={{ margin: "5px" }}>
          Save
        </Button>
        <Button onClick={handleCancel} variant="outlined">
          Cancel
        </Button>
      </Box>
    </Modal>
  );
}

export default ShapeModal;

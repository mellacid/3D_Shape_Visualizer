import React, { useState } from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const ShapeModal = ({ open, onClose, onSave }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleSave = () => {
    if (name && type) {
      onSave({ name, type });
      setName("");
      setType("");
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
        }}
      >
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button onClick={handleSave}>Save</Button>
      </Box>
    </Modal>
  );
};

export default ShapeModal;

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const ShapeTable = ({ shapes, onDelete, onRender }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shapes.map((shape) => (
            <TableRow key={shape.id}>
              <TableCell>{shape.name}</TableCell>
              <TableCell>{shape.type}</TableCell>
              <TableCell>
                <Button onClick={() => onDelete(shape.id)}>Delete</Button>
                <Button onClick={() => onRender(shape.id)}>Render</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ShapeTable;

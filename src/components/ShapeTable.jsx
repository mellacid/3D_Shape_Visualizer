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
  Tooltip,
} from "@mui/material";

function ShapeTable({ shapes, onDelete, onRender }) {
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
          {shapes.map((shape, index) => (
            <TableRow key={shape.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{shape.name}</TableCell>
              <TableCell>{shape.type}</TableCell>
              <TableCell>
                <Tooltip title="Delete shape">
                  <Button
                    onClick={() => onDelete(shape.id)}
                    variant="outlined"
                    sx={{ margin: "5px" }}
                  >
                    Delete
                  </Button>
                </Tooltip>
                <Tooltip title="Render shape in 3D">
                  <Button
                    onClick={() => onRender(shape.id)}
                    variant="outlined"
                    sx={{ margin: "5px" }}
                  >
                    Render
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ShapeTable;

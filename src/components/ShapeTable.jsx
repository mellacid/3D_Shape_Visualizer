import React from "react";

function ShapeTable() {
  return (
    <div className="shapeTable">
      <div className="buttons">
        <button className="create">Create</button>
        <button className="render">Render</button>
      </div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Shape Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Name_1</td>
              <td>Sphere</td>
              <td>
                <button className="delete">Delete</button>{" "}
                <button className="render">Render</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Name_2</td>
              <td>Cylinder</td>
              <td>
                <button className="delete">Delete</button>{" "}
                <button className="render">Render</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Name_3</td>
              <td>Cube</td>
              <td>
                <button className="delete">Delete</button>{" "}
                <button className="render">Render</button>
              </td>
            </tr>
            <tr>
              <td>---</td>
              <td>---</td>
              <td>---</td>
              <td>
                <button className="delete">Delete</button>{" "}
                <button className="render">Render</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ShapeTable;

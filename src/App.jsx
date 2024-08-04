import { useState, useEffect } from "react";
import ShapeTable from "./components/ShapeTable.jsx";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [shapes, setShapes] = useState([]);

  return (
    <div>
      <h1>3D Shape Visualizer</h1>
      <ShapeTable shapes={shapes} />
    </div>
  );
}

export default App;

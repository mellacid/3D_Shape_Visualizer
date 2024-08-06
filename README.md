# 3D Shape Visualizer

This project is a 3D Shape Visualizer built with React, Three.js, and Material-UI. It allows users to create, view, and manipulate 3D shapes in a web browser.

## Features

- Create various 3D shapes (cube, sphere, cylinder, cone)
- View shapes in a table format
- Render shapes in a 3D canvas
- Manipulate shapes in 3D space
- Persist shapes using local storage

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install the dependencies: npm i

## Running the Project

To run the project locally:

1. Start the development server
2. Open your browser and visit `http://localhost:5173` (or the port shown in your terminal).

## Usage

1. Create a shape:

- Click the "Create" button
- Enter a name and select a shape type in the modal
- Click "Save"

2. View shapes:

- All created shapes are displayed in the table

3. Render shapes:

- Click "Render" to view all shapes in 3D
- Click the "Render" button next to a specific shape to view it individually

4. Manipulate shapes:

- In the 3D view, click and drag to rotate the camera
- Click on a shape to select it
- Use the controls that appear to adjust the shape's position and dimensions

5. Close 3D view:

- Click the "Close Canvas" button to return to the table view

## Additional Notes

- Shapes are automatically saved to local storage, so they persist between browser sessions
- The project uses React's useState and useEffect hooks for state management
- Three.js is used for 3D rendering via the @react-three/fiber library
- Material-UI components are used for the user interface

## Troubleshooting

If you encounter any issues:

- Ensure all dependencies are correctly installed
- Clear your browser's local storage if you experience unexpected behavior
- Check the browser console for any error messages

## Contributing

Contributions to the 3D Shape Visualizer are welcome.

### Docs

- Three.js: https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
- MUI: https://mui.com/material-ui/getting-started/
- React: https://react.dev/learn

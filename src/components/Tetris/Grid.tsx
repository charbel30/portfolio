// components/Tetris/Grid.tsx
import React from "react";
import { Box } from "@react-three/drei";

export const Grid = () => {
  const gridSize = { width: 10, height: 20 };

  return (
    <group>
      {/* Grid cells */}
      {[...Array(gridSize.height)].map((_, rowIndex) =>
        [...Array(gridSize.width)].map((_, colIndex) => (
          <Box
            key={`cell-${rowIndex}-${colIndex}`}
            position={[
              colIndex - gridSize.width / 2 + 0.5,
              rowIndex - gridSize.height / 2 + 0.5,
              0,
            ]}
            scale={[0.9, 0.9, 0.1]}
          >
            <meshBasicMaterial color="#000000" />
          </Box>
        ))
      )}
    </group>
  );
};
import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import useStore from '../../state/tetrisStore';

// Define the type for the Tetromino prop
interface TetrominoProps {
  tetromino: {
    position: { x: number; y: number };
    shape: number[][];
    color: string;
  } | null;
}

export const Tetromino: React.FC<TetrominoProps> = ({ tetromino }) => {
  const { moveDown } = useStore((state) => state);

  useFrame(() => {
    // Tetromino animation and movement
    if (tetromino) {
      moveDown();
    }
  });

  if (!tetromino) {
    return null;
  }

  const { position, shape, color } = tetromino;

  return (
    <group position={[position.x, position.y, 0]}>
      {shape.map((row, rowIndex) =>
        row.map((cell, colIndex) =>
          cell ? (
            <Box key={`${rowIndex}-${colIndex}`} position={[colIndex, -rowIndex, 0]} scale={[1, 1, 1]}>
              <meshStandardMaterial color={color} />
            </Box>
          ) : null
        )
      )}
    </group>
  );
};
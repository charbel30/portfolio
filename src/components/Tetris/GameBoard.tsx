// components/Tetris/GameBoard.tsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import useStore from "../../state/tetrisStore";
import { Tetromino } from "./Tetromino";
import { Grid } from "./Grid";

export const GameBoard = () => {
  const { activeTetromino, moveLeft, moveRight, moveDown, rotate } = useStore(
    (state) => state
  );
  const gameBoardRef = useRef<THREE.Group>(null);

  useFrame(() => {
    // Game logic and state updates
    moveDown();
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowLeft":
          moveLeft();
          break;
        case "ArrowRight":
          moveRight();
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "ArrowUp":
          rotate();
          break;
        default:
          break;
      }
    };

    document.onkeydown = handleKeyDown;

    return () => {
      document.onkeydown = null;
    };
  }, [moveLeft, moveRight, moveDown, rotate]);

  return (
    <group ref={gameBoardRef}>
      <Grid />
      {activeTetromino && <Tetromino tetromino={activeTetromino} />}
    </group>
  );
};
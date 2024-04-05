import { create } from 'zustand';

type Tetromino = any; // Replace 'any' with the actual type of a Tetromino
type Grid = (Tetromino | null)[][];

interface TetrisState {
  grid: Grid;
  activeTetromino: Tetromino | null;
  score: number;
  setGrid: (grid: Grid) => void;
  setActiveTetromino: (tetromino: Tetromino | null) => void;
  setScore: (score: number) => void;
  moveLeft: () => void;
  moveRight: () => void;
  moveDown: () => void;
  rotate: () => void;
}

const useStore = create<TetrisState>((set) => ({
  // Define your initial state
  grid: Array(20).fill().map(() => Array(10).fill(null)),
  activeTetromino: null,
  score: 0,

  // Define your actions
  setGrid: (grid) => set({ grid }),
  setActiveTetromino: (tetromino) => set({ activeTetromino: tetromino }),
  setScore: (score) => set({ score }),

  // Define your game logic functions
  moveLeft: () => {
    set((state) => {
      // Implement the logic to move the active Tetromino left
      // Update the grid and activeTetromino accordingly
      return { ...state, /* updated state */ };
    });
  },
  moveRight: () => {
    set((state) => {
      // Implement the logic to move the active Tetromino right
      // Update the grid and activeTetromino accordingly
      return { ...state, /* updated state */ };
    });
  },
  moveDown: () => {
    set((state) => {
      // Implement the logic to move the active Tetromino down
      // Update the grid, activeTetromino, and score accordingly
      return { ...state, /* updated state */ };
    });
  },
  rotate: () => {
    set((state) => {
      // Implement the logic to rotate the active Tetromino
      // Update the grid and activeTetromino accordingly
      return { ...state, /* updated state */ };
    });
  },
  // Add more game logic functions as needed
}));

export default useStore;

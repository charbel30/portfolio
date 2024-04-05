// app/page.tsx
"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { MonitorScreen } from "../../../components/Monitor/ModernMonitor";
import { GameBoard } from "../../../components/Tetris/GameBoard";

const Page = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MonitorScreen>
          <GameBoard />
        </MonitorScreen>
        <Environment preset="city" />
        <OrbitControls />
      </Canvas>
    </div>
  );
};
export default Page;

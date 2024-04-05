// components/MonitorScreen.tsx
import React, { useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

interface MonitorScreenProps {
  children: React.ReactNode;
}

export const MonitorScreen: React.FC<MonitorScreenProps> = ({ children }) => {
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (screenRef.current) {
      screenRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      <Suspense fallback={null}>
        <MacProModel />
      </Suspense>
      <mesh ref={screenRef} position={[0, 0, 0.26]} rotation={[0, 0, 0]}>
        <planeGeometry args={[8, 4.5]} />
        <meshStandardMaterial emissive={"#ffffff"} side={THREE.DoubleSide}>
          {children}
        </meshStandardMaterial>
      </mesh>
      <pointLight position={[0, 0, 10]} intensity={1} />
      <pointLight position={[0, 0, -10]} intensity={1} />
      <pointLight position={[10, 0, 0]} intensity={1} />
      <pointLight position={[-10, 0, 0]} intensity={1} />
    </group>
  );
};

const MacProModel = () => {
  const { scene } = useGLTF("models/apple_macpro_low_poly/scene.gltf");

  return <primitive object={scene} scale={[2, 2, 2]} />;
};

useGLTF.preload("models/apple_macpro_low_poly/scene.gltf");

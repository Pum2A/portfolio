"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";

const Avatar = () => {
  return (
    <div className="w-64 h-64">
      <Canvas
        camera={{ position: [0, 1.5, 5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Realistyczne otoczenie dla lepszego oświetlenia */}
          <Environment preset="sunset" />

          {/* Oświetlenie */}
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 10, 7.5]} intensity={1} />

          {/* Głowa */}
          <mesh position={[0, 1.5, 0]}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshPhysicalMaterial
              color="#ffd8a8"
              roughness={0.7}
              metalness={0.2}
              clearcoat={0.1}
            />
          </mesh>

          {/* Tułów */}
          <mesh position={[0, -1, 0]}>
            <cylinderGeometry args={[0.8, 0.5, 2, 32]} />
            <meshPhysicalMaterial
              color="#4a90e2"
              roughness={0.5}
              metalness={0.3}
            />
          </mesh>

          {/* Oczy lewe */}
          <mesh position={[-0.3, 1.7, 0.9]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshPhysicalMaterial
              color="#ffffff"
              roughness={0.1}
              metalness={0.0}
            />
          </mesh>
          <mesh position={[-0.3, 1.7, 1.05]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshPhysicalMaterial
              color="#000000"
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>

          {/* Oczy prawe */}
          <mesh position={[0.3, 1.7, 0.9]}>
            <sphereGeometry args={[0.15, 32, 32]} />
            <meshPhysicalMaterial
              color="#ffffff"
              roughness={0.1}
              metalness={0.0}
            />
          </mesh>
          <mesh position={[0.3, 1.7, 1.05]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshPhysicalMaterial
              color="#000000"
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>

          {/* Okulary */}
          <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 1.7, 0.85]}>
            <torusGeometry args={[0.25, 0.02, 16, 100]} />
            <meshPhysicalMaterial
              color="#2c2c2c"
              metalness={0.8}
              roughness={0.2}
            />
          </mesh>

          {/* Nos */}
          <mesh position={[0, 1.5, 1]}>
            <coneGeometry args={[0.08, 0.2, 32]} />
            <meshPhysicalMaterial
              color="#e0ac69"
              roughness={0.6}
              metalness={0.1}
            />
          </mesh>

          {/* Usta */}
          <mesh position={[0, 1.35, 0.95]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.15, 0.02, 16, 100, Math.PI]} />
            <meshPhysicalMaterial
              color="#d94e5b"
              roughness={0.4}
              metalness={0.2}
            />
          </mesh>

          {/* Brwi */}
          <mesh position={[-0.3, 1.85, 0.88]} rotation={[0, 0, 0.2]}>
            <cylinderGeometry args={[0.01, 0.01, 0.3, 16]} />
            <meshPhysicalMaterial
              color="#2c2c2c"
              roughness={0.3}
              metalness={0.4}
            />
          </mesh>
          <mesh position={[0.3, 1.85, 0.88]} rotation={[0, 0, -0.2]}>
            <cylinderGeometry args={[0.01, 0.01, 0.3, 16]} />
            <meshPhysicalMaterial
              color="#2c2c2c"
              roughness={0.3}
              metalness={0.4}
            />
          </mesh>

          {/* Włosy */}
          <mesh position={[0, 1.65, 0]}>
            <sphereGeometry args={[1.05, 64, 64]} />
            <meshPhysicalMaterial
              color="#2c2c2c"
              roughness={0.5}
              metalness={0.2}
            />
          </mesh>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Avatar;

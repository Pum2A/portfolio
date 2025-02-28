// components/Avatar.tsx
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Cylinder, Torus } from "@react-three/drei";

const Avatar = () => {
  return (
    <div className="w-64 h-64">
      <Canvas camera={{ position: [2, 5.0 , 5], fov: 50 }} gl={{ antialias: true }}>
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        {/* Head */}
        <Sphere args={[1, 32, 32]} position={[0, 1.5, 0]}>
          <meshStandardMaterial color="#ffd8a8" />
        </Sphere>

        {/* Body */}
        <Cylinder args={[0.8, 0.5, 2, 8]} position={[0, -1, 0]}>
          <meshStandardMaterial color="#4a90e2" />
        </Cylinder>

        {/* Eyes */}
        <group position={[-0.3, 1.7, 0.9]}>
          <Sphere args={[0.15, 16, 16]}>
            <meshStandardMaterial color="#ffffff" />
          </Sphere>
          <Sphere args={[0.08, 16, 16]} position={[0, 0, 0.1]}>
            <meshStandardMaterial color="#000000" />
          </Sphere>
        </group>
        <group position={[0.3, 1.7, 0.9]}>
          <Sphere args={[0.15, 16, 16]}>
            <meshStandardMaterial color="#ffffff" />
          </Sphere>
          <Sphere args={[0.08, 16, 16]} position={[0, 0, 0.1]}>
            <meshStandardMaterial color="#000000" />
          </Sphere>
        </group>

        {/* Glasses */}
        <Torus args={[0.25, 0.02, 8, 32]} position={[0, 1.7, 0.85]}>
          <meshStandardMaterial color="#2c2c2c" />
        </Torus>

        {/* Nose */}
        <mesh position={[0, 1.5, 1]}>
          <coneGeometry args={[0.08, 0.2, 16]} />
          <meshStandardMaterial color="#e0ac69" />
        </mesh>

        {/* Mouth (Smiling Arc) */}
        <mesh position={[0, 1.35, 0.95]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.15, 0.02, 8, 20, Math.PI]} />
          <meshStandardMaterial color="#d94e5b" />
        </mesh>

        {/* Eyebrows */}
        <mesh position={[-0.3, 1.85, 0.88]} rotation={[0, 0, 0.2]}>
          <cylinderGeometry args={[0.01, 0.01, 0.3, 8]} />
          <meshStandardMaterial color="#2c2c2c" />
        </mesh>
        <mesh position={[0.3, 1.85, 0.88]} rotation={[0, 0, -0.2]}>
          <cylinderGeometry args={[0.01, 0.01, 0.3, 8]} />
          <meshStandardMaterial color="#2c2c2c" />
        </mesh>

        {/* Hair (Top Half-Sphere) */}
        <Sphere args={[1.05, 32, 32]} position={[0, 1.65, 0]} scale={[1, 0.5, 1]}>
          <meshStandardMaterial color="#2c2c2c" />
        </Sphere>

        <OrbitControls enableZoom={false} enablePan={false} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  );
};

export default Avatar;

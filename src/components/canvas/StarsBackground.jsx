import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const StarsBackground = () => (
  <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
    <Canvas>
      <Suspense fallback={null}>
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={0.5} />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsBackground;
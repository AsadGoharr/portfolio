import { useMemo, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { skillCategories } from "../constants";

const allSkills = [];
skillCategories.forEach(function(cat) {
  cat.skills.forEach(function(s) { allSkills.push(s); });
});

const SkillCloud = ({ skills }) => {
  const points = useMemo(() => {
    var pts = [];
    var n = skills.length;
    for (var i = 0; i < n; i++) {
      var phi = Math.acos(-1 + (2 * i) / n);
      var theta = Math.sqrt(n * Math.PI) * phi;
      pts.push([
        3.5 * Math.cos(theta) * Math.sin(phi),
        3.5 * Math.sin(theta) * Math.sin(phi),
        3.5 * Math.cos(phi),
      ]);
    }
    return pts;
  }, [skills]);

  return (
    <>
      <OrbitControls
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.8}
        enablePan={false}
      />
      <ambientLight intensity={0.5} />
      {skills.map((skill, i) => (
        <Html
          key={skill}
          position={points[i]}
          center
          distanceFactor={12}
          style={{ pointerEvents: "auto" }}
        >
          <div className="skill-cloud-tag">{skill}</div>
        </Html>
      ))}
    </>
  );
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">My toolkit</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Skills<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <div className="mt-8">
        <p className="text-gray-600 text-sm text-center mb-2">
          Drag to rotate &middot; Hover to highlight
        </p>
        <div className="w-full h-[380px] sm:h-[550px]">
          <Suspense fallback={
            <div className="w-full h-full flex items-center justify-center text-gray-600 text-sm">
              Loading 3D skills...
            </div>
          }>
            <Canvas
              camera={{ position: [0, 0, 8], fov: 55 }}
              gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
              dpr={[1, 1.5]}
              style={{ background: "transparent" }}
            >
              <SkillCloud skills={allSkills} />
            </Canvas>
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");

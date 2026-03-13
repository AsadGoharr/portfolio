                                                                                                                                                                                                          import { useEffect, useState, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperience from "./components/WorkExperience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./index.css";

// Lazy-load the heavy 3D sections
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-32 text-gray-700 text-sm">Loading…</div>
);

function App() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -350]);

  useEffect(() => {
    let rafId;
    let lastX = -500, lastY = -500;
    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          setMousePos({ x: lastX, y: lastY });
          rafId = null;
        });
      }
    };
    const handleScroll = () => {
      const st = document.documentElement.scrollTop;
      const sh = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(sh > 0 ? (st / sh) * 100 : 0);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="relative bg-primary min-h-screen">
      {/* Subtle animated background throughout */}
      <div className="fixed inset-0 z-0 opacity-[0.07] pointer-events-none">
        <MeshGradient
          className="w-full h-full"
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
          speed={0.4}
          backgroundColor="#000000"
        />
      </div>
      <div className="scroll-progress" style={{ width: scrollProgress + "%" }} />
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: mousePos.x, top: mousePos.y }}
      />
      <motion.div
        style={{ y: y1 }}
        className="fixed top-[20%] right-[15%] w-[500px] h-[500px] bg-violet/[0.04] rounded-full blur-[140px] pointer-events-none hidden lg:block"
      />
      <motion.div
        style={{ y: y2 }}
        className="fixed bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan/[0.03] rounded-full blur-[120px] pointer-events-none hidden lg:block"
      />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <WorkExperience />
      <Certifications />
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Projects />
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

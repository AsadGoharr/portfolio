                                                                                                                                                                                                          import { useEffect, useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));

const SectionFallback = () => (
  <div className="flex items-center justify-center py-32 text-gray-700 text-sm">Loading…</div>
);

function App() {
  const cursorRef = useRef(null);
  const progressRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -350]);

  useEffect(() => {
    let rafMove;
    let lastX = -500, lastY = -500;
    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rafMove) {
        rafMove = requestAnimationFrame(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate(${lastX - 250}px, ${lastY - 250}px)`;
          }
          rafMove = null;
        });
      }
    };
    let rafScroll;
    const onScroll = () => {
      if (!rafScroll) {
        rafScroll = requestAnimationFrame(() => {
          const st = document.documentElement.scrollTop;
          const sh = document.documentElement.scrollHeight - window.innerHeight;
          const pct = sh > 0 ? st / sh : 0;
          if (progressRef.current) {
            progressRef.current.style.transform = `scaleX(${pct})`;
          }
          rafScroll = null;
        });
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (rafMove) cancelAnimationFrame(rafMove);
      if (rafScroll) cancelAnimationFrame(rafScroll);
    };
  }, []);

  return (
    <div className="relative bg-primary min-h-screen">
      <div ref={progressRef} className="scroll-progress" />
      <div ref={cursorRef} className="cursor-glow hidden lg:block" />
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

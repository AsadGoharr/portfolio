import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";

const roles = [
  "Full-Stack Developer",
  "Cloud & Data Engineer",
  "SaaS Builder",
  "IT Student @ Ontario Tech",
];

const TypeWriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      setTimeout(() => setDeleting(true), 2000);
      return;
    }
    if (subIndex === 0 && deleting) {
      const t = setTimeout(() => {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 0);
      return () => clearTimeout(t);
    }
    const timeout = setTimeout(
      () => setSubIndex((prev) => prev + (deleting ? -1 : 1)),
      deleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting, words]);

  return (
    <span className="gradient-text font-semibold">
      {words[index].substring(0, subIndex)}
      <span className="text-violet animate-pulse">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-black">
      {/* Full-screen MeshGradient */}
      <MeshGradient
        className="w-full h-full absolute inset-0"
        colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
        speed={0.3}
        backgroundColor="#000000"
      />

      {/* Bottom gradient fade to site bg */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-2xl"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="section-tag mb-4"
          >
            Hello, I&apos;m
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black text-white mb-4 leading-none tracking-tight"
          >
            Asad<br />
            <span className="gradient-text">Gohar</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 h-10"
          >
            <TypeWriter words={roles} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed mb-10"
          >
            IT student at Ontario Tech University. Building SaaS products
            and exploring cloud infrastructure &amp; data systems. Based in Toronto.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#about"
              className="px-7 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all"
            >
              Explore My Work
            </a>
            <a
              href="https://github.com/AsadGoharr"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-xl border border-white/20 text-gray-300 font-semibold text-sm hover:border-white/40 hover:text-white transition-all"
            >
              GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border-2 border-white/20 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1 h-1.5 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

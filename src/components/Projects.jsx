import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const TiltCard = ({ children }) => {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rx = ((y - cy) / cy) * -5;
    const ry = ((x - cx) / cx) * 5;
    setStyle({
      transform: `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(1.01,1.01,1.01)`,
      transition: "transform 0.1s ease",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)",
      transition: "transform 0.4s ease",
    });
  };

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={style}>
      {children}
    </div>
  );
};

const Projects = () => {
  const p = projects[0];

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">What I&apos;ve built</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Projects<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 0.2, 0.75)} className="mt-12">
        <TiltCard>
          <div className="card-glass relative overflow-hidden">
            {/* Gradient accent bar */}
            <div className={"absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r " + p.gradient} />

            <div className="p-8 sm:p-10 lg:p-12">
              {/* Header */}
              <div className="flex items-start gap-5 mb-8">
                {/* Icon */}
                {p.icon && (
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-white/20 overflow-hidden flex items-center justify-center shadow-lg">
                    <img src={p.icon} alt={p.name} className="w-full h-full object-contain" />
                  </div>
                )}
                {/* Title block */}
                <div className="flex-1 min-w-0">
                  <div className="inline-block px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet text-xs font-medium mb-2">
                    Featured Project
                  </div>
                  <h3 className="text-white font-bold text-3xl sm:text-4xl leading-tight">{p.name}</h3>
                  <p className="text-cyan font-medium mt-1.5">{p.tagline}</p>
                </div>
                {/* Links */}
                <div className="flex items-center gap-2 flex-shrink-0 mt-1">
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black text-sm font-semibold hover:bg-gray-100 transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <span className="hidden sm:inline">Live</span>
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:text-white hover:border-white/30 hover:bg-white/10 transition-all"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                      </svg>
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed max-w-3xl mb-8">{p.description}</p>

              {/* Features in two columns */}
              {p.features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/50 mt-1.5 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-violet/10 border border-violet/20 text-violet"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Projects, "projects");

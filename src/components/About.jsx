import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Introduction</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          About Me<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      {/* Main hero row: photo left, bio right */}
      <div className="mt-12 flex flex-col lg:flex-row gap-8 items-center">
        {/* Photo with animated border */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="relative flex-shrink-0 group"
        >
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-violet via-cyan to-emerald opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-2 border-white/10">
            <img
              src="/asad.png"
              alt="Asad Gohar"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
          </div>
        </motion.div>

        {/* Bio text */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="flex-1"
        >
          <h3 className="text-white font-bold text-2xl mb-1">Asad Gohar</h3>
          <p className="text-cyan text-sm font-medium mb-5">IT Student &bull; Developer &bull; Toronto, Canada</p>
          <p className="text-gray-300 text-base leading-relaxed">
            I&apos;m an Information Technology student at Ontario Tech University specializing in
            Technology Management. I recently wrapped up an AI internship at{" "}
            <span className="text-violet font-medium">CAYOP</span> and currently drive data
            research at <span className="text-violet font-medium">The Canada List</span>.
          </p>
          <p className="text-gray-400 text-base leading-relaxed mt-4">
            I&apos;m also building <span className="text-cyan font-medium">Trace</span> &mdash; a SaaS
            Chrome extension that simulates realistic human typing. I love shipping real
            products and exploring the intersection of data, cloud, and modern web tech.
          </p>
        </motion.div>
      </div>

      {/* Bottom row: quick stats + connect */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Stats strip */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="md:col-span-2 card-glass p-6 flex items-center justify-around"
        >
          {[
            { n: "3rd", l: "Year" },
            { n: "10+", l: "Technologies" },
            { n: "1", l: "SaaS Product" },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-black gradient-text">{s.n}</p>
              <p className="text-gray-500 text-xs mt-1">{s.l}</p>
            </div>
          ))}
        </motion.div>

        {/* Connect buttons */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="md:col-span-3 card-glass p-6"
        >
          <h4 className="text-white font-semibold text-lg mb-4">Let&apos;s Connect</h4>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/asad-gohar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-400">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium text-white transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/AsadGoharr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-gray-300">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <span className="text-sm font-medium text-white transition-colors">GitHub</span>
            </a>
            <a
              href="mailto:asadgoharsg@gmail.com"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-violet/10 border border-violet/20 hover:border-violet/50 hover:bg-violet/20 transition-all group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5 text-violet">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span className="text-sm font-medium text-white group-hover:text-violet transition-colors">Email Me</span>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");

const fs = require('fs');
const path = require('path');
const BASE = 'c:/Users/asads/Downloads/portfolio';
function w(rel, content) {
  const full = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('OK: ' + rel);
}

// ===== ABOUT.JSX =====
w('src/components/About.jsx', `import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const stats = [
  { number: "3+", label: "Years Learning" },
  { number: "10+", label: "Technologies" },
  { number: "1",  label: "SaaS Product" },
];

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-5 h-5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
  </svg>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Introduction</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          About Me<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* --- PHOTO CARD --- */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="bento-card flex flex-col items-center justify-center py-8 gap-5"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet via-cyan to-emerald blur-md opacity-60 scale-110" />
            <div className="relative w-40 h-40 rounded-full overflow-hidden ring-2 ring-violet/40">
              <img
                src="/asad.jpg"
                alt="Asad Gohar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div
                style={{ display: "none" }}
                className="w-full h-full bg-gradient-to-br from-violet/30 to-cyan/30 items-center justify-center"
              >
                <span className="text-5xl font-black gradient-text">AG</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-white font-bold text-xl">Asad Gohar</h3>
            <p className="text-gray-400 text-sm mt-1">IT Student &amp; Developer</p>
            <div className="flex items-center justify-center gap-1.5 mt-2 text-gray-500 text-xs">
              <LocationIcon />
              <span>Toronto, Canada</span>
            </div>
          </div>
        </motion.div>

        {/* --- BIO CARD --- */}
        <motion.div
          variants={fadeIn("up", "spring", 0.3, 0.75)}
          className="bento-card lg:col-span-2 flex flex-col justify-between gap-6"
        >
          <div>
            <p className="text-gray-300 text-base leading-relaxed">
              I&apos;m an Information Technology student at Ontario Tech University
              passionate about building products that solve real problems. Currently
              interning as a Data &amp; Product Research Analyst at The Canada List,
              where I drive data-driven insights and market research.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mt-4">
              I&apos;m also building <span className="text-cyan font-medium">Trace</span> &mdash; a full-stack SaaS platform
              and Chrome extension that simulates realistic human typing. I love
              working across the full stack and exploring cloud infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-violet/10">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-3xl font-black gradient-text">{stat.number}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- CURRENT FOCUS --- */}
        <motion.div
          variants={fadeIn("up", "spring", 0.4, 0.75)}
          className="bento-card"
        >
          <div className="w-10 h-10 rounded-lg bg-violet/15 flex items-center justify-center mb-4">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet to-cyan" />
          </div>
          <h3 className="text-white font-semibold text-lg mb-2">Current Focus</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Cloud computing, data engineering, and building production-ready
            SaaS applications with modern web technologies.
          </p>
        </motion.div>

        {/* --- CONNECT CARD (bigger, with icons) --- */}
        <motion.div
          variants={fadeIn("up", "spring", 0.5, 0.75)}
          className="bento-card lg:col-span-2"
        >
          <h3 className="text-white font-semibold text-xl mb-5">Connect With Me</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <a
              href="https://www.linkedin.com/in/asad-gohar/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/25 hover:border-[#0077b5]/60 hover:bg-[#0077b5]/20 text-[#0077b5] transition-all group"
            >
              <LinkedInIcon />
              <span className="text-sm font-medium text-white group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
            </a>
            <a
              href="https://github.com/AsadGoharr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 text-gray-300 transition-all group"
            >
              <GitHubIcon />
              <span className="text-sm font-medium text-white transition-colors">GitHub</span>
            </a>
            <a
              href="mailto:asadgoharsg@gmail.com"
              className="flex items-center gap-3 p-4 rounded-xl bg-violet/10 border border-violet/20 hover:border-violet/50 hover:bg-violet/20 text-violet transition-all group"
            >
              <EmailIcon />
              <span className="text-sm font-medium text-white group-hover:text-violet transition-colors">Email Me</span>
            </a>
          </div>
          <p className="text-gray-600 text-xs mt-4">
            asadgoharsg@gmail.com &nbsp;&bull;&nbsp; 437-450-7854
          </p>
        </motion.div>

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
`);

// ===== CONTACT.JSX =====
w('src/components/Contact.jsx', `import { useState, useRef, Suspense } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const RotatingTorus = () => {
  const ref = useRef();
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
      ref.current.rotation.y += 0.008;
    }
  });
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1, 0.35, 128, 32]} />
        <meshStandardMaterial
          color="#7c3aed"
          wireframe
          emissive="#06b6d4"
          emissiveIntensity={0.15}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
  </svg>
);

const contactLinks = [
  {
    label: "Email",
    value: "asadgoharsg@gmail.com",
    href: "mailto:asadgoharsg@gmail.com",
    Icon: EmailIcon,
    color: "violet",
    bg: "bg-violet/10",
    border: "border-violet/20",
    hoverBorder: "hover:border-violet/50",
    hoverBg: "hover:bg-violet/20",
    textColor: "text-violet",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/asad-gohar",
    href: "https://www.linkedin.com/in/asad-gohar/",
    Icon: LinkedInIcon,
    color: "#0077b5",
    bg: "bg-[#0077b5]/10",
    border: "border-[#0077b5]/25",
    hoverBorder: "hover:border-[#0077b5]/60",
    hoverBg: "hover:bg-[#0077b5]/20",
    textColor: "text-[#0077b5]",
  },
  {
    label: "GitHub",
    value: "github.com/AsadGoharr",
    href: "https://github.com/AsadGoharr",
    Icon: GitHubIcon,
    color: "white",
    bg: "bg-white/5",
    border: "border-white/10",
    hoverBorder: "hover:border-white/30",
    hoverBg: "hover:bg-white/10",
    textColor: "text-gray-300",
  },
  {
    label: "Phone",
    value: "437-450-7854",
    href: "tel:+14374507854",
    Icon: PhoneIcon,
    color: "emerald",
    bg: "bg-emerald/10",
    border: "border-emerald/20",
    hoverBorder: "hover:border-emerald/50",
    hoverBg: "hover:bg-emerald/20",
    textColor: "text-emerald",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent("Portfolio Contact from " + form.name);
    const body = encodeURIComponent(
      "Name: " + form.name + "\\nEmail: " + form.email + "\\n\\nMessage:\\n" + form.message
    );
    window.location.href = "mailto:asadgoharsg@gmail.com?subject=" + subject + "&body=" + body;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Get in touch</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Contact<span className="gradient-text">.</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl">
          Have a project in mind, want to collaborate, or just want to say hello?
          Reach out through any of the channels below or fill out the form.
        </p>
      </motion.div>

      {/* Contact link cards */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
      >
        {contactLinks.map(({ label, value, href, Icon, bg, border, hoverBorder, hoverBg, textColor }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={\`flex flex-col gap-3 p-5 rounded-2xl \${bg} \${border} border \${hoverBorder} \${hoverBg} transition-all group cursor-pointer\`}
          >
            <div className={\`\${textColor} opacity-80 group-hover:opacity-100 transition-opacity\`}>
              <Icon />
            </div>
            <div>
              <p className="text-gray-500 text-xs font-medium uppercase tracking-wider">{label}</p>
              <p className="text-white text-sm font-medium mt-0.5 truncate">{value}</p>
            </div>
          </a>
        ))}
      </motion.div>

      {/* Form + 3D */}
      <div className="mt-10 flex flex-col lg:flex-row gap-8 items-stretch">
        <motion.div
          variants={fadeIn("right", "spring", 0.3, 0.75)}
          className="w-full lg:flex-1 card-glass p-6 sm:p-8"
        >
          <h3 className="text-white font-semibold text-lg mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full bg-primary/80 border border-violet/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-700 focus:outline-none focus:border-violet/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full bg-primary/80 border border-violet/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-700 focus:outline-none focus:border-violet/50 transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-xs font-medium uppercase tracking-wider block mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="What's on your mind?"
                className="w-full bg-primary/80 border border-violet/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-700 focus:outline-none focus:border-violet/50 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-violet to-cyan text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet/25 transition-all"
            >
              {sent ? "\\u2713 Message Sent!" : "Send Message \\u2192"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn("left", "spring", 0.4, 0.75)}
          className="hidden lg:block lg:w-80 xl:w-96 min-h-[450px]"
        >
          <Suspense fallback={null}>
            <Canvas
              camera={{ position: [0, 0, 4], fov: 55 }}
              gl={{ alpha: true, antialias: true }}
              style={{ background: "transparent" }}
            >
              <ambientLight intensity={0.3} />
              <pointLight position={[5, 5, 5]} intensity={0.8} color="#7c3aed" />
              <pointLight position={[-5, -5, 5]} intensity={0.4} color="#06b6d4" />
              <RotatingTorus />
            </Canvas>
          </Suspense>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
`);

console.log('Components written!');

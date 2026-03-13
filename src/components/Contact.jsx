import { useState, useRef, Suspense } from "react";
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
          color="#e0e0e0"
          wireframe
          emissive="#888888"
          emissiveIntensity={0.15}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  );
};

const contactLinks = [
  {
    label: "Email",
    value: "asadgoharsg@gmail.com",
    href: "mailto:asadgoharsg@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
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
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    bg: "bg-white/5",
    border: "border-white/10",
    hoverBorder: "hover:border-white/30",
    hoverBg: "hover:bg-white/10",
    textColor: "text-gray-300",
  },
  {
    label: "GitHub",
    value: "github.com/AsadGoharr",
    href: "https://github.com/AsadGoharr",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    bg: "bg-white/5",
    border: "border-white/10",
    hoverBorder: "hover:border-white/30",
    hoverBg: "hover:bg-white/10",
    textColor: "text-gray-300",
  },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://formsubmit.co/ajax/asadgoharsg@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: "Portfolio Contact from " + form.name,
          _replyto: form.email,
        }),
      });
      const data = await res.json();
      if (data.success === "true" || data.success === true) {
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSent(false), 4000);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
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
          Reach out through any channel below or drop me a message.
        </p>
      </motion.div>

      {/* Contact cards */}
      <motion.div
        variants={fadeIn("up", "spring", 0.2, 0.75)}
        className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
      >
        {contactLinks.map(({ label, value, href, icon, bg, border, hoverBorder, hoverBg, textColor }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`flex flex-col gap-3 p-5 rounded-2xl ${bg} ${border} border ${hoverBorder} ${hoverBg} transition-all group cursor-pointer`}
          >
            <div className={`${textColor} opacity-80 group-hover:opacity-100 transition-opacity`}>
              {icon}
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
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
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
                  className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors"
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
                className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-white/30 transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl bg-white text-black font-semibold text-sm hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? "Sending..." : sent ? "\u2713 Message Sent!" : "Send Message \u2192"}
            </button>
            {error && (
              <p className="text-red-400 text-xs text-center">
                Failed to send. Please email directly at asadgoharsg@gmail.com
              </p>
            )}
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
              <pointLight position={[5, 5, 5]} intensity={0.8} color="#ffffff" />
              <pointLight position={[-5, -5, 5]} intensity={0.4} color="#cccccc" />
              <RotatingTorus />
            </Canvas>
          </Suspense>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");

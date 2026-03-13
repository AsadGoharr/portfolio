import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const navLinks = [
  { id: "about", title: "About" },
  { id: "education", title: "Education" },
  { id: "work", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={
        "fixed top-0 w-full z-50 transition-all duration-500 " +
        (scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent")
      }
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          onClick={() => { setActive(""); window.scrollTo(0, 0); }}
          className="group flex items-center"
        >
          <span className="text-white font-bold text-lg tracking-tight transition-colors group-hover:text-violet">
            Asad Gohar
          </span>
        </a>

        <ul className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={"#" + link.id}
                onClick={() => setActive(link.title)}
                className={
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 " +
                  (active === link.title
                    ? "text-white bg-violet/15"
                    : "text-gray-400 hover:text-white hover:bg-white/5")
                }
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={"block h-0.5 w-6 bg-white transition-all duration-300 " + (menuOpen ? "rotate-45 translate-y-2" : "")} />
              <span className={"block h-0.5 w-6 bg-white transition-all duration-300 " + (menuOpen ? "opacity-0" : "")} />
              <span className={"block h-0.5 w-6 bg-white transition-all duration-300 " + (menuOpen ? "-rotate-45 -translate-y-2" : "")} />
            </div>
          </button>
      </div>

      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#030014]/95 backdrop-blur-xl border-t border-violet/10 px-6 py-4 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={"#" + link.id}
              onClick={() => { setActive(link.title); setMenuOpen(false); }}
              className="block py-3 text-gray-400 hover:text-white text-sm font-medium transition-colors"
            >
              {link.title}
            </a>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { experiences, volunteer } from "../constants";

const Logo = ({ item }) =>
  item.companyLogo ? (
    <img src={item.companyLogo} alt={item.company} className="w-full h-full object-cover" />
  ) : (
    <div
      className="w-full h-full flex items-center justify-center text-white text-xs font-bold"
      style={{ background: `linear-gradient(135deg, ${item.companyColor || "#555"}, #1a1a1a)` }}
    >
      {item.companyInitials}
    </div>
  );

// Stagger parent: children animate in sequence
const deckVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

/**
 * DisplayCards stack — centered layout.
 * place-items-center + symmetric translates:
 *   pos 0 (back)   -translate-x-14 -translate-y-10  → upper-left
 *   pos 1 (mid)    no translate                      → grid center
 *   pos 2 (front)  +translate-x-14 +translate-y-10  → lower-right
 *
 * Clicking front card expands it in-place (unskews, grows inline).
 * Clicking back/mid promotes to active front.
 */
const CardDeck = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const others = items.map((_, i) => i).filter((i) => i !== activeIdx).reverse();
  const renderOrder = [...others, activeIdx];

  return (
    <div className="space-y-6">
      <motion.div
        className={`w-full grid [grid-template-areas:'stack'] place-items-center overflow-visible ${!expanded ? 'h-[220px] sm:h-[280px]' : ''}`}
        variants={deckVariants}
        initial="hidden"
        animate="show"
      >
        {renderOrder.map((itemIdx, pos) => {
          const item = items[itemIdx];
          const isActive = itemIdx === activeIdx;
          const isExpanded = isActive && expanded;

          const posClass =
            pos === 0
              ? "-translate-x-6 -translate-y-4 sm:-translate-x-14 sm:-translate-y-10 hover:-translate-y-12 sm:hover:-translate-y-20 before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-black/70 before:transition-opacity before:duration-700 hover:before:opacity-0 grayscale hover:grayscale-0 cursor-pointer"
              : pos === 1
              ? "hover:-translate-y-3 before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-black/50 before:transition-opacity before:duration-700 hover:before:opacity-0 grayscale hover:grayscale-0 cursor-pointer"
              : isExpanded
              ? "cursor-pointer"
              : "translate-x-6 translate-y-4 sm:translate-x-14 sm:translate-y-10 cursor-pointer";

          const afterClass = !isExpanded
            ? "sm:after:absolute sm:after:-right-1 sm:after:top-[-5%] sm:after:h-[110%] sm:after:w-[18rem] sm:after:bg-gradient-to-l sm:after:from-black sm:after:to-transparent sm:after:content-['']"
            : "";

          return (
            <motion.div
              key={item.id}
              className="[grid-area:stack]"
              variants={cardVariants}
            >
              <div
                onClick={() => {
                  if (isActive) {
                    setExpanded((e) => !e);
                  } else {
                    setActiveIdx(itemIdx);
                    setExpanded(true);
                  }
                }}
                className={`relative select-none flex flex-col rounded-xl border border-white/15 bg-[#0d0d18] px-6 py-5 w-[22rem] max-w-[calc(100vw-3rem)] sm:max-w-none sm:w-[28rem] lg:w-[34rem] transition-transform duration-700 ${
                  isExpanded ? "" : "-skew-y-[8deg]"
                } ${afterClass} ${posClass}`}
              >
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 border border-white/10 bg-white/5">
                    <Logo item={item} />
                  </span>
                  <p className="text-white text-base font-bold leading-tight flex-1 truncate">
                    {item.title}
                  </p>
                  {isActive && (
                    <svg
                      className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                <p className="text-gray-300 text-sm truncate mt-3">{item.company}</p>
                <p className="text-gray-500 text-sm font-mono mt-1.5">{item.period}</p>

                {/* Expandable section */}
                <div
                  style={{
                    maxHeight: isExpanded ? "600px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.7s cubic-bezier(0.4,0,0.2,1)",
                  }}
                >
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35, delay: 0.25 }}
                        className="mt-4"
                      >
                        <div className="flex flex-wrap gap-2 mb-4">
                          {item.location && (
                            <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-0.5 rounded-full">
                              {item.location}
                            </span>
                          )}
                          {item.tech && (
                            <span className="text-xs text-gray-500 bg-white/5 border border-white/10 px-3 py-0.5 rounded-full">
                              {item.tech}
                            </span>
                          )}
                        </div>
                        <ul className="pt-4 border-t border-white/5 space-y-3 pb-2">
                          {item.points.map((pt, j) => (
                            <li
                              key={j}
                              className="text-gray-400 text-sm leading-relaxed flex items-start gap-3"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-white/30 mt-2 flex-shrink-0" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Dot nav */}
      <div className="flex items-center justify-center gap-2 pt-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setActiveIdx(i);
              setExpanded(false);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === activeIdx ? "w-5 bg-white" : "w-1.5 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const WorkExperience = () => {
  const [tab, setTab] = useState("experience");
  const data = tab === "experience" ? experiences : volunteer;

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Where I&apos;ve contributed</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Experience<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <div className="mt-8 inline-flex bg-[#0a0a12] border border-white/20 rounded-full p-1">
        {[
          ["experience", "Experience"],
          ["volunteer", "Volunteer & Leadership"],
        ].map(([t, label]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="relative px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
          >
            {tab === t && (
              <motion.div
                layoutId="work-pill"
                className="absolute inset-0 bg-white rounded-full"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span
              className={`relative z-10 transition-colors duration-150 ${
                tab === t ? "text-black" : "text-gray-400"
              }`}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3 }}
          className="mt-10"
        >
          <CardDeck items={data} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work");
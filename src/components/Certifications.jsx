import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { certifications, awards } from "../constants";

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 text-gray-400">
    <path strokeLinecap="round" strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const deckVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.94 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const AwardDeck = ({ items }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const others = items.map((_, i) => i).filter((i) => i !== activeIdx).reverse();
  const renderOrder = [...others, activeIdx];

  return (
    <div className="space-y-6">
      <motion.div
        className={`w-full grid [grid-template-areas:'stack'] place-items-center overflow-visible ${!expanded ? 'h-[260px] sm:h-[320px]' : ''}`}
        variants={deckVariants}
        initial="hidden"
        animate="show"
      >
        {renderOrder.map((itemIdx, pos) => {
          const item = items[itemIdx];
          const isActive = itemIdx === activeIdx;
          const isExpanded = isActive && expanded;

          // Same generous offsets as Experience deck, scaled for 4 cards
          const posClass =
            pos === 0
              ? "-translate-x-12 -translate-y-8 sm:-translate-x-20 sm:-translate-y-14 hover:-translate-y-16 sm:hover:-translate-y-24 before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-black/75 before:transition-opacity before:duration-700 hover:before:opacity-0 grayscale hover:grayscale-0 cursor-pointer"
              : pos === 1
              ? "-translate-x-4 -translate-y-3 sm:-translate-x-7 sm:-translate-y-5 hover:-translate-y-6 sm:hover:-translate-y-10 before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-black/55 before:transition-opacity before:duration-700 hover:before:opacity-0 grayscale hover:grayscale-0 cursor-pointer"
              : pos === 2
              ? "translate-x-4 translate-y-3 sm:translate-x-7 sm:translate-y-5 before:absolute before:inset-0 before:rounded-xl before:content-[''] before:bg-black/30 before:transition-opacity before:duration-700 hover:before:opacity-0 grayscale hover:grayscale-0 cursor-pointer"
              : isExpanded
              ? "cursor-pointer"
              : "translate-x-12 translate-y-8 sm:translate-x-20 sm:translate-y-14 cursor-pointer";

          const afterClass = !isExpanded
            ? "sm:after:absolute sm:after:-right-1 sm:after:top-[-5%] sm:after:h-[110%] sm:after:w-[16rem] sm:after:bg-gradient-to-l sm:after:from-black sm:after:to-transparent sm:after:content-['']"
            : "";

          return (
            <motion.div
              key={item.title}
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
                <div className="flex items-center gap-3">
                  <span className="relative inline-flex w-10 h-10 rounded-xl border border-white/10 bg-white/5 items-center justify-center flex-shrink-0">
                    <StarIcon />
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

                <div
                  style={{
                    maxHeight: isExpanded ? "400px" : "0",
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
                        className="mt-4 pt-4 border-t border-white/5 pb-2"
                      >
                        <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                        {item.badge && (
                          <a
                            href={item.badge}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-violet/10 border border-violet/20 text-violet text-xs font-medium hover:bg-violet/20 hover:border-violet/40 transition-all"
                          >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                            View Digital Badge
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

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

const Certifications = () => {
  const [tab, setTab] = useState("certs");

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Recognition &amp; learning</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Certifications<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <div className="mt-8 inline-flex bg-[#0a0a12] border border-white/20 rounded-full p-1">
        {[
          ["certs", "Certifications"],
          ["awards", "Awards & Scholarships"],
        ].map(([t, label]) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className="relative px-3 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-medium"
          >
            {tab === t && (
              <motion.div
                layoutId="cert-pill"
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
        {tab === "certs" ? (
          <motion.div
            key="certs"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mt-8 card-glass p-8 sm:p-12 text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-violet/20 to-cyan/20 flex items-center justify-center mx-auto mb-6">
              <div className="w-6 h-6 rounded-full bg-gradient-to-r from-violet to-cyan" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-3">In Progress</h3>
            <p className="text-gray-500 text-base max-w-md mx-auto leading-relaxed mb-8">
              Actively pursuing certifications in cloud computing and data analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-5 py-2.5 rounded-xl border border-violet/20 bg-violet/5 text-gray-300 text-sm font-medium hover:border-violet/40 hover:bg-violet/10 transition-all cursor-default"
                >
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="awards"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mt-10"
          >
            <AwardDeck items={awards} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
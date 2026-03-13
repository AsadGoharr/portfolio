import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { education } from "../constants";

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Academic background</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Education<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <div className="mt-12 relative">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-violet/50 via-cyan/30 to-transparent" />

        <div className="space-y-8">
          {education.map((item, i) => (
            <motion.div
              key={item.id}
              variants={fadeIn("right", "spring", i * 0.2, 0.75)}
              className="relative pl-16"
            >
              <div className="absolute left-[14px] top-8 w-[18px] h-[18px] rounded-full bg-gradient-to-r from-violet to-cyan ring-4 ring-violet/20" />

              <div className="card-glass p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-white font-bold text-xl">{item.degree}</h3>
                    {item.specialization && (
                      <p className="text-violet text-sm font-medium mt-0.5">
                        Specialization: {item.specialization}
                      </p>
                    )}
                    <p className="text-cyan font-medium text-sm mt-1">{item.school}</p>
                  </div>
                  <span className="text-xs font-mono text-violet bg-violet/10 px-3 py-1.5 rounded-full self-start">
                    {item.period}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{item.location}</p>
                <ul className="space-y-2">
                  {item.highlights.map((h, j) => (
                    <li key={j} className="text-gray-400 text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");

import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { skillCategories } from "../constants";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};

const tagVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">My toolkit</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Skills<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <div className="mt-12 space-y-8">
        {skillCategories.map((cat) => (
          <motion.div
            key={cat.category}
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-3 ml-1">
              {cat.category}
            </p>
            <div className="flex flex-wrap gap-2.5">
              {cat.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={tagVariants}
                  whileHover={{ scale: 1.1, borderColor: "rgba(255,255,255,0.4)" }}
                  className="skill-cloud-tag"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");

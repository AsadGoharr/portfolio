import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { skillCategories } from "../constants";

const allSkills = [];
skillCategories.forEach(function(cat) {
  cat.skills.forEach(function(s) { allSkills.push(s); });
});

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">My toolkit</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Skills<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {allSkills.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.02 }}
            className="skill-cloud-tag"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");

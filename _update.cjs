const fs = require('fs');
const path = require('path');
const BASE = 'c:/Users/asads/Downloads/portfolio';
function w(rel, content) {
  const full = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('  \u2713 ' + rel);
}

console.log('\n=== Writing all updates ===\n');

// ────────────────────────────────────────────
// 1. EDUCATION
// ────────────────────────────────────────────
w('src/constants/education.js', `export const education = [
  {
    id: 1,
    degree: "Bachelor of Information Technology",
    specialization: "Technology Management",
    school: "Ontario Tech University",
    location: "Oshawa, ON",
    period: "Sep 2024 \u2013 Present",
    highlights: [
      "Relevant Coursework: Data Structures & Algorithms, Discrete Mathematics, Business Analytics, Cloud Computing",
    ],
  },
];
`);

// ────────────────────────────────────────────
// 2. EXPERIENCE (3 work + 3 volunteer)
// ────────────────────────────────────────────
w('src/constants/experience.js', `export const experiences = [
  {
    id: 1,
    title: "Data & Product Research Analyst Intern",
    company: "The Canada List",
    companyInitials: "TCL",
    companyColor: "#c0392b",
    period: "2025 \u2013 Present",
    location: "Remote",
    points: [
      "Conducted data-driven product research to identify market trends and growth opportunities across Canadian industry verticals.",
      "Built and maintained analytical dashboards tracking key business metrics and performance indicators.",
      "Collaborated cross-functionally to deliver actionable insights driving product decisions and roadmap prioritization.",
      "Performed competitive analysis and compiled structured reports to inform go-to-market strategy.",
    ],
  },
  {
    id: 2,
    title: "AI & Data Systems Intern",
    company: "CAYOP: Canadian Youth Opportunities",
    companyInitials: "CY",
    companyColor: "#2980b9",
    period: "Dec 2025 \u2013 Present",
    location: "Remote",
    tech: "Bubble.io, Python, OpenAI API, JSON",
    points: [
      "Built and deployed an AI-powered opportunity-matching chatbot in Bubble.io using OpenAI, connecting real opportunity data to user queries through a retrieval-augmented (RAG) pipeline.",
      "Designed database-driven ranking and filtering logic (location, deadline, approval status, relevance scores) to deliver accurate, personalized matches.",
      "Implemented session-based memory, multi-turn conversations, and prompt controls to prevent hallucinations and ensure only valid opportunities are returned.",
      "Developed automated workflows, API integrations, and system documentation to support scalable deployment and ongoing maintenance.",
    ],
  },
  {
    id: 3,
    title: "Project Coordinator",
    company: "Ontario Tech University \u2013 Tech For Good",
    companyInitials: "OTU",
    companyColor: "#003c71",
    period: "July 2025 \u2013 Aug 2025",
    location: "Oshawa, ON",
    tech: "Excel, Word, Notion, AI",
    points: [
      "Conducted market research using AI-assisted tools to evaluate the integration of virtual reality (VR) in gym and fitness environments, focusing on user engagement, accessibility, and overall value.",
      "Analyzed how VR-based fitness solutions could enhance workout motivation, user experience, and inclusivity, supporting the feasibility of technology-driven wellness initiatives.",
      "Conducted testing with individuals and gathered feedback, used research findings to create clear insights and recommendations to steer project direction and shared with stakeholders.",
      "Collaborated with team members and faculty advisors to ensure research goals, testing methods, and outcomes were aligned.",
    ],
  },
];

export const volunteer = [
  {
    id: 1,
    title: "Next-Gen Student",
    company: "TELUS Health Advisory Group",
    companyInitials: "TH",
    companyColor: "#4b286d",
    period: "Sep 2025 \u2013 Present",
    location: "Remote",
    points: [
      "Provide ongoing feedback and strategic input on TELUS Health products, including mobile apps, websites, and digital services, to help improve usability, accessibility, and user experience.",
      "Complete structured surveys and feedback sessions to evaluate TELUS platforms, features, and communications from a student and user perspective.",
      "Participate in advisory discussions with other students to share insights on how TELUS can better support customers and users across its health and digital services.",
    ],
  },
  {
    id: 2,
    title: "Marketing Executive",
    company: "OTU Cloud Computing Association",
    companyInitials: "CCA",
    companyColor: "#1a73e8",
    period: "Sep 2024 \u2013 Present",
    location: "Oshawa, ON",
    points: [
      "Collaborated with a team of 6 executives, increasing event attendance by 25% compared to the previous year, by creating, promoting, and organizing 5+ campus and online events.",
    ],
  },
  {
    id: 3,
    title: "Management Executive",
    company: "OTU Hack Station",
    companyInitials: "HS",
    companyColor: "#e67e22",
    period: "Sep 2024 \u2013 Present",
    location: "Oshawa, ON",
    points: [
      "Managed and developed strategic plans for the club\u2019s present and future operations, ensuring smooth execution of activities and sustainability of initiatives, by organizing workflows and documentation using Notion and Microsoft Word.",
      "Overseen and maintained the club\u2019s budget, keeping expenses within limits and improving financial transparency by tracking and analyzing funds in Microsoft Excel.",
    ],
  },
];
`);

// ────────────────────────────────────────────
// 3. CERTIFICATIONS + AWARDS
// ────────────────────────────────────────────
w('src/constants/certifications.js', `export const certifications = [
  "AWS Cloud Practitioner",
  "Google Data Analytics",
  "Azure Fundamentals",
];

export const awards = [
  {
    title: "TELUS Student Bursary",
    detail: "Awarded $5,000 as 1 of 29 recipients selected from thousands of applicants",
  },
  {
    title: "Pathways to Education Scholarship",
    detail: "Awarded $1,850 in recognition of academic achievement",
  },
  {
    title: "Ontario Scholar",
    detail: "Granted by the Ontario Ministry of Education for achieving an average of 80%+ in the top six Grade 12 courses",
  },
];
`);

// ────────────────────────────────────────────
// 4. SKILLS (from resume, no Languages Spoken)
// ────────────────────────────────────────────
w('src/constants/skills.js', `export const skillCategories = [
  {
    category: "Programming & Web",
    skills: ["C++", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "Angular", "Bubble.io"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "Three.js", "Framer Motion", "Pandas", "NumPy"],
  },
  {
    category: "Data & Analytics",
    skills: ["SQL", "MS Office", "Google Sheets", "Tableau", "Power BI", "Excel"],
  },
  {
    category: "Cloud & APIs",
    skills: ["AWS", "Azure", "OpenAI API", "Docker", "Git", "GitHub", "CI/CD", "Linux", "Vercel", "Firebase"],
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "Figma", "Chrome Extensions API", "REST APIs", "Postman", "Notion"],
  },
];
`);

// ────────────────────────────────────────────
// 5. CONSTANTS INDEX (add volunteer + awards export)
// ────────────────────────────────────────────
w('src/constants/index.js', `export { education } from "./education";
export { experiences, volunteer } from "./experience";
export { certifications, awards } from "./certifications";
export { skillCategories } from "./skills";
export { projects } from "./projects";
`);

// ────────────────────────────────────────────
// 6. ABOUT.JSX (creative redesign, asad.png, no phone)
// ────────────────────────────────────────────
w('src/components/About.jsx', `import { motion } from "framer-motion";
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
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-violet via-cyan to-emerald opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-700" />
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-3xl overflow-hidden border-2 border-white/10">
            <img
              src="/asad.png"
              alt="Asad Gohar"
              className="w-full h-full object-cover"
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
            Technology Management. Currently, I intern at two organizations &mdash; building
            AI-powered chatbots at <span className="text-violet font-medium">CAYOP</span> and
            driving data research at <span className="text-violet font-medium">The Canada List</span>.
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
            { n: "3+", l: "Years Learning" },
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
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#0077b5]/10 border border-[#0077b5]/25 hover:border-[#0077b5]/60 hover:bg-[#0077b5]/20 transition-all group"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#0077b5]">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm font-medium text-white group-hover:text-[#0077b5] transition-colors">LinkedIn</span>
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
`);

// ────────────────────────────────────────────
// 7. EDUCATION.JSX (show specialization)
// ────────────────────────────────────────────
w('src/components/Education.jsx', `import { motion } from "framer-motion";
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
`);

// ────────────────────────────────────────────
// 8. WORK EXPERIENCE (tabs: Experience / Volunteer)
// ────────────────────────────────────────────
w('src/components/WorkExperience.jsx', `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { experiences, volunteer } from "../constants";

const tabs = [
  { key: "experience", label: "Experience" },
  { key: "volunteer", label: "Volunteer & Leadership" },
];

const ExperienceCard = ({ exp, i }) => (
  <motion.div
    key={exp.id}
    variants={fadeIn("up", "spring", i * 0.15, 0.75)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.1 }}
    className="card-glass p-6 sm:p-8 group"
  >
    <div className="flex flex-col sm:flex-row sm:items-start gap-6">
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-3"
        style={{ background: "linear-gradient(135deg, " + (exp.companyColor || "#7c3aed") + ", #06b6d4)" }}
      >
        {exp.companyInitials}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-1">
          <div>
            <h3 className="text-white font-bold text-xl">{exp.title}</h3>
            <p className="text-cyan font-medium text-sm mt-1">{exp.company}</p>
          </div>
          <span className="text-xs font-mono text-violet bg-violet/10 px-3 py-1.5 rounded-full self-start whitespace-nowrap">
            {exp.period}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-4">
          {exp.location && <span className="text-gray-600 text-xs">{exp.location}</span>}
          {exp.tech && <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded">{exp.tech}</span>}
        </div>
        <ul className="space-y-3">
          {exp.points.map((p, j) => (
            <li key={j} className="text-gray-400 text-sm leading-relaxed flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet to-cyan mt-1.5 flex-shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const WorkExperience = () => {
  const [active, setActive] = useState("experience");
  const data = active === "experience" ? experiences : volunteer;

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Where I&apos;ve contributed</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Experience<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="mt-8 flex gap-2">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all " +
              (active === t.key
                ? "bg-gradient-to-r from-violet to-cyan text-white shadow-lg shadow-violet/20"
                : "bg-white/5 text-gray-400 border border-white/10 hover:border-violet/30 hover:text-white")
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mt-8 space-y-6"
        >
          {data.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} i={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(WorkExperience, "work");
`);

// ────────────────────────────────────────────
// 9. CERTIFICATIONS (tabs: Certifications / Awards)
// ────────────────────────────────────────────
w('src/components/Certifications.jsx', `import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { certifications, awards } from "../constants";

const tabList = [
  { key: "certs", label: "Certifications" },
  { key: "awards", label: "Awards & Scholarships" },
];

const Certifications = () => {
  const [active, setActive] = useState("certs");

  return (
    <>
      <motion.div variants={textVariant(0.1)}>
        <p className="section-tag">Recognition & learning</p>
        <h2 className="text-white font-black text-5xl sm:text-6xl mt-2">
          Certifications<span className="gradient-text">.</span>
        </h2>
      </motion.div>

      {/* Tabs */}
      <div className="mt-8 flex gap-2">
        {tabList.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all " +
              (active === t.key
                ? "bg-gradient-to-r from-violet to-cyan text-white shadow-lg shadow-violet/20"
                : "bg-white/5 text-gray-400 border border-white/10 hover:border-violet/30 hover:text-white")
            }
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active === "certs" ? (
          <motion.div
            key="certs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8"
          >
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 0.75)}
              className="card-glass p-8 sm:p-12 text-center"
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
          </motion.div>
        ) : (
          <motion.div
            key="awards"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 space-y-5"
          >
            {awards.map((a, i) => (
              <motion.div
                key={a.title}
                variants={fadeIn("up", "spring", i * 0.15, 0.75)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="card-glass p-6 sm:p-8 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald/20 to-cyan/20 flex items-center justify-center flex-shrink-0">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-6 h-6 text-emerald">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">{a.title}</h3>
                  <p className="text-gray-400 text-sm mt-1 leading-relaxed">{a.detail}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
`);

// ────────────────────────────────────────────
// 10. PROJECTS (single project, full-width showcase)
// ────────────────────────────────────────────
w('src/components/Projects.jsx', `import { useRef, useState } from "react";
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
      transform: \`perspective(1200px) rotateX(\${rx}deg) rotateY(\${ry}deg) scale3d(1.01,1.01,1.01)\`,
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
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-violet/10 border border-violet/20 text-violet text-xs font-medium mb-3">
                    Featured Project
                  </div>
                  <h3 className="text-white font-bold text-3xl sm:text-4xl">{p.name}</h3>
                  <p className="text-cyan font-medium mt-2">{p.tagline}</p>
                </div>
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-violet/40 transition-all flex-shrink-0"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed max-w-3xl mb-8">{p.description}</p>

              {/* Features in two columns */}
              {p.features && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-8">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-violet to-cyan mt-1.5 flex-shrink-0" />
                      {f}
                    </div>
                  ))}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-violet/10">
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
`);

// ────────────────────────────────────────────
// 11. CONTACT 
// ────────────────────────────────────────────
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
            className={\`flex flex-col gap-3 p-5 rounded-2xl \${bg} \${border} border \${hoverBorder} \${hoverBg} transition-all group cursor-pointer\`}
          >
            <div className={\`\${textColor} opacity-80 group-hover:opacity-100 transition-opacity\`}>
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

// ────────────────────────────────────────────
// 12. FOOTER 
// ────────────────────────────────────────────
w('src/components/Footer.jsx', `const Footer = () => (
  <footer className="border-t border-violet/10 py-8 px-6">
    <div className="max-w-6xl mx-auto flex items-center justify-center">
      <p className="text-gray-600 text-sm">
        &copy; 2026 Asad Gohar
      </p>
    </div>
  </footer>
);

export default Footer;
`);

console.log('\n=== All files written! ===');

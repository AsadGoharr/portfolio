const fs = require('fs');
const path = require('path');
const BASE = 'c:/Users/asads/Downloads/portfolio';
function w(rel, content) {
  const full = path.join(BASE, rel);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  fs.writeFileSync(full, content, 'utf8');
  console.log('OK: ' + rel);
}

// ===== ALL EXPERIENCES FROM RESUME =====
w('src/constants/experience.js', `export const experiences = [
  {
    id: 1,
    title: "Data & Product Research Analyst Intern",
    company: "The Canada List",
    companyInitials: "TCL",
    companyColor: "#c0392b",
    period: "2025 \u2013 Present",
    points: [
      "Conducted data-driven product research to identify market trends and growth opportunities across Canadian industry verticals.",
      "Built and maintained analytical dashboards tracking key business metrics and performance indicators.",
      "Collaborated cross-functionally to deliver actionable insights driving product decisions and roadmap prioritization.",
      "Performed competitive analysis and compiled structured reports to inform go-to-market strategy.",
    ],
  },
  {
    id: 2,
    title: "Retail Associate",
    company: "Winners",
    companyInitials: "W",
    companyColor: "#d35400",
    period: "Jan 2023 \u2013 Sept 2023",
    points: [
      "Provided exceptional customer service addressing inquiries regarding merchandise, pricing, promotions, and store policies.",
      "Managed daily shipments, organized the warehouse, and maintained consistent presentation standards.",
      "Processed refunds, exchanges, and purchases according to company guidelines ensuring customer satisfaction.",
    ],
  },
  {
    id: 3,
    title: "Team Member",
    company: "Chick-fil-A",
    companyInitials: "CFA",
    companyColor: "#c8102e",
    period: "Sept 2022 \u2013 Dec 2022",
    points: [
      "Oversaw diverse stations ensuring optimal coverage to meet production goals while maintaining a clean work environment.",
      "Managed inventory, cash handling, and merchandise while fostering clear communication among team members.",
      "Prepared and distributed ingredients, beverages, and food as per recipes, ensuring consistent quality.",
    ],
  },
  {
    id: 4,
    title: "Volunteer",
    company: "City of Toronto",
    companyInitials: "TO",
    companyColor: "#1a5276",
    period: "May 2022 \u2013 Aug 2022",
    points: [
      "Directed traffic, managed parking logistics, and assisted event attendees for optimal event flow.",
      "Organized raffle ticket sales to support event fundraising efforts.",
      "Collaborated with Park Staff handling traffic guidance and presented door-to-door outreach.",
    ],
  },
  {
    id: 5,
    title: "Tech Support Volunteer",
    company: "Catholic Cross-Cultural Services",
    companyInitials: "CCS",
    companyColor: "#1e8449",
    period: "Jan 2022 \u2013 Dec 2022",
    points: [
      "Assisted seniors with web browsing, social media, and tools like Microsoft Word and PowerPoint.",
      "Prepared meals based on dietary guidelines and individual restrictions.",
      "Supported Settlement Workers with a wide variety of administrative tasks.",
    ],
  },
  {
    id: 6,
    title: "Sales Associate",
    company: "Roots",
    companyInitials: "R",
    companyColor: "#5d2e1f",
    period: "Jan 2022 \u2013 June 2022",
    points: [
      "Executed POS transactions and merchandising tasks including receiving shipments and replenishing inventory.",
      "Maintained a customer-first attitude, building loyalty and resolving issues effectively at store level.",
    ],
  },
];
`);

// ===== EXPANDED SKILLS =====
w('src/constants/skills.js', `export const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS", "Bash", "Java"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Node.js", "Express", "Tailwind CSS", "Pandas", "NumPy", "Flask", "Three.js", "Framer Motion"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Google Cloud", "Azure", "Docker", "Git", "GitHub", "CI/CD", "Linux", "Vercel"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "SQLite", "Supabase"],
  },
  {
    category: "Tools & Platforms",
    skills: ["VS Code", "Figma", "Chrome Extensions API", "REST APIs", "Postman", "Microsoft Office", "Power BI", "Tableau"],
  },
  {
    category: "Languages Spoken",
    skills: ["English", "Urdu", "Hindi", "Punjabi"],
  },
];
`);

console.log('Data files written!');

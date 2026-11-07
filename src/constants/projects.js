export const projects = [
  {
    id: 1,
    name: "Trace",
    tagline: "Paste your text. Set your speed. Let Trace do the typing.",
    description:
      "A Chrome extension and web dashboard that types text you have already written into web editors, one keystroke at a time, at a speed you choose. Built for editors that block or mangle paste. Live on the Chrome Web Store.",
    tags: ["React", "TypeScript", "Chrome Extension", "Supabase", "Stripe"],
    icon: "/logo.png",
    github: "https://github.com/AsadGoharr/Trace",
    live: "https://tracetype.me/",
    gradient: "from-white/20 to-white/5",
    features: [
      "Manifest V3 extension with pause, resume and recovery, plus a React dashboard with auth, history and a leaderboard",
      "Supabase (Postgres, Auth, edge functions) and Stripe subscriptions, with a free plan and a Pro plan",
      "GitHub Actions CI and 1,800+ automated tests; analytics are opt-in and never include draft text",
    ],
  },
];

# Portfolio

My personal portfolio site: projects, experience, education and skills, with a 3D hero and animated sections.

**Live:** https://asadgohar-portfolio.vercel.app

## Stack

- React 19 and Vite 7
- Tailwind CSS 3
- Framer Motion for section animation
- Three.js with React Three Fiber and Drei for the 3D scenes
- Deployed on Vercel, with Vercel Analytics

## Run it locally

```bash
npm install
npm run dev
```

The dev server prints the local URL. Other scripts:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build
npm run lint      # ESLint
```

## Structure

```
src/
├── components/   # Hero, About, Projects, Skills, WorkExperience, Education, Contact...
├── constants/    # Site content as data: projects, experience, skills, education
├── hoc/          # Section wrapper with scroll-in animation
└── styles/
public/           # Images, 3D models, favicon, social preview
```

To change what the site says, edit the files in `src/constants/`.

# Portfolio Website

This is a personal portfolio website showcasing my skills, education, work experience, projects, and contact information. The website is built using React and includes interactive features and 3D animations to enhance user experience.

## Project Structure

The project is organized as follows:

```
portfolio
├── public
│   ├── index.html          # Main HTML file
│   └── models              # Directory for 3D models
├── src
│   ├── main.jsx            # Entry point for the React application
│   ├── App.jsx             # Main application component
│   ├── styles              # Directory for styles
│   │   ├── global.css      # Global styles
│   │   └── variables.css    # CSS variables for theming
│   ├── components          # Directory for React components
│   │   ├── Navbar.jsx      # Navigation bar component
│   │   ├── Hero.jsx        # Hero section component
│   │   ├── About.jsx       # About me section component
│   │   ├── Education.jsx   # Education section component
│   │   ├── WorkExperience.jsx # Work experience section component
│   │   ├── Certifications.jsx # Certifications section component
│   │   ├── Skills.jsx      # Skills section component
│   │   ├── Projects.jsx    # Projects section component
│   │   ├── Contact.jsx     # Contact section component
│   │   ├── Footer.jsx      # Footer component
│   │   └── canvas          # Directory for 3D canvas components
│   │       ├── Scene.jsx   # 3D scene management
│   │       ├── HeroModel.jsx # 3D model for the hero section
│   │       ├── ContactGlobe.jsx # 3D globe for contact section
│   │       └── StarsBackground.jsx # Starry background for the scene
│   ├── constants           # Directory for constants
│   │   ├── index.js        # General constants
│   │   ├── education.js    # Educational data
│   │   ├── experience.js    # Work experience data
│   │   ├── certifications.js # Certification data
│   │   ├── skills.js       # Skills data
│   │   └── projects.js     # Project data
│   ├── hoc                 # Higher-order components
│   │   ├── index.js        # Exports for HOCs
│   │   └── SectionWrapper.jsx # Wrapper for sections
│   ├── utils               # Utility functions
│   │   ├── motion.js       # Animation utilities
│   │   └── three-helpers.js # 3D model helpers
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── .gitignore              # Git ignore file
├── .env.example            # Example environment variables
└── README.md               # Project documentation
```

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio.git
   ```

2. Navigate to the project directory:
   ```
   cd portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```

5. Open your browser and go to `http://localhost:3000` to view the portfolio.

## Features

- Interactive sections with smooth animations.
- 3D models and animations integrated into the hero and contact sections.
- Responsive design for optimal viewing on various devices.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Acknowledgments

- Inspired by various portfolio designs and web development resources.
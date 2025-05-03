import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import sprandomizerImg from "@/public/sprandomizer.jpeg";
import portfoliositeImg from "@/public/portfoliositescreenshot.png";
import facemaskappImg from '@/public/facemaskappgif.gif'
import yofhldbImg from '@/public/yofhldbscreenshot.png'


export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Current Projects",
        hash: "#current_projects",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Enrolled in Computer Science @ Carleton University",
        location: "Ottawa, ON",
        description:
            "I enrolled in Carleton University's computer science program in the Software Engineering stream. I was admitted with 3rd year standing and anticipate a graduation date in early 2026. GPA: 11.45/12.0",
        icon: React.createElement(LuGraduationCap),
        date: "2024 - Present",
    },
] as const;

export const projectsData = [
    {
        title: "Fantasy Hockey Database App",
        slug: "yofhl-db",
        description: "This is a Next.js app that allows users to make requests to a PostgreSQL database and view historical league data for a fantasy hockey league. I built the database myself and imported the fantasy stats with Python/Pandas. The website uses dynamic URLs to fetch appropriate data from the database.",
        tags: ["TypeScript", "React", "Next.js", "SQL", "PostgreSQL", "Prisma", "Tailwind"],
        imageUrl: yofhldbImg,
        demoLink: 'https://yofhl-db.vercel.app',
        githubLink: 'https://github.com/DBordeleau/yofhl_db',
        githubOwner: 'DBordeleau',
        features: [
            "Dynamic URL routing to fetch data from the database",
            "Ability to view historical player, team and league data in formats and contexts that are impossible with our native fantasy hockey platform.",
            "Custom pagination logic to improve performance and user experience",
            "Responsive design with mobile navigation",
            "Smooth animations that provide a polished user experience",
        ],
        learningOutcomes: [
            "Deployed a PostgreSQL database with web access",
            "Designed and populated a relational schema from scratch",
            "Automated CSV ingestion using Python and Pandas",
            "Queried and managed data using Prisma ORM within a Next.js application",
            "Implemented dynamic routing in Next.js to fetch and display context-specific data from the database, enabling users to view historical stats in a way that is impossible with our native fantasy hockey platform.",
            "Built custom pagination logic with React hooks to improve performance and user experience"
        ]
    },
    {
        title: "South Park Randomizer",
        slug: "south-park-randomizer",
        description:
            "This is a web app that fetches random South Park episodes via the OMDB API. I built it using React, Tailwind and Express. The website features a dark mode toggle and the ability to filter out already seen episodes. The seen episode list has some entry and exit animations I wrote using framer motion.",
        tags: ["TypeScript", "Express.js", "Tailwind", "React", "Framer Motion"],
        imageUrl: sprandomizerImg,
        demoLink: 'https://southparkrandomizer.com/',
        githubLink: 'https://github.com/DBordeleau/south-park-randomizer-react',
        githubOwner: 'DBordeleau',
        features: [
            "Generates random South Park episodes by making requests to the OMDB API.",
            "Users can mark episodes as already seen to filter them out of generation.",
            "Tailwind CSS styling and framer motion animations provide a smooth user experience.",
        ],
        learningOutcomes: [
            "Made REST API requests in a React app to fetch data from the OMDB API.",
            "Implemented a custom dark mode theme using Tailwind CSS themeing.",
            "Made a responsive UI using Tailwind CSS"
        ]
    },
    {
        title: "Face Mask Detection AI",
        slug: "face-mask-detection",
        description: "This is a two phase project I'm working on where I trained an AI to detect whether or not someone is wearing a face mask using a convolutional neural network. After training the model I built a simple API using Flask that allows the model to be deployed to the web to receive requests. The project includes a simple front-end where users can upload images for the model to make predictions about. Please note the live demo may take some time to respond as a limitation of the free hosting.",
        tags: ["Python", "PyTorch", "Flask", "JavaScript"],
        imageUrl: facemaskappImg,
        demoLink: 'https://face-mask-detection-qzwb.onrender.com/',
        githubLink: 'https://github.com/DBordeleau/face-mask-detection',
        githubOwner: 'DBordeleau',
        features: [
            "CNN image classification model I trained using PyTorch.",
            "Flask web interface that allows users to upload images and request predictions from the model.",
        ],
        learningOutcomes: [
            "Trained a convolutional neural network on a Kaggle dataset (already cleaned). My training process involved data augmentation, hyperparameter tuning and model evaluation.",
            "Built and deployed a Flask app that allows users to upload images for the model to make predictions about.",
        ]
    },
    {
        title: "Portfolio Website",
        slug: "portfolio-website",
        description:
            "This is a Next.js app I made to host my portfolio projects and help me connect with recruiters for internship opportunities. The website is a single page composed of react components I wrote and styled with Tailwind. Framer is used to animate components. You are viewing the live demo right now.",
        tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer Motion"],
        imageUrl: portfoliositeImg,
        demoLink: '',
        githubLink: 'https://github.com/DBordeleau/portfolio-website',
        githubOwner: 'DBordeleau',
        features: [
            "Single page layout with smooth scrolling and navigation.",
            "Header with animated highlighter to indicate active section.",
            "Smooth animations and juicy interactions built with a combination of framer motion and Tailwind CSS.",
            "Responsive design that looks nice on all displays.",
            "Contact form with SMTP integration through Resend.",
            "Easter eggs!"
        ],
        learningOutcomes: [
            "Built a responsive and visually appealing portfolio website using Next.js and styled it with Tailwind CSS and framer motion.",
            "Designed and implemented a header with active section highlighting using React hooks. Also implemented a debounce to prevent erratic highlighter behaviour.",
            "Configured a SMTP server using Resend to send emails to my personal email from the contact form.",
        ]
    },
    /*
    {
        title: "Blog/Social Media Clone",
        description: "This is a Node.js app I made using React and Tailwind CSS. The site features account registration, login authentication, and has the ability for users to make posts and attach images to them."
        tags: ["TypeScript", "React", "Node.js", "Tailwind", "Framer Motion", "SQL", "HTML", "Git"],
        imageUrl: datawebsiteImg,
        demoLink: '',
        githubLink: '',
    },
    {
        title: "Dilbo-ui & Demo Site",
        description: "This is a UI component library I built using React, Tailwind and Storybook. I published it publically on npm and you can import it yourself by running npm i dilbo-ui and then @import '@DBordeleau/components'. You can visit the live demo to access a Node.js where you can see all the components I've made."
        tags: ["React", "Tailwind", "Storybook", "Node.js"],
        imageUrl: datawebsiteImg,
        demoLink: '',
        githubLink: '',
    },
    */

] as const;

export const skillsData = [
    { name: "Python", icon: "FaPython" },
    { name: "Pandas", icon: "SiPandas" },
    { name: "Flask", icon: "SiFlask" },
    { name: "PyTorch", icon: "SiPytorch" },
    { name: "React", icon: "FaReact" },
    { name: "JavaScript", icon: "SiJavascript" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "Next.js", icon: "RiNextjsLine" },
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "SQL", icon: "FaDatabase" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Prisma", icon: "SiPrisma" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "Git", icon: "FaGitAlt" },
    { name: "Tailwind", icon: "RiTailwindCssFill" },
    { name: "Framer", icon: "FiFramer" },
    { name: "Java", icon: "FaJava" },
    { name: "Kotlin", icon: "SiKotlin" },
] as const;
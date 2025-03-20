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
        description: "This is a Next.js app that allows users to make requests to a PostgreSQL database and view historical league data for a fantasy hockey league. I built the database myself and imported the fantasy stats with Python/Pandas. The website uses dynamic URLs to fetch appropriate data from the database.",
        tags: ["TypeScript", "React", "Next.js", "SQL", "PostgreSQL", "Prisma", "Tailwind"],
        imageUrl: yofhldbImg,
        demoLink: 'https://yofhl-db.vercel.app',
        githubLink: 'https://github.com/DBordeleau/yofhl_db',
    },
    {
        title: "South Park Randomizer",
        description:
            "This is a web app that fetches random South Park episodes via the OMDB API. I built it using React, Tailwind and Express. The website features a dark mode toggle and the ability to filter out already seen episodes. The seen episode list has some entry and exit animations I wrote using framer motion.",
        tags: ["TypeScript", "Express.js", "Tailwind", "React", "Framer Motion"],
        imageUrl: sprandomizerImg,
        demoLink: 'https://southparkrandomizer.com/',
        githubLink: 'https://github.com/DBordeleau/south-park-randomizer-react',
    },
    {
        title: "Face Mask Detection AI",
        description: "This is a two phase project I'm working on where I trained an AI to detect whether or not someone is wearing a face mask using a convolutional neural network. After training the model I built a simple API using Flask that allows the model to be deployed to the web to receive requests. The project includes a simple front-end where users can upload images for the model to make predictions about. Please note the live demo may take some time to respond as a limitation of the free hosting.",
        tags: ["Python", "PyTorch", "Flask", "JavaScript"],
        imageUrl: facemaskappImg,
        demoLink: 'https://face-mask-detection-qzwb.onrender.com/',
        githubLink: 'https://github.com/DBordeleau/face-mask-detection',
    },
    {
        title: "Portfolio Website",
        description:
            "This is a Next.js app I made to host my portfolio projects and help me connect with recruiters for internship opportunities. The website is a single page composed of react components I wrote and styled with Tailwind. Framer is used to animate components. You are viewing the live demo right now.",
        tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer Motion"],
        imageUrl: portfoliositeImg,
        demoLink: '',
        githubLink: 'https://github.com/DBordeleau/portfolio-website',
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
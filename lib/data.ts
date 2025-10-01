import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import sprandomizerImg from "@/public/sprandomizer.jpeg";
import portfoliositeImg from "@/public/portfoliositescreenshot.png";
import facemaskappImg from '@/public/facemaskappgif.gif'
import yofhldbImg from '@/public/yofhldbscreenshot.png'
import draftlotteryImg from '@/public/DraftLotteryPreview.gif'
import autograderImg from '@/public/autograder.gif'

type Project = {
    title: string;
    slug: string;
    description: string;
    tags: readonly string[];
    imageUrl: any;
    demoLink?: string;
    githubLink?: string;
    githubOwner?: string;
    features?: string[];
    learningOutcomes?: string[];
    winDownloadLinkZip?: string;
    winDownloadLinkExe?: string;
};

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

export const projectsData: readonly Project[] = [
    {
        title: "C++ Autograding Server",
        slug: "cpp-autograding-server",
        description:
            "Submission server for C++ programming assignments that compiles and runs user-defined tests on C++ projects in isolated Docker containers. Autograding is based on user-defined expected output and results are stored in a SQLite database. Students submit their projects via a web interface. The web interface features an admin panel that supports CRUD operations for managing assignments, tests and autograders.",
        tags: ["C++", "Python", "FastAPI", "SQLite", "Docker"],
        imageUrl: autograderImg,
        demoLink: '',
        githubLink: 'https://github.com/DBordeleau/cpp_autograder',
        githubOwner: 'DBordeleau',
        features: [
            "Automatic grading for C++ programming assignments.",
            "Supports multiple assignments, each with their own set of tests and autograders.",
            "Isolated grading environment using Docker containers to ensure security and consistency.",
            "Admin panel for managing assignments, tests and autograders.",
            "Text based configuration file for fast/batch setup of assignments, tests and autograders.",
            "Persistent storage of submission results using SQLite.",
            "Simple authentication using JWT tokens.",
        ],
        learningOutcomes: [
            "Built a core autograder in C++ that can compile and run C++ projects with user defined inputs and capture + parse their outputs. The autograder was designed using object-oriented principles to be easily extensible for future features.",
            "Built a REST API using Python and FastAPI to handle file uploads, manage assignments/tests/autograders and store submission results in a SQLite database.",
            "Containerized the autograding process using Docker to ensure each submission is compiled and graded in an isolated environment. This involved writing custom Dockerfiles and managing container lifecycles from Python.",
            "Wrote user-facing documentation to help users understand how to use the system and set up their own assignments/tests/autograders."
        ]
    },
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
            "Designed and populated a relational schema from scratch",
            "Automated CSV ingestion using Python and Pandas",
            "Deployed a PostgreSQL database to Neon and integrated it with a Next.js app using Prisma ORM",
            "Implemented dynamic routing in Next.js to fetch and display context-specific data from the database, enabling users to view historical stats in a way that is impossible with our native fantasy hockey platform.",
            "Built custom pagination logic with React hooks to improve performance and user experience"
        ]
    },
    {
        title: "Draft Lottery Simulator",
        slug: "draft-lottery-simulator",
        description:
            "This is a Qt widget application made with C++ that simulates a draft lottery for a fantasy hockey league. The GitHub repo also contains an Inno Setup script I wrote to create an installer for the application.",
        tags: ["C++", "Qt", "Inno Setup"],
        imageUrl: draftlotteryImg,
        demoLink: '',
        winDownloadLinkZip: 'http://yofhl-db.vercel.app/draftlottery.zip',
        winDownloadLinkExe: 'http://yofhl-db.vercel.app/yofhl-draft-lottery-installer.exe',
        githubLink: 'https://github.com/DBordeleau/draft-lottery',
        githubOwner: 'DBordeleau',
        features: [
            "Simulates a draft lottery for my fantasy hockey league.",
            "Custom GUI built with Qt widgets that allows users to select a number of teams and specify weighted odds for each team.",
            "Suspenseful reveal that reveals eliminated teams one by one before revealing the winner. Custom animations make for a fun experience.",
            "Inno Setup installer for easy installation so my co-commissioners can run the lottery.",
        ],
        learningOutcomes: [
            "Wrote all the logic for the lottery simulator in C++",
            "Designed and implemented a custom GUI using Qt widgets, also dynamically generated the GUI based on user input.",
            "Created custom animations to slide in and out the eliminated teams and winner. Also created a confetti piece class to animate a burst of confetti falling when the winner is revealed.",
            "Wrote a custom Inno Setup script to create an installer for the application so I could deploy it on windows.",
            "I'm in the process of deploying the app on Linux."
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
        title: "South Park Randomizer",
        slug: "south-park-randomizer",
        description:
            "This is a web app that fetches random South Park episodes via the OMDB API. I built it using React, Tailwind and Express. The website features a dark mode toggle and the ability to filter out already seen episodes. The seen episode list has some entry and exit animations I wrote using framer motion.",
        tags: ["TypeScript", "Next.js", "Tailwind", "React", "Framer"],
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
        title: "Portfolio Website",
        slug: "portfolio-website",
        description:
            "This is a Next.js app I made to host my portfolio projects and help me connect with recruiters for internship opportunities. The website is a single page composed of react components I wrote and styled with Tailwind. Framer is used to animate components. You are viewing the live demo right now.",
        tags: ["TypeScript", "React", "Next.js", "Tailwind", "Framer"],
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
    }
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
    { name: "C/C++", icon: "FaCuttlefish" },
    { name: "Java", icon: "FaJava" },
    { name: "Python", icon: "FaPython" },
    { name: "Swift", icon: "SiSwift" },
    { name: "TypeScript", icon: "SiTypescript" },
    { name: "React", icon: "FaReact" },
    { name: "Next.js", icon: "RiNextjsLine" },
    { name: "Node.js", icon: "FaNodeJs" },
    { name: "SQL", icon: "FaDatabase" },
    { name: "PostgreSQL", icon: "SiPostgresql" },
    { name: "Flask", icon: "SiFlask" },
    { name: "FastAPI", icon: "SiFastapi" },
    { name: "PyTorch", icon: "SiPytorch" },
    { name: "Docker", icon: "FaDocker" },
    { name: "Amazon S3", icon: "SiAmazons3" },
    { name: "Supabase", icon: "SiSupabase" },
    { name: "Git", icon: "FaGitAlt" },
] as const;
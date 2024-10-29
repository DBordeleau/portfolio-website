import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sprandomizerImg from "@/public/sprandomizer.jpeg";
import portfoliositeImg from "@/public/portfoliositescreenshot.png";

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
        name: "Experience",
        hash: "#experience",
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
        title: "South Park Randomizer",
        description:
            "This is a Node.js app that fetches random South Park episodes via the OMDB API. The website also has a dark mode toggle and can filter out seen episodes from episode generation. The project was deployed using fly.io",
        tags: ["JavaScript", "Express.js", "Bootstrap CSS", "HTML", "Git"],
        imageUrl: sprandomizerImg,
        demoLink: 'https://southparkrandomizer.com/',
    },
    {
        title: "Portfolio Website",
        description:
            "This is a Next.js app I made to host my portfolio projects and help me connect with recruiters for internship opportunities. You are viewing the live demo right now.",
        tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Framer Motion", "HTML", "Git"],
        imageUrl: portfoliositeImg,
        demoLink: '',
    },

] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;
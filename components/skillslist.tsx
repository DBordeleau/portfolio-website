"use client";

import React from 'react';
import { skillsData } from '@/lib/data';
import { FaPython, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaBootstrap, FaHtml5, FaCss3Alt, FaJava } from 'react-icons/fa';
import { SiPandas, SiFlask, SiJavascript, SiTypescript, SiExpress, SiKotlin, SiJetpackcompose, SiPytorch } from 'react-icons/si';
import { RiNextjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { FiFramer } from 'react-icons/fi';
import { delay, motion } from 'framer-motion';

const fadeInAnimationVariants = {
    initial: {
        opacity: 1,
        y: 150,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

const iconComponents = {
    FaPython,
    SiPandas,
    SiFlask,
    FaDatabase,
    SiJavascript,
    SiTypescript,
    FaReact,
    RiNextjsLine,
    FaNodeJs,
    SiExpress,
    FaGitAlt,
    RiTailwindCssFill,
    FiFramer,
    FaBootstrap,
    FaHtml5,
    FaCss3Alt,
    FaJava,
    SiKotlin,
    SiJetpackcompose,
    SiPytorch,
};

export default function SkillsList() {
    return (
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => {
                const IconComponent = iconComponents[skill.icon as keyof typeof iconComponents];
                return (
                    <motion.li
                        className="bg-white borderBlack rounded-xl px-5 py-3 text-center flex items-center gap-2 hover:shadow-lg hover:bg-gray-50 transition-all dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80"
                        key={index}
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}
                    >
                        {IconComponent && <IconComponent />} {skill.name}
                    </motion.li>
                );
            })}
        </ul>
    );
}
"use client";

import React from 'react';
import { skillsData } from '@/lib/data';
import { FaPython, FaDatabase, FaReact, FaNodeJs, FaGitAlt, FaJava, FaCuttlefish, FaDocker } from 'react-icons/fa';
import { SiFlask, SiJavascript, SiTypescript, SiSwift, SiPytorch, SiPostgresql, SiSupabase, SiAmazons3, SiFastapi, SiSpringboot } from 'react-icons/si';
import { RiNextjsLine } from 'react-icons/ri';
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
    SiFlask,
    SiSwift,
    FaCuttlefish,
    FaDatabase,
    SiJavascript,
    SiTypescript,
    FaReact,
    RiNextjsLine,
    FaNodeJs,
    FaGitAlt,
    FaJava,
    SiPytorch,
    FaDocker,
    SiAmazons3,
    SiPostgresql,
    SiSupabase,
    SiFastapi,
    SiSpringboot,
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
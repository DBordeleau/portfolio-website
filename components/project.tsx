"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { projectsData } from '@/lib/data';
import { motion, useScroll, useTransform } from 'framer-motion';

type ProjectProps = typeof projectsData[number];

export default function Project({
    title,
    description,
    tags,
    imageUrl,
    demoLink,
    githubLink,
    slug,
}: ProjectProps) {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    const handleProjectClick = () => {
        router.push(`/projects/${slug}`);
    };

    const handleExternalLinkClick = (e: React.MouseEvent, url: string) => {
        e.stopPropagation();
        window.open(url, '_blank');
    };

    return (
        <motion.div
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
            ref={ref}
            className='group mb-3 sm:mb-8 last:mb-0'
        >
            <section
                onClick={handleProjectClick}
                className='bg-gray-100 max-w-[44rem] borderBlack rounded-lg overflow-hidden sm:pr-8 relative sm:h-[25rem] mb-3 sm:mb- last:mb-0 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white cursor-pointer'
            >
                <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 md:max-w-[60%] flex flex-col h-full md:group-even:ml-[18rem] items-center text-center group-even:even:pl-8'>
                    <h3 className='text-2xl font-semibold'>{title}</h3>
                    <div className='flex flex-row'>
                        {demoLink && (
                            <button
                                onClick={(e) => handleExternalLinkClick(e, demoLink)}
                                className='text-blue-500 underline cursor-pointer'
                            >
                                Live Demo
                            </button>
                        )}

                        {githubLink && (
                            <button
                                onClick={(e) => handleExternalLinkClick(e, githubLink)}
                                className='text-blue-500 underline ml-2 cursor-pointer'
                            >
                                GitHub Repo
                            </button>
                        )}
                    </div>
                    <p className='mt-2 text-[.8rem] sm:text-[.9rem] leading-relaxed text-gray-700 mb-4 dark:text-white/70'>{description}</p>
                    <ul className='flex flex-wrap justify-center mt-4 gap-2 sm:mt-auto'>
                        {tags.map((tag, index) => (
                            <li className='bg-black/[0.7] px-2 py-1 text-[0.7rem] sm:text-[.8rem] uppercase tracking-wider text-white rounded-full hover:scale-105 dark:text-white/70' key={index}>{tag}</li>
                        ))}
                    </ul>
                </div>

                <Image
                    src={imageUrl}
                    alt={title}
                    quality={100}
                    className='
                        absolute 
                        hidden
                        md:block
                        top-8 
                        -right-40
                        -mr-6 
                        w-[28.5rem] 
                        h-full
                        rounded-t-lg 
                        shadow-2xl 
                        group-hover:-translate-x-3 
                        group-hover:translate-y-3 
                        group-hover:-rotate-2 
                        group-hover:scale-105 

                        group-even:group-hover:translate-x-3 
                        group-even:group-hover:translate-y-3 
                        group-even:group-hover:rotate-2 

                        transition 
                        
                        group-even:right-[initial] 
                        group-even:-left-40
                        group-even:-ml-4'
                />
            </section>
        </motion.div>
    );
}
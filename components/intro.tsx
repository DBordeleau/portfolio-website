"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {
  const { ref } = useSectionInView('Home', 0.5)
  const {setActiveSection, setLastClickTime} = useActiveSectionContext();

  return (
    <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex items-center justify-center'>
          <div className='relative'>
            <motion.div 
            initial={{ opacity: 0, scale: 0 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ 
                type: "tween", 
                duration: 0.2
              }}>
                <Image 
                src='/headshot.jpg' 
                width='192' 
                height='192' 
                quality="95" 
                priority={true} 
                alt='Dillon Bordeleau portrait' 
                className='rounded-full h-28 w-28 object-cover border-[0.35rem] [border-image:linear-gradient(to_right,bg-emerald-100,bg-emerald-200)_30] border-transparent shadow-xl'/>
            </motion.div>
          </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-[1.5rem] sm:text-[1.75rem] font-medium !leading-[1.25] sm:text-4x1'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y:0 }}>
            <span className="font-bold">Hey there! My name's Dillon.</span> I'm a{" "}
            <span className="font-bold">third-year Computer Science/Software Engineering student</span> seeking internship/co-op opportunities. I enjoy{" "}
            <span className="font-bold">building apps and creative problem solving</span>. My focus is{" "}
            <span className="underline">full-stack development</span>. 
            My current skills include:{" "}
            <span className="font-bold">Python, Flask, Django, TypeScript/JavaScript, React, Node.js & Express, Bootstrap & Tailwind CSS and SQL.</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
            <Link href="#contact" className='group shadow-md bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:bg-gray-950 transition-all dark:border dark:border-white' onClick={() => {
              setActiveSection("Contact");
              setLastClickTime(Date.now);
            }}>Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' /></Link>
            
            <a className='group shadow-md bg-white hover:bg-gray-100 px-7 py-3 flex items-center gap-2 rounded-full outline-none transition-all cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 dark:border dark:border-white dark:hover:bg-white/20 dark:hover:text-white' href='/DillonBordeleauCV.pdf' download={true}>Download my Résumé <HiDownload className='opacity-70 group-hover:translate-y-1 transition'/></a>
            
            <a className='bg-white shadow-md p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer borderBlack dark:border dark:border-white dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20 dark:hover:text-white' href='https://www.linkedin.com/in/dillonbordeleau/' target='_blank'><BsLinkedin/></a>
            
            <a className='bg-white shadow-md p-4 flex text-[1.35rem] text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer borderBlack dark:border dark:border-white dark:bg-white/10 dark:text-white/60 dark:hover:bg-white/20 dark:hover:text-white' href='https://github.com/DBordeleau/' target='_blank'><FaGithubSquare/></a>
        </motion.div>
    </section>
  )
}
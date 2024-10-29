"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi'
import { FaGithubSquare } from 'react-icons/fa';

export default function Intro() {
  return (
    <section className='mb-28 max-w-[50rem] text-center sm:mb-0'>
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
                className='rounded-full h-24 w-24 object-cover border-[0.35rem] border-white shadow-xl'/>
            </motion.div>
          </div>
        </div>
        <motion.h1 className='mb-10 mt-4 px-4 text-2x1 font-medium !leading-[1.5] sm:text-4x1'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y:0 }}>
            <span className="font-bold">Hey there! My name's Dillon.</span> I'm a{" "}
            <span className="font-bold">third-year software engineering student</span> seeking internship/co-op opportunities. I enjoy{" "}
            <span className="font-bold">building apps and creative problem solving</span>. My focus is{" "}
            <span className="underline">full-stack development</span>. 
            My current skills include:{" "}
            <span className="font-bold">Python, TypeScript/JavaScript, React, Node.js & Express, Next.js, Bootstrap & Tailwind CSS and SQL.</span>
        </motion.h1>

        <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}>
            <Link href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'>Contact me <BsArrowRight className='opacity-70 group-hover:translate-x-2 transition' /></Link>
            
            <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10' href='/DillonBordeleauResume.pdf' download={true}>Download my Résumé <HiDownload className='opacity-70 group-hover:translate-y-1 transition'/></a>
            
            <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10' href='https://www.linkedin.com/in/dillonbordeleau/' target='_blank'><BsLinkedin/></a>
            
            <a className='bg-white p-4 flex text-[1.35rem] text-gray-700 items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10' href='https://github.com/DBordeleau/' target='_blank'><FaGithubSquare/></a>
        </motion.div>
    </section>
  )
}
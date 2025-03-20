'use client'

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './section-header';

export default function CurrentProject() {
  const { ref } = useSectionInView('Current Projects');
  return (
    <motion.section ref={ref} id='current_projects' className='mt-14 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28'
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}>
      <SectionHeader>Current Projects</SectionHeader>
      <h3 className='text-[1.25rem] font-bold underline mb-2'>Face Mask AI</h3>
      <p className='mb-3 text-[1rem]'>
        I'm currently fine tuning the training loop for V3 of my face-detection AI. The next version of the model will be significantly better at distinguishing between masks worn correctly and incorrectly.
      </p>

      <h3 className='text-[1.25rem] font-bold underline mb-2'>Embedded Systems Project w/ Raspberry Pi Pico</h3>
      <p className='mb-3 text-[1rem]'>
        I'm nearly finished with a battery powered wifi thermometer I built using a Raspberry Pi Pico W. I wrote all the microcontroller code in C++. I'll be uploading the project to github soon along with a demo video.
      </p>

      <h3 className='text-[1.25rem] font-bold underline mb-2'>Project Collaboration App</h3>
      <p className='mb-3 text-[1rem]'>
        I'm working on a web app that will cater to students and young professionals looking to build more ambitious projects for their portfolios. This app started as a demo I built with some friends at uOttaHack7. I'm building the app with Next.js and Supabase.
      </p>
    </motion.section>
  )
}

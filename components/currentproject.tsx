'use client'

import { useSectionInView } from '@/lib/hooks';
import React from 'react'
import { motion } from 'framer-motion'
import SectionHeader from './section-header';

export default function CurrentProject() {
    const { ref } = useSectionInView('Current Projects');
  return (
    <motion.section ref={ref} id='current_projects' className='mt-14 max-w-[45rem] text-center leading-8 sm:mb-10 scroll-mt-28'
      initial={{opacity: 0,}}
      whileInView={{opacity: 1,}}
      transition={{duration: 2}}
      viewport={{once: true}}>
        <SectionHeader>Current Projects</SectionHeader>
        <h3 className='text-[1.25rem] font-bold underline mb-2'>Face Mask AI</h3>
        <p className='mb-3 text-[1rem]'>
        I'm currently fine tuning the training loop for V3 of my face-detection AI. The next version of the model will be significantly better at distinguishing between masks worn correctly and incorrectly.
      </p>

      <h3 className='text-[1.25rem] font-bold underline mb-2'>Embedded Systems Project w/ Raspberry Pi Pico</h3>
        <p className='mb-3 text-[1rem]'>
        I'm in the early stages of an embedded systems project making use of the Raspberry Pi Pico W. The microcontroller code will be written in C++ and make use of peripherals. I will be publishing the Github repo when I'm finished as well as sharing a video demo of the project. More details soon.
      </p>
    </motion.section>
  )
}

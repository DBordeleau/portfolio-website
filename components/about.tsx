"use client";

import React from 'react'
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About')

  return (
    <motion.section ref={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about">
      <SectionHeader>About Me</SectionHeader>
      <p className='mb-3 text-[1.05rem]'>
        I decided to pursue my passion for programming after being laid off from <span className="font-medium">Shopify</span> support in 2023. 
        I've enjoyed solving problems with software since my early teens but I had never formally studied computer science. 
        I <span className="font-medium">enrolled full-time at Carleton University</span> in the fall of 2024 and have been studying full-time since. 
        In addition to my coursework, I have been learning front-end development and working on some independent projects
        in my free time. I'm seeking {" "}
        <span className="font-medium">
        internship opportunities where I can continue to develop my full-stack development skills and excel as an important part of your team.
        </span>
      </p>

      <p className='text-[1.05rem]'>
        When I'm not programming I like to read, play video games and listen to hip-hop music. I am <span className="font-medium">always learning and familiarizing myself with new technologies</span>. 
        Most recently I have been studying Android development in Kotlin with Jetpack Compose.
        I also have a background in <span className="font-medium">Neuroscience</span>, which I studied at Carleton University before enrolling in Computer Science. You can read my undergraduate research <a className='text-blue-600 font-medium text-decoration: underline' href="https://onlinelibrary.wiley.com/doi/abs/10.1111/jne.13222" target='_blank'>here</a>. I continue to 
        consume Neuroscience literature and have a keen interest in <span className="font-medium">human-computer interactions</span> and <span className="font-medium">brain-computer interfaces</span>.
      </p>
    </motion.section>
  );
}
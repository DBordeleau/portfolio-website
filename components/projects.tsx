import React from 'react'
import Image from 'next/image';
import SectionHeader from './section-header'
import { projectsData } from '@/lib/data'

export default function Projects() {
  return (
    <section>
        <SectionHeader>My Projects</SectionHeader>
        <div>
            {
                projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                      <Project {...project} />
                    </React.Fragment>
                ))}
        </div>
    </section>
  );
}

type ProjectProps = typeof projectsData[number];

function Project({
    title, 
    description, 
    tags, 
    imageUrl,
    demoLink,
}: ProjectProps) {
   return (
   <section className='group bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb- last:mb-0 even:pl-8 hover:bg-gray-200 transition'>
    <div className='pt-4 pb-6 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem] items-center'>
        <h3 className='text-2xl font-semibold'>{title}</h3>
        <a href={demoLink} className='text-blue-500 underline'>Live Demo</a>
        <p className='mt-2 text-[.8rem] leading-relaxed text-gray-700 mb-4'>{description}</p>
        <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
                <li className='bg-black/[0.7] px-2 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full' key={index}>{tag}</li>
            ))}
        </ul>
    </div>

    <Image src={imageUrl} alt={title} quality={90} className='
    absolute 
    top-8 
    -right-40 
    w-[28.25rem] 
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
    group-even:-left-40'/>
   </section>
   )
}
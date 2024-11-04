"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Header() {
  const { activeSection, setActiveSection, setLastClickTime } = useActiveSectionContext();

  return (
    <header className="z-[999] relative overflow-hidden w-full max-w-full">
      <motion.div
        className="
          fixed 
          top-0 
          left-1/2 
          -translate-x-1/2 
          w-full
          border 
          border-white 
          border-opacity-40 
          bg-white 
          bg-opacity-70 
          shadow-lg 
          shadow-black/[0.03] 
          backdrop-blur-[0.5rem]
          min-h-[5rem]
          sm:top-6 
          lg:min-h-[4rem]
          sm:w-[30rem]
          md:w-[30rem]
          lg:w-[34rem]
          sm:rounded-full
          dark:bg-gray-950
          dark:border-black/40
          dark:bg-opacity-70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>
      
      <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 sm:top-[1.7rem] sm:py-1 md:py-2 lg:py-3 xl:py-3">
        <ul className="flex flex-wrap justify-center gap-x-4 lg:gap-x-2 text-[0.8rem] font-medium text-gray-500">
          {links.map(link => (
            <motion.li
              className="relative flex justify-center"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={clsx('flex items-center justify-center px-0 py-2 sm:px-3 hover:text-gray-950 transition dark:hover:text-gray-300', {
                  'text-gray-950 dark:text-gray-200': activeSection === link.name,
                })}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setLastClickTime(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="absolute bg-gray-200 rounded-full -z-10 dark:bg-gray-800"
                    style={{ 
                      width: "calc(100% + 12px)", // Fit within link item
                      height: "calc(100%)" // Adjusts to cover taller wrapped text
                    }}
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <style jsx>{`
        @media (max-width: 640px) {x
          header nav ul {
            font-size: 1rem; // Slightly smaller font on smaller screens
          }
          header {
            min-height: 5.5rem; // Slightly taller header on smaller screens
          }
          .link-wrapper {
            padding-left: 4px;
            padding-right: 4px; // Less padding per link on smaller screens
          }
        }
      `}</style>
    </header>
  );
}

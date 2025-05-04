"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section-context';
import { usePathname } from 'next/navigation';
import { useDeletionEffect } from '@/context/deletionsimulationcontext';

export default function Header() {
  const { activeSection, setActiveSection, setLastClickTime } = useActiveSectionContext();
  const pathname = usePathname();
  const { isDeletionActive } = useDeletionEffect();

  if (pathname.startsWith('/projects') || isDeletionActive) {
    return null;
  }

  return (
    <header className="z-[999] relative overflow-hidden w-fit max-w-full">
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
          min-h-[3rem]
          sm:top-2 
          md:top-2
          lg:top-4
          lg:min-h-[4rem]
          sm:w-[26rem]
          md:w-[26rem]
          lg:w-[26rem]
          sm:rounded-full
          dark:bg-gray-950
          dark:border-black/40
          dark:bg-opacity-70"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[0.5rem] left-1/2 text-[0.7rem] md:text-[.85rem] md:w-full justify-center -translate-x-1/2 md:top-[1.25rem] sm:py-1 md:py-2 lg:py-3 xl:py-3">
        <ul className="flex flex-wrap justify-center gap-x-3 lg:gap-x-2 font-medium text-gray-500">
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
                      width: "calc(100% + 12px)",
                      height: "calc(100%)"
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
    </header>
  );
}

"use client";

import React from 'react';
import { delay, motion } from 'framer-motion';

export default function Divider() {
  return (
    <motion.div className='bg-gray-200 my-[3rem] h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-30'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}>
    </motion.div>
  )
}

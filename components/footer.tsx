import React from 'react'
import { IoMdFlower } from "react-icons/io";

export default function Footer() {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className='flex flex-col justify-center mb-10 px-4 text-center text-gray-600 dark:text-gray-300'>
      <small className='block text-xs'>&copy; {currentYear} Dillon Bordeleau. All rights reserved. Deployed via <a href='https://vercel.com/' className='text-xs font-bold underline text-blue-600 dark:text-blue-500'>Vercel</a></small>
      <div className='flex justify-center px-4 text-sm font-semibold'><small>Stay determined</small><IoMdFlower id='flower' className='mt-0.5 ml-1 text-[1rem] transition' /> </div>
      <div className="flex justify-center mt-2 space-x-1">
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>

        <span className="w-3 h-1 opacity-0"></span>

        <span className="w-1 h-1 bg-black rounded-full dark:bg-gray-300"></span>
        <span className="w-3 h-1 bg-black rounded-full dark:bg-gray-300"></span>
      </div>
    </footer>
  )
}
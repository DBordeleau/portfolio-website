import React from 'react'

export default function Footer() {
    const date = new Date();
    const currentYear = date.getFullYear();
  return (
    <footer className='mb-10 px-4 text-center text-gray-600 dark:text-gray-300'>
       <small className='block text-xs'>&copy; {currentYear} Dillon Bordeleau. All rights reserved. Deployed via <a href='https://vercel.com/' className='text-xs font-bold underline text-blue-600 dark:text-blue-500'>Vercel</a></small>
       <small className='px-4 mb-2 text-xs font-semibold'>Stay determined.</small>
    </footer>
  )
}
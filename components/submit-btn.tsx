import React from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    
  return (
    <button type='submit' className='group flex items-center justify-center gap-2 focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all disabled:scale-100 disabled:bg-opacity-70 dark:bg-white dark:bg-opacity-10' disabled={pending}>
        {
            pending ? (
                <div className="bg-black h-5 w-5 animate-spin rounded-full border-b-2 border-white border-dotted"></div>
        ) : (
              <>
                Submit
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
              </>
            )}
    </button>
  );
}
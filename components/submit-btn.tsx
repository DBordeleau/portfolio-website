'use client';

import React, { useState } from 'react'
import { useFormStatus } from 'react-dom';
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitBtn() {
    const { pending } = useFormStatus();
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    const [loading, setLoading] = useState(false);
    
  async function handleClick() {
    if (pending || loading) return;
    if (!siteKey) {
      console.error('Missing NEXT_PUBLIC_RECAPTCHA_SITE_KEY');
      return;
    }
    
    setLoading(true);
    
    try {
      const w = window as any;
      
      if (!w.grecaptcha) {
        console.error('grecaptcha not loaded');
        setLoading(false);
        return;
      }

      await new Promise((resolve) => {
        w.grecaptcha.ready(() => resolve(true));
      });

      const token = await w.grecaptcha.execute(siteKey, { action: 'submit' });
      
      const f = document.getElementById('contact-form') as HTMLFormElement | null;
      if (f) {
        let input = f.querySelector('input[name="g-recaptcha-response"]') as HTMLInputElement | null;
        if (!input) {
          input = document.createElement('input');
          input.type = 'hidden';
          input.name = 'g-recaptcha-response';
          f.appendChild(input);
        }
        input.value = token;
        
        if (typeof f.requestSubmit === 'function') {
          f.requestSubmit();
        } else {
          f.submit();
        }
      } else {
        console.error('contact-form not found');
        setLoading(false);
      }
    } catch (err) {
      console.error('recaptcha error', err);
      setLoading(false);
    }
  }
    
  return (
    <button 
    type='button'
    onClick={handleClick}
    className='group flex items-center justify-center gap-2 focus:scale-110 hover:bg-gray-950 hover:scale-110 active:scale-105 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all disabled:scale-100 disabled:bg-opacity-70 dark:bg-white dark:bg-opacity-10'
    disabled={pending || loading}
    >
        {
            (pending || loading) ? (
                <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
              <>
                Submit
                <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1'/>
              </>
            )}
    </button>
  );
}
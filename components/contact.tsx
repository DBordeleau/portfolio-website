'use client';

import React, { useEffect, useRef } from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {
  const { ref } = useSectionInView('Contact')
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    console.log(
      "%cPsst! Try the Konami code: ↑↑↓↓←→←→BA",
      "color: white; font-size: 12px; background-color: black; padding: 5px;"
    );
  }, []);

  return (
    <motion.section id="contact" ref={ref} className='scroll-mt-28 mt-[6rem] mb-20 sm:mb-28 w-[min(100%, 50rem)] flex flex-col text-center'
      initial={{ opacity: 0, }}
      whileInView={{ opacity: 1, }}
      transition={{ duration: 2 }}
      viewport={{ once: true }}
    >
      <SectionHeader>Get in touch</SectionHeader>
      <p className='text-gray-700 dark:text-white/80 -mt-6'>You can reach me directly at <a className='underline' href="mailto:dillonbordeleau@gmail.com">DillonBordeleau@gmail.com</a> or use this form.</p>

      <form ref={formRef} id="contact-form" className='mt-10 flex flex-col dark:text-black' action={async formData => {
        const { data, error } = await sendEmail(formData);
        const flowey = document.getElementById('flower');
        let easterEggAudio = new Audio('/easter-egg-audio.wav')

        if (error == "easter egg") {
          easterEggAudio.play();
        }

        if (error) {
          toast.error(error);
          return;
        }

        toast.success('Email sent!');
        formRef.current?.reset();
      }}>
        <input id='senderEmail' name="senderEmail" className='px-4 h-14 rounded-lg border border-black/[10] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' type='email' required maxLength={100} placeholder='email@example.com' />
        <textarea id='message' name="message" placeholder='Enter your message' className='w-[100%] sm:w-[40rem] px-4 pt-4 h-[20rem] my-3 rounded-lg border border-black/[10] dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 dark:outline-none transition-all' required />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
'use server';

import { validateString, getErrorMessage } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmailFormatting from '@/lib/contact-form-email-formatting'
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

// Making use of server actions for ss form validaiton, may change this to a submit handler function -- https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-form-validation
export const sendEmail = async (formData: FormData) => { 
    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    // Most of this is validated via html in the form itself but when we use formData.get above, typescript thinks the data can be null so we need server side validation here too
    if(!validateString(senderEmail, 100)) {
        return {
            error: "Invalid email."
        };
    }
    if(!validateString(message, 5000)) {
        return {
            error: "Invalid form message. Form content must be only text and cannot be empty. Form message must also be less than 5000 characters."
        };
    }
    let data;
    try {
      data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.com>',
        to: 'dillonbordeleau@gmail.com',
        subject: 'Message from Contact Form @ DillonBordeleau.dev',
        replyTo: senderEmail,
        react: React.createElement(ContactFormEmailFormatting, {
            message: message, 
            senderEmail: senderEmail,
        }),
    });
  } catch (error: unknown) {
    return {
        error: getErrorMessage(error),
    };
  }
  
  return {
    data,
  };
};
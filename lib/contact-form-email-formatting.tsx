import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text,
} from '@react-email/components';

import { Tailwind } from '@react-email/components';

type ContactFormEmailFormattingProps = {
    message: string;
    senderEmail: string;
}

// Very basic formatting for emails received from the contact form. ToDo: Better, more custom formatting.
export default function ContactFormEmailFormatting({
    message,
    senderEmail,
}: ContactFormEmailFormattingProps) {
  return (
    <Html>
        <Head />
        <Preview>New message from DillonBordeleau.dev</Preview>
        <Tailwind>
            <Body className='bg-gray-100 text-black'>
                <Container>
                    <Section className='bg-white borderBlack my-10 px-10 py-4, rounded-md'>
                        <Heading className='leading-tight'>Following message received from the contact form on your website: </Heading>
                        <Text>{message}</Text>
                        <Hr />
                        <Text>From: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Tailwind>
    </Html>
  )
}
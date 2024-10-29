'use client';

import React from 'react';
import SkillsList from './skillslist'; // assuming SkillsList is the component that renders the list
import SectionHeader from './section-header';
import { useSectionInView } from '@/lib/hooks';

export default function Skills() {
    const { ref } = useSectionInView('Skills')
  return (
    <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center">
      <div>
        <SectionHeader>My Skills</SectionHeader>
        <SkillsList />
      </div>
    </section>
  );
}
import React, { useContext } from 'react';
import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/Techs';
import Container from '@/components/layout/Container';
import { getDictionary } from '@/dictionaries';
import { Locale } from '@/dictionaries';
import { PageProps } from '@/lib/types';

interface SkillsSectionProps {
  technical_skills: string;
  technical_skills_description: string;
}

export default async function SkillsSection({
  technical_skills,
  technical_skills_description,
}: SkillsSectionProps) {

  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center rounded-xl text-2xl font-medium" id="skills">{technical_skills}</h2>
        <p>{technical_skills_description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl m-auto">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};
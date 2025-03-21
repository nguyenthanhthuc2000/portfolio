import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import Experience from '@/components/sections/Experience';
import PersonalActivities from '@/components/sections/PersonalActivities';
import { PageProps } from '@/lib/types';
import { getDictionary } from '@/dictionaries';

interface HomeProps extends PageProps {
}

export default async function Home(props: HomeProps) {
  const dict = await getDictionary(props.params.lang);

  return (
    <>
      <AboutSection
        about_title={dict.about_title}
        about_description={dict.about_description}
        about_download_cv={dict.about_download_cv}
      />
      <SkillsSection 
        technical_skills={dict.technical_skills}
      />
      <Experience 
        professional_experience={dict.professional_experience}
      />
      <PersonalActivities 
        personal_project={dict.personal_project}
        lang={props.params.lang}
      />
    </>
  );
}

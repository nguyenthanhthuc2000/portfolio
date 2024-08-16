import Image from "next/image";
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <div className="mt-16 md:mt-20">
      <AboutSection  />
      <SkillsSection />
    </div>
  );
}

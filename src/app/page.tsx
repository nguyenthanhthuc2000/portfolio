import Image from "next/image";
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <div className="">
      <AboutSection  />
      <SkillsSection />
    </div>
  );
}

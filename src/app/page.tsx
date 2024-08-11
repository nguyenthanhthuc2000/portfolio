import Image from "next/image";
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <div className="">
      <h1>Nguyễn Thành Thức</h1>
      <a href="https://github.com/nguyenthanhthuc2000/portfolio">Github</a>
      <SkillsSection />
    </div>
  );
}

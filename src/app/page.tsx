import Image from "next/image";
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <main className="">
      <h1>Nguyễn Thành Thức - Hello World!</h1>
      <a href="https://github.com/nguyenthanhthuc2000/portfolio">Github</a>
      <SkillsSection />
    </main>
  );
}

import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/Techs';
import Container from '@/components/layout/Container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center rounded-xl text-2xl font-medium" id="skills">Technical skills</h2>
        <p>The skills, tools and technologies.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl m-auto">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;

import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/Techs';
import Container from '@/components/layout/Container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center rounded-xl text-2xl font-medium" id="skills">Skills</h2>
        <p>The skills, tools and technologies I have experience with.</p>
      </div>
      <div className="grid grid-cols-3 gap-9 md:grid-cols-6 lg:grid-cols-8">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;

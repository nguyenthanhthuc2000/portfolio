import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/Techs';
import Container from '@/components/layout/Container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-10">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;

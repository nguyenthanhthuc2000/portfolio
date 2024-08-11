import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/Techs';
import Container from '@/components/layout/container';

const SkillsSection = () => {
  return (
    <Container>
      <div className="grid grid-cols-3 gap-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </Container>
  );
};

export default SkillsSection;

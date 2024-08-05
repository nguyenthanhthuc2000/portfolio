import { TECHNOLOGIES } from '@/lib/data';
import TechDetails from '@/components/Techs';

const SkillsSection = () => {
  return (
    <div>
      <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;

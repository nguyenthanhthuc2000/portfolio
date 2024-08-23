import Container from '@/components/layout/Container';
import { EXPERIENCES } from '@/lib/data';
import ImageWrapper from '@/components/ui/ImageWrapper';
import LogoHero from '/public/images/logos/hero.jpg';
import { ChevronRight, CalendarClock } from 'lucide-react';

const Experience = () => {
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center rounded-xl text-2xl font-medium" id="skills">Experience</h2>
        <p>Here is a quick summary of my most recent experiences.</p>
      </div>
      { EXPERIENCES.map((experience, index) => {
          return (
            <div key={index} className="p-5 shadow-md max-w-4xl w-full m-auto rounded-3xl dark:bg-white dark:text-black">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center p-1 justify-start rounded-full bg-indigo-600 shadow-lg shadow-indigo-500/50">
                  <div className="p-1">
                    <ImageWrapper 
                      width={25}
                      src={experience.logo}
                      alt={experience.logoAlt}
                      className="transition-transform duration-300 rounded-full object-cover"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="font-bold text-1xl text-white">{experience.companyName}</h3>
                    <div className="md:hidden flex items-center justify-start text-sm text-gray-50"> 
                      <CalendarClock size={13} />
                      <span className="px-2 text-xs">{experience.startDate} - PRESENT</span>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex items-center justify-start text-sm"> 
                  <CalendarClock size={20} className="text-yellow-500" />
                  <span className="px-3 text-sm">{experience.startDate} - PRESENT</span>
                </div>
              </div>
              <div className="flex items-center justify-start gap-4 mb-4">
                <ImageWrapper 
                  width={40}
                  src={LogoHero}
                  alt="Avatar"
                  className="transition-transform duration-300 md:hover:scale-110 rounded-full object-cover"
                />
                <h3 className="font-bold text-2xl">{experience.position}</h3>
              </div>

              { experience.summarys.map((summary, indexSummary) => {
                  return (
                    <p key={indexSummary} className="flex gap-2 mb-2 pl-6">
                      <ChevronRight size={16} className="min-w-4 mt-1"/>
                      <span>{summary}</span>
                    </p>
                  )
                })
              }
            </div>
          )
        })
      }
    </Container>
  );
};

export default Experience;

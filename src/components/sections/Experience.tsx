import Container from '@/components/layout/Container';
import { EXPERIENCES } from '@/lib/data';
import ImageWrapper from '@/components/ui/ImageWrapper';
import LogoHero from '/public/images/logos/hero.jpg';
import { Circle, CalendarClock } from 'lucide-react';

const Experience = () => {
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center rounded-xl text-2xl font-medium" id="skills">Experience</h2>
        <p>Here is a quick summary of my most recent experiences.</p>
      </div>
      <div>
        { EXPERIENCES.map((experience) => {
            return (
              <div className="p-5 shadow-md max-w-4xl m-auto rounded-3xl dark:bg-white dark:text-black">
                <div className="flex justify-start items-center ">
                  <div className="flex items-center justify-start mb-4 rounded-full bg-black p-1">
                    <div className="p-1">
                      <ImageWrapper 
                        width={25}
                        src={experience.logo}
                        alt={experience.logoAlt}
                        className="transition-transform duration-300 rounded-full object-cover"
                      />
                    </div>
                    <div className="px-3">
                      <h3 className="font-bold text-1xl text-yellow-500">{experience.companyName}</h3>
                      <div className="flex items-center justify-start text-white text-sm"> 
                        <CalendarClock size={12}/>
                        <span className="px-3">{experience.startDate} - PRESENT</span>
                      </div>
                    </div>
                   
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

                { experience.summarys.map((summary) => {
                    return (
                      <p className="flex gap-2 mb-2 items-center pl-6">
                        <Circle size={16}/>
                        <span>{summary}</span>
                      </p>
                    )
                  })
                }
              </div>
            )
          })
        }
      </div>
    </Container>
  );
};

export default Experience;

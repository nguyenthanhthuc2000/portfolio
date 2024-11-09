import Container from '@/components/layout/Container';
import { EXPERIENCES } from '@/lib/data';
import ImageWrapper from '@/components/ui/ImageWrapper';
import { ChevronRight, CalendarClock } from 'lucide-react';
import { PageProps } from '@/lib/types';
import { getDictionary } from '@/dictionaries';

interface ExperienceProps {
  professional_experience: string;
  professional_experience_description: string;
}
  
export default async function Experience({
  professional_experience,
  professional_experience_description,
}: ExperienceProps) {

  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center rounded-xl text-2xl font-medium" id="skills">{professional_experience}</h2>
        <p>{professional_experience_description}</p>
      </div>
      { EXPERIENCES.map((experience, index) => {
          return (
            <div key={index} className="transition-transform duration-500 md:hover:scale-105 bg-white p-2 md:p-5 shadow-lg max-w-4xl w-full m-auto rounded-3xl dark:bg-slate-950 dark:bg-opacity-50">
              <div className="flex justify-start md:justify-between items-center mb-4">
                <div className="flex items-center p-1 justify-start rounded-full">
                  <div className="w-10 h-10 rounded-full bg-black bg-opacity-50">
                    <ImageWrapper 
                      width={40}
                      src={experience.logo}
                      alt={experience.logoAlt}
                      className="transition-transform duration-300 rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div className="px-3">
                    <h3 className="font-bold text-2xl">{experience.companyName}</h3>
                    <div className="flex gap-1 items-center">
                      <h3 className="font-bold text-1xl">{experience.position}</h3>
                      <div className="md:hidden flex items-center justify-start text-sm"> 
                        <span className="px-2 text-sm">({experience.startDate} - {experience.endDate})</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex items-center justify-start text-sm"> 
                  <CalendarClock size={20} className="text-yellow-500" />
                  <span className="px-3 text-sm">{experience.startDate} -  {experience.endDate}</span>
                </div>
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

              <div className="flex justify-start gap-2 flex-wrap p-4">
                { experience?.techstack?.map((stack, idx) => {
                  return (
                    <span key={idx} className="bg-gray-50 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 dark:bg-transparent dark:text-white">#{stack}</span>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }
    </Container>
  );
};
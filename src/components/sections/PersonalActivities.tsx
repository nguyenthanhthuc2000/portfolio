import Container from '@/components/layout/Container';
import ImageWrapper from '@/components/ui/ImageWrapper';
import YoutubeMe from '/public/images/logos/youtube_me.png';
import See from '/public/images/logos/see.jpg';
import { StaticImageData } from 'next/image';
import { PageProps } from '@/lib/types';
import { getDictionary } from '@/dictionaries';


interface PersonalActivity {
  title: string;
  link: string;
  image: string | StaticImageData;
  description: string;
}

const personalActivitiesData: PersonalActivity[] = [
  {
    title: 'nickdaoquan.vn',
    link: 'https://nickdaoquan.vn',
    image: See,
    description: "An e-commerce platform for buying and selling game accounts, with secure transactions, account management, and customer support to help gamers trade easily and safely.",
  },
  {
    title: '@nguyenthanhthuc.2k',
    link: 'https://www.youtube.com/@nguyenthanhthuc.2k',
    image: YoutubeMe,
    description: 'A channel dedicated to the legendary adventures of Dragon Ball, where I share exciting short videos about Ngọc Rồng Online, from gameplay to tips, inspired by the captivating storyline.',
  },
];

interface PersonalActivitiesProps {
  personal_project: string;
  personal_project_description: string;
}
  
export default async function PersonalActivities({
  personal_project,
  personal_project_description,
}: PersonalActivitiesProps) {

  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center text-2xl font-medium" id="personal_activities">{personal_project}</h2>
        <p>{personal_project_description}</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {
          personalActivitiesData.map((personalActivity, index) => {
            return (
              <div 
                key={index}
                className="transition-transform duration-500 md:hover:scale-105 bg-white p-5 shadow-lg max-w-96 w-full rounded-3xl dark:bg-slate-950 dark:bg-opacity-50">
                  <div className="w-full min-h-48 bg-black bg-opacity-20">
                    <ImageWrapper 
                      src={personalActivity.image}
                      className="w-full h-48 object-cover"
                      alt={personalActivity.title}
                    />
                  </div>
                  <div className="py-4">
                    <a href={personalActivity.link} target="_blank" className="font-semibold text-xl">{personalActivity.title}</a>
                    <p className="text-base mt-2 text-justify">
                      {personalActivity.description}
                    </p>
                  </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  );
};
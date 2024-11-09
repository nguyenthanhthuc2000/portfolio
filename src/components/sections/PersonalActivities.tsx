import Container from '@/components/layout/Container';
import ImageWrapper from '@/components/ui/ImageWrapper';
import YoutubeMe from '/public/images/logos/youtube_me.png';
import See from '/public/images/logos/see.jpg';
import { StaticImageData } from 'next/image';


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

const PersonalActivities = () => {
  
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-center text-2xl font-medium" id="personal_activities">Professional Activities</h2>
        <p>Projects related to personal growth or hobbies, such as blogging, content creation, or skill development.</p>
        <p>That help individuals build their own online presence or expertise.</p>
      </div>
      <div className="flex flex-wrap justify-center">
        {
          personalActivitiesData.map((personalActivity, index) => {
            return (
              <div 
                key={index}
                className="max-w-96 md:w-1/2 p-2 w-full transition-transform duration-500 hover:scale-105">
                <div
                  className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
                  <div className="w-full min-h-48 bg-black bg-opacity-20">
                    <ImageWrapper 
                      src={personalActivity.image}
                      className="w-full h-48 object-cover"
                      alt={personalActivity.title}
                    />
                  </div>
                  <div className="px-6 py-4">
                    <a href={personalActivity.link} target="_blank" className="font-semibold text-xl text-gray-900">{personalActivity.title}</a>
                    <p className="text-gray-700 text-base mt-2 text-justify">
                      {personalActivity.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </Container>
  );
};

export default PersonalActivities;

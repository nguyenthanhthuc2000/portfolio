import Container from '@/components/layout/Container';
import ImageWrapper from '@/components/ui/ImageWrapper';
import LogoMe from '/public/images/logos/me.jpg';
import DownloadCV from '@/components/general/DownloadCV';

interface AboutSectionProps {
  about_title: string;
  about_description: string;
  about_download_cv: string;
}
  
export default function AboutSection({
  about_title,
  about_description,
  about_download_cv
}: AboutSectionProps) {
  
  return (
    <Container id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16">
        <div className="order-2 md:order-1 col-span-2">
          <h1 className="font-bold text-3xl pb-5 text-center md:text-left">{about_title}</h1>
          <p className="text-center md:text-left">{about_description}</p>
          <br />
          <div className="w-full flex justify-center md:block ">
            <DownloadCV className="z-1" label={about_download_cv} />
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 mb-3 w-full">
          <div className="flex justify-center mb-3 h-52 w-52 m-auto rounded-full bg-black bg-opacity-50">
            <ImageWrapper
              src={LogoMe}
              alt="Nguyễn Thành Thức"
              className="transition-transform duration-300 md:hover:scale-110 rounded-full object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

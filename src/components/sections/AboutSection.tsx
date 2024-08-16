import Container from '@/components/layout/Container';
import ImageWrapper from '@/components/ui/ImageWrapper';
import LogoHero from '/public/images/logos/hero.jpg';
import DownloadCV from '@/components/general/DownloadCV';

const AboutSection = () => {
  return (
    <Container id="about">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16">
        <div className="order-2 md:order-1 col-span-2">
          <h1 className="font-bold text-3xl pb-5 text-center md:text-left">Hi, I am Thuc, a Web Developer.</h1>
          <p className="text-center md:text-left">{`I'm a fullstack developer (JavaScript, PHP, MySQL) with a focus on creating exceptional digital experiences that are fast, accessible, visually appealing, and responsive. I'm always looking for practical technology to improve my skills and daily life.`}</p>
          <br />
          <div className="w-full flex justify-center md:block">
            <DownloadCV />
          </div>
        </div>
        <div className="order-1 md:order-2 col-span-1 flex justify-center mb-3">
          <ImageWrapper
            width={200}
            src={LogoHero}
            alt="Nguyễn Thành Thức"
            className="transition-transform duration-300 md:hover:scale-110 rounded-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
};

export default AboutSection;
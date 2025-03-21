import { 
  Github,
  Facebook,
  Linkedin,
} from 'lucide-react';

import {
  TechDetails,
  ExperienceDetails,
  ProjectDetails,
  Language,
} from '@/lib/types';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNextjsLight from '/public/images/logos/icon-nextjs-light.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoDocker from '/public/images/logos/logo-docker.svg';
import LogoPHP from '/public/images/logos/icon-php.svg';
import LogoCss3 from '/public/images/logos/icon-css3.svg';
import LogoHTML from '/public/images/logos/icon-html.svg';
import LogoLaravel from '/public/images/logos/icon-laravel.svg';
import LogoMariadb from '/public/images/logos/icon-mariadb.svg';
import LogoMysql from '/public/images/logos/icon-mysql.svg';
import LogoRiverCrane from '/public/images/logos/logo-rivercrane.png';
import LogoRiverCraneDark from '/public/images/logos/logo-rivercrane-dark.png';
import LogoTHKHoldingsVietnam from '/public/images/logos/THK-Holdings-Vietnam.png';
import ProjectIMGUP from '/public/images/logos/project-img-up.png';
import LogoJquery from '/public/images/logos/icon-jquery.svg';
import LogoEC2 from '/public/images/logos/icon-aws-ec2.svg';
import LogoS3 from '/public/images/logos/icon-aws-s3.svg';
import LogoJava from '/public/images/logos/icon-java.svg';
import { StaticImageData } from 'next/image';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Git',
    href: 'https://github.com/nguyenthanhthuc2000',
  },
  {
    label: 'Contact',
    href: 'https://www.linkedin.com/in/nguyen-thanh-thuc/',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/nguyenthanhthuc2000',
  },
  {
    icon: Facebook,
    url: 'https://www.facebook.com/nguyenthanhthuc.2k',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/nguyen-thanh-thuc',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'HTML5',
    logo: LogoHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS3',
    logo: LogoCss3,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'jQuery',
    logo: LogoJquery,
    url: 'https://jquery.com',
  },
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwind',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  // {
  //   label: 'NodeJS',
  //   logo: LogoNodejs,
  //   url: 'https://nodejs.org/',
  // },
  // {
  //   label: 'Express.js',
  //   logo: LogoExpress,
  //   url: 'https://expressjs.com/',
  // },
  {
    label: 'ReactJS',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'NextJS',
    logo: LogoNextjs,
    darkModeLogo: LogoNextjsLight,
    url: 'https://nextjs.org/',
  },
  // {
  //   label: 'Java',
  //   logo: LogoJava,
  //   url: 'https://www.java.com/',
  // },
  {
    label: 'PHP',
    logo: LogoPHP,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Laravel',
    logo: LogoLaravel,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'MySQL',
    logo: LogoMysql,
    url: 'https://www.mysql.com/',
  },
  {
    label: 'MariaDB',
    logo: LogoMariadb,
    url: 'https://www.mysql.com/',
  },
  // {
  //   label: 'MongoDB',
  //   logo: LogoMongoDB,
  //   darkModeLogo: LogoNextjsLight,
  //   url: 'https://www.mongodb.com/',
  // },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
  // {
  //   label: 'Amazon EC2',
  //   logo: LogoEC2,
  //   url: 'https://aws.amazon.com/',
  // },
  // {
  //   label: 'Amazon S3',
  //   logo: LogoS3,
  //   url: 'https://aws.amazon.com/',
  // },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    companyName: 'THK Holdings Vietnam',
    logo: LogoTHKHoldingsVietnam,
    darkModeLogo: LogoTHKHoldingsVietnam,
    logoAlt: 'THK Holdings Vietnam',
    position: 'Web Developer',
    startDate: '10/2024',
    endDate: 'Now',
    currentlyWorkHere: false,
    summarys: [
      'Working with JavaScript, TypeScript, PHP, MYSQL, Docker',
      'Framework/Library: jQuery, FuelPHP, ReactJS, Laravel',
    ],
    techstack: ['Javascript', 'jQuery', 'PHP', 'ReactJS', 'Laravel', 'TypeScript', 'FuelPHP', 'Docker', 'MySQL', 'MariaDB', 'AWS'],
  },
  {
    companyName: 'RiverCrane Vietnam',
    logo: LogoRiverCraneDark,
    darkModeLogo: LogoRiverCrane,
    logoAlt: 'RiverCrane Logo',
    position: 'Web Developer',
    startDate: '02/2022',
    endDate: '09/2024',
    summarys: [
      'Worked with JavaScript, PHP, MYSQL, Java, Docker',
      'Generate new ideas and gather requirements for internal and client projects.',
      'Designed architecture of different projects',
      'Worked on projects for Japanese clients.',
      'Framework/Library: jQuery, NuxtJs, ReactJs, NextJS, Laravel',
    ],
    techstack: ['NextJs', 'ReactJs', 'Typescript', 'Javascript', 'jQuery', 'PHP', 'Laravel', 'Docker', 'MySQL', 'MariaDB', 'NuxtJs', 'VueJs', 'Java', 'C#'],
  }
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'WePro',
    description:
      'Internal project to manage employee information, work, projects,...',
    url: '',
    previewImage: LogoRiverCrane,
    technologies: [
      'Laravel',
      'Laravel Modules',
      'Bootstrap',
      'jQuery',
      'MariaDB',
      'Docker',
    ],
  },
  {
    name: 'IMG-UP',
    description:
      'New project with features to automatically create images for products and automatically update to Rakuten site.',
    url: 'https://img-up.greenwich.co.jp/',
    previewImage: ProjectIMGUP,
    technologies: [
      'NextJS',
      'Typescript',
      'React Bootstrap',
      'SCSS',
      'Redux',
      'MariaDB',
      'Laravel',
      'Docker',
      'Load Balancer',
      'AWS EC2',
    ],
  },
  {
    name: 'Order Cheese',
    description:
      'Pet food order management project.',
    url: '',
    previewImage: LogoRiverCrane,
    technologies: [
      'NuxtJS',
      'JavaScript',
      'Bootstrap Vue',
      'SCSS',
      'Redux',
      'MariaDB',
      'Laravel',
      'Docker',
    ],
  },
  {
    name: 'Editor',
    description:
      'Product management support system on Rakuten e-commerce platform.',
    url: '',
    previewImage: LogoRiverCrane,
    technologies: [
      'ReactJS',
      'JavaScript',
      'Material UI',
      'SCSS',
      'Redux',
      'MariaDB',
      'Java',
      'IndexedDB',
    ],
  },
];

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/nguyenthanhthuc2000',
  GITHUB_REPO: 'https://github.com/nguyenthanhthuc2000/portfolio',
};
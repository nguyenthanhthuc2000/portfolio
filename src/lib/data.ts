import { 
  Github,
  Facebook,
  Linkedin,
} from 'lucide-react';

import {
  TechDetails,
  ExperienceDetails,
  ProjectDetails,
} from '@/lib/types';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
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
import ProjectIMGUP from '/public/images/logos/project-img-up.png';


export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Technical Skills',
    href: '#technical_skills',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Projects',
    href: '#projects',
  },
  {
    label: 'Contact',
    href: '#contact',
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
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
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
    label: 'MySQL',
    logo: LogoMysql,
    url: 'https://www.mysql.com/',
  },
  {
    label: 'MariaDB',
    logo: LogoMariadb,
    url: 'https://www.mysql.com/',
  },
  {
    label: 'HTML',
    logo: LogoHTML,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS3',
    logo: LogoCss3,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Docker',
    logo: LogoDocker,
    url: 'https://www.docker.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoRiverCrane,
    darkModeLogo: LogoRiverCrane,
    logoAlt: 'RiverCrane Logo',
    position: 'FullStack Developer',
    startDate: new Date(2022, 2),
    currentlyWorkHere: true,
    summary: [
      'Worked as a full stack developer (JavaScript, PHP, MariaDB and Java).',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (ReactJs, NextJS, NuxtJS and Laravel).',
      'Worked on projects for Japanese clients.',
    ],
  },
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

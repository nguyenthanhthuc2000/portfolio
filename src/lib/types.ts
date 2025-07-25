import type { StaticImageData } from "next/image";

export type TechDetails = {
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  label: string;
  url: string;
};

export type ExperienceDetails = {
  companyName: string;
  logo: string | StaticImageData;
  darkModeLogo?: string | StaticImageData;
  logoAlt: string;
  position: string;
  currentlyWorkHere?: boolean;
  startDate: string;
  endDate?: string;
  summarys: string[];
  techstack?: string[];
  description?: string[];
};


export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  previewImage: string | StaticImageData;
  technologies: string[];
};

export type Language = 'en' | 'vi' | 'ja';

export interface PageProps {
  params: { 
    lang: Language;
  }
}

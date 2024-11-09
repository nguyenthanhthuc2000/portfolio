import React, { useEffect, useState } from 'react';
import { Locale } from '@/dictionaries';
import VISVG from '../../../public/images/logos/vi.svg';
import ENSVG from '../../../public/images/logos/en.svg';
import JASVG from '../../../public/images/logos/ja.svg';
import ImageWrapper from './ImageWrapper';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface Language {
  value: Locale;
  label: string;
  icon: string | StaticImageData;
}
const languages: Language[] = [
  { value: 'ja', label: 'Japanese', icon: JASVG },
  { value: 'vi', label: 'Vietnamese', icon: VISVG },
  { value: 'en', label: 'English', icon: ENSVG },
];

const LanguageSelector = () => {
  const [currentLang, setCurrentLang] = useState<Locale>('en');
  const router = useRouter();
  const handleLanguageChange = (selectedOption: Locale) => {
    setCurrentLang(selectedOption);
  };

  useEffect(() => {
    if (currentLang) {
      router.push(currentLang);
    }
  }, [currentLang, router]);

  return (
    <div>
      {
        languages.map(language => {
          return (
            <button
            key={language.value}
            className={`p-1 transition duration-200 ease-in-out transform hover:bg-gray-200 focus:outline-none 
            ${language.value === currentLang ? 'bg-gray-300' : 'hover:scale-110'}`}
            onClick={() => handleLanguageChange(language.value)}
            aria-label={language.label}
          >
            <ImageWrapper
              width={24}
              src={language.icon}
              alt={language.label}
              className={` ${language.value === currentLang ? 'border-2 border-blue-500' : ''}`}
            />
          </button>
          )
        })
      }
    </div>
  );
};

export default LanguageSelector;

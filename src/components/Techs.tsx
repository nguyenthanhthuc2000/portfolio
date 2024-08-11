'use client';

import { TechDetails } from '@/lib/types';
import Link from 'next/link'
import ImageWrapper from '@/components/ui/ImageWrapper';

const Techs = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2 ">
      <Link href={url}>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 md:hover:scale-110"
        />
      </Link>
      <span>{label}</span>
    </div>
  );
};

export default Techs;

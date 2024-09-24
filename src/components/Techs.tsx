'use client';

import { TechDetails } from '@/lib/types';
import Link from 'next/link'
import ImageWrapper from '@/components/ui/ImageWrapper';

const Techs = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center gap-2" title={label} style={{ maxWidth: '120px', maxHeight: '120px' }}>
      <Link href={url}>
       <div className="bg-black bg-opacity-5 shadow-sm p-3 dark:bg-black dark:bg-opacity-30 rounded-2xl min-w-24 min-h-24">
        <ImageWrapper
            src={logo}
            srcForDarkMode={darkModeLogo}
            alt={label}
            style={{maxHeight:'72px'}}
            className="transition-transform duration-300 md:hover:scale-110 w-full h-full"
          />
       </div>
      </Link>
      <span>{label}</span>
    </div>
  );
};

export default Techs;

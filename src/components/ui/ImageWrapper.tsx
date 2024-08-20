'use client';

import { useEffect, useState } from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';

type ImageWrapperProps = ImageProps & {
  srcForDarkMode?: string | StaticImageData;
};

const ImageWrapper = ({
  srcForDarkMode,
  src,
  alt,
  ...props
}: ImageWrapperProps) => {
  // Ref :: https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const finalSrc = theme === 'dark' && srcForDarkMode ? srcForDarkMode : src;

  return (
    <>
     <div className="relative">
      {loading && (
        <div className="absolute inset-0 bg-gray-300 animate-pulse"></div> // Đây là skeleton
      )}
        <Image
          src={finalSrc}
          alt={alt}
          className={`transition-opacity duration-500 ${loading ? 'opacity-0' : 'opacity-100'}`}
          onLoadingComplete={() => setLoading(false)}
          {...props}
        />
      </div>
    </>
  );
};

export default ImageWrapper;

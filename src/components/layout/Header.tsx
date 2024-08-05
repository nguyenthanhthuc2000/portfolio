'use client';

import { useEffect, useState } from 'react';
import ThemeSwitcher from '@/components/general/ThemeSwitcher';
import DownloadCV from '@/components/general/DownloadCV';
import useWndowSize from '@/hooks/useWndowSize';

const Header = () => {
  const size = useWndowSize();
  return (
    <header>
      <ThemeSwitcher />
      <br />
      <DownloadCV />
    </header>
  );
};

export default Header;

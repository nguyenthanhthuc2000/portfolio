'use client';

import { useEffect, useState } from 'react';
import ThemeSwitcher from '@/components/general/ThemeSwitcher';
import useWndowSize from '@/hooks/useWndowSize';

const Header = () => {
  const size = useWndowSize();
  return (
    <header>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;

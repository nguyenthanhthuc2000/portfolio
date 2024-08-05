'use client';

import { useEffect, useState } from 'react';
import ThemeSwitcher from '@/components/general/ThemeSwitcher';

const Header = () => {

  return (
    <header>
      <ThemeSwitcher />
    </header>
  );
};

export default Header;

'use client';

import { useEffect, useState } from 'react';
import ThemeSwitcher from '@/components/general/ThemeSwitcher';
import DownloadCV from '@/components/general/DownloadCV';
import useWndowSize from '@/hooks/useWndowSize';
import NextLink from 'next/link';
import { NAV_LINKS } from '@/lib/data';
import { 
  Menu,
  X,
} from 'lucide-react';

const Header = () => {
  const size = useWndowSize();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="w-full">
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between px-4 md:px-8 py-8">

        <NextLink href="/">
          <Logo />
        </NextLink>

        <div className="relative">
          {/* Responsive menu icon */}
          <button 
            onClick={toggleMenu}
            className="block lg:hidden focus:outline-none"
          >
            <Menu />
          </button>

          {/* Desktop menu */}
          <div className="hidden lg:flex lg:relative items-center justify-center gap-10">
            <ul className="block lg:flex gap-6">
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="text-base font-medium text-gray-600 hover:text-gray-950 transition-all active:text-gray-600">
                  <NextLink href={link.href}>{link.label}</NextLink>
                </li>
              ))}
            </ul>
            <div className="h-6 w-0.5 bg-gray-100"></div>
            <div className="flex items-center justify-center gap-4">
              <ThemeSwitcher />
            </div>
          </div>

          {/* Mobile menu */}
            <> 
              <div
                className={`${isMenuOpen ? 'right-0 translate-x-0' : 'translate-x-full -right-full'} fixed w-full bottom-0 top-0 right-0 bg-gray-900/10 cursor-pointer backdrop-blur-sm transition-opacity duration-500`}
                onClick={toggleMenu}>
              </div>

              <div className={`${isMenuOpen ? '-right-5 translate-x-0' : 'translate-x-full -right-full'} fixed ring-1 shadow-2xl bg-gray-50 w-96 bottom-0 top-0 transition-all duration-500`} >
                <div className="flex items-center justify-between mb-4 px-8 pt-6">
                  <Logo />
                  <X onClick={toggleMenu} className="cursor-pointer" />
                </div>
                <ul className="block px-8 mb-4">
                  {NAV_LINKS.map((link, index) => (
                    <li key={index} onClick={toggleMenu} className="mb-4 text-base font-medium text-gray-600 hover:text-gray-950 transition-all active:text-gray-600">
                      <NextLink href={link.href}>{link.label}</NextLink>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-4 px-8">
                  {/* <ThemeSwitcher /> */}
                  <DownloadCV />
                </div>
              </div>
            </>

        </div>
      </div>
    </header>
  );
};

export default Header;

const Logo = () => (
  <h2 className="font-bold text-3xl">
    {'<NTT />'}
  </h2>
);
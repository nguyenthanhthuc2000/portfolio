'use client';
import { useState } from 'react';
import ThemeSwitcher from '@/components/general/ThemeSwitcher';
import DownloadCV from '@/components/general/DownloadCV';
import NextLink from 'next/link';
import { NAV_LINKS } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '@/components/ui/LanguageSelector';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header className="w-full relative z-10">
      <div className="flex w-full backdrop-blur-sm max-w-7xl mx-auto items-center justify-between px-4 custom-width-header md:px-8 md:py-8 py-4 fixed top-0 left-0 right-0">

        <NextLink href="#">
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
          <div className="hidden lg:flex lg:relative items-center justify-center gap-10 ">
            <ul className="block lg:flex gap-6">
              {NAV_LINKS.map((link, index) => (
                <li key={index} className="text-base font-medium transition-all">
                  <NextLink href={link.href}>{link.label}</NextLink>
                </li>
              ))}
            </ul>
            <LanguageSelector />
            <div className="h-6 w-0.5 bg-gray-100"></div>
            <div className="flex items-center justify-center gap-4">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <> 
        <div
          className={`${isMenuOpen ? 'right-0 translate-x-0' : 'translate-x-full -right-full'} fixed w-full bottom-0 top-0 right-0 z-10 backdrop-blur-sm bg-gray-900/10 cursor-pointer transition-opacity duration-500`}
          onClick={toggleMenu}>
        </div>
        <div className={`${isMenuOpen ? 'right-0 translate-x-0 px-6' : 'translate-x-full -right-full'} bg-white dark:backdrop-blur-sm z-10 dark:bg-gray-900/70 fixed ring-1 shadow-2xl w-80 bottom-0 top-0 transition-all duration-500`} >
          <div className="flex items-center justify-between mb-4 pt-6">
            <Logo />
            <X onClick={toggleMenu} className="cursor-pointer" />
          </div>
          <ul className="block mb-4">
            {NAV_LINKS.map((link, index) => (
              <li key={index} onClick={toggleMenu} className="mb-4 text-base font-medium transition-all">
                <NextLink href={link.href}>{link.label}</NextLink>
              </li>
            ))}
          </ul>
          <div className="py-3">
            <LanguageSelector />
          </div>
          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <DownloadCV label='Download CV' />
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;

const Logo = () => (
  <h2 className="font-bold text-3xl">
    {'<NTT />'}
  </h2>
);
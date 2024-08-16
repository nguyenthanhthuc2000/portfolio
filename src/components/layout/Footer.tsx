import { Copyright } from 'lucide-react';

import { EXTERNAL_LINKS } from '@/lib/data';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 w-full py-4">
      <p className="flex items-center justify-center gap-1 text-sm">
        <span className="flex items-center">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp;
          Designed
          &nbsp;and&nbsp;

          <Link href={EXTERNAL_LINKS.GITHUB_REPO}>
            coded
          </Link>

          &nbsp;with ❤️️ by NTT
        </span>
      </p>
    </footer>
  );
};

export default Footer;

import { Copyright } from 'lucide-react';

import { EXTERNAL_LINKS } from '@/lib/data';
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-50 py-6">
      <div className="flex items-center justify-center gap-1">
        <span className="flex items-center">
          <Copyright className="mr-1 inline-block h-4 w-4" />
          {new Date().getFullYear()} |&nbsp;
          Designed
          &nbsp;and&nbsp;

          <Link href={EXTERNAL_LINKS.GITHUB_REPO}>
            coded
          </Link>

          &nbsp;with ❤️️ by Nguyễn Thành Thức
        </span>
      </div>
    </footer>
  );
};

export default Footer;

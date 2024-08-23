import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ThemeProvider from '@/components/layout/ThemeProviders';
import CursorEffects from '@/components/ui/CursorEffects';

const inter = Inter({ subsets: ["latin"] });
const title = 'Nguyễn Thành Thức | Full Stack Developer From HCMC, Vietnam.';
const url = 'https://nguyenthanhthuc.info.vn';
const description = "Developers are like plumbers in the digital world, except they never know how many 'leaks' they'll have to fix the next day!";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'PHP Developer',
    'Javascript',
    'TypeScript',
    'jQuery',
    'PHP',
    'MySQL',
    'MariaDB',
    'HTML5',
    'CSS3',
    'SCSS',
    'TailwindCss',
    'Bootstrap',
    'Redux',
    'Nginx',
    'Apache',
    'Amazon',
    'Docker',
    'Linux',
  ],
  applicationName: 'My Portfolio',
  authors: [
    {
      name: 'Nguyễn Thành Thức',
    }
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    url,
    title,
    description,
    siteName: title,
    images: [
      {
        url: '/favicon.ico',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="vi">
      <body>
        <ThemeProvider>
          <Header />
          <div id="body-background"></div>
          <div id="body-wapper">
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <div className="layer"></div>
            <main>
              { children }
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

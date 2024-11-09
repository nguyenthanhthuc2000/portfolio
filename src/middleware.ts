import { NextRequest, NextResponse } from 'next/server';

const validLangs = ['en', 'vi', 'ja'];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isValidLang = validLangs.some(lang => pathname.startsWith(`/${lang}`));

  if (!isValidLang) {
    const url = req.nextUrl.clone();
    url.pathname = '/en' + pathname;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path',
}
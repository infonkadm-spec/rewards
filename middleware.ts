import { NextRequest, NextResponse } from 'next/server';

// LOCAL TEST PARAM
const localTestParam = 'RnGRkTeXa';

// PARAM LIST
const paramList: Record<string, string> = {
  'KLpQZaM': 'kim',
  'RQmLZaP': 'rock',
  'MmQAzLp': 'megan',
};

export function middleware(req: NextRequest) {

  const { nextUrl } = req;
  const url = nextUrl.toString() || '';
  const host = nextUrl.hostname.toLowerCase() || '';
  const params = nextUrl.searchParams;
  const catParam = params.get('xcat') || '';
  const localParam = params.get('xtest') || '';
  const srcParam = params.get('src') || '';
  const requestHeaders = new Headers(req.headers);

  requestHeaders.set('x-url', url);
  requestHeaders.set('x-host', host);
  requestHeaders.set('x-params', params.toString());
  requestHeaders.set('x-cat-param', catParam);
  
  // Get src from cookie if not in URL
  const srcCookie = req.cookies.get('src_tracking')?.value || '';
  const finalSrc = srcParam || srcCookie;
  if (finalSrc) {
    requestHeaders.set('x-src', finalSrc);
  }

  if (localParam === localTestParam) {
    requestHeaders.set('x-local-param', 'true');
  };

  if (catParam && paramList[catParam]) {

    params.delete('xcat');
    
    // Preserve xtest parameter if it exists
    if (localParam === localTestParam) {
      params.set('xtest', localTestParam);
    }
    
    // Preserve src parameter if it exists, otherwise set it based on content
    const srcToUse = srcParam || finalSrc || paramList[catParam];
    if (srcToUse) {
      params.set('src', srcToUse);
    }
    
    const newUrl = req.nextUrl.clone();
    newUrl.search = params.toString();
  
    const response = NextResponse.redirect(newUrl, { status: 302 });
    
    response.cookies.set({
      name: 'xcat_valid',
      value: paramList[catParam],
      path: '/',
      maxAge: 60 * 60 * 72,
      httpOnly: false,
    });
    
    // Set src cookie for tracking
    if (srcToUse) {
      response.cookies.set({
        name: 'src_tracking',
        value: srcToUse,
        path: '/',
        maxAge: 60 * 60 * 72,
        httpOnly: false,
      });
    }
  
    // Preserve x-local-param header in redirect response
    if (localParam === localTestParam) {
      response.headers.set('x-local-param', 'true');
    }
  
    return response;
  
  };

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

};

export const config = {
  matcher: ["/:path*"],
};
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 현재는 간단히 세션 쿠키로 인증 상태를 확인
  const isAuthenticated = request.cookies.has('auth');  // true 대신 실제 인증 확인

  // 보호된 라우트에 대한 접근 제어
  if (request.nextUrl.pathname.startsWith('/dashboard') ||
      request.nextUrl.pathname.startsWith('/user-dashboard') ||
      request.nextUrl.pathname.startsWith('/admin-dashboard')) {
    
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // 이미 로그인한 사용자가 로그인/회원가입 페이지 접근 시 대시보드로 리다이렉트
  if (request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/register')) {
    if (isAuthenticated) {
      return NextResponse.redirect(new URL('/dashboard', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*', '/user-dashboard/:path*', '/admin-dashboard/:path*', '/login', '/register'],
};
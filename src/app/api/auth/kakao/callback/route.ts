import { getKakaoToken, getKakaoUserInfo } from '@/lib/api/auth/kakao';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
      console.error('Authorization code is missing');
      return NextResponse.redirect(new URL('/login?error=missing_code', request.url));
    }

    // 카카오 토큰 받기
    const accessToken = await getKakaoToken(code);
    console.log('Kakao access token received:', accessToken);

    // 카카오 사용자 정보 받기
    const userInfo = await getKakaoUserInfo(accessToken);
    console.log('Kakao user info received:', userInfo);

    // TODO: 여기서 사용자 정보를 저장하거나 세션/쿠키를 설정
    // 임시로 일반 사용자로 가정하고 user-dashboard로 리다이렉트
    return NextResponse.redirect(new URL('/user-dashboard', request.url));
    
    // 나중에는 사용자 타입에 따라 분기 처리
    // const userType = getUserType(userInfo); // 사용자 타입 확인 함수
    // const redirectPath = userType === 'admin' ? '/admin-dashboard' : '/user-dashboard';
    // return NextResponse.redirect(new URL(redirectPath, request.url));
  } catch (error) {
    console.error('Kakao login error:', error);
    return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
  }
}
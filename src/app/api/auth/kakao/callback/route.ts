import { getKakaoToken, getKakaoUserInfo } from '@/lib/api/auth/kakao';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get('code');

    if (!code) {
      return NextResponse.redirect(new URL('/login?error=missing_code', request.url));
    }

    // 카카오 토큰 받기
    const accessToken = await getKakaoToken(code);
    console.log('Kakao access token received:', accessToken);

    // 카카오 사용자 정보 받기
    const userInfo = await getKakaoUserInfo(accessToken);
    console.log('Kakao user info received:', userInfo);

    // TODO: 사용자 정보를 데이터베이스에 저장하거나 업데이트

    // 대시보드 루트로 리다이렉트 (여기서 사용자 타입에 따라 분기됨)
    return NextResponse.redirect(new URL('/dashboard', request.url));
  } catch (error) {
    console.error('Kakao login error:', error);
    return NextResponse.redirect(new URL('/login?error=auth_failed', request.url));
  }
}
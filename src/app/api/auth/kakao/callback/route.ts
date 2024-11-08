import { getKakaoToken, getKakaoUserInfo } from '@/lib/api/auth/kakao';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');

  if (!code) {
    return NextResponse.redirect('/login?error=missing_code');
  }

  try {
    const accessToken = await getKakaoToken(code);
    const userInfo = await getKakaoUserInfo(accessToken);

    // TODO: 사용자 정보를 데이터베이스에 저장하거나 업데이트

    return NextResponse.redirect('/dashboard');
  } catch (error) {
    console.error('Kakao login error:', error);
    return NextResponse.redirect('/login?error=auth_failed');
  }
}
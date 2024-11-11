import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Next.js 13 이상에서는 App Router가 기본값이므로 experimental.appDir 옵션 제거
};

export default nextConfig;
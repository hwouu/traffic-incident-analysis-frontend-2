'use client';

import Image from 'next/image';
import ThemeToggle from '../common/ThemeToggle';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen w-full flex-col md:flex-row">
      {/* 왼쪽 배경 섹션 */}
      <div className="relative hidden w-full bg-primary-light dark:bg-primary-dark md:block md:w-1/2">
        <div className="absolute inset-0 flex items-center justify-center p-8">
          <div className="relative h-full w-full max-w-lg">
            <Image
              src="/images/slides/slide1.svg"
              alt="Traffic Analysis System"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* 오른쪽 콘텐츠 섹션 */}
      <div className="flex w-full flex-col bg-white dark:bg-gray-900 md:w-1/2">
        <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12 lg:p-16">
          <ThemeToggle />
          {children}
        </div>
      </div>
    </div>
  );
}
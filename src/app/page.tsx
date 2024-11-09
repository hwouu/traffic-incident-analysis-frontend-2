'use client';

import { WelcomeSlide } from '@/components/welcome/WelcomeSlide';
import ThemeToggle from '@/components/common/ThemeToggle';

export default function Page() {
  return (
    <main className="relative h-screen w-full bg-background transition-colors dark:bg-dark-background">
      <div className="absolute right-4 top-4 z-50">
        <ThemeToggle />
      </div>
      <WelcomeSlide />
    </main>
  );
}
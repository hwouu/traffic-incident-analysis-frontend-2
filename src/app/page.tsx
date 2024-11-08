'use client';

import { WelcomeSlide } from '@/components/welcome/WelcomeSlide';
import ThemeToggle from '@/components/common/ThemeToggle';

export default function Page() {
  return (
    <main className="h-screen w-full bg-background transition-colors dark:bg-dark-background">
      <ThemeToggle />
      <WelcomeSlide />
    </main>
  );
}
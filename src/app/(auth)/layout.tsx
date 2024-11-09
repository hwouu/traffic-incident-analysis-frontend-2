import Logo from '@/components/common/Logo';
import ThemeToggle from '@/components/common/ThemeToggle';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Logo and background */}
      <div className="hidden w-1/2 bg-primary-light dark:bg-primary-dark lg:flex lg:flex-col lg:items-center lg:justify-center">
        <Logo variant="with-text" size="xl" className="mb-8" />
        <h1 className="text-3xl font-bold text-white">교통사고 분석 시스템</h1>
      </div>

      {/* Right side - Login form */}
      <div className="relative flex w-full flex-col items-center justify-center px-4 sm:px-6 lg:w-1/2 lg:px-8">
        <div className="absolute right-4 top-4">
          <ThemeToggle />
        </div>
        {/* Logo for mobile view */}
        <div className="mb-8 lg:hidden">
          <Logo variant="with-text" size="lg" />
        </div>
        {children}
      </div>
    </div>
  );
}
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          로그인
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          교통사고 분석 시스템에 오신 것을 환영합니다
        </p>
      </div>
      <LoginForm />
    </div>
  );
}
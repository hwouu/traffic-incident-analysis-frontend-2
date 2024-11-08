import LoginForm from '@/components/auth/LoginForm';
import SocialLogin from '@/components/auth/SocialLogin';

export default function LoginPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          로그인
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          또는{' '}
          <a href="/register" className="text-primary hover:text-primary-dark">
            회원가입
          </a>
        </p>
      </div>

      <div className="mt-8 space-y-6">
        <SocialLogin />
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-700" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-500 dark:bg-gray-900 dark:text-gray-400">
              또는 이메일로 로그인
            </span>
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
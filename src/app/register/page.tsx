'use client';

import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          회원가입
        </h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          추후 회원가입 기능이 구현될 예정입니다
        </p>
      </div>
      
      <button
        onClick={() => router.push('/login')}
        className="w-full rounded-lg bg-primary px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        로그인 페이지로 돌아가기
      </button>
    </div>
  );
}
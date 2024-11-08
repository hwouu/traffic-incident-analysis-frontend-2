'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState<'user' | 'admin'>('user');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 로그인 로직 구현
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* 사용자 유형 선택 */}
      <div className="flex rounded-md shadow-sm">
        <button
          type="button"
          className={`flex-1 rounded-l-md border px-4 py-2 text-sm font-medium ${
            userType === 'user'
              ? 'border-primary bg-primary text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200'
          }`}
          onClick={() => setUserType('user')}
        >
          일반 사용자
        </button>
        <button
          type="button"
          className={`flex-1 rounded-r-md border px-4 py-2 text-sm font-medium ${
            userType === 'admin'
              ? 'border-primary bg-primary text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200'
          }`}
          onClick={() => setUserType('admin')}
        >
          관리자
        </button>
      </div>

      {/* 이메일 입력 */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          이메일
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-sm"
        />
      </div>

      {/* 비밀번호 입력 */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          비밀번호
        </label>
        <div className="relative mt-1">
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            autoComplete="current-password"
            required
            className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-600 dark:bg-gray-800 dark:text-white sm:text-sm"
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center px-2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4 text-gray-500" />
            ) : (
              <Eye className="h-4 w-4 text-gray-500" />
            )}
          </button>
        </div>
      </div>

      {/* 추가 옵션 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
            로그인 상태 유지
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="text-primary hover:text-primary-dark">
            비밀번호 찾기
          </a>
        </div>
      </div>

      {/* 로그인 버튼 */}
      <button
        type="submit"
        className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        로그인
      </button>
    </form>
  );
}